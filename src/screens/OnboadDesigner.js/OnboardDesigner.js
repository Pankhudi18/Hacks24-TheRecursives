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

const OnboardDesigner = () => {
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
    setLoaderVisible(true);
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
        setLoaderVisible(false);
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
          navigation.navigate('OnboardDesigner');
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
            marginTop: Utils.ScreenHeight(3),
            marginTop: Utils.ScreenHeight(3),
            marginHorizontal: Utils.ScreenWidth(3),
          }}>
          <Text style={{fontSize: 28, fontWeight: 800, color: colors.black}}>
            Ujjwal{' '}
          </Text>
        </View>

        <View
          style={{
            marginLeft: Utils.ScreenWidth(4),
          }}>
          <Image
            source={ImagesPath.Decor.Porfolio}
            style={{
              height: Utils.ScreenHeight(40),
              width: '90%',
              resizeMode: 'contain',
            }}
          />
          <Text style={{fontSize: 16, fontWeight: 500, color: colors.black}}>
            Experience:
          </Text>
        </View>
        <TouchableOpacity
        onPress={() => navigation.navigate('MentorProfile')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: Utils.ScreenHeight(2),
          alignSelf: 'center',
          width: '80%',
          borderRadius: 10,
          backgroundColor: colors.primary,
          height: Utils.ScreenHeight(8)
        }}>
        {/* <View
          style={{
            backgroundColor: colors.primary,
            width: '90%',
            justifyContent: 'center',
            height: Utils.ScreenHeight(6),
            alignItems: 'center',
            borderRadius: 10,
            flexDirection: 'row',
          }}> */}
          <Text style={{fontSize: 18, fontWeight: 600, color: colors.white}}>
            Confirm & proceed to payment
          </Text>
        {/* </View> */}
      </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: Utils.ScreenHeight(2),
          width: '80%',
          backgroundColor: 'red',
          height: Utils.ScreenHeight(10)
        }}>
        {/* <View
          style={{
            backgroundColor: colors.primary,
            width: '90%',
            justifyContent: 'center',
            height: Utils.ScreenHeight(6),
            alignItems: 'center',
            borderRadius: 10,
            flexDirection: 'row',
          }}> */}
          <Text style={{fontSize: 18, fontWeight: 600, color: colors.black}}>
            Confirm & proceed to payment
          </Text>
        {/* </View> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardDesigner;
