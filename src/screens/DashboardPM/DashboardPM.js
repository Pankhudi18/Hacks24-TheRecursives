import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import {Utils, colors} from '../../contants';
import ImagesPath from '../../assests/ImagesPath';
import {useNavigation} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';

import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
} from 'react-native-gifted-charts';
import {launchImageLibrary} from 'react-native-image-picker';

const DashboardPM = () => {
  const [searchtext, setSearchtext] = useState();
  const [data, setData] = useState([]);
  const [imageGet, setImageGet] = useState([]);
  // const [selected, setSelected] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [imagePath, setImagePath] = useState();

  const getPreviousNDays = n => {
    const today = new Date();
    const previousNDays = [];

    for (let i = 1; i <= n; i++) {
      const previousDay = new Date(today);
      previousDay.setDate(today.getDate() - i);
      previousNDays.push(previousDay.toISOString().split('T')[0]);
    }

    return previousNDays;
  };

  const lastTwoDays = getPreviousNDays(2);

  // Dynamically generate markedDates object
  const markedDates = {};
  lastTwoDays.forEach(day => {
    markedDates[day] = {
      selected: true,
      disableTouchEvent: true,
      selectedDotColor: 'red',
      dotColor: 'green',
    };
  });
  const handleDayPress = day => {
    // Check if the pressed date is in the last two days
    if (lastTwoDays.includes(day.dateString)) {
      // Open the modal
      setModalVisible(true);
    }

    // Your existing logic for onDayPress
    setSelected(day.dateString);
    // console.log(day.dateString);
  };

  const closeModal = () => {
    // Close the modal
    setModalVisible(false);
  };

  const data2 = [
    {name: 'Category 1', value: 45},
    {name: 'Category 2', value: 30},
    // {name: 'Category 3', value: 25},
  ];
  const chartContainerStyle = {
    width: 10, // Set your desired width
    height: 10, // Set your desired height
    borderRadius: 16, // Adjust the border radius for a rounded appearance
    flex: 1,
  };
  const data1 = [
    {id: '1', image: ImagesPath.home.i1},
    {id: '2', image: ImagesPath.home.i2},
  ];
  const trending = ({item}) => {
    return (
      <TouchableOpacity style={{marginRight: 10}}>
        <Image
          source={item.image}
          style={{
            width: Utils.ScreenWidth(72),
            borderRadius: 20,
            height: Utils.ScreenHeight(25),
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    );
  };

  const uploadedImage = ({item}) => {
    return (
      <>
        <View
          style={{
            marginTop: Utils.ScreenHeight(3),
            borderWidth: 0.5,
            borderColor: colors.grey2,
            borderRadius: 12,
            // marginHorizontal: Utils.ScreenWidth(4),
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: Utils.ScreenHeight(15),
            backgroundColor: colors.white,
          }}>
          <View>
            <Image
              source={ImagesPath.home.profile_icon}
              style={{
                height: Utils.ScreenHeight(10),
                width: Utils.ScreenWidth(38),
                resizeMode: 'contain',
              }}
            />
          </View>

          <View>
            <Text
              style={{
                fontWeight: 300,
                marginTop: Utils.ScreenHeight(1),
                fontSize: Utils.ScreenHeight(1.5),
                color: colors.black,
              }}>
              Experience : {item?.year_of_experience} yrs
            </Text>
          </View>
        </View>
      </>
    );
  };
  const latest = ({item}) => {
    return (
      <>
        <View
          style={{
            marginTop: Utils.ScreenHeight(3),
            borderWidth: 0.5,
            borderColor: colors.grey2,
            borderRadius: 12,
            // marginHorizontal: Utils.ScreenWidth(4),
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: Utils.ScreenHeight(15),
            backgroundColor: colors.white,
          }}>
          <View>
            <Image
              source={ImagesPath.home.profile_icon}
              style={{
                height: Utils.ScreenHeight(10),
                width: Utils.ScreenWidth(38),
                resizeMode: 'contain',
              }}
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: Utils.ScreenHeight(1.8),
                fontWeight: 800,
                color: colors.black,
              }}>
              {item?.name}
            </Text>
            <Text
              style={{
                fontWeight: 300,
                marginTop: Utils.ScreenHeight(1),
                fontSize: Utils.ScreenHeight(1.5),
                color: colors.black,
              }}>
              Experience : {item?.year_of_experience} yrs
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: Utils.ScreenHeight(1),

                marginRight: 2,
                // height: Utils.ScreenHeight(10)
              }}>
              Per Day Salary :{item?.per_day_salary}
            </Text>
          </View>
        </View>
      </>
    );
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://7c5f-203-212-25-243.ngrok-free.app/api/v1/get-vendor-list/',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);

        setData(result.data);
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    fetchdataUploaded();
  }, []);

  const fetchdataUploaded = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://7c5f-203-212-25-243.ngrok-free.app/api/v1/get-daily-progress/',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(
          result,
          '<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
        );

        setImageGet(result);
      })
      .catch(error => console.log('error', error));
  };

  const handleClick = () => {
    const body = new FormData();
    body.append(
      'uri',
      'https://7c5f-203-212-25-243.ngrok-free.app/static/prescription/report_83_3271443.pdf',
    );
    body.append('phoneNumber', '8237856995');
    var requestOptions = {
      method: 'POST',
      body: body,
    };

    fetch('https://f43c-203-212-25-243.ngrok-free.app/upload', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(
          result,
          '<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
        );
      })
      .catch(error => console.log('error', error));
  };

  const selectGelleryReg = async () => {
    const result = await launchImageLibrary({
      mediaType: 'image',
    });

    setImagePath(result?.assets[0]?.uri);
    // setvideopath(url?.uri)
  };

  const navigation = useNavigation();
  // const[data,setdat] = useState([]);

  return (
    <ScrollView>
      <View
        style={{
          marginTop: Utils.ScreenHeight(3),
          marginHorizontal: Utils.ScreenWidth(4),
          backgroundColor: '#ffffff',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AIInterview');
          }}>
          <View
            style={{
              height: Utils.ScreenHeight(8),
              borderWidth: 1,
              borderColor: colors.grey2,
              borderRadius: 10,
              width: Utils.ScreenWidth(95),
              resizeMode: 'contain',
              flexDirection: 'row',
              backgroundColor: colors.white,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginHorizontal: Utils.ScreenWidth(4),
                  fontSize: 12,
                  fontWeight: 600,
                  marginBottom: Utils.ScreenHeight(1.5),
                  color: colors.black,
                }}>
                Start Time :
              </Text>
              <Text
                style={{
                  // marginHorizontal: Utils.ScreenWidth(4),
                  fontSize: 12,
                  fontWeight: 400,
                  marginBottom: Utils.ScreenHeight(1.5),
                  color: colors.grey,
                }}>
                02-02-2020
              </Text>

              <Text
                style={{
                  marginHorizontal: Utils.ScreenWidth(4),
                  fontSize: 12,
                  fontWeight: 600,
                  marginBottom: Utils.ScreenHeight(1.5),
                  color: colors.black,
                }}>
                End Time :
              </Text>
              <Text
                style={{
                  // marginHorizontal: Utils.ScreenWidth(4),
                  fontSize: 12,
                  fontWeight: 400,
                  marginBottom: Utils.ScreenHeight(1.5),
                  color: colors.grey,
                }}>
                23-04-2020
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{marginTop: Utils.ScreenHeight(3)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginHorizontal: Utils.ScreenWidth(4),
                fontSize: 18,
                fontWeight: 600,
                marginBottom: Utils.ScreenHeight(1.5),
                fontWeight: 800,
              }}>
              Projects
            </Text>
            <Text
              style={{
                marginHorizontal: Utils.ScreenWidth(4),
                fontSize: 14,
                fontWeight: 400,
                marginBottom: Utils.ScreenHeight(1.5),
                color: colors.grey,
              }}>
              See All{' '}
            </Text>
          </View>
          <FlatList
            data={data1}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={trending}
          />
        </View>

        <View style={{marginTop: 20}} />

        <View
          style={{
            marginTop: Utils.ScreenHeight(3),
            marginHorizontal: Utils.ScreenWidth(4),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 600,
                marginBottom: Utils.ScreenHeight(1.5),
              }}>
              Consistency Tracker
            </Text>
          </View>

          <Calendar
            onDayPress={day => {
              handleDayPress(day);
            }}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: 'black',
              textDayHeaderFontWeight: '600',
              textDayFontWeight: '600',
              textMonthFontWeight: '600',
              selectedDayBackgroundColor: colors.primary,
              selectedDayTextColor: '#fff',
              todayBackgroundColor: colors.grey2,
              todayTextColor: colors.secondary,
              dayTextColor: '#2d4150',
              selectedDotColor: '#FFFF00',
              dotColor: '#FFFF00',
              textDisabledColor: 'grey',
            }}
            // markedDates={{
            //   [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
            // }}
            markedDates={markedDates}
            renderDay={(day, item) => (
              <Calendar.Day
                {...day}
                {...item}
                // style={customDayStyle(day)}
              />
            )}
          />

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              closeModal();
            }}>
            <View>
              <View>
                {/* Your modal content goes here */}
                <Text>This is your modal content.</Text>

                <TouchableOpacity onPress={() => closeModal()}>
                  <Text>Close Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* <FlatList
  
                          data={latestdata} renderItem={latest} /> */}
        </View>

        <View style={{marginTop: 20}} />
        <FlatList
          data={imageGet}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={uploadedImage}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginHorizontal: Utils.ScreenWidth(4),
              fontSize: 16,
              fontWeight: 800,
              marginBottom: Utils.ScreenHeight(1.5),
              color: colors.black,
            }}>
            Our Vendor
          </Text>
          <Text
            style={{
              marginHorizontal: Utils.ScreenWidth(4),
              fontSize: 10,
              fontWeight: 400,
              marginBottom: Utils.ScreenHeight(1.5),
              color: colors.grey,
              textDecoration: 'underline',
            }}>
            View All
          </Text>
        </View>

        <FlatList data={data} renderItem={latest} />
        <Text
          style={{
            marginHorizontal: Utils.ScreenWidth(4),
            fontSize: 16,
            fontWeight: 800,
            marginBottom: Utils.ScreenHeight(1.5),
            color: colors.black,
          }}>
          Goals
        </Text>
        <View style={{flexDirection: 'row'}}>
          <PieChart
            data={data2}
            chartConfig={{
              backgroundGradientFrom: colors.primary,
              backgroundGradientTo: colors.secondary,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            accessor="value"
            style={{flex: 1}}
            width={100} // Set your desired width
            height={100} // Set your desired height
          />

          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: colors.green, // Replace with your desired color
                }}
              />
              <Text style={{marginLeft: 8, color: colors.black}}>
                Work Done
              </Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#B2FFFF', // Replace with your desired color
                }}
              />
              <Text style={{marginLeft: 8, color: colors.black}}>Pending</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => selectGelleryReg()}
          style={{
            width: '85%',
            height: 160,
            borderWidth: 1,
            borderStyle: 'dashed',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 30,
            borderRadius: 5,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Upload Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleClick}
          style={{
            width: '70%',
            height: 60,
            borderRadius: 15,
            backgroundColor: colors.primary,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: colors.white, fontWeight: '600'}}>
            Send Update to client
          </Text>
        </TouchableOpacity>

        <View style={{height: 20}} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey', // Replace with your color
    borderRadius: 5,
    padding: 10,
  },
  image: {
    height: 40, // Adjust the height based on your requirement
    width: 40, // Adjust the width based on your requirement
    // resizeMode: 'contain',
    marginTop: 10,
    marginLeft: 18,
  },
  start: {
    height: 40, // Adjust the height based on your requirement
    width: 70, // Adjust the width based on your requirement
    // resizeMode: 'contain',
    marginTop: 10,
    marginLeft: 18,
  },

  image1: {
    height: 20, // Adjust the height based on your requirement
    width: 20, // Adjust the width based on your requirement
    // resizeMode: 'contain',
    marginTop: 10,
    marginLeft: 18,
  },
  text: {
    // marginLeft: 10, // Adjust the margin based on your requirement
    color: 'black',
    fontSize: 13,
    marginLeft: 8,
    marginTop: 15, // Replace with your color
    fontWeight: 'bold',
    // width: 100
  },
});

export default DashboardPM;
