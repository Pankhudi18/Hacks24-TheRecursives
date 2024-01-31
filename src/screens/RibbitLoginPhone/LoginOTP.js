import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Utils } from '../../contants'

const LoginOTP = ({navigation}) => {

  const inputRefs = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef()
  ];

  const focusNextInput = (index) => {
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <SafeAreaView>
        <ScrollView style = {{backgroundColor: '#181818', height: '100%'}}>
        <View style = {{alignItems: 'center', marginTop:Utils.ScreenHeight(6)}}>
            <Text style = {{ fontSize: 50, fontWeight: '900', color: '#fbe34d'}}>Ribbit</Text>
         </View>

       <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(6), justifyContent: 'center'}}>
         <Text style = {{ fontSize: 20, fontWeight: '500', color: '#f6f6f6', textAlign: 'center'}}>Enter OTP shared {'\n'} on your phone</Text>
       </View>

    <View style={{ marginHorizontal: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(14), flexDirection: 'row', justifyContent: 'space-evenly' }}>
          {inputRefs.map((inputRef, index) => (
            <View key={index} style={{ height: Utils.ScreenHeight(9), width: Utils.ScreenHeight(9), borderColor: '#747474', borderWidth: 1, borderRadius: Utils.ScreenWidth(6), alignItems: 'center', justifyContent: 'center' }}>
              <TextInput
                ref={inputRef}
                style={{ fontSize: 16, color: '#747474', marginHorizontal: Utils.ScreenWidth(4), maxWidth: '80%', textAlign: 'center' }}
                maxLength={1}
                onChangeText={(text) => {
                  if (text.length === 1) {
                    focusNextInput(index);
                  }
                }}
              />
            </View>
          ))}
        </View>

    <View style = {{marginTop: Utils.ScreenHeight(2)}}>
        <TouchableOpacity>
        <Text style = {{fontSize: 14, color: '#747474', textAlign: 'right', marginRight: Utils.ScreenWidth(10) }}>
        Resend OTP
        </Text>
        </TouchableOpacity>
    </View>

    <TouchableOpacity style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(6)}}
onPress = {() => navigation.navigate('LoginEmail')}>
    <View style = {{ backgroundColor: '#fbe34d' , borderRadius: 25, height: 45, width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', magrinTop: 30 }}>
      <Text style = {{color: '#181818'}}>CONTINUE</Text>
    </View>
  </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

export default LoginOTP