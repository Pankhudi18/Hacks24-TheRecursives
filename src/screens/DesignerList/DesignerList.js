import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Utils, colors} from '../../contants';
import ImagesPath from '../../assests/ImagesPath';
import {useNavigation} from '@react-navigation/native';
import CustomLoader from '../../component/CustomLoader';

const DesignerList = () => {
  const [searchtext, setSearchtext] = useState();
  const [data, setData] = useState([]);
  const [loaderVisible, setLoaderVisible] = useState();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    setLoaderVisible(true)
    fetch(
      'https://7c5f-203-212-25-243.ngrok-free.app/api/v1/get-project-manager/',
      requestOptions,
    )
      .then(response => {
        // Check if the response status is OK (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then(result => {
        console.log('Response:', result);
        setLoaderVisible(false)
        setData(result?.data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  };

  const latest = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MentorProfile');
        }}
        style={{
          borderWidth: 0.2,
          paddingTop: Utils.ScreenHeight(2),
          marginTop: Utils.ScreenHeight(2),
          backgroundColor: colors.white,
          borderRadius: 20,
        }}>
        <View
          style={{flexDirection: 'row', marginBottom: Utils.ScreenHeight(1)}}>
          <View>
            <Image
              source={ImagesPath.home.doctor_pic}
              style={{
                width: Utils.ScreenWidth(25),
                height: Utils.ScreenHeight(10),
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 20, fontWeight: 400, color: colors.black}}>
              {' '}
              {item?.name}{' '}
            </Text>
            <Text style={{fontSize: 12, color: colors.grey, fontWeight: 300}}>
              {' '}
              {item?.year_of_experience} yrs experience ()
            </Text>
            <Text
              style={{fontSize: 12, color: colors.primary, fontWeight: 300}}>
              {item?.academic_background}{' '}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          height: Utils.ScreenHeight(100),
          backgroundColor: colors.white,
        }}>
        <View
          style={{
            marginTop: Utils.ScreenHeight(2),
            borderRadius: 8,

            marginHorizontal: Utils.ScreenWidth(4),
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#EFF1F3',
            justifyContent: 'space-evenly',
          }}>
          <Image
            source={ImagesPath.LegalBridge.search}
            style={{
              resizeMode: 'contain',
              height: Utils.ScreenHeight(3),
              width: Utils.ScreenHeight(3),
            }}
          />
          <TextInput
            value={searchtext}
            onChange={text => setSearchtext(text)}
            style={{
              height: Utils.ScreenHeight(5),

              borderColor: '#D8D8D8',
              paddingHorizontal: Utils.ScreenWidth(3),
              width: Utils.ScreenWidth(55),
              borderRadius: 5,
            }}
            placeholderTextColor={'grey'}
            placeholder="Search"
          />
          <TouchableOpacity style={{paddingHorizontal: 10}}>
            <Image
              style={{
                height: Utils.ScreenHeight(3),
                width: Utils.ScreenHeight(3),
                resizeMode: 'contain',
                tintColor: colors.blackdark,
              }}
              source={ImagesPath.home.filter_icon}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: Utils.ScreenHeight(3),
            marginHorizontal: Utils.ScreenWidth(5),
          }}>
          <FlatList data={data} renderItem={latest} />
          {/* */}
        </View>
      </View>
      <CustomLoader loaderVisible={loaderVisible}/>
    </SafeAreaView>
  );
};

export default DesignerList;
