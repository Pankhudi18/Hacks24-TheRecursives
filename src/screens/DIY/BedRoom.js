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

const Inspo = () => {
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

            <TouchableOpacity onPress={() => navigation.navigate('LivingRoom')}>
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
                uri: 'https://img.freepik.com/free-photo/bed-arrangements-still-life_23-2150533027.jpg?w=996&t=st=1706700578~exp=1706701178~hmac=08a82eb288257044786e07b9a51508d6c41a75d927ac2cc07e76c365d358d4b9',
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
              Bedroom Decor Trends
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
                uri: 'https://img.freepik.com/free-photo/bright-modern-bedroom-with-elegance-generated-by-ai_188544-14389.jpg?size=626&ext=jpg&ga=GA1.1.1269090354.1696621361&semt=ais',
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
              Luxury Interior Room
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
                uri: 'https://img.freepik.com/free-photo/3d-contemporary-bedroom-interior_1048-10250.jpg?size=626&ext=jpg&ga=GA1.1.1269090354.1696621361&semt=ais',
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
              Classy Bedroom
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
                uri: 'https://img.freepik.com/free-photo/bedroom-view-with-bed-arrangement-decor_23-2150551139.jpg?size=626&ext=jpg&ga=GA1.1.1269090354.1696621361&semt=ais',
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
              Minimalist Design
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

Inspo.navigationOptions = {
  headerShown: false,
};

export default Inspo;
