import { View, Text, StatusBar, TouchableOpacity, Image, Animated } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Utils, colors } from '../../contants';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagesPath from '../../assests/ImagesPath';

const ScholarshipDetails = () => {
    const navigation = useNavigation();

    const [selectedStep, setSelectedStep] = useState(0);
const progress1 = useRef(new Animated.Value(0)).current;
const progress2 = useRef(new Animated.Value(0)).current;
const progress3 = useRef(new Animated.Value(0)).current;

    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )

    const start1 = () => {
        Animated.timing(progress1, {
        toValue: 100,
        duration: 3000,
        useNativeDriver: false,
        }).start();
        };
        const start2 = () => {
        Animated.timing(progress2, {
        toValue: 100,
        duration: 3000,
        useNativeDriver: false,
        }).start();
        };
        const start3 = () => {
        Animated.timing(progress3, {
        toValue: 100,
        duration: 3000,
        useNativeDriver: false,
        }).start();
        };
    
  return (
    <SafeAreaView style={{height:Utils.ScreenHeight(100), backgroundColor:colors.white, paddingTop:Utils.ScreenHeight(3)}}>
         {/* <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" /> */}
        <TouchableOpacity activeOpacity={0.3}
                          style={{
                              marginLeft: Utils.ScreenWidth(3),
                              marginTop: Utils.ScreenHeight(0),
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

        <View style = {{justifyContent: 'space', alignItems: 'center', height: Utils.ScreenHeight(6), flexDirection: 'row'}}>
            <Image source={ImagesPath.home.scholarship} 
                          style={{
                          resizeMode: 'contain',
                          height: Utils.ScreenWidth(20),
                          marginHorizontal: Utils.ScreenWidth(2),
                          marginBottom: Utils.ScreenHeight(2),
                          width: Utils.ScreenWidth(25),}}/>
             <Text style = {{fontWeight: 500, fontSize: 20, color: colors.black}}>XYZ Scholarship</Text>
        </View>

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

                <View style={{flex: 1}}>
<View style={{width: '100%', alignItems: 'center', padding: 50}}>
<View
style={{
width: 30,
height: 30,
borderRadius: 15,
backgroundColor: selectedStep > 0 ? colors.green: colors.greyNoti,
justifyContent: 'center',
alignItems: 'center',
}}>
<Text style={{color: '#fff', }}>1</Text>
</View>
<View
style={{
width: 6,
height: 100,
backgroundColor: colors.green,
}}></View>
<View
style={{
width: 30,
height: 30,
borderRadius: 15,

backgroundColor: selectedStep > 1 ? colors.green : colors.greyNoti,
justifyContent: 'center',
alignItems: 'center',
}}>
<Text style={{color: '#fff'}}>2</Text>
</View>
<View
style={{
width: 6,
height: 100,
backgroundColor: colors.green,
}}></View>
<View
style={{
width: 30,
height: 30,
borderRadius: 15,
backgroundColor: selectedStep > 2 ? colors.green : colors.greyNoti,
justifyContent: 'center',
alignItems: 'center',
}}>
<Text style={{color: '#fff'}}>3</Text>
</View>
<View
style={{
width: 6,
height: 100,
backgroundColor: colors.greyNoti,
}}></View>
<View
style={{
width: 30,
height: 30,
borderRadius: 15,
backgroundColor: selectedStep > 3 ? colors.primary : colors.greyNoti,
justifyContent: 'center',
alignItems: 'center',
}}>
<Text style={{color: '#fff'}}>4</Text>
</View>
</View>
<View
style={{
width: '100%',
alignItems: 'center',
padding: 50,
position: 'absolute',
top: 0,
}}>
<Animated.View
style={{
width: 6,
height: progress1,
marginTop: 30,
backgroundColor: colors.green,
}}></Animated.View>

<Animated.View
style={{
width: 6,
height: progress2,
marginTop: 30,
backgroundColor: colors.green,
}}></Animated.View>
<Animated.View
style={{
width: 6,
height: progress3,
marginTop: 30,
backgroundColor: colors.green,
}}></Animated.View>
</View>
<TouchableOpacity
style={{
marginTop: Utils.ScreenHeight(2),
height: 50,
width: 200,
backgroundColor: colors.primary,
justifyContent: 'center',
alignItems: 'center',
borderRadius: 10,
alignSelf: 'center',
}}
onPress={() => {
if (selectedStep == 1) {
start1();
}
if (selectedStep == 2) {
start2();
}
if (selectedStep == 3) {
start3();
}
if (selectedStep == 0) {
setSelectedStep(selectedStep + 1);
} else {
setTimeout(() => {
setSelectedStep(selectedStep + 1);
}, 3000);
}
}}>
<Text>Next Step</Text>
</TouchableOpacity>
</View>





{/* 
                <Text style={{fontSize:16, fontWeight:"900", color: colors.green, marginTop: Utils.ScreenHeight(2)}}>Selected for Interviews</Text> */}

                <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: Utils.ScreenHeight(2)}}>
              <View style = {{ backgroundColor: colors.primary, width: '90%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(0.5) }} />
    </View>


                <View style = {{flexDirection: 'row', marginTop: Utils.ScreenHeight(2)}}>
                <Text style={{fontSize:16, fontWeight:"500", color: colors.black}}>Date: </Text>
                <Text style={{fontSize:16, fontWeight:"500", color: colors.grey}}>21st October 2023 </Text>
                </View>

                <View style = {{flexDirection: 'row', marginTop: Utils.ScreenHeight(2)}}>
                <Text style={{fontSize:16, fontWeight:"500", color: colors.black}}>Time slot: </Text>
                <Text style={{fontSize:16, fontWeight:"500", color: colors.grey}}>3:00pm - 5:00pm </Text>
                </View>
    </View>

    <View style = {{marginHorizontal: Utils.ScreenWidth(2), marginBottom: Utils.ScreenHeight(2)}}>
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
     </ScrollView>
    </SafeAreaView>
  )
}

export default ScholarshipDetails