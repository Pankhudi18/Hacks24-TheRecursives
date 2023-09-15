import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagesPath from '../../assests/ImagesPath'
import { Utils, colors } from '../../contants'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import styles from '../Splash/styles'
import ApiUrl from '../../Lib/ApiUrl'
import Helper from '../../Lib/Helper'

const Register = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDOB] = useState(null);
  const [mobNo, setMobNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [about, setAbout] = useState('');
  const [caseDetails, setCaseDetails] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [age, setAge] = useState('');
  const [courseEnrolled, setCourseEnrolled] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [avgGPA, setAvgGPA] = useState('');
  const [interested, setInterested] = useState('')
  const [interests, setInterests] = useState()
  const [location, setlocation] = useState("")


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // const data = {
  //   "mobile_no": mobNo,
  //   "user_type": "advocate",
  //   "first_name": fullName,
  //   "last_name": fullName,
  //   "email": email,
  // }

  // const registerUser = async () => {
  //   try {
  //     const jsonData = JSON.stringify(data);
  //     await Helper.makerequest({ url: ApiUrl.registerLawyer, data: jsonData, method: 'POST' }).then((data) => {
  //       console.log("This is my data", data);
  //     });

  //     console.log('API Response:', response.data);

  //   } catch (error) {

  //     console.error('API Error:', error);
  //   }
  // };
  // const addInterest = async() => {
  //     setInterests([...interests, interested]);
  //     await handlePress()
  //   }

  const handlePress = async () => {
    const body = 
      {
        fname: "Vishesh",
        lname: "Gatha",
        email: "vishesh@gg.cc",
        password:"11111111",
        age:20,
        degree: "bachelors",
        location:"india",
        gpa:9 ,
        financial_status: 600000,
        interests: [
          "Social work",
          "tech"

        ]
      }
      Helper.setData("userdata", body)
    
    console.log("idar hai bodu",body)
   
await fetch('https://nfc-backend-nyjt.onrender.com/api/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Set the content type to JSON
  },
  body: JSON.stringify(body), // Convert the body object to JSON string
    }).then((res) => res.text()).then((data) => {console.log("DATA>>>>>",data)
  navigation.navigate("Uploadfiles")
  })
  }

  console.log('INTEREST>>>',interested);


  return (
    <SafeAreaView>
      <StatusBar animatedanimated={true} backgroundColor={colors.white} barStyle="dark-content" />
      <ScrollView
        backgroundColor={colors.white}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: Utils.ScreenHeight(8) }}>
          <Image source={ImagesPath.home.logo_primary}
            style={{ width: Utils.ScreenWidth(24), height: Utils.ScreenHeight(10), resizeMode: "contain" }} />
        </View>
        <TouchableOpacity activeOpacity={0.3}
          style={{
            marginLeft: Utils.ScreenWidth(3),
            alignItems: 'center',
            elevation: 7,
            backgroundColor: '#fff',
            borderRadius: 8,
            justifyContent: 'center', bottom: 50,
            width: Utils.ScreenWidth(12)
          }}
          onPress={() => {
            navigation.goBack()
          }}>
          <Image source={ImagesPath.signUp.backIcon}
            style={{
              resizeMode: 'contain',
              height: Utils.ScreenWidth(4.8),
              width: Utils.ScreenWidth(5.8),
            }} />
        </TouchableOpacity>

        {/* <View style = {{ top: Utils.ScreenHeight(-1), marginLeft: Utils.ScreenWidth(3)}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 18 }}>Personal Details</Text>
            </View>

              <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', top: Utils.ScreenHeight(-2)}}>
              <View style = {{ backgroundColor: colors.grey, width: '92%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(1) }} />
              </View> */}

        {/* <View style = {{ justifyContent: 'center',
                             alignItems: 'center',
                             height: Utils.ScreenHeight(20),
                             }}>
              <Image source = { ImagesPath.onafterprint.camera_icon} style = {{ width: Utils.ScreenWidth(16), 
                height: Utils.ScreenHeight(8), borderRadius: Utils.ScreenHeight(20)}}/>
              <Text style = {{ color: colors.grey, marginTop: Utils.ScreenHeight(1), fontSize: 14}}>Upload Profile Photo</Text>
            </View> */}

        {/* <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ backgroundColor: colors.grey, width: '92%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(1) }} />
            </View> */}

        <View style={{ marginLeft: Utils.ScreenWidth(3), flexDirection: 'row' }}>
          <Text style={{ color: colors.black, fontWeight: 600, fontSize: 16 }}>Add Personal Details</Text>
          <Text style={{ color: colors.red, }}> * </Text>
        </View>

        <View style={{
          marginTop: Utils.ScreenHeight(2),
          borderRadius: 8,
          alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
        }}>
          <TextInput
            value={firstName}
            onChange={(text) => setFirstName(text)}
            style={{
              height: Utils.ScreenHeight(5), borderColor: colors.grey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%',
              borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)
            }}
            placeholderTextColor={colors.grey} placeholder="Enter your first name" />
        </View>

        <View style={{
          marginTop: Utils.ScreenHeight(2),
          borderRadius: 8,
          alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
        }}>
          <TextInput
            value={lastName}
            onChange={(text) => setLastName(text)}
            style={{
              height: Utils.ScreenHeight(5), borderColor: colors.grey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%',
              borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)
            }}
            placeholderTextColor={colors.grey} placeholder="Enter your last name" />
        </View>

       

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: Utils.ScreenHeight(2) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: colors.grey,
                backgroundColor: selectedOption === 'Male' ? colors.selectedOption : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
              }}
              onPress={() => handleOptionSelect('Male')}
            >
              {selectedOption === 'Male' && (
                <Text style={{ color: colors.grey }}>✓</Text>
              )}
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: colors.grey }}>Male</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: colors.grey,
                backgroundColor: selectedOption === 'Female' ? colors.selectedOption : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
              }}
              onPress={() => handleOptionSelect('Female')}
            >
              {selectedOption === 'Female' && (
                <Text style={{ color: colors.grey }}>✓</Text>
              )}
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: colors.grey }}>Female</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: colors.grey,
                backgroundColor: selectedOption === 'Other' ? colors.selectedOption : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
              }}
              onPress={() => handleOptionSelect('Other')}
            >
              {selectedOption === 'Other' && (
                <Text style={{ color: colors.grey }}>✓</Text>
              )}
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: colors.grey }}>Other</Text>
          </View>
        </View>
        <View style={{
          marginTop: Utils.ScreenHeight(2),
          borderRadius: 8,
          alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
        }}>
          <TextInput
            value={email}
            onChange={(text) => setEmail(text)}
            style={{
              height: Utils.ScreenHeight(5), borderColor: colors.grey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%',
              borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)
            }}
            placeholderTextColor={colors.grey} placeholder="Enter Email" />
        </View>
        <View style={{
          marginTop: Utils.ScreenHeight(2),
          borderRadius: 8,
          alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
        }}>
          <TextInput
            value={age}
            onChange={(text) => setAge(text)}
            style={{
              height: Utils.ScreenHeight(5), borderColor: colors.grey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%',
              borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)
            }}
            placeholderTextColor={colors.grey} placeholder="Enter Your Age" />
        </View>
        <View style={{
          marginTop: Utils.ScreenHeight(2),
          borderRadius: 8,
          alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
        }}>
          <TextInput
            value={courseEnrolled}
            onChange={(text) => setCourseEnrolled(text)}
            style={{
              height: Utils.ScreenHeight(5), borderColor: colors.grey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%',
              borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)
            }}
            placeholderTextColor={colors.grey} placeholder="Enter course you are enrolled in" />
        </View>
        <View style={{
          marginTop: Utils.ScreenHeight(2),
          borderRadius: 8,
          alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
        }}>
          <TextInput
            value={annualIncome}
            onChange={(text) => setAnnualIncome(text)}
            style={{
              height: Utils.ScreenHeight(5), borderColor: colors.grey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%',
              borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)
            }}
            placeholderTextColor={colors.grey} placeholder="Enter annual income" />
        </View>
        <View style={{
          marginTop: Utils.ScreenHeight(2),
          borderRadius: 8,
          alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
        }}>
          <TextInput
            value={avgGPA}
            onChange={(text) => setAvgGPA(text)}
            style={{
              height: Utils.ScreenHeight(5), borderColor: colors.grey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%',
              borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)
            }}
            placeholderTextColor={colors.grey} placeholder="Enter average GPA out of 10" />
        </View>
        <View style={{
          marginTop: Utils.ScreenHeight(2),
          borderRadius: 8,
          alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
        }}>
          <TextInput
            value={interested}
            onChangeText={(text) => setInterested(text)}
            style={{
              height: Utils.ScreenHeight(5), borderColor: colors.grey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%',
              borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)
            }}
            placeholderTextColor={colors.grey} placeholder="Add your interests/skills" />
        </View>
        {/* <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: Utils.ScreenHeight(1)}}>
              <View style = {{ backgroundColor: colors.grey, width: '92%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(1) }} />
              </View> */}

        {/* <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(2), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 14}}>About me</Text>
              <Text style = {{color: colors.grey, }}> (optional) </Text>
            </View> */}
        {/* <TextInput
                        value={about}
                        onChange={(text) => setAbout(text)}
                        style={{ height: Utils.ScreenHeight(12), borderColor: colors.grey, paddingHorizontal: Utils.ScreenWidth(3),
                                 width: '93%', marginTop: Utils.ScreenHeight(1.5),
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2), marginLeft: Utils.ScreenWidth(3)}}
                        placeholderTextColor={colors.grey} placeholder="About me" /> */}

        {/* <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={caseDetails}
                        onChange={(text) => setCaseDetails(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.grey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.grey} placeholder="Add case details" />
            </View> */}
        <TouchableOpacity style={{
          backgroundColor: colors.primary,
          borderRadius: 8,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          height: Utils.ScreenHeight(6),
          marginTop: Utils.ScreenHeight(2),
          width: '92%',
        }} onPress={() => handlePress()}>
          <Text style={{ color: colors.white, fontWeight: 400, fontSize: 16 }}>
            Continue
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {/* <View style = {{ alignItems: 'center', marginTop: Utils.ScreenHeight(3), marginBottom: Utils.ScreenHeight(2)}}>
            <TouchableOpacity style = {{ backgroundColor: colors.primary,  
                                         borderRadius: 8,
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         height: Utils.ScreenHeight(7), 
                                         width: '92%'}} onPress = {() => {navigation.navigate('Verifyotp')}}>
               <Text style = {{ color: colors.white, fontWeight: 400, fontSize: 16}}>
                Continue
               </Text>
            </TouchableOpacity>
          </View> */}
    </SafeAreaView>
  )
}

export default Register