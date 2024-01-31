import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Utils } from '../../contants'
import { useNavigation } from '@react-navigation/native';

const Challenges = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
    <ScrollView style = {{backgroundColor: '#181818', height: '100%'}}>
    <View style = {{backgroundColor: '#00000047', height: Utils.ScreenHeight(6), width: Utils.ScreenHeight(6), borderRadius: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(2), marginHorizontal: Utils.ScreenWidth(4), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/9678/9678560.png'}}
        style = {{tintColor: '#FFFFFF', height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(4)}}/>
    </View>

    <View style = {{alignItems: 'center', justifyContent: 'center', top: Utils.ScreenHeight(-4)}}>
        <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1699228800&Signature=DLzzimD6OZbLYbx8JYsTp3kinafFNbFV3hibCRFABsPRqCH4EdwcP00CWtwXAs8dvdzjbuTeEBVWElrXDKFWPj1TMB3wMfG-Ytrj3jDMotdFaDsBDVV1BLY8g7bU4xFrB4tABRomnSEr7AjEaexspdXGMVBUjf4hPISazR4Q0jNbntAr5TqtwZoi80zWq5TD6Sfd2n-uofZtSk7ajS11mndH9qyGwk~1RHmUSgnG8D3SYSjz~GnhlAmrvHyM7V1uubVpBOH1r1d1LBGZqj9GvL~ge-0DvXdmJY57j4ZO6jMcIy4OLsLqU~OFzoZcJsM9KAfjoxlrflAghu-hKXHRqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style = {{height: Utils.ScreenHeight(16), width: Utils.ScreenHeight(16), borderRadius: Utils.ScreenWidth(20)}}/>
        <Text style = {{color: '#FFFFFF', marginTop: Utils.ScreenHeight(2), fontSize: 20}}>
            jilo
        </Text>
        <Text style = {{color: '#868686'}}>
            jennifer estevers
        </Text>
    </View>

    <View style = {{ flexDirection: 'row', height: 70, marginHorizontal: Utils.ScreenWidth(6)}}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{textAlign: 'center', justifyContent: 'center', fontSize: 20, fontWeigth: 300, color: '#CDB32B'}}>
          07
        </Text>
      </View>
      <Text style = {{marginTop: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(4), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%', maxWidth: '80%'}}>Total Surveys</Text>
  </View>

  <View style = {{ flexDirection: 'row', height: 70, marginHorizontal: Utils.ScreenWidth(6)}}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{textAlign: 'center', justifyContent: 'center', fontSize: 20, fontWeigth: 300, color: '#CDB32B'}}>
          150
        </Text>
      </View>
      <Text style = {{marginTop: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(4), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%', maxWidth: '80%'}}>Points Earned</Text>
  </View>

  <View style = {{ flexDirection: 'row', height: 70, marginHorizontal: Utils.ScreenWidth(6)}}>
      <View style = {{height: Utils.ScreenHeight(7), backgroundColor: "#111111", width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(30), alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{textAlign: 'center', justifyContent: 'center', fontSize: 20, fontWeigth: 300, color: '#CDB32B'}}>
          20
        </Text>
      </View>
      <Text style = {{marginTop: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(4), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%', maxWidth: '80%'}}>Redeemed</Text>
  </View>

  <View style={{height: 0.5, backgroundColor: 'gray'}} />

  <Text style = {{color: '#CDB12B', textAlign: 'center', fontSize: 18, marginTop: Utils.ScreenHeight(4)}}>DAILY CHALLENGES</Text>

  <TouchableOpacity style = {{alignItems: 'center', marginTop: 30}}
onPress = {() => navigation.navigate('')}>
    <View style = {{ backgroundColor: '#181818' , borderRadius: 25, height: 45, width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', magrinTop: Utils.ScreenHeight(4), borderColor: '#FFFFFF', borderWidth: 0.5 }}>
      <Text style = {{color: '#FFFFFF'}}>My Challenges</Text>
    </View>
  </TouchableOpacity>

  <TouchableOpacity style = {{alignItems: 'center', marginTop: 30}}
onPress = {() => navigation.navigate('takeSurvey')}>
    <View style = {{ backgroundColor: '#181818' , borderRadius: 25, height: 45, width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', magrinTop: Utils.ScreenHeight(4), borderColor: '#FFFFFF', borderWidth: 0.5 }}>
      <Text style = {{color: '#FFFFFF'}}>Take Survey</Text>
    </View>
  </TouchableOpacity>
  
      </ScrollView>
    </SafeAreaView>
  )
}

export default Challenges