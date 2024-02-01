import React from "react";

import { SafeAreaView, View } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Utils, colors } from "../../contants";
import ImagesPath from "../../assests/ImagesPath";


const OnboardWelcome = (props) => {
    const {navigation} = props
    return (
        <>
        <SafeAreaView style={{backgroundColor:colors.white}}/>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Image style={{ width: '80%', height: Utils.ScreenHeight(55), marginTop: Utils.ScreenHeight(10), resizeMode: 'contain', alignSelf: 'center' }} source={ImagesPath.home.DecorLogo} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('Loginclient');
    }}
    style={{
      backgroundColor: colors.primary,
      width: '90%',
      height: 50,
      borderRadius: 10,
      top: Utils.ScreenHeight(-5),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: Utils.ScreenHeight(20),
    }}>
    <Text style={{ fontSize: 16, fontWeight: '800', color: 'white' }}>
      Get Started Client
    </Text>
  </TouchableOpacity>

  {/* Add another button */}
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('LoginDoctor'); // Replace 'AnotherPage' with the actual page name
    }}
    style={{
      backgroundColor: colors.primary, // Change the color for the second button
      width: '90%',
      height: 50,
      borderRadius: 10,
      top: Utils.ScreenHeight(-2),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    //   marginTop: Utils.ScreenHeight(50), // Adjust the marginTop for spacing
    }}>
    <Text style={{ fontSize: 16, fontWeight: '800', color: 'white' }}>
      Get Started as Designer
    </Text>
  </TouchableOpacity>
</View>


            
        </SafeAreaView>
        </>
    )
}
export default OnboardWelcome;