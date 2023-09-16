import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'

const ClientSearchScreen = () => {
  const latest = ({ item, index }) => {
    return (
        <TouchableOpacity 
        onPress={()=>{navigation.navigate("EligibilityScholarship",{data:item})}}
        >
            <View style={{
              borderBottomWidth:1, borderBlockColor:colors.grey2,paddingBottom:Utils.ScreenHeight(0.5),
              flexDirection:"row", marginBottom:Utils.ScreenHeight(1)}}>
                <View>
                    <Image source={ImagesPath.LegalBridge.schoimg}
                        style={{ width: Utils.ScreenWidth(25), height: Utils.ScreenHeight(10), resizeMode: "contain" , marginRight:Utils.ScreenWidth(2)}} />
                </View>
                <View style={{flex:1, justifyContent:"space-evenly"}}>
                    <Text style={{fontSize:12, color:colors.primarydark, fontWeight:800}}>{item.attributes.grant} </Text>
                    <Text style={{fontSize:14, fontWeight:400, color: colors.black}}> {item.attributes.name} </Text>
                    <Text style={{fontSize:12, color:colors.grey, fontWeight:300, maxHeight:Utils.ScreenHeight(5)}}> {item.attributes.description} days remaning </Text>
                   
                </View>
            </View>

        </TouchableOpacity>
    )
}
  const[searchtext,setSearchtext] = useState();
  const navigation = useNavigation()
  const[data,setdat] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://ssp-content-prod.herokuapp.com/api/scholarships?filters%5B%24or%5D%5B0%5D%5Bdeadline%5D%5B%24gt%5D=2023-09-15&filters%5B%24or%5D%5B1%5D%5Bdeadline%5D%5B%24null%5D=true&filters%5Blocations%5D%5Bid%5D%5B%24in%5D%5B0%5D=107&filters%5Blocations%5D%5Bid%5D%5B%24in%5D%5B1%5D=2&filters%5Blocations%5D%5Bid%5D%5B%24in%5D%5B2%5D=7&populate%5B0%5D=organisation&populate%5B1%5D=scholarship_degrees&sort%5Bfirst_published_at%5D=desc&pagination%5Bpage%5D=3&pagination%5BpageSize%5D=15", requestOptions)
      .then(response => response.json())
      .then(result => {console.log(result.data)

        setdat(result.data)
      
      })
      .catch(error => console.log('error', error));
  }, [])
  
  return (
    <View style={{height:Utils.ScreenHeight(100), backgroundColor:colors.white}}>  
        <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    borderRadius: 8

                    , marginHorizontal: Utils.ScreenWidth(4), flexDirection: "row", alignItems: "center", backgroundColor: "#EFF1F3", justifyContent: "space-evenly"
                }}>
                    <Image source={ImagesPath.LegalBridge.search} style={{ resizeMode: "contain", height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3) }} />
                    <TextInput
                        value={searchtext}
                        onChange={(text) => setSearchtext(text)}
                        style={{ height: Utils.ScreenHeight(5), borderColor: "#D8D8D8", paddingHorizontal: Utils.ScreenWidth(3), width: Utils.ScreenWidth(55), borderRadius: 5 }}
                        placeholderTextColor={'grey'} placeholder="Search" />
                    <TouchableOpacity
                    
                    style={{ paddingHorizontal: 10 }}>
                        <Image style={{ height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), resizeMode: 'contain', tintColor: colors.blackdark }} source={ImagesPath.home.filter_icon} />
                    </TouchableOpacity>

                </View>

                {/* <View style={{marginTop:Utils.ScreenHeight(3),marginHorizontal:Utils.ScreenWidth(5)}}>
                 
                  <View style={{flexDirection:"row", 
                  justifyContent:"space-evenly",marginTop:Utils.ScreenHeight(1),
                  alignItems:"center", borderWidth:1, borderColor:colors.grey2, borderRadius:12, height:Utils.ScreenHeight(8)}}>
                    <View>
                    <Image source={ImagesPath.home.manImg} style={{ height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5)}}/>
                    </View>
                      <View>
                      <Text style={{fontWeight:600}}>Vishesh Gatha</Text>
                      <Text style={{fontWeight:400, color:colors.grey}}>Divorce</Text>
                      </View>
                      <View >
                      <Text style={{fontWeight:600, color:colors.grey, fontSize:12}}>Exp:{'\n'}5yrs</Text>

                      </View>
                      <TouchableOpacity style={{backgroundColor:colors.secondary, borderRadius:12}}
                      onPress={()=>{navigation.navigate("LawyerDetails")}}
                      >
                        <Text style={{paddingVertical:Utils.ScreenHeight(0.8),
                          fontWeight:600,
                          paddingHorizontal:Utils.ScreenWidth(5), color:colors.primary}}>View</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:"row", 
                  justifyContent:"space-evenly",marginTop:Utils.ScreenHeight(1),
                  alignItems:"center", borderWidth:1, borderColor:colors.grey2, borderRadius:12, height:Utils.ScreenHeight(8)}}>
                    <View>
                    <Image source={ImagesPath.home.manImg} style={{ height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5)}}/>
                    </View>
                      <View>
                      <Text style={{fontWeight:600}}>Vishesh Gatha</Text>
                      <Text style={{fontWeight:400, color:colors.grey}}>Divorce</Text>
                      </View>
                      <View >
                      <Text style={{fontWeight:600, color:colors.grey, fontSize:12}}>Exp:{'\n'}5yrs</Text>

                      </View>
                      <TouchableOpacity style={{backgroundColor:colors.secondary, borderRadius:12}}>
                        <Text style={{paddingVertical:Utils.ScreenHeight(0.8),
                          fontWeight:600,
                          paddingHorizontal:Utils.ScreenWidth(5), color:colors.primary}}>View</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:"row", 
                  justifyContent:"space-evenly",marginTop:Utils.ScreenHeight(1),
                  alignItems:"center", borderWidth:1, borderColor:colors.grey2, borderRadius:12, height:Utils.ScreenHeight(8)}}>
                    <View>
                    <Image source={ImagesPath.home.manImg} style={{ height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5)}}/>
                    </View>
                      <View>
                      <Text style={{fontWeight:600}}>Vishesh Gatha</Text>
                      <Text style={{fontWeight:400, color:colors.grey}}>Divorce</Text>
                      </View>
                      <View >
                      <Text style={{fontWeight:600, color:colors.grey, fontSize:12}}>Exp:{'\n'}5yrs</Text>

                      </View>
                      <TouchableOpacity style={{backgroundColor:colors.secondary, borderRadius:12}}>
                        <Text style={{paddingVertical:Utils.ScreenHeight(0.8),
                          fontWeight:600,
                          paddingHorizontal:Utils.ScreenWidth(5), color:colors.primary}}>View</Text>
                      </TouchableOpacity>
                  </View>


                </View> */}
                <View style={{marginHorizontal:Utils.ScreenWidth(4), marginTop:Utils.ScreenHeight(3)}}>
                <FlatList
                data={data}
                renderItem={latest}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{height:Utils.ScreenHeight(40)}}></View>}
                />

                </View>


    </View>
  )
}

export default ClientSearchScreen