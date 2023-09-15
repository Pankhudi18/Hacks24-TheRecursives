import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Utils, colors } from '../../contants'
import { useNavigation } from '@react-navigation/native'
import ImagesPath from '../../assests/ImagesPath'
import Uploadtoipfs from '../Uploadtoipfs/Uploadtoipfs'

const Uploadfiles = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:colors.white, }}>
        <View style={{backgroundColor:colors.white, height:Utils.ScreenHeight(100)}}>
        <View style={{ flexDirection: "row",
         marginBottom:Utils.ScreenHeight(3),
         marginHorizontal: Utils.ScreenWidth(4), alignItems: "center",backgroundColor:colors.white,  }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" }}></Text>
              
         </View>
         <View style={{marginHorizontal:Utils.ScreenWidth(5)}}>
         <View>
         <Text style={{fontWeight:600,color:colors.black, fontSize:Utils.ScreenHeight(2)}}>Upload Valid ID</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:Utils.ScreenHeight(1.5)}}></Text>
                      </View>
                      <View style={{ paddingBottom: Utils.ScreenHeight(2), height: Utils.ScreenHeight(6), flexDirection: 'row', marginVertical: Utils.ScreenWidth(1), justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey2, paddingVertical: Utils.ScreenHeight(1) }}>
                        <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Text style={{ marginVertical: 5, fontSize: Utils.ScreenHeight(1.5), color: colors.grey, textAlign: 'center' }}>Upload Valid Government ID</Text>
                            <Text>Aadhar Card/ Pan Card</Text>

                        </View>
                        <TouchableOpacity style={{ justifyContent: 'center' }}>
                            <Image source={ImagesPath.home.right_arrow} style={{ width: 13, height: 13, resizeMode: 'contain', marginRight: Utils.ScreenWidth(3) }} />
                        </TouchableOpacity>
                    </View>

                </View>
                <Uploadtoipfs/>

        </View>
    </SafeAreaView>
  )
}

export default Uploadfiles