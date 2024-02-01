import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {Image} from 'react-native';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Utils, colors} from '../../contants';
import ImagesPath from '../../assests/ImagesPath';
import VideoPlayer from 'react-native-video-player';

const OnboardWelcome = props => {
  const {navigation} = props;
  return (
    <>
      <SafeAreaView style={{backgroundColor: colors.white}} />
      <VideoPlayer
        autoplay
        video={require('../../assests/images/video/GettingStarted.mp4')}
        videoWidth={1600}
        videoHeight={2800}
        thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
        muted={true}
        hideControls={true}
        resizeMode="stretch"
      />


      <View
        style={{
          backgroundColor: colors.primary,
          width: '100%',
          height: 310,
          borderRadius: 10,
          top: Utils.ScreenHeight(-4),
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: Utils.ScreenHeight(70),
          position: 'absolute',
          borderTopLeftRadius: 120,
          borderTopRightRadius: 120
        }}>
 <TouchableOpacity
 onPress={() => {
    navigation.navigate('OnboardWelcome');
  }}>
        <Text style={{fontSize: 40, fontWeight: 900, color: 'white'}}>
          Get Started
        </Text>
        </TouchableOpacity>
      </View>
    

      {/* <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Loginclient')
                }}
                style={{ backgroundColor: colors.primary, width: '100%', height: 50, borderRadius: 10, top: Utils.ScreenHeight(-2), justifyContent: 'center', alignItems: 'center',alignSelf:"center", marginTop:Utils.ScreenHeight(20), position: 'absolute'  }}>
                    <Text style={{ fontSize: 16, fontWeight: '800', color: 'white' }}>Get Started</Text>
                </TouchableOpacity>

            {/* </View>
            </View> */}
      {/* </SafeAreaView> */}
    </>
  );
};
export default OnboardWelcome;
