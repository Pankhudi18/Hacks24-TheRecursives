import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Utils, colors } from '../../contants';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagesPath from '../../assests/ImagesPath';

const ScholarshipDetails = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: colors.white}}>
         <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />
          <View style = {{justifyContent: 'space', alignItems: 'center', height: Utils.ScreenHeight(6), marginTop: Utils.ScreenHeight(824), flexDirection: 'row', }}>
            <Image source={ImagesPath.home.scholarship} 
                          style={{
                          resizeMode: 'contain',
                          height: Utils.ScreenWidth(30),
                          marginHorizontal: Utils.ScreenWidth(2),
                          marginBottom: Utils.ScreenHeight(2),
                          width: Utils.ScreenWidth(25),}}/>
             <Text style = {{fontWeight: 500, fontSize: 20, color: colors.black}}>XYZ Scholarship</Text>
        </View>
        <TouchableOpacity activeOpacity={0.3}
                          style={{
                             position: 'absolute', 
                             marginTop: Utils.ScreenHeight(3.5), 
                             right: Utils.ScreenWidth(3),
                              alignItems: 'center',
                              elevation: 7,
                              backgroundColor: '#fff',
                              borderRadius: 8,
                              justifyContent: 'center',
                              top: Utils.ScreenHeight(-3),
                              width: Utils.ScreenWidth(12),
                              height: Utils.ScreenHeight(6),}}
                          onPress={() => {
                              navigation.goBack()
                          }}>
                          <Image source={ImagesPath.signUp.backIcon} 
                          style={{
                          resizeMode: 'contain',
                          height: Utils.ScreenWidth(4.8),
                          width: Utils.ScreenWidth(5.8),}} />
                      </TouchableOpacity>
     <ScrollView style = {{marginHorizontal: Utils.ScreenWidth(3)}}>
     <View style={{marginTop:Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(2), marginBottom:Utils.ScreenWidth(4), maxWidth: '100%'}}>
                <Text style={{fontSize:20, fontWeight:"500", color: colors.black}}>About</Text>
                <Text style={{fontSize:12, fontWeight:"400", color: colors.grey, marginTop: Utils.ScreenHeight(2)}}>Lorem ipsum dolor sit amet, kjdsbcousdbosb vob'DCSD NCNEKCNKISDNKLCN
                 exercitation</Text>
    </View>

    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ backgroundColor: colors.primary, width: '90%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(0.5) }} />
    </View>

    <View style={{marginTop:Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(2), marginBottom:Utils.ScreenWidth(4), maxWidth: '100%'}}>
                <Text style={{fontSize:20, fontWeight:"500", color: colors.black}}>Application Details</Text>
                <Text style={{fontSize:12, fontWeight:"400", color: colors.grey, marginTop: Utils.ScreenHeight(2)}}>Lorem ipsum dolor sit amet, kjdsbcousdbosb vob'DCSD NCNEKCNKISDNKLCN
                 exercitation</Text>
    </View>

<View style = {{marginHorizontal: Utils.ScreenWidth(2)}}>
    <View style = {{ backgroundColor: colors.primary,  
                                         borderRadius: 8,
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         height: Utils.ScreenHeight(4), 
                                         width: '40%',
                                         marginTop: Utils.ScreenHeight(2)}} onPress = {() => {registerUser()}}>
               <Text style = {{ color: colors.white, fontWeight: 400, fontSize: 16}}>
                Applied
               </Text>
    </View>
    </View>

    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: Utils.ScreenHeight(2)}}>
              <View style = {{ backgroundColor: colors.primary, width: '90%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(0.5) }} />
    </View>

    <View style={{marginTop:Utils.ScreenWidth(2), marginHorizontal: Utils.ScreenWidth(2), marginBottom:Utils.ScreenWidth(4), maxWidth: '100%'}}>
                <Text style={{fontSize:20, fontWeight:"500", color: colors.black}}>Status</Text>
                <Text style={{fontSize:30, fontWeight:"400", color: colors.green, marginTop: Utils.ScreenHeight(2)}}>Selected for Interviews</Text>
                <View style = {{flexDirection: 'row', marginTop: Utils.ScreenHeight(2)}}>
                <Text style={{fontSize:16, fontWeight:"500", color: colors.black}}>Date: </Text>
                <Text style={{fontSize:16, fontWeight:"500", color: colors.grey}}>21st October 2023 </Text>
                </View>

                <View style = {{flexDirection: 'row', marginTop: Utils.ScreenHeight(2)}}>
                <Text style={{fontSize:16, fontWeight:"500", color: colors.black}}>Time slot: </Text>
                <Text style={{fontSize:16, fontWeight:"500", color: colors.grey}}>3:00pm - 5:00pm </Text>
                </View>
    </View>

    <View style = {{marginHorizontal: Utils.ScreenWidth(2)}}>
    <TouchableOpacity style = {{ backgroundColor: colors.primary,  
                                         borderRadius: 8,
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         height: Utils.ScreenHeight(6), 
                                         width: '100%',
                                         marginTop: Utils.ScreenHeight(2)}} onPress = {() => {navigation.navigate('VideoCall')}}>
               <Text style = {{ color: colors.white, fontWeight: 400, fontSize: 16}}>
                Connect
               </Text>
    </TouchableOpacity>
    </View>

    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: Utils.ScreenHeight(4)}}>
              <View style = {{ backgroundColor: colors.primary, width: '90%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(0.5) }} />
    </View>

   

     </ScrollView>
    </SafeAreaView>
  )
}

export default ScholarshipDetails