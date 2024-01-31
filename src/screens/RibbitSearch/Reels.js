import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { Utils } from '../../contants'
import { useNavigation } from '@react-navigation/native'

const Reels = () => {
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

          <TouchableOpacity onPress = {() => navigation.navigate('Reels')}>
          <Text style = {{color: '#FFFFFF', marginLeft: Utils.ScreenWidth(6)}}>Reels</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('Audio')}>
          <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Audio</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Tags</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>   

        <View>
          <View style = {{width: '100%', marginTop: Utils.ScreenHeight(2), flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
            <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/a2f8/3665/83383b2e0641ab976c3a491a90cdbe1c?Expires=1698624000&Signature=ExVe2SCimQlrGxLt88daT5n2JJ~KDIzHr8~WnleYjauUNunxBQtMxop0oVaNx99DpL~mBbVwrR5hwsmNktWgigbdjIK5LgPqU98iJIWXVB-0aqEJkw8N3cRRkoc2AwXOoLW98GLB-JYG1~R6SOCjHe5n4Oj8Jcp43O~XM02XHf~ksxiDirDYJ42mmWRcJJhpmxFfhTAMfgqbsGfttV8XKFrCtgJkGBVSyVkNOUJp4gsfzRzWbKoR-oRslJvHOOEKxqeHnTo0NKEe6-3bkHhAI2CaAKRBrMPbhQup3KWFEaBv3CIcscOq-SfuOKV~vx5lV8o9RtIiV~9jNCNZb5R-nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
            style = {{height: Utils.ScreenHeight(30), width: Utils.ScreenWidth(33)}}/>
            <View style = {{position: 'absolute', backgroundColor: '#0000009c', width: Utils.ScreenWidth(12), height: Utils.ScreenHeight(3), alignItems: 'center', justifyContent: 'center', borderRadius: Utils.ScreenWidth(3), bottom: 0, marginBottom: Utils.ScreenHeight(1), marginHorizontal: Utils.ScreenWidth(2)}}>
              <Text style = {{color: '#FFFFFF', fontSize: 10}}>119M</Text>
            </View>
            </View>

            <View>
            <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/a5c2/7ed9/32de0e72e53077b6e2fb924cfd5485cb?Expires=1698624000&Signature=li5AsuVJI8G-Mf5R-abhVtrzwLyg7PIzcBfzvIF2mNN9zMeYHwDzGWmVHCVm8kOI7vV1fZVQMvWrTQ2IFCS-F6pZ08~zHfoKDFyuY7db7Oc9hDfg28b0uh3fTKlF9UFd8o9YiGj9nQoa5deR5Jv4q86sdkAJSJg0d2F88k0unMuWpFHfzV92pd70BKECWs1jwnXjcD6cAM0vxAtMu2pdL6CvyXgtwrp7CNkRCU-s9yJYeCRqplaqZjnecc1ZtEyrahsLlb6M4vTX-IA-2F8CxKX7Cc3etFXCm~NupGa~5r7ftHuC3ODXfo7QO1YX03HoHGLLNdhsUqxYXojHInloow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
            style = {{height: Utils.ScreenHeight(30), width: Utils.ScreenWidth(33)}}/>
             <View style = {{position: 'absolute', backgroundColor: '#0000009c', width: Utils.ScreenWidth(12), height: Utils.ScreenHeight(3), alignItems: 'center', justifyContent: 'center', borderRadius: Utils.ScreenWidth(3), bottom: 0, marginBottom: Utils.ScreenHeight(1), marginHorizontal: Utils.ScreenWidth(2)}}>
              <Text style = {{color: '#FFFFFF', fontSize: 10}}>119M</Text>
            </View>
            </View>

            <View>
            <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/e6cd/4762/ddee58dbfd057510950dc69f99fb38f2?Expires=1698624000&Signature=ASU65RA-ecN~gs~0VqsBD8Z-HOBJr166xk5kkh-Gbh4tIXzN7jP9CfTzd27D0~5cuddTbrkbQL4xt2rVZpE8qeqba8disd4A1w-4paeW8VtqL~ZSACn5iVpS4NzsDPDq4Bll8Y~lA6wNQxZuW6QlsXdZinO4OhwivmOXVhMZEm1fDsMIV6Bp3dPJl7Q0Oh6C4VDnIp-oQ2VjlBRvkYtSJdKpmv0p3OUSGhSXzjMeScPHlaNCLbBbGl8gKLaLIOm4iaCpJC3Kipk0fMUZP6SFCzq5HeEre~UDXX9ZfcG2CNMmPjqhIJUw1SSrcMMKr3ZgaIH7i2fzttb1ehJAFXR~Ng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
            style = {{height: Utils.ScreenHeight(30), width: Utils.ScreenWidth(33)}}/>
            <View style = {{position: 'absolute', backgroundColor: '#0000009c', width: Utils.ScreenWidth(12), height: Utils.ScreenHeight(3), alignItems: 'center', justifyContent: 'center', borderRadius: Utils.ScreenWidth(3), bottom: 0, marginBottom: Utils.ScreenHeight(1), marginHorizontal: Utils.ScreenWidth(2)}}>
              <Text style = {{color: '#FFFFFF', fontSize: 10}}>119M</Text>
            </View>
            </View>
        </View>

          <View style = {{width: '100%', marginTop: Utils.ScreenHeight(0.3), flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
            <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/6cb6/84e2/e211a22cdf285a280d2551e5f5e83af1?Expires=1698624000&Signature=pu-J9aOtTDFLYP8yCipbp0lpAP-YyTv7sWiwvMzNCS6NUsUeHe2Cw-t2EExbqwqXd7fgQfFRJHWFQXmSdvSzvoWeFV2k-jnVWMqp2dnnzn6VR2NR~JIGwRIXcpqDZP9a6DQm3zyORc88vNxhkbKxfG~LX8W6pET05Pn1n7vchMokkWzL5eHLW~ThXuY1duR3uuXEdRmNc98BUxnIdorQlfhPKUMQH~CcXSOtNUtkJwq-I-ZEbfAQi2t7fqpTEoWLrw-WQ12gp3kUzzaw-prNEi906ie65BwnSCthveJO4vYj7nSMIglzGpFISHnriArQwI5F2-xYUUuptFo5fyPhWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
            style = {{height: Utils.ScreenHeight(30), width: Utils.ScreenWidth(33)}}/>
             <View style = {{position: 'absolute', backgroundColor: '#0000009c', width: Utils.ScreenWidth(12), height: Utils.ScreenHeight(3), alignItems: 'center', justifyContent: 'center', borderRadius: Utils.ScreenWidth(3), bottom: 0, marginBottom: Utils.ScreenHeight(1), marginHorizontal: Utils.ScreenWidth(2)}}>
              <Text style = {{color: '#FFFFFF', fontSize: 10}}>119M</Text>
            </View>
            </View>

            <View>
            <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/9624/ca55/9b73a4b9824308cffc26800aeb3cea76?Expires=1698624000&Signature=mnyS~QvHPE5oBTxJnPCmxb1DWAKUKs73~Tlai-y0RLezkcf901BkhVN2GHFy9FIqwv69ha2A2fo59PQUlXdaWv3Zc6qDXYABhbKA-sJIVwYhiiacwfUAjKHHVqdy5rOyAkW76N4HAVpNdfUzIbykD2wH2k39pzxEgalT6y9TDgqOJgbpY9yA13INzj05ggBoVnlTjyIxUl8abhn~eL6DWsZ8ZuLk~uhwpyAB1aZ6tm7SiK8xWoWxMfsv~pANgj1~Yn0qDGwVEzh2Z2wYfladRgKyxw5o1bscUCdjtwRKmm9P1viGS-dAP3ZtZXX-Vn1POjAHFDIIPV7G8YWax3Kpag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
            style = {{height: Utils.ScreenHeight(30), width: Utils.ScreenWidth(33)}}/>
             <View style = {{position: 'absolute', backgroundColor: '#0000009c', width: Utils.ScreenWidth(12), height: Utils.ScreenHeight(3), alignItems: 'center', justifyContent: 'center', borderRadius: Utils.ScreenWidth(3), bottom: 0, marginBottom: Utils.ScreenHeight(1), marginHorizontal: Utils.ScreenWidth(2)}}>
              <Text style = {{color: '#FFFFFF', fontSize: 10}}>119M</Text>
            </View>
            </View>

            <View>
            <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/bb39/36b7/16cd168c3dbad1b7b7d75cdf013ab4cd?Expires=1698624000&Signature=bxRCqB5PhchTVeZs2T1vv9YivCNb3nrLt-4M3NyOFuFW~DH0wPap9OzsWQSB9-pXYoNnKZs9mHjJnr1CtecLYFIykFArGAG8n-m6jvL~qIVY3-T07LV3uh7mqUnmAXpjKbRQDLE4fFSGADjF2QGjP-~o7lcjqRkiZTQ3Wpr6ocbvXMl3uu5BqOJSAxRFcGV1IPdHPUaN2zjS76cUwZ~uGeF80aAUi83jyaJWsmkPUjrHW0CaCkCfqu59BaG8HXrLU2wYN~qEBNdvq4cejkEWsDYMl5Vr7BRW-2KNHLgI~epkoYpiKWmK4yu~p9fjnVd~muQOaeXimfVWbQlT~pvimg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
            style = {{height: Utils.ScreenHeight(30), width: Utils.ScreenWidth(33)}}/>
           <View style = {{position: 'absolute', backgroundColor: '#0000009c', width: Utils.ScreenWidth(12), height: Utils.ScreenHeight(3), alignItems: 'center', justifyContent: 'center', borderRadius: Utils.ScreenWidth(3), bottom: 0, marginBottom: Utils.ScreenHeight(1), marginHorizontal: Utils.ScreenWidth(2)}}>
              <Text style = {{color: '#FFFFFF', fontSize: 10}}>119M</Text>
            </View>
            </View>
          </View>


        </View>

    </ScrollView>
  </SafeAreaView>
  )
}

export default Reels