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
import {Utils} from '../../contants';
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

        <View>
          <View
            style={{
              width: '100%',
              marginTop: Utils.ScreenHeight(2),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('InspoProcess')}>
              <Image
                source={{
                  uri: 'https://img.freepik.com/free-photo/modern-apartment-with-comfortable-sofa-decor-generated-by-ai_188544-38495.jpg?size=626&ext=jpg&ga=GA1.1.1269090354.1696621361&semt=ais',
                }}
                style={{
                  height: Utils.ScreenHeight(30),
                  width: Utils.ScreenWidth(33),
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('InspoProcess')}>
              <Image
                source={{
                  uri: 'https://img.freepik.com/free-photo/interior-decor-with-mirror-potted-plant_23-2149428031.jpg?size=626&ext=jpg&ga=GA1.1.1269090354.1696621361&semt=aishttps://s3-alpha-sig.figma.com/img/a5c2/7ed9/32de0e72e53077b6e2fb924cfd5485cb?Expires=1698624000&Signature=li5AsuVJI8G-Mf5R-abhVtrzwLyg7PIzcBfzvIF2mNN9zMeYHwDzGWmVHCVm8kOI7vV1fZVQMvWrTQ2IFCS-F6pZ08~zHfoKDFyuY7db7Oc9hDfg28b0uh3fTKlF9UFd8o9YiGj9nQoa5deR5Jv4q86sdkAJSJg0d2F88k0unMuWpFHfzV92pd70BKECWs1jwnXjcD6cAM0vxAtMu2pdL6CvyXgtwrp7CNkRCU-s9yJYeCRqplaqZjnecc1ZtEyrahsLlb6M4vTX-IA-2F8CxKX7Cc3etFXCm~NupGa~5r7ftHuC3ODXfo7QO1YX03HoHGLLNdhsUqxYXojHInloow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                }}
                style={{
                  height: Utils.ScreenHeight(30),
                  width: Utils.ScreenWidth(33),
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('InspoProcess')}>
              <Image
                source={{
                  uri: 'https://img.freepik.com/premium-photo/minimalistic-concept-stylish-living-room-interior-with-design-velvet-ore-sofa-poster-frame-stool-pillow-decoration-elegant-accessories-modern-home-decor_431307-3107.jpg?size=626&ext=jpg&ga=GA1.1.1269090354.1696621361&semt=ais',
                }}
                style={{
                  height: Utils.ScreenHeight(30),
                  width: Utils.ScreenWidth(33),
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              marginTop: Utils.ScreenHeight(0.3),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Image
                source={{
                  uri: 'https://img.freepik.com/free-photo/interior-design-with-photoframes-nice-chairs_23-2149385446.jpg?size=626&ext=jpg&ga=GA1.1.1269090354.1696621361&semt=ais',
                }}
                style={{
                  height: Utils.ScreenHeight(30),
                  width: Utils.ScreenWidth(33),
                }}
              />
            </View>

            <View>
              <Image
                source={{
                  uri: 'https://img.freepik.com/premium-photo/mid-century-modern-style-interior-neural-network-generated-picture_636705-7421.jpg?w=360',
                }}
                style={{
                  height: Utils.ScreenHeight(30),
                  width: Utils.ScreenWidth(33),
                }}
              />
            </View>

            <View>
              <Image
                source={{
                  uri: 'https://img.freepik.com/premium-photo/working-from-home-during-lockdown-cozy-work-place-space-with-computer-candle-lamp-home-office-interior_283817-881.jpg?w=360',
                }}
                style={{
                  height: Utils.ScreenHeight(30),
                  width: Utils.ScreenWidth(33),
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: '100%',
              marginTop: Utils.ScreenHeight(0.3),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Image
                source={{
                  uri: 'https://img.freepik.com/free-photo/interior-design-with-armchair-potted-plant_23-2149427983.jpg?size=626&ext=jpg&ga=GA1.1.1269090354.1696621361&semt=ais',
                }}
                style={{
                  height: Utils.ScreenHeight(30),
                  width: Utils.ScreenWidth(33),
                }}
              />
            </View>

            <View>
              <Image
                source={{
                  uri: 'https://img.freepik.com/premium-photo/illustration-living-room-interior_252025-215852.jpg?w=1380',
                }}
                style={{
                  height: Utils.ScreenHeight(30),
                  width: Utils.ScreenWidth(33),
                }}
              />
            </View>

            <View>
              <Image
                source={{
                  uri: 'https://img.freepik.com/free-photo/living-room-mid-century-style-with-warm-colors-ai-generative_123827-23932.jpg?w=996&t=st=1706706210~exp=1706706810~hmac=c670f76e59adf73f27fddf24e1a3f2e953fbcd52a3a931dcd53b5979bd2cd453',
                }}
                style={{
                  height: Utils.ScreenHeight(30),
                  width: Utils.ScreenWidth(33),
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: '100%',
              marginTop: Utils.ScreenHeight(0.3),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Image
                source={{
                  uri: 'https://img.freepik.com/free-photo/interior-design-with-photoframes-nice-chairs_23-2149385446.jpg?size=626&ext=jpg&ga=GA1.1.1269090354.1696621361&semt=ais',
                }}
                style={{
                  height: Utils.ScreenHeight(30),
                  width: Utils.ScreenWidth(33),
                }}
              />
            </View>

            <View>
              <Image
                source={{
                  uri: 'https://img.freepik.com/premium-photo/mid-century-modern-style-interior-neural-network-generated-picture_636705-7421.jpg?w=360',
                }}
                style={{
                  height: Utils.ScreenHeight(30),
                  width: Utils.ScreenWidth(33),
                }}
              />
            </View>

            <View>
              <Image
                source={{
                  uri: 'https://img.freepik.com/premium-photo/working-from-home-during-lockdown-cozy-work-place-space-with-computer-candle-lamp-home-office-interior_283817-881.jpg?w=360',
                }}
                style={{
                  height: Utils.ScreenHeight(30),
                  width: Utils.ScreenWidth(33),
                }}
              />
            </View>
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
