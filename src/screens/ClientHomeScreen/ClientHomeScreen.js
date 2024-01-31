import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { FlatList } from 'react-native-gesture-handler'
import Navigation from '../../navigation/Navigation'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const ClientHomeScreen = () => {
    const navigation = useNavigation();
   

    const latestdata = [
      { id: '1', header: "Supreme Court", title: "Supreme Court Upholds Disciplinary Action Against ...", duration: "15 min ago", image:ImagesPath.LegalBridge.c1 },
      { id: '2', header: "News Updates", title: "Preventing Multiplicity And Streamlining Processes For ...", duration: "30 min ago" ,image:ImagesPath.LegalBridge.c2 },
      { id: '3', header: "High Court", title: "Gujarat High Court Weekly Round-Up: August 28 To ...", duration: "45 min ago",image:ImagesPath.LegalBridge.c3 },
      { id: '4', header: "Supreme Court", title: "Manipur Violence | Following Supreme Court's Direction ...", duration: "50 min ago" ,image:ImagesPath.LegalBridge.c4},
      

  ];
  const[scholarship,setscholarship] = useState();
  useEffect(()=>{
    console.log("from useeffetc", scholarship);
  },scholarship)
  const getrecommendations = () => {

    
   
   
    
    const body = {
      "user_gpa":8,
      "user_location":"india"
    }

    axios
      .post('https://3968-203-212-25-251.ngrok-free.app/api/recommend', body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setscholarship(response.data.scholar)
        console.log('API Response: idar hai', scholarship);

        // setscholarship(response.data.recommended_scholarships[0])
        // console.log(scholarship)
        


      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  };
  useEffect(() => {
    // getPrescriptionList()
    getrecommendations()
}, [])
    const [searchText, setSearchtext] = useState("")
   
    const latest = ({ item, index }) => {
        return (
            <TouchableOpacity 
            onPress={()=>{navigation.navigate("EligibilityScholarship",{data:item})}}
            >
                <View style={{flexDirection:"row", marginBottom:Utils.ScreenHeight(1)}}>
                    <View>
                        <Image source={ImagesPath.LegalBridge.schoimg}
                            style={{ width: Utils.ScreenWidth(25), height: Utils.ScreenHeight(10), borderRadius: 8, resizeMode: "contain" , marginRight:Utils.ScreenWidth(2)}} />
                    </View>
                    <View style={{flex:1, justifyContent:"space-evenly"}}>
                        <Text style={{fontSize:12, color:colors.primarydark, fontWeight:800}}> {item.funds}  </Text>
                        <Text style={{fontSize:14, fontWeight:400, color: colors.black}}> {item.title} </Text>
                        <Text style={{fontSize:12, color:colors.grey, fontWeight:300}}>{item.days_until_deadline} days remaning </Text>
                       
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

    return (
        <View style={{ backgroundColor: colors.white, flex: 1 }}>
            <ScrollView style={{}}>
                <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    borderRadius: 8

                    , marginHorizontal: Utils.ScreenWidth(4), flexDirection: "row", alignItems: "center", backgroundColor: "#EFF1F3", justifyContent: "space-evenly"
                }}>
                    <Image source={ImagesPath.LegalBridge.search} style={{ resizeMode: "contain", height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3) }} />
                    <TextInput
                        value={searchText}
                        onChange={(text) => setSearchtext(text)}
                        style={{ height: Utils.ScreenHeight(5), borderColor: "#D8D8D8", paddingHorizontal: Utils.ScreenWidth(3), width: Utils.ScreenWidth(55), borderRadius: 5, color: colors.black }}
                        placeholderTextColor={'grey'} placeholder="Search" />
                    <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                        <Image style={{ height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), resizeMode: 'contain', tintColor: colors.blackdark }} source={ImagesPath.home.filter_icon} />
                    </TouchableOpacity>

                </View>

                <View style={{ marginTop: Utils.ScreenHeight(3), marginHorizontal:Utils.ScreenWidth(4)}}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 16, fontWeight: 800, marginBottom: Utils.ScreenHeight(1.5), color: colors.black }}>Quick Tabs</Text>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 14, fontWeight: 400, marginBottom: Utils.ScreenHeight(1.5), color: colors.grey }}>View All</Text>
                    </View>
                    
                    <View style={{flexDirection:"row",marginTop:Utils.ScreenHeight(1), justifyContent:"space-between", alignItems:"center"}}>
                      <TouchableOpacity>
                          <Image source={ImagesPath.LegalBridge.schloarapplication} style={{height:Utils.ScreenHeight(8),
                            borderWidth:1,borderColor:colors.grey2, borderRadius:5,
                            width:Utils.ScreenWidth(44), resizeMode:"contain"}}/>                        
                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={()=>{navigation.navigate("AIInterview")}}
                      >
                          <Image source={ImagesPath.LegalBridge.AIinterview} style={{height:Utils.ScreenHeight(8),
                            borderWidth:1,borderColor:colors.grey2, borderRadius:5,
                            width:Utils.ScreenWidth(44), resizeMode:"contain"}}/>                        
                      </TouchableOpacity>
                      
                    </View>

                </View>

              
                <View style={{
                  marginTop:Utils.ScreenHeight(3),
                  borderWidth:0.5,borderColor:colors.grey2, borderRadius:12,
                  marginHorizontal:Utils.ScreenWidth(4), flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                <View >
                  <Image source={ImagesPath.LegalBridge.appoinment}
                  style={{height:Utils.ScreenHeight(13), width:Utils.ScreenWidth(45),
                  resizeMode:"contain", 
                  }}
                  />
                </View>

                <View>
                  <Text style={{fontSize:Utils.ScreenHeight(1.8),fontWeight:450}}>TODAY'S INTERVIEW</Text>
                  <Text style={{fontWeight:300, marginTop:Utils.ScreenHeight(1), fontSize:Utils.ScreenHeight(1.5), color: colors.black}}>Interview with {'\n'}Mr Mukesh Ambani</Text>
                  <TouchableOpacity 
                  onPress={()=>{navigation.navigate("VideoCall")}}
                  style={{alignSelf:"center", marginTop:Utils.ScreenHeight(1)
                ,backgroundColor:colors.primary, borderRadius:12
                
                }}>
                    <Text style={{fontSize:Utils.ScreenHeight(1.5), color:colors.white,paddingVertical:Utils.ScreenHeight(0.7),
                    paddingHorizontal:Utils.ScreenWidth(8)
                    }}>Connect</Text>
                  </TouchableOpacity>
                </View>
                </View>
                <View style={{ marginTop: Utils.ScreenHeight(3),marginHorizontal: Utils.ScreenWidth(4) }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{  fontSize: 18, fontWeight: 600, marginBottom: Utils.ScreenHeight(1.5), color: colors.black }}>Recommendations</Text>

                    </View>
                    <FlatList

                        data={scholarship} renderItem={latest} />

                </View>





            </ScrollView>
        </View>
    )
}

export default ClientHomeScreen;