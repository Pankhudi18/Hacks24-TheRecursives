import { View, Text, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native' 
import { Utils } from '../../contants';

const LoginEmail = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )

  return (
    <SafeAreaView>

  <ScrollView style = {{backgroundColor: '#181818', height: '100%'}}>
    <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(8),}}>
      <Text style = {{ fontSize: 50, fontWeight: '900', color: '#fbe34d'}}>Ribbit</Text>
    </View>

    <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(6),}}>
      <Text style = {{ fontSize: 20, fontWeight: '500', color: '#f6f6f6'}}>Login with Email</Text>
    </View>


<View style = {{marginTop: 80, alignItems: 'center'}}>
  <View style = {{  borderColor: '#747474',  borderWidth: 1, borderRadius: 25, height: 45, width: '80%', flexDirection: 'row', alignItems: 'center' }}>
  <Image
  source={{ uri: 'https://cdn-icons-png.flaticon.com/128/646/646094.png' }}
  style={{ height: 20, width: 20, marginLeft: 10, tintColor: '#747474' }}
  />
      <TextInput
      style = {{fontSize: 16, color: '#747474', marginHorizontal: 3, maxWidth: '80%' }}
      placeholder = "Email"
      value = {email}
      onChangeText= {setEmail}/>
  </View>

  <View style={{ marginTop: 30 }} />

  <View style = {{  borderColor: '#747474',  borderWidth: 1, borderRadius: 25, height: 45, width: '80%', flexDirection: 'row', alignItems: 'center', magrinTop: 30 }}>
  <Image
  source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3064/3064155.png' }}
  style={{ height: 20, width: 20, marginLeft: 10, tintColor: '#747474' }}
  />
      <TextInput
      style = {{fontSize: 16, color: '#747474', marginHorizontal: 3, maxWidth: '80%' }}
      placeholder = "Password"
      secureTextEntry = {true}
      value = {password}
      onChangeText= {setPassword}/>
  </View>
</View>

   <TouchableOpacity style = {{marginTop: 7, alignItems: 'flex-end', marginRight: 40}}>
    <Text style = {{fontSize: 14, color: '#747474' }}>
      Forgot your password?
    </Text>
    </TouchableOpacity>

<TouchableOpacity style = {{alignItems: 'center', marginTop: 30}}
onPress = {() => navigation.navigate('RibbitSearch')}>
    <View style = {{ backgroundColor: '#fbe34d' , borderRadius: 25, height: 45, width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', magrinTop: 30 }}>
      <Text style = {{color: '#181818'}}>LOG IN</Text>
    </View>
  </TouchableOpacity>

  <View style = {{marginTop: Utils.ScreenHeight(18), alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
    <Text style = {{fontSize: 14, color: '#747474' }}>
      Don't have an account?
    </Text>
    <TouchableOpacity onPress = {() => navigation.navigate('CreateAccount')}>
    <Text style={{ fontSize: 14, color: '#747474', textDecorationLine: 'underline', marginTop: 5, color: '#fbe34d' }}>
    Create
  </Text>
  </TouchableOpacity>
    </View>
    
  </ScrollView>

    </SafeAreaView>
  );
}

export default LoginEmail;
