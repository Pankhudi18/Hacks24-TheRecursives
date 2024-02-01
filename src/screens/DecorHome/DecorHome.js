import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Image} from 'react-native';
import {Utils, colors} from '../../contants';
import {useNavigation} from '@react-navigation/native';
import ImagesPath from '../../assests/ImagesPath';

const DecorHome = () => {
  const navigation = useNavigation();
  const [searched, setSearched] = useState('');
  //   const scrollViewRef = useRef();

  //   useEffect(() => {
  //     const scrollInterval = setInterval(() => {
  //       if (scrollViewRef.current) {
  //         scrollViewRef.current.scrollTo({
  //           x: scrollViewRef.current.contentOffset.x + 200,
  //           animated: true,
  //         });
  //       }
  //     }, 2000000000);
  //     return () => clearInterval(scrollInterval);
  //   }, []);

  return (
    <SafeAreaView>
      <ScrollView style={{height: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: Utils.ScreenWidth(6),
            marginTop: Utils.ScreenHeight(2),
          }}>
          <Text style={{color: '#6B6060', fontSize: 18, fontWeight: 900}}>
            DECOR
          </Text>
          <Text style={{color: '#000', fontSize: 18, fontWeight: 900}}>
            KEA
          </Text>
        </View>

        <View style={{alignItems: 'center', marginTop: Utils.ScreenHeight(1)}}>
          <View
            style={{
              borderColor: '#6B6060',
              borderWidth: 1,
              borderRadius: 14,
              height: 40,
              width: '90%',
              flexDirection: 'row',
              alignItems: 'center',
              magrinTop: Utils.ScreenHeight(2),
              backgroundColor: '#DADADA',
            }}>
            <View style={{marginLeft: Utils.ScreenWidth(3)}}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/751/751463.png',
                }}
                style={{
                  height: Utils.ScreenHeight(3),
                  width: Utils.ScreenHeight(3),
                  tintColor: '#6B6060',
                }}
              />
            </View>
            <TextInput
              style={{
                fontSize: 14,
                marginHorizontal: 3,
                maxWidth: '80%',
                marginLeft: Utils.ScreenWidth(8),
              }}
              placeholder="Search"
              placeholderTextColor="#6B6060"
              value={searched}
              onChangeText={setSearched}
            />
          </View>
        </View>

        <ScrollView horizontal = {true} style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row'}}>
            <View style = {{height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(20), backgroundColor: '#D6CE93', justifyContent: 'center', alignItems: 'center', marginHorizontal: Utils.ScreenWidth(2), borderRadius: 6}}>
              <Text style = {{fontSize: 10, fontWeight: 800, color: '#6B6060'}}> DECORKEA</Text>
            </View>

            <View style = {{height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(20), backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', marginHorizontal: Utils.ScreenWidth(2), borderRadius: 6}}>
              <Text style = {{fontSize: 10, fontWeight: 800, color: '#6B6060'}}> Brands</Text>
            </View>

            <View style = {{height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(20), backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', marginHorizontal: Utils.ScreenWidth(2), borderRadius: 6}}>
              <Text style = {{fontSize: 10, fontWeight: 800, color: '#6B6060'}}> Lighting </Text>
            </View>

            <View style = {{height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(20), backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', marginHorizontal: Utils.ScreenWidth(2), borderRadius: 6}}>
              <Text style = {{fontSize: 10, fontWeight: 800, color: '#6B6060'}}> Furniture</Text>
            </View>

            <View style = {{height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(20), backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', marginHorizontal: Utils.ScreenWidth(2), borderRadius: 6}}>
              <Text style = {{fontSize: 10, fontWeight: 800, color: '#6B6060'}}> DECORKEA</Text>
            </View>

            <View style = {{height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(20), backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', marginHorizontal: Utils.ScreenWidth(2), borderRadius: 6}}>
              <Text style = {{fontSize: 10, fontWeight: 800, color: '#6B6060'}}> DECORKEA</Text>
            </View>
        </ScrollView>     


        <View
          style={{
            backgroundColor: '#A3A380',
            height: Utils.ScreenHeight(20),
            marginTop: Utils.ScreenHeight(2),
            width: '100%',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: colors.white,
                marginHorizontal: Utils.ScreenWidth(4),
                maxWidth: '40%',
                marginTop: Utils.ScreenHeight(6),
              }}>
              Modern Interior Design Studio
            </Text>
            <Image
              source={ImagesPath.Decor.Couch}
              style={{
                height: Utils.ScreenHeight(16),
                width: Utils.ScreenWidth(60),
                resizeMode: 'contain',
                marginTop: Utils.ScreenHeight(3),
              }}
            />
          </View>
          
          <TouchableOpacity
          onPress={()=> {navigation.navigate('Ecommerce')}}
            style={{
              height: Utils.ScreenHeight(4),
              marginTop: Utils.ScreenHeight(-5),
              marginHorizontal: Utils.ScreenWidth(3),
              width: Utils.ScreenWidth(20),
              borderRadius: 4,
            }}>
            <Text
              style={{
                color: colors.black,
                fontWeight: 500,
                backgroundColor: '#D6CE93',
                fontSize: 12,
                marginHorizontal: Utils.ScreenWidth(1),
              }}>
              {' '}
              Shop Now
            </Text>
          </TouchableOpacity>
        </View>

        



    <View style = {{flexDirection: 'row'}}> 
        <TouchableOpacity
        onPress={()=> {navigation.navigate('Inspo')}}
            style={{
              width: Utils.ScreenWidth(40),
              height: Utils.ScreenHeight(20),
              marginTop: Utils.ScreenHeight(1),
              borderRadius: 10,
              marginHorizontal: Utils.ScreenWidth(6),
              marginBottom: Utils.ScreenHeight(2)
            }}>
            <Image
              source={ImagesPath.Decor.Item1}
              style={{
                height: Utils.ScreenHeight(20),
                width: Utils.ScreenWidth(40),
                resizeMode: 'contain',
                marginTop: Utils.ScreenHeight(1),
                borderRadius: 10,
              }}
            />
            <Text style={{
                color: colors.white,
                fontSize: 14,
                fontWeight: 900,
                position: 'absolute',
                marginTop: Utils.ScreenHeight(2),
                marginHorizontal: Utils.ScreenWidth(1),
              }}>
                Do it yourself
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: Utils.ScreenWidth(40),
              height: Utils.ScreenHeight(20),
              marginTop: Utils.ScreenHeight(1),
              borderRadius: 10,
              marginHorizontal: Utils.ScreenWidth(1),
              marginBottom: Utils.ScreenHeight(2)
            }}>
            <Image
              source={ImagesPath.Decor.Item2}
              style={{
                height: Utils.ScreenHeight(20),
                width: Utils.ScreenWidth(40),
                resizeMode: 'contain',
                marginTop: Utils.ScreenHeight(1),
                borderRadius: 10,
              }}
            />
            <Text style={{
                color: colors.white,
                fontSize: 14,
                fontWeight: 900,
                position: 'absolute',
                marginTop: Utils.ScreenHeight(2),
                marginHorizontal: Utils.ScreenWidth(1),
              }}>
                Give a second life to your furniture
            </Text>
          </TouchableOpacity>
          </View>
       

    <View style={{marginHorizontal: Utils.ScreenWidth(3)}}>
        <Text style={{fontSize: 15, fontWeight: 600, color: colors.black}}>
            Popular Products
          </Text>
          </View>

        <ScrollView horizontal = {true} style={{marginHorizontal: Utils.ScreenWidth(3)}}>

          <View style = {{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: colors.white,
              width: Utils.ScreenWidth(40),
              height: Utils.ScreenHeight(24),
              marginTop: Utils.ScreenHeight(1),
              alignItems: 'center',
              borderRadius: 10,
              marginHorizontal: Utils.ScreenWidth(2)
            }}>
            <Image
              source={ImagesPath.Decor.Lamp}
              style={{
                height: Utils.ScreenHeight(16),
                width: Utils.ScreenWidth(36),
                resizeMode: 'contain',
                marginTop: Utils.ScreenHeight(1),
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: colors.black,
                marginTop: Utils.ScreenHeight(1),
              }}>
              Lamp
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: colors.black,
                marginTop: Utils.ScreenHeight(0.5),
              }}>
              ₹2000
            </Text>
          </View>

          <View
            style={{
              backgroundColor: colors.white,
              width: Utils.ScreenWidth(40),
              height: Utils.ScreenHeight(24),
              marginTop: Utils.ScreenHeight(1),
              alignItems: 'center',
              borderRadius: 10,
              marginHorizontal: Utils.ScreenWidth(2)
            }}>
            <Image
              source={ImagesPath.Decor.Chair}
              style={{
                height: Utils.ScreenHeight(16),
                width: Utils.ScreenWidth(36),
                resizeMode: 'contain',
                marginTop: Utils.ScreenHeight(1),
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: colors.black,
                marginTop: Utils.ScreenHeight(1),
              }}>
              Chair
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: colors.black,
                marginTop: Utils.ScreenHeight(0.5),
              }}>
              ₹2000
            </Text>
          </View>

          <View
            style={{
              backgroundColor: colors.white,
              width: Utils.ScreenWidth(40),
              height: Utils.ScreenHeight(24),
              marginTop: Utils.ScreenHeight(1),
              alignItems: 'center',
              borderRadius: 10,
              marginHorizontal: Utils.ScreenWidth(2)
            }}>
            <Image
              source={ImagesPath.Decor.Lamp}
              style={{
                height: Utils.ScreenHeight(16),
                width: Utils.ScreenWidth(36),
                resizeMode: 'contain',
                marginTop: Utils.ScreenHeight(1),
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: colors.black,
                marginTop: Utils.ScreenHeight(1),
              }}>
              Lamp
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: colors.black,
                marginTop: Utils.ScreenHeight(0.5),
              }}>
              ₹2000
            </Text>
          </View>

          </View>
        </ScrollView>

        <TouchableOpacity
        onPress={() => navigation.navigate('UploadImgAI')}
          style={{
            backgroundColor: '#A3A380',
            flexDirection: 'row',
            height: Utils.ScreenHeight(10),
            marginTop: Utils.ScreenHeight(2),
            width: '80%',
            alignSelf: 'center',
            borderRadius: Utils.ScreenHeight(2),
            justifyContent: 'space-around', alignItems: 'center'
          }}>
            <Text  style={{
                color: colors.black,
                fontWeight: 500, fontSize: 18
              }}>Shoot & Design</Text>
              <Image style={{width: Utils.ScreenWidth(12), height: Utils.ScreenWidth(12), resizeMode: 'contain' }} source={ImagesPath.onafterprint.camera_icon}/>
          </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

DecorHome.navigationOptions = {
  headerShown: false,
};

export default DecorHome;
