import { View, Text, StatusBar, ImageBackground, Image, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import ImagesPath from '../../assests/ImagesPath'
import { Utils, colors } from '../../contants'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


const Splash = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate("IntroScreen")
    }, 2000);
  },[])
  return (

    <View style={{height:"100%", backgroundColor:colors.white}}>
      <Image source={ImagesPath.splash.SplashIt} style={{
        resizeMode:"stretch",
        height:"100%",
        width:"100%",
        flex: 1,
        }}/>

<View style = {{flexDirection: 'row', position: 'absolute', marginTop: Utils.ScreenHeight(30), justifyContent: 'center', marginHorizontal: Utils.ScreenWidth(10)}}>
        <Text style={{color: '#6B6060', fontSize: 50, fontWeight: 900}}>
          DECOR
        </Text>
        <Text style={{color: '#000', fontSize: 50, fontWeight: 900}}>
          KEA
        </Text>
    </View>
    </View>
  )
}

export default Splash