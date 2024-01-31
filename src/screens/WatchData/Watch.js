// import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput, FlatList, Modal } from 'react-native'
// import React, { useState } from 'react'
// import { Utils, colors } from '../../contants'
// import ImagesPath from '../../assests/ImagesPath'
// import i18next from './LanguageServices/i18next';
// import { useTranslation } from 'react-i18next';

// const Watch = () => {
//   const {t} = useTranslation();
//     const [searchText, setSearchtext] = useState("");
//   return (
//     <View style={{ backgroundColor: colors.white, flex: 1 }}>
//             <ScrollView style={{}}>
                

//                 <View style={{ marginTop: Utils.ScreenHeight(3), marginHorizontal:Utils.ScreenWidth(4)}}>
//                     <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

//                       {/* <Modal visible = {visible}>
//                           <View>
//                             <FlatList />
//                           </View>
//                       </Modal> */}
//                         <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 20, fontWeight: 800, marginBottom: Utils.ScreenHeight(1.5), color: colors.black }}>{t("welcome")}</Text>
//                         <TouchableOpacity style = {{ height: Utils.ScreenHeight(3), width: Utils.ScreenWidth(6), backgroundColor: blue}}>
//                           <Text style = {{fontSize: 16, color: colors.white}}> {t('change-language')}</Text>
//                         </TouchableOpacity>
//                     </View>
                    
//                     <View style={{flexDirection:"row", marginTop:Utils.ScreenHeight(1), justifyContent:"space-between", alignItems:"center", marginHorizontal: Utils.ScreenWidth(3)}}>
//                       <TouchableOpacity style = {{height:Utils.ScreenHeight(14), borderWidth:1,borderColor: colors.black, borderRadius:5, backgroundColor: '#ECEFF0',
//                             width:Utils.ScreenWidth(36), alignItems: 'center'}}>
//                           <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/2210/2210698.png?ga=GA1.1.1269090354.1696621361&track=ais"}} style={{height:Utils.ScreenHeight(10), width: Utils.ScreenWidth(14), marginTop: Utils.ScreenHeight(0.5),
//                              resizeMode:"contain"}}/>    
//                              <Text style = {{fontSize: 14, fontWeight: 500, color: colors.black}}>Height</Text>                    
//                       </TouchableOpacity>
//                       <TouchableOpacity style = {{height:Utils.ScreenHeight(14), borderWidth:1,borderColor: colors.black, borderRadius:5, backgroundColor: '#ECEFF0',
//                             width:Utils.ScreenWidth(36), alignItems: 'center'}}>
//                           <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/8455/8455996.png?ga=GA1.1.1269090354.1696621361&track=ais"}} style={{height:Utils.ScreenHeight(10), width: Utils.ScreenWidth(14), marginTop: Utils.ScreenHeight(0.5),
//                              resizeMode:"contain", }}/>    
//                              <Text style = {{fontSize: 14, fontWeight: 500, color: colors.black}}>Weight</Text>                    
//                       </TouchableOpacity>
//                     </View>

//                     <View style={{flexDirection:"row", marginTop:Utils.ScreenHeight(4), justifyContent:"space-between", alignItems:"center", marginHorizontal: Utils.ScreenWidth(3)}}>
//                       <TouchableOpacity style = {{height:Utils.ScreenHeight(14), borderWidth:1,borderColor: colors.black, borderRadius:5, backgroundColor: '#ECEFF0',
//                             width:Utils.ScreenWidth(36), alignItems: 'center'}}>
//                           <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/8638/8638102.png?ga=GA1.1.1269090354.1696621361&track=ais"}} style={{height:Utils.ScreenHeight(10), width: Utils.ScreenWidth(14), marginTop: Utils.ScreenHeight(0.5),
//                              resizeMode:"contain"}}/>    
//                              <Text style = {{fontSize: 14, fontWeight: 500, color: colors.black}}>Body Temprature</Text>                    
//                       </TouchableOpacity>
//                       <TouchableOpacity style = {{height:Utils.ScreenHeight(14), borderWidth:1,borderColor: colors.black, borderRadius:5, backgroundColor: '#ECEFF0',
//                             width:Utils.ScreenWidth(36), alignItems: 'center'}}>
//                           <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/6093/6093151.png?ga=GA1.1.1269090354.1696621361&track=ais"}} style={{height:Utils.ScreenHeight(10), width: Utils.ScreenWidth(14), marginTop: Utils.ScreenHeight(0.5),
//                              resizeMode:"contain"}}/>    
//                              <Text style = {{fontSize: 14, fontWeight: 500, color: colors.black}}>Fat percentage</Text>                    
//                       </TouchableOpacity>
//                     </View>

//                     <View style={{flexDirection:"row", marginTop:Utils.ScreenHeight(4), justifyContent:"space-between", alignItems:"center", marginHorizontal: Utils.ScreenWidth(3)}}>
//                       <TouchableOpacity style = {{height:Utils.ScreenHeight(14), borderWidth:1,borderColor: colors.black, borderRadius:5, backgroundColor: '#ECEFF0',
//                             width:Utils.ScreenWidth(36), alignItems: 'center'}}>
//                           <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/4721/4721057.png?ga=GA1.1.1269090354.1696621361&track=ais"}} style={{height:Utils.ScreenHeight(10), width: Utils.ScreenWidth(14), marginTop: Utils.ScreenHeight(0.5),
//                              resizeMode:"contain"}}/>    
//                              <Text style = {{fontSize: 14, fontWeight: 500, color: colors.black}}>Walking</Text>                    
//                       </TouchableOpacity>
//                       <TouchableOpacity style = {{height:Utils.ScreenHeight(14), borderWidth:1,borderColor: colors.black, borderRadius:5, backgroundColor: '#ECEFF0',
//                             width:Utils.ScreenWidth(36), alignItems: 'center'}}>
//                           <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/4357/4357645.png?ga=GA1.1.1269090354.1696621361&track=ais"}} style={{height:Utils.ScreenHeight(10), width: Utils.ScreenWidth(14), marginTop: Utils.ScreenHeight(0.5),
//                              resizeMode:"contain"}}/>    
//                              <Text style = {{fontSize: 14, fontWeight: 500, color: colors.black}}>Running</Text>                    
//                       </TouchableOpacity>
//                     </View>

//                     <View style={{flexDirection:"row", marginTop:Utils.ScreenHeight(4), justifyContent:"space-between", alignItems:"center", marginHorizontal: Utils.ScreenWidth(3)}}>
//                       <TouchableOpacity style = {{height:Utils.ScreenHeight(14), borderWidth:1,borderColor: colors.black, borderRadius:5, backgroundColor: '#ECEFF0',
//                             width:Utils.ScreenWidth(36), alignItems: 'center'}}>
//                           <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/7292/7292628.png?ga=GA1.1.1269090354.1696621361&track=ais"}} style={{height:Utils.ScreenHeight(10), width: Utils.ScreenWidth(14), marginTop: Utils.ScreenHeight(0.5),
//                              resizeMode:"contain"}}/>    
//                              <Text style = {{fontSize: 14, fontWeight: 500, color: colors.black}}>Swimming</Text>                    
//                       </TouchableOpacity>
//                       <TouchableOpacity style = {{height:Utils.ScreenHeight(14), borderWidth:1,borderColor: colors.black, borderRadius:5, backgroundColor: '#ECEFF0',
//                             width:Utils.ScreenWidth(36), alignItems: 'center'}}>
//                           <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/1945/1945066.png?ga=GA1.1.1269090354.1696621361&track=ais"}} style={{height:Utils.ScreenHeight(10), width: Utils.ScreenWidth(14), marginTop: Utils.ScreenHeight(0.5),
//                              resizeMode:"contain"}}/>    
//                              <Text style = {{fontSize: 14, fontWeight: 500, color: colors.black}}>Cycling</Text>                    
//                       </TouchableOpacity>
//                     </View>

//                     <View style={{flexDirection:"row", marginTop:Utils.ScreenHeight(4), justifyContent:"space-between", alignItems:"center", marginHorizontal: Utils.ScreenWidth(3)}}>
//                       <TouchableOpacity style = {{height:Utils.ScreenHeight(14), borderWidth:1,borderColor: colors.black, borderRadius:5, backgroundColor: '#ECEFF0',
//                             width:Utils.ScreenWidth(36), alignItems: 'center'}}>
//                           <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/4721/4721057.png?ga=GA1.1.1269090354.1696621361&track=ais"}} style={{height:Utils.ScreenHeight(10), width: Utils.ScreenWidth(14), marginTop: Utils.ScreenHeight(0.5),
//                              resizeMode:"contain"}}/>    
//                              <Text style = {{fontSize: 14, fontWeight: 500, color: colors.black}}>Walking</Text>                    
//                       </TouchableOpacity>
//                       <TouchableOpacity style = {{height:Utils.ScreenHeight(14), borderWidth:1,borderColor: colors.black, borderRadius:5, backgroundColor: '#ECEFF0',
//                             width:Utils.ScreenWidth(36), alignItems: 'center'}}>
//                           <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/4357/4357645.png?ga=GA1.1.1269090354.1696621361&track=ais"}} style={{height:Utils.ScreenHeight(10), width: Utils.ScreenWidth(14), marginTop: Utils.ScreenHeight(0.5),
//                              resizeMode:"contain"}}/>    
//                              <Text style = {{fontSize: 14, fontWeight: 500, color: colors.black}}>Running</Text>                    
//                       </TouchableOpacity>
//                     </View>

//                 </View>

//             </ScrollView>
//         </View>
//   )
// }

// export default Watch