import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Utils } from '../../contants'
import { useNavigation } from '@react-navigation/native';

const AddProfile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
        <ScrollView style = {{backgroundColor: '#181818', height: '100%'}}>
        <View style = {{alignItems: 'center', marginTop:Utils.ScreenHeight(6)}}>
            <Text style = {{ fontSize: 50, fontWeight: '900', color: '#fbe34d'}}>Ribbit</Text>
         </View>

    <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(4),}}>
      <Text style = {{ fontSize: 24, fontWeight: '400', color: '#f6f6f6'}}>Add Profile Photo</Text>
    </View>

    <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(4), marginHorizontal: Utils.ScreenWidth(3), justifyContent: 'center'}}>
      <Text style = {{ fontSize: 18, fontWeight: '400', color: '#afafaf', textAlign: 'center'}}>Add a profile photo so that your friend {'\n'} knows it's you</Text>
    </View>

<View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(10),}}>
    <TouchableOpacity style = {{alignItems: 'center', borderRadius: 50, justifyContent: 'center', 
    backgroundColor: 'black', height: Utils.ScreenWidth(26), width: Utils.ScreenWidth(26), borderWidth: 1, borderColor: '#747474', borderStyle: 'dashed' }}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828925.png'}}
        style = {{height: Utils.ScreenHeight(5), width: Utils.ScreenHeight(5), tintColor: '#747474'}}/>
    </TouchableOpacity>
</View>

    <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(4), marginHorizontal: Utils.ScreenWidth(2), justifyContent: 'center'}}>
      <Text style = {{ fontSize: 18, fontWeight: '400', color: '#afafaf', textAlign: 'center'}}>Add Profile Photo</Text>
    </View>

    <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(18), marginHorizontal: Utils.ScreenWidth(2), justifyContent: 'center'}}>
      <TouchableOpacity onPress = {() => navigation.navigate('LoginPhone')}>
      <Text style = {{ fontSize: 18, fontWeight: '400', color: '#fbe34d', textAlign: 'center'}}>SKIP</Text>
      </TouchableOpacity>
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddProfile