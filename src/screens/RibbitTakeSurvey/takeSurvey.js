import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Utils } from '../../contants'
import { Image } from 'react-native'

const takeSurvey = () => {
  return (
    <SafeAreaView>
      <ScrollView style = {{backgroundColor: '#000000', height: '100%'}}>

 <View style = {{flexDirection: 'row'}}>
    <View style = {{backgroundColor: '#00000047', height: Utils.ScreenHeight(6), width: Utils.ScreenHeight(6), borderRadius: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(2), marginHorizontal: Utils.ScreenWidth(4), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/9678/9678560.png'}}
        style = {{tintColor: '#FFFFFF', height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(4)}}/>
    </View>
    <View style = {{marginTop: Utils.ScreenHeight(2), justifyContent: 'center', marginHorizontal: Utils.ScreenWidth(2)}}>
        <Text style = {{color: '#FFFFFF', fontSize: 18, fontWeight: 600,}}>Survey</Text>
        <Text style = {{color: '#868686', fontSize: 14, fontWeight: 400,}}>Ends in 5 min</Text>
    </View>
 </View>

 <View style = {{backgroundColor: '#181818', height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(20), alignItems: 'center', justifyContent: 'center', borderRadius: Utils.ScreenWidth(8), marginLeft: 'auto', marginRight: Utils.ScreenWidth(4)}}>
    <Text style = {{color: "#FFFFFF", fontSize: 12}}>Time: 5:00</Text>
 </View>

<View style = {{marginHorizontal: Utils.ScreenHeight(2), marginTop: Utils.ScreenHeight(2)}}>
 <View style = {{backgroundColor: '#181818', height: Utils.ScreenHeight(60), width: '100%',borderRadius: Utils.ScreenWidth(8), alignItems: 'center'}}>
    <Text style = {{marginHorizontal: Utils.ScreenWidth(3), maxWidth: '90%', marginTop: Utils.ScreenHeight(4), textAlign: 'center', color: '#FFFFFF'}}>Relaxing the Restrictions and controls imposed on Business and industry mean.</Text>
 </View>
 </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default takeSurvey