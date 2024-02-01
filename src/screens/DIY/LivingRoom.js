import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {Utils, colors} from '../../contants';
import {useNavigation} from '@react-navigation/native';

const LivingRoom = () => {
  const navigation = useNavigation();
  const [searched, setSearched] = useState('');
  return (
    <SafeAreaView>
      <ScrollView style={{height: '100%'}}>
        <View style={{alignItems: 'center', marginTop: Utils.ScreenHeight(3)}}>
          <View
            style={{
              borderColor: '#6C6C6C',
              borderWidth: 1,
              borderRadius: 25,
              height: 45,
              width: '90%',
              flexDirection: 'row',
              alignItems: 'center',
              magrinTop: Utils.ScreenHeight(2),
            }}>
            <View style={{marginLeft: Utils.ScreenWidth(3)}}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/751/751463.png',
                }}
                style={{
                  height: Utils.ScreenHeight(3),
                  width: Utils.ScreenHeight(3),
                  tintColor: '#6C6C6C',
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
              placeholderTextColor="#6C6C6C"
              value={searched}
              onChangeText={setSearched}
            />
          </View>
        </View>

        <ScrollView
          horizontal={true}
          style={{
            backgrouncColor: '#00000069',
            marginTop: Utils.ScreenHeight(3),
            width: '100%',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Inspo')}>
              <Text
                style={{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>
                For You
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('BedRoom')}>
              <Text
                style={{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>
                Bedroom
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Text
                style={{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>
                Living Room
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Text
                style={{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>
                Hall
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>
                Furniture
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>
                DIY
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View
          style={{
            marginHorizontal: Utils.ScreenWidth(3),
            marginRight: Utils.ScreenWidth(2),
          }}>
          <View
            style={{
              width: '100%',
              marginTop: Utils.ScreenHeight(2),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/interior-design-with-photoframes-grey-couch_23-2149385445.jpg?size=626&ext=jpg&ga=GA1.1.1269090354.1696621361&semt=ais',
              }}
              style={{
                height: Utils.ScreenHeight(30),
                width: Utils.ScreenWidth(94),
                borderRadius: 8,
              }}
            />
          </View>
          <View
            style={{
              marginTop: Utils.ScreenHeight(1),
              marginHorizontal: Utils.ScreenWidth(3),
            }}>
            <Text style={{color: colors.black, fontSize: 18}}>
              Modern Living
            </Text>
            <Text style={{color: colors.black, fontSize: 10}}>
              Modernist architecture has the best public relations.
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: Utils.ScreenWidth(3),
            marginRight: Utils.ScreenWidth(2),
          }}>
          <View
            style={{
              width: '100%',
              marginTop: Utils.ScreenHeight(2),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              source={{
                uri: 'https://img.freepik.com/premium-photo/pastel-color-tone-cute-cozy-minimal-style-living-room-with-furnitures_176697-1424.jpg?size=626&ext=jpg&ga=GA1.1.1269090354.1696621361&semt=ais',
              }}
              style={{
                height: Utils.ScreenHeight(30),
                width: Utils.ScreenWidth(94),
                borderRadius: 8,
              }}
            />
          </View>
          <View
            style={{
              marginTop: Utils.ScreenHeight(1),
              marginHorizontal: Utils.ScreenWidth(3),
            }}>
            <Text style={{color: colors.black, fontSize: 18}}>
              Inject the "Nowness"
            </Text>
            <Text style={{color: colors.black, fontSize: 10}}>
              Modernist architecture has the best public relations.
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: Utils.ScreenWidth(3),
            marginRight: Utils.ScreenWidth(2),
          }}>
          <View
            style={{
              width: '100%',
              marginTop: Utils.ScreenHeight(2),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/still-life-vase-with-artificial-flowers-living-room_169016-5191.jpg?size=626&ext=jpg&ga=GA1.1.1269090354.1696621361&semt=ais',
              }}
              style={{
                height: Utils.ScreenHeight(30),
                width: Utils.ScreenWidth(94),
                borderRadius: 8,
              }}
            />
          </View>
          <View
            style={{
              marginTop: Utils.ScreenHeight(1),
              marginHorizontal: Utils.ScreenWidth(3),
            }}>
            <Text style={{color: colors.black, fontSize: 18}}>
              Bali Interiors
            </Text>
            <Text style={{color: colors.black, fontSize: 10}}>
              Modernist architecture has the best public relations.
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: Utils.ScreenWidth(3),
            marginRight: Utils.ScreenWidth(2),
            marginBottom: Utils.ScreenHeight(10),
          }}>
          <View
            style={{
              width: '100%',
              marginTop: Utils.ScreenHeight(2),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              source={{
                uri: 'https://img.freepik.com/premium-photo/pastel-color-tone-cute-cozy-minimal-style-living-room-with-furnitures_176697-1429.jpg?size=626&ext=jpg&ga=GA1.1.1269090354.1696621361&semt=ais',
              }}
              style={{
                height: Utils.ScreenHeight(30),
                width: Utils.ScreenWidth(94),
                borderRadius: 8,
              }}
            />
          </View>
          <View
            style={{
              marginTop: Utils.ScreenHeight(1),
              marginHorizontal: Utils.ScreenWidth(3),
            }}>
            <Text style={{color: colors.black, fontSize: 18}}>
              Your DREAM home
            </Text>
            <Text style={{color: colors.black, fontSize: 10}}>
              Modernist architecture has the best public relations.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

LivingRoom.navigationOptions = {
  headerShown: false,
};

export default LivingRoom;
