import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'
import RazorpayCheckout from 'react-native-razorpay';
import VideoPlayer from 'react-native-video-player'
import AppButton from '../../component/AppButton'
const MentorProfile = () => {

    const postdataa = ()=>{
        var formdata = new FormData();

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://24c3-150-107-98-252.ngrok-free.app/api/v1/generate-invoice/", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)

            var formdata2 = new FormData();
          formdata2.append("phoneNumber", "9644679096");
          formdata2.append("uri", result?.file_path);
          formdata2.append("title", "Here is Your Invoice");

          var requestOptions = {
            method: 'POST',
            body: formdata2,
            redirect: 'follow'
          };

            fetch("https://7530-150-107-98-252.ngrok-free.app/upload", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
                    // navigation.navigate("LetterHeadScreen", {url:result.file_path})
                    })
                    .catch(error => {console.log('error', error)
                    // setLoaderVisible(false)
        
        
        
        
        
        })
        .catch(error => console.log('error', error));
    }
    const pay = ()=>{



      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic cnpwX3Rlc3RfZmtYcmZrb3hoNzMyT1Q6TnVNMHZPRTdUNHN2WlhSTVlwVm83bmpj");

var raw = JSON.stringify({
  "amount": 15000,
  "currency": "INR",
  "receipt": "Receipt no. 1",
  "notes": {
    "notes_key_1": "Tea, Earl Grey, Hot",
    "notes_key_2": "Tea, Earl Grey… decaf."
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.razorpay.com/v1/orders", requestOptions)
  .then(response => response.json())
  .then(result =>{ console.log(result)


    var options = {
      description: 'Credits towards consultation',
      image: ImagesPath.home.logo_primary,
      currency: 'INR',
      key: 'rzp_test_fkXrfkoxh732OT',
      amount: '1',
      name: 'Mentor Match',
      order_id: result?.id,//Replace this with an order_id created using Orders API.
      prefill: {
        email: 'visheshgatha@gmail.com',
        contact: '9644679096',
        name: 'Vishesh Gatha'
      },
      theme: {color: '#374785'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id} {'\n} Your Appointment has been booked`);
      postdataa()
      navigation.navigate("ClientTabNavigator")
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  
  
  
  })
  .catch(error => console.log('error', error));


       
         
      }

      const[video,setvideo] = useState(false);

    const navigation = useNavigation()
  return (
    <SafeAreaView>
        <ScrollView >
          {
            video ? 
            <View>
             <VideoPlayer
            autoplay
            onEnd ={()=>{setvideo(false)}}
            video={{uri:"https://d-id-talks-prod.s3.us-west-2.amazonaws.com/google-oauth2%7C107965859787100884377/tlk_ig8owY9i9op_nDzcLvxwN/1705610482331.mp4?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1705696888&Signature=2tynO0h8d%2BuiUjXAiMd50q3bbX4%3D&X-Amzn-Trace-Id=Root%3D1-65a98cf8-46b8f6e346cfb9d03d15f632%3BParent%3D6818a5631234d055%3BSampled%3D1%3BLineage%3D6b931dd4%3A0"}}
          
            style={{width:Utils.ScreenWidth(100),resizeMode:"cover", height:Utils.ScreenHeight(30),borderBottomLeftRadius:20, borderBottomRightRadius:20}}

          />
        </View>
            
            :
            <View>
            <Image
            style={{width:Utils.ScreenWidth(100), height:Utils.ScreenHeight(30), resizeMode:"cover", borderBottomLeftRadius:20, borderBottomRightRadius:20}}
            source={{uri:"https://st2.depositphotos.com/1743476/11581/i/450/depositphotos_115812380-stock-photo-cool-african-man.jpg"}}
            
            />
        </View>

          }
           

            <View
            style={{marginTop:Utils.ScreenHeight(4), marginHorizontal:Utils.ScreenWidth(4), }}
            >
              <View style={{flexDirection:"row",  justifyContent:"space-between",alignItems:"center"}}>
                <Text style={{fontWeight:500, fontSize:23, color: colors.black}}>Ujjwal</Text>
                  <TouchableOpacity 
                  
                  onPress={()=>{setvideo(!video)}}
                  style={{height:Utils.ScreenHeight(4),justifyContent:"center",
                   marginRight:Utils.ScreenHeight(1.5),
                    borderRadius:8, width:Utils.ScreenWidth(25), backgroundColor:colors.primary}}>
                      <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row", }}>
                        <Image 
                        style={{height:Utils.ScreenHeight(2), width:Utils.ScreenWidth(4), resizeMode:"contain",tintColor:colors.white,}}
                        source={{uri:"https://cdn-icons-png.flaticon.com/512/254/254434.png"}}/>
                        {
                          video?
                          <Text style={{fontSize:12, color:colors.white, marginLeft:Utils.ScreenWidth(1)}}>Stop Video</Text>
                          :
                          <Text style={{fontSize:12, color:colors.white, marginLeft:Utils.ScreenWidth(1)}}>Portfolio</Text>
                        }
                      
                      </View>
                  </TouchableOpacity>
                </View>
                <Text style={{fontWeight:500, fontSize:18, marginTop:Utils.ScreenHeight(1), color: colors.black}}>Experience</Text>
                <Text style={{fontWeight:300, fontSize:15, marginTop:Utils.ScreenHeight(1), color:colors.grey}}>As an interior designer, I transformed spaces with a keen eye for aesthetics and functionality. Collaborating closely with clients, I curated personalized designs, blending style and comfort. Each project was a unique journey, turning visions into captivating, harmonious environments.</Text>
               
               
                <View
                style={{marginTop:Utils.ScreenHeight(3),
                    marginBottom:Utils.ScreenHeight(3),
                    flexDirection:"row", justifyContent:"space-evenly"}}
                >


                    <TouchableOpacity
                    onPress={()=>{
                      navigation.navigate("Reviews")
                    }}
                    >
                        <View style={{flexDirection:"row",  alignItems:"center",
                        paddingVertical:Utils.ScreenHeight(1),
                        paddingHorizontal:Utils.ScreenWidth(4),
                        borderRadius:12,
                        justifyContent:"center",
                        backgroundColor:colors.grey2}}>
                            <Image
                            source={ImagesPath.home.star}
                            style={{height:Utils.ScreenHeight(3),
                                
                                tintColor:colors.primary,width:Utils.ScreenHeight(3), resizeMode:"contain"}}
                            />
                            <Text style = {{color: colors.black}}> 4.8</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{flexDirection:"row", paddingVertical:Utils.ScreenHeight(1.5), alignItems:"center", paddingHorizontal:Utils.ScreenWidth(4),
                        justifyContent:"center",
                        borderRadius:12,
                        backgroundColor:colors.grey2}}>
                            <Image
                            source={{uri:"https://cdn-icons-png.flaticon.com/512/25/25473.png"}}
                            style={{height:Utils.ScreenHeight(2), width:Utils.ScreenHeight(3),
                                tintColor:colors.primary,
                                resizeMode:"contain"}}
                            />
                            <Text style = {{color: colors.black}}>1000/hr</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection:"row", paddingVertical:Utils.ScreenHeight(1.5), alignItems:"center", paddingHorizontal:Utils.ScreenWidth(4),
                        justifyContent:"center", borderRadius:12,
                        backgroundColor:colors.grey2}}>
                            <Image
                            source={{uri:"https://cdn-icons-png.flaticon.com/512/9583/9583761.png"}}
                            style={{height:Utils.ScreenHeight(2), width:Utils.ScreenHeight(3),
                                tintColor:colors.primary,
                                resizeMode:"contain"}}
                            />
                            <Text style = {{color: colors.black}}>Material</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:Utils.ScreenHeight(10)}}>
               
                </View>
            </View>
            </ScrollView>
            <View style={{position:"absolute", bottom:Utils.ScreenHeight(5), marginLeft:Utils.ScreenHeight(1),  backgroundColor:colors.white}}> 
            <AppButton
                    title={'Book Appointment'}
                    buttonWidth={Utils.ScreenWidth(90)}
                onPress={()=>{pay()}}
                   
                />
                </View>

            

    </SafeAreaView>
  )
}

export default MentorProfile