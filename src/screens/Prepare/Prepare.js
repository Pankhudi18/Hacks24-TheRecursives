import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Utils, colors } from '../../contants'
import Style from 'agora-rn-uikit/src/Style'
import ImagesPath from '../../assests/ImagesPath'


const Courses = () => {
  return (
    <View style={{backgroundColor:colors.white, height:Utils.ScreenHeight(100)}}>
      <View style={{marginTop:Utils.ScreenHeight(3), marginHorizontal:Utils.ScreenWidth(3)}}>
        <Text style={{fontSize:Utils.ScreenHeight(2.6), color:colors.black, fontWeight:500, }} >Top Courses in Personal{'\n'} Development</Text>
      <ScrollView horizontal={true}> 
     <View style={{marginRight:Utils.ScreenWidth(4)}}>
      <View style={{height:Utils.ScreenHeight(15),borderRadius:10, width:Utils.ScreenWidth(50), borderWidth:1, marginTop:Utils.ScreenHeight(2), borderColor:colors.grey2}}>
        <Image
        source={ImagesPath.LegalBridge.ud1}
        style={{height:Utils.ScreenHeight(17), width:Utils.ScreenWidth(50), resizeMode:"contain"}}/>
      </View>
      <Text style={{marginTop:Utils.ScreenHeight(1), fontSize:Utils.ScreenHeight(1.8), color: colors.black, marginLeft: Utils.ScreenWidth(1) }}>Master your brain:{'\n'}Neuroscience for personal {'\n'}Development</Text>
      </View>
     <View style={{marginRight:Utils.ScreenWidth(4)}}>
      <View style={{height:Utils.ScreenHeight(15),borderRadius:10, width:Utils.ScreenWidth(50), borderWidth:1, marginTop:Utils.ScreenHeight(2), borderColor:colors.grey2}}>
        <Image
        source={ImagesPath.LegalBridge.ud3}
        style={{height:Utils.ScreenHeight(17), width:Utils.ScreenWidth(50), resizeMode:"contain"}}/>
      </View>
      <Text style={{marginTop:Utils.ScreenHeight(1), fontSize:Utils.ScreenHeight(1.8), color: colors.black, marginLeft: Utils.ScreenWidth(1) }}>Master your brain:{'\n'}Neuroscience for personal {'\n'}Development</Text>
      </View>
     <View style={{marginRight:Utils.ScreenWidth(4)}}>
      <View style={{height:Utils.ScreenHeight(15),borderRadius:10, width:Utils.ScreenWidth(50), borderWidth:1, marginTop:Utils.ScreenHeight(2), borderColor:colors.grey2}}>
        <Image
        source={ImagesPath.LegalBridge.ud2}
        style={{height:Utils.ScreenHeight(17), width:Utils.ScreenWidth(50), resizeMode:"contain"}}/>
      </View>
      <Text style={{marginTop:Utils.ScreenHeight(1), fontSize:Utils.ScreenHeight(1.8), color: colors.black, marginLeft: Utils.ScreenWidth(1) }}>Master your brain:{'\n'}Neuroscience for personal {'\n'}Development</Text>
      </View>

      
      </ScrollView>
      </View>
      <View style={{marginTop:Utils.ScreenHeight(3),
                        marginHorizontal:Utils.ScreenWidth(5),
                        paddingBottom: Utils.ScreenHeight(2), height: Utils.ScreenHeight(6), flexDirection: 'row', marginVertical: Utils.ScreenWidth(1), justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey2, paddingVertical: Utils.ScreenHeight(1) }}>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Text style={{ marginVertical: 5, fontSize: Utils.ScreenHeight(1.5), color: colors.grey, textAlign: 'center' }}>View Analysed Image</Text>
                                <Text style = {{color: colors.black}}>Download Question Papers</Text>
    
                            </View>
                            <TouchableOpacity
                           
                            style={{ justifyContent: 'center' }}>
                                <Image source={ImagesPath.home.right_arrow} style={{ width: 13, height: 13, resizeMode: 'contain', marginRight: Utils.ScreenWidth(3) }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{marginTop:Utils.ScreenHeight(3),
                        marginHorizontal:Utils.ScreenWidth(5),
                        paddingBottom: Utils.ScreenHeight(2), height: Utils.ScreenHeight(6), flexDirection: 'row', marginVertical: Utils.ScreenWidth(1), justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey2, paddingVertical: Utils.ScreenHeight(1) }}>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Text style={{ marginVertical: 5, fontSize: Utils.ScreenHeight(1.5), color: colors.grey, textAlign: 'center' }}>View Analysed Image</Text>
                                <Text>Download Exam Resources</Text>
    
                            </View>
                            <TouchableOpacity
                           
                            style={{ justifyContent: 'center' }}>
                                <Image source={ImagesPath.home.right_arrow} style={{ width: 13, height: 13, resizeMode: 'contain', marginRight: Utils.ScreenWidth(3) }} />
                            </TouchableOpacity>
                        </View>
      




    </View>
  )
}

export default Courses