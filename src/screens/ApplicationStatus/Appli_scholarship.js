import { View, Text, StatusBar, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { Utils, colors } from '../../contants';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ImagesPath from '../../assests/ImagesPath';

const Appli_scholarship = () => {
    const navigation = useNavigation();
    const[data,setdata] = useState([]);

    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
    useEffect(() => {
      // oid:"6504e0754312a4f26f9616fa"
      // console.log("from useff")
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://nfc-backend-nyjt.onrender.com/api/applications/6504e0754312a4f26f9616fa", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result)
        setdata(result)
        })
        .catch(error => console.log('error', error));

      
    }, [])
    const latest = ({ item, index }) => {
      return (
        <View style = {{flexDirection: 'row'}}>
        <View style = {{backgroundColor: colors.primary, height: Utils.ScreenHeight(11.6), width: Utils.ScreenWidth(2), marginHorizontal: Utils.ScreenWidth(1.2), marginTop: Utils.ScreenHeight(1.8)}}/>
          <TouchableOpacity style={{marginTop:Utils.ScreenHeight(1.5), borderWidth:1, width: '96%', justifyContent:"space-between", height:Utils.ScreenHeight(12), 
                                 borderColor:colors.grey2, borderRadius:10, flexDirection:"row", alignItems:"center"}}
          onPress={() => {navigation.navigate('ScholarshipDetails')}}>
               <View style={{flexDirection:"row", alignItems:"center", marginLeft:Utils.ScreenWidth(2) }}>
                <Image source={ImagesPath.LegalBridge.schoimg} style={{height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                <View style={{marginTop:Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(2), marginBottom:Utils.ScreenWidth(4), maxWidth: '80%'}}>
                <Text style={{fontSize:15, fontWeight:"400", color: colors.black}}>{item.scholarship_title}</Text>
                <Text style={{fontSize:10, fontWeight:"400", color: colors.green}}>{item.funding}</Text>
                </View>
                </View>
                <View style = {{marginHorizontal: Utils.ScreenWidth(1)}}>
                  <Image source={ImagesPath.LegalBridge.schoimg} style={{height:Utils.ScreenHeight(2), tint: colors.grey2, width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                </View>
          </TouchableOpacity>
          </View>
          
      )
  }
    
  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: colors.white}}>
        
          <View style = {{justifyContent: 'center', alignItems: 'center', height: Utils.ScreenHeight(6) }}>
             <Text style = {{fontWeight: 500, fontSize: 20, color: colors.black}}>My applications</Text>
        </View>
        <TouchableOpacity activeOpacity={0.3}
                          style={{
                              marginLeft: Utils.ScreenWidth(3),
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
        <ScrollView style={{marginHorizontal:Utils.ScreenWidth(2)}}> 

    {/* <View style = {{flexDirection: 'row'}}>
        <View style = {{backgroundColor: colors.primary, height: Utils.ScreenHeight(11.6), width: Utils.ScreenWidth(2), marginHorizontal: Utils.ScreenWidth(1.2), marginTop: Utils.ScreenHeight(1.8)}}/>
          <TouchableOpacity style={{marginTop:Utils.ScreenHeight(1.5), borderWidth:1, width: '96%', justifyContent:"space-between", height:Utils.ScreenHeight(12), 
                                 borderColor:colors.grey2, borderRadius:10, flexDirection:"row", alignItems:"center"}}
          onPress={() => {navigation.navigate('ScholarshipDetails')}}>
               <View style={{flexDirection:"row", alignItems:"center", marginLeft:Utils.ScreenWidth(2) }}>
                <Image source={ImagesPath.home.dollar_icon} style={{height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                <View style={{marginTop:Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(2), marginBottom:Utils.ScreenWidth(4), maxWidth: '80%'}}>
                <Text style={{fontSize:17, fontWeight:"400", color: colors.black}}>The XYZ Scholarship</Text>
                <Text style={{fontSize:12, fontWeight:"400", color: colors.grey2}}>Lorem ipsum dolor sit amet,kjdsbcousdbosbvob'DCSDNCNEKCNKISDNKLCN
                 exercitation</Text>
                </View>
                </View>
                <View style = {{marginHorizontal: Utils.ScreenWidth(1)}}>
                  <Image source={ImagesPath.LegalBridge.scholar} style={{height:Utils.ScreenHeight(2), tint: colors.grey2, width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                </View>
          </TouchableOpacity>
          </View> */}

          {/* <View style = {{flexDirection: 'row'}}>
        <View style = {{backgroundColor: colors.primary, height: Utils.ScreenHeight(11.8), width: Utils.ScreenWidth(2), marginHorizontal: Utils.ScreenWidth(1.2), marginTop: Utils.ScreenHeight(1.8)}}/>
          <TouchableOpacity style={{marginTop:Utils.ScreenHeight(1.5), borderWidth:1, width: '96%', justifyContent:"space-between", height:Utils.ScreenHeight(12), 
                                 borderColor:colors.grey2, borderRadius:10, flexDirection:"row", alignItems:"center"}}
          onPress={() => {navigation.navigate('ScholarshipDetails')}}>
               <View style={{flexDirection:"row", alignItems:"center", marginLeft:Utils.ScreenWidth(2) }}>
                <Image source={ImagesPath.LegalBridge.scholar} style={{height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                <View style={{marginTop:Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(2), marginBottom:Utils.ScreenWidth(4), maxWidth: '80%'}}>
                <Text style={{fontSize:17, fontWeight:"400", color: colors.black}}>The XYZ Scholarship</Text>
                <Text style={{fontSize:12, fontWeight:"400", color: colors.grey2}}>Lorem ipsum dolor sit amet,kjdsbcousdbosbvob'DCSDNCNEKCNKISDNKLCN
                 exercitation</Text>
                </View>
                </View>
                <View style = {{marginHorizontal: Utils.ScreenWidth(1)}}>
                  <Image source={ImagesPath.home.right_arrow} style={{height:Utils.ScreenHeight(2), tint: colors.grey2, width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                </View>
          </TouchableOpacity>
          </View>

          <View style = {{flexDirection: 'row'}}>
        <View style = {{backgroundColor: colors.primary, height: Utils.ScreenHeight(11.8), width: Utils.ScreenWidth(2), marginHorizontal: Utils.ScreenWidth(1.2), marginTop: Utils.ScreenHeight(1.8)}}/>
          <TouchableOpacity style={{marginTop:Utils.ScreenHeight(1.5), borderWidth:1, width: '96%', justifyContent:"space-between", height:Utils.ScreenHeight(12), 
                                 borderColor:colors.grey2, borderRadius:10, flexDirection:"row", alignItems:"center"}}
          onPress={() => {navigation.navigate('ScholarshipDetails')}}>
               <View style={{flexDirection:"row", alignItems:"center", marginLeft:Utils.ScreenWidth(2) }}>
                <Image source={ImagesPath.LegalBridge.scholar} style={{height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                <View style={{marginTop:Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(2), marginBottom:Utils.ScreenWidth(4), maxWidth: '80%'}}>
                <Text style={{fontSize:17, fontWeight:"400", color: colors.black}}>The XYZ Scholarship</Text>
                <Text style={{fontSize:12, fontWeight:"400", color: colors.grey2}}>Lorem ipsum dolor sit amet,kjdsbcousdbosbvob'DCSDNCNEKCNKISDNKLCN
                 exercitation</Text>
                </View>
                </View>
                <View style = {{marginHorizontal: Utils.ScreenWidth(1)}}>
                  <Image source={ImagesPath.home.right_arrow} style={{height:Utils.ScreenHeight(2), tint: colors.grey2, width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                </View>
          </TouchableOpacity>
          </View>

          <View style = {{flexDirection: 'row'}}>
        <View style = {{backgroundColor: colors.primary, height: Utils.ScreenHeight(11.8), width: Utils.ScreenWidth(2
          ), marginHorizontal: Utils.ScreenWidth(1.2), marginTop: Utils.ScreenHeight(1.8)}}/>
          <TouchableOpacity style={{marginTop:Utils.ScreenHeight(1.5), borderWidth:1, width: '96%', justifyContent:"space-between", height:Utils.ScreenHeight(12), 
                                 borderColor:colors.grey2, borderRadius:10, flexDirection:"row", alignItems:"center"}}
          onPress={() => {navigation.navigate('ScholarshipDetails')}}>
               <View style={{flexDirection:"row", alignItems:"center", marginLeft:Utils.ScreenWidth(2) }}>
                <Image source={ImagesPath.LegalBridge.scholar} style={{height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                <View style={{marginTop:Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(2), marginBottom:Utils.ScreenWidth(4), maxWidth: '80%'}}>
                <Text style={{fontSize:17, fontWeight:"400", color: colors.black}}>The XYZ Scholarship</Text>
                <Text style={{fontSize:12, fontWeight:"400", color: colors.grey2}}>Lorem ipsum dolor sit amet,kjdsbcousdbosbvob'DCSDNCNEKCNKISDNKLCN
                 exercitation</Text>
                </View>
                </View>
                <View style = {{marginHorizontal: Utils.ScreenWidth(1)}}>
                  <Image source={ImagesPath.home.right_arrow} style={{height:Utils.ScreenHeight(2), tint: colors.grey2, width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                </View>
          </TouchableOpacity>
          </View> */}
          <FlatList data={data} renderItem={latest}/>          

        </ScrollView>
    </SafeAreaView>
  )
}

export default Appli_scholarship