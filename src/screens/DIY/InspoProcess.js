import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';
import {Utils, colors} from '../../contants';

const InspoProcess = () => {
  return (
    <SafeAreaView>
      <View>
        <VideoPlayer
          video={require('../../assests/images/video/DIYVideo.mp4')}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
        />
        <View style={{alignItems: 'center', marginTop: Utils.ScreenHeight(2)}}>
          <Text
            style={{
              color: colors.black,
              fontSize: 16,
              fontWeight: 500,
              maxWidth: '80%',
            }}>
            Small Bedroom Budget Makeover
          </Text>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: Utils.ScreenWidth(4),
          backgroundColor: colors.white,
          marginTop: Utils.ScreenHeight(4),
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <Text
          style={{
            fontSize: 14,
            maxWidth: '80%',
            marginTop: Utils.ScreenHeight(4),
            marginBottom: Utils.ScreenHeight(4),
            color: colors.black,
            textAlign: 'justify',
          }}>
          1. Declutter and Organize: Start by clearing unnecessary items and
          invest in storage solutions.
        </Text>
        <Text
          style={{
            fontSize: 14,
            maxWidth: '82%',
            marginTop: Utils.ScreenHeight(0.5),
            marginBottom: Utils.ScreenHeight(4),
            color: colors.black,
            textAlign: 'justify',
          }}>
          2. Paint or Wallpaper: Choose light colors or removable wallpaper for
          a fresh look.
        </Text>
        <Text
          style={{
            fontSize: 14,
            maxWidth: '80%',
            marginTop: Utils.ScreenHeight(0.5),
            marginBottom: Utils.ScreenHeight(4),
            color: colors.black,
            textAlign: 'justify',
          }}>
          3. Thrift Store Finds: Explore thrift shops for budget-friendly
          furniture and decor.
        </Text>
        <Text
          style={{
            fontSize: 14,
            maxWidth: '82%',
            marginTop: Utils.ScreenHeight(0.5),
            marginBottom: Utils.ScreenHeight(4),
            color: colors.black,
            textAlign: 'justify',
          }}>
          4. DIY and Personal Touches: Create your own art, update bedding, and
          add personal items for a unique touch.
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: Utils.ScreenHeight(4)}}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            height: Utils.ScreenHeight(6),
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
          }}>
          <Text
            style={{color: colors.white, alignItems: 'center', fontSize: 16}}>
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default InspoProcess;
