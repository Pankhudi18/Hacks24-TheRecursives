import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { Utils } from '../../contants'
import { useNavigation } from '@react-navigation/native'

const Location = () => {
  const navigation = useNavigation();
  const [searched, setSearched] = useState('');
  return (
    <SafeAreaView>
    <ScrollView style = {{backgroundColor: '#181818', height: '100%'}}>
    
    <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(3)}}>
      <View style = {{  borderColor: '#6C6C6C', backgroundColor: '#111111',  borderWidth: 1, borderRadius: 25, height: 45, width: '90%', flexDirection: 'row', alignItems: 'center', magrinTop: Utils.ScreenHeight(2) }}>
          <TextInput
          style = {{fontSize: 14, color: '#6C6C6C', marginHorizontal: 3, maxWidth: '80%',  marginLeft: Utils.ScreenWidth(8) }}
          placeholder = "Search posts, people, tags"
          placeholderTextColor="#6C6C6C"
          value = {searched}
          onChangeText= {setSearched}/>
          <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/751/751463.png' }}
          style={{ height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), tintColor: '#6C6C6C', marginLeft: Utils.ScreenWidth(18), }}
          />
      </View>
      </View> 

      <ScrollView horizontal = {true} style = {{backgrouncColor: '#00000069', marginTop: Utils.ScreenHeight(3), width: '100%'}}>
        <View style = {{flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress = {() => navigation.navigate('Trending')}>
        <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Trending</Text>
        </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('ForYou')}>
          <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6) }}>For You</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('Accounts')}>
          <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Accounts</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {()=> navigation.navigate('Reels')}>
          <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Reels</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {()=> navigation.navigate('Audio')}>
          <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Audio</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('Tags')}>
          <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Tags</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('Location')}>
          <Text style = {{color: '#FFFFFF', marginLeft: Utils.ScreenWidth(6), marginRight: Utils.ScreenWidth(8)}}>Location</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>

  <ScrollView>

  <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
  
  <View style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/2838/2838912.png'}}  
              style = {{height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), tintColor: '#FFFFFF'}}/>
      </View>
      <View style = {{width: '60%'}}>
      <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(4), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Miami, Florida</Text>
      <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(4), fontSize: 12}}>
        390M posts
      </Text>
      </View> 
  </View>

  <View style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/2838/2838912.png'}}  
              style = {{height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), tintColor: '#FFFFFF'}}/>
      </View>
      <View style = {{width: '60%'}}>
      <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(4), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>#food</Text>
      <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(4), fontSize: 12}}>
        390M posts
      </Text>
      </View> 
  </View>
  <View style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/2838/2838912.png'}}  
              style = {{height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), tintColor: '#FFFFFF'}}/>
      </View>
      <View style = {{width: '60%'}}>
      <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(4), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>#food</Text>
      <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(4), fontSize: 12}}>
        390M posts
      </Text>
      </View> 
  </View>

 
</View>

  </ScrollView>


    </ScrollView>
  </SafeAreaView>
  )
}

export default Location