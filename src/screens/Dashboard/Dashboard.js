import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import {Utils, colors} from '../../contants';
import ImagesPath from '../../assests/ImagesPath';
import {useNavigation} from '@react-navigation/native';
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
} from 'react-native-gifted-charts';

const Dashboard = () => {
  const [searchtext, setSearchtext] = useState();
  const [data, setData] = useState([]);

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
                height: Utils.ScreenHeight(10),
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

  const navigation = useNavigation();
  // const[data,setdat] = useState([]);

  return (
    <ScrollView>
      <View
        style={{
          marginTop: Utils.ScreenHeight(3),
          marginHorizontal: Utils.ScreenWidth(4),
          justifyContent: 'center'
        }}>
        


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
                color: colors.black
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {/* <Text
            style={{
              marginHorizontal: Utils.ScreenWidth(4),
              fontSize: 16,
              fontWeight: 800,
              marginBottom: Utils.ScreenHeight(1.5),
              color: colors.black,
            }}>
            Our Vendor
          </Text> */}
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

        {/* <FlatList data={data} renderItem={latest} /> */}
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
      </View>

    <TouchableOpacity onPress={() => navigation.navigate('FbLogin1')} style = {{justifyContent: 'center', alignItems: 'center', marginTop: Utils.ScreenHeight(2)}}>
      <View
        style={{
          backgroundColor: colors.primary,
          width: '90%',
          justifyContent: 'center',
          height: Utils.ScreenHeight(6),
          alignItems: 'center',
          borderRadius: 10,
          flexDirection: 'row'
        }}>
        <Text style={{fontSize: 18, fontWeight: 600, color: colors.white}}>Chat with Designer</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style = {{justifyContent: 'center', alignItems: 'center', marginTop: Utils.ScreenHeight(2)}}>
      <View
        style={{
          backgroundColor: colors.primary,
          width: '90%',
          justifyContent: 'center',
          height: Utils.ScreenHeight(6),
          alignItems: 'center',
          borderRadius: 10,
          flexDirection: 'row'
        }}>
        <Text style={{fontSize: 18, fontWeight: 600, color: colors.white}}>Video Call</Text>
      </View>
      </TouchableOpacity>
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

export default Dashboard;
