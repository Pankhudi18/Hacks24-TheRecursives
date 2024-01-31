import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Utils } from '../../contants'
import { useNavigation } from '@react-navigation/native';

const LoginPhone = () => {
    const navigation = useNavigation();
    const [phone, setPhone] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

  return (
    <SafeAreaView>
     <ScrollView style = {{backgroundColor: '#181818', height: '100%'}}>
        <View style = {{alignItems: 'center', marginTop:Utils.ScreenHeight(6)}}>
            <Text style = {{ fontSize: 50, fontWeight: '900', color: '#fbe34d'}}>Ribbit</Text>
         </View>

       <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(6),}}>
         <Text style = {{ fontSize: 20, fontWeight: '500', color: '#f6f6f6'}}>Login with Phone</Text>
       </View>

<View style = {{marginTop: Utils.ScreenHeight(14), alignItems: 'center'}}>
  <View style = {{  borderColor: '#747474',  borderWidth: 1, borderRadius: 25, height: Utils.ScreenHeight(6), width: '80%', flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
      style = {{fontSize: 16, color: '#747474', marginHorizontal: Utils.ScreenWidth(4), maxWidth: '80%' }}
      placeholder = "Enter phone number"
      value = {phone}
      onChangeText= {setPhone}/>
   </View>
   <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Utils.ScreenHeight(2), marginHorizontal: Utils.ScreenWidth(4)}}>
                <TouchableOpacity onPress={toggleCheckbox}>
                <View style={{
        width: Utils.ScreenWidth(5),
        height: Utils.ScreenWidth(5),
        borderWidth: 2,
        borderColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        backgroundColor: isChecked ? '#fbe34d' : 'transparent',
    }}>
        {isChecked && (
            <Text style={{ fontSize: 12, color: '#181818' }}>✓</Text>
        )}
    </View>
                </TouchableOpacity>
                <Text style={{ fontSize: 12, color: '#afafa' }}>I agree to the terms & conditions & Privacy Policy</Text>
            </View>
</View>
     
<TouchableOpacity style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(6)}}
onPress = {() => navigation.navigate('LoginOTP')}>
    <View style = {{ backgroundColor: '#fbe34d' , borderRadius: 25, height: 45, width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', magrinTop: 30 }}>
      <Text style = {{color: '#181818'}}>CONTINUE</Text>
    </View>
  </TouchableOpacity>

  <View style = {{marginTop: Utils.ScreenHeight(22), alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
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
  )
}

export default LoginPhone