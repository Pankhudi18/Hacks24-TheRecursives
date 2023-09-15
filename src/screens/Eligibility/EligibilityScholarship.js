import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImagesPath from '../../assests/ImagesPath';
import { Utils, colors } from '../../contants';
import { FlatList } from 'react-native-gesture-handler';

const EligibilityScholarship = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )

    const bulletPoints = [
        "Belong to the minority community (Muslims, Sikhs, Christians, Buddhists, Jains, and Zoroastrians/Parsis)",
        "Be studying in Class 1 to 10 in India in a government or private school including residential Government institutes.",
        "Have secured at least 50% marks in the previous final examination",
        "Have a family income of not more than INR 1 lakh per annum from all sources",
      ];

      const requiredDocuments = [
       "Essay for admission",
       "Income certificate issued by the competent authority in the State/UT Government",
       "Verification Form to be provided by the institution",
       "Income certificate issued by the competent authority in the State/UT Government",
      ];

      const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', backgroundColor: colors.secondary, marginHorizontal: Utils.ScreenWidth(2), marginBottom: Utils.ScreenHeight(1), marginTop: Utils.ScreenHeight(1), borderRadius: 8,}}>
          <Text style={{ fontSize: 13, fontWeight: '400', color: colors.grey, marginHorizontal: Utils.ScreenWidth(1.5), marginTop: Utils.ScreenHeight(1.5) }}>{'\u2022'}</Text>
          <View style ={{marginRight: Utils.ScreenWidth(2)}}>
          <Text style={{ fontSize: 13, fontWeight: '400', color: colors.grey, marginHorizontal: Utils.ScreenWidth(1), maxWidth: '96%', marginTop: Utils.ScreenHeight(1.5),marginBottom: Utils.ScreenHeight(1.5) }}>{item}</Text>
          </View>
        </View>
      );

      const renderItemm = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', backgroundColor: colors.secondary, marginHorizontal: Utils.ScreenWidth(2), marginBottom: Utils.ScreenHeight(1), marginTop: Utils.ScreenHeight(1), borderRadius: 8,}}>
          <Text style={{ fontSize: 13, fontWeight: '400', color: colors.grey, marginHorizontal: Utils.ScreenWidth(1.5), marginTop: Utils.ScreenHeight(1.5) }}>{'\u2022'}</Text>
          <Text style={{ fontSize: 13, fontWeight: '400', color: colors.grey, marginHorizontal: Utils.ScreenWidth(1), maxWidth: '94%', marginTop: Utils.ScreenHeight(1.5),marginBottom: Utils.ScreenHeight(1.5) }}>{item}</Text>
        </View>
      );
      

  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: colors.white}}>
         <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />
        
        <TouchableOpacity activeOpacity={0.3}
                          style={{
                              marginLeft: Utils.ScreenWidth(3),
                              marginTop: Utils.ScreenHeight(3),
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

        <View style = {{justifyContent: 'center', alignItems: 'center', height: Utils.ScreenHeight(6), flexDirection: 'row', marginBottom: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(-2) }}>
         <Image source={ImagesPath.home.scholarship} 
                          style={{
                          resizeMode: 'contain',
                          height: Utils.ScreenWidth(30),
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
                        <Text style={{fontSize:20, fontWeight:"500", color: colors.black}}>Eligibility</Text>
                    </View>

         <View style = {{marginBottom: Utils.ScreenHeight(2), marginTop: Utils.ScreenHeight(1)}}>
            <FlatList
                data={bulletPoints}
                renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            />
        </View>

        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style = {{ backgroundColor: colors.primary, width: '90%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(2) }} />
        </View>

        
        <View style={{marginTop:Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(2), marginBottom:Utils.ScreenWidth(4), maxWidth: '100%'}}>
                        <Text style={{fontSize:20, fontWeight:"500", color: colors.black}}>Documents Required</Text>
                    </View>
         <View>
         <FlatList
        data={requiredDocuments}
        renderItem={renderItemm}
        keyExtractor={(item, index) => index.toString()}
      />
        </View>

        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style = {{ backgroundColor: colors.primary, width: '90%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(2) }} />
        </View>

        <View style={{marginTop:Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(2), marginBottom:Utils.ScreenWidth(4), maxWidth: '100%'}}>
                        <Text style={{fontSize:20, fontWeight:"500", color: colors.black}}>Deadline</Text>
                        <Text style={{fontSize:16, fontWeight:"400", color: colors.grey, marginTop: Utils.ScreenHeight(2)}}>Last date to register: 23rd October 2023</Text>
        </View>
        
        <View style = {{ alignItems: 'center', marginTop: Utils.ScreenHeight(3), marginBottom: Utils.ScreenHeight(2)}}>
            <TouchableOpacity style = {{ backgroundColor: colors.primary,  
                                         borderRadius: 30,
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         height: Utils.ScreenHeight(7), 
                                         width: '92%'}} onPress = {() => {navigation.navigate('')}}>
               <Text style = {{ color: colors.white, fontWeight: 500, fontSize: 16}}>
                Apply Now
               </Text>
            </TouchableOpacity>
          </View>
            
    </ScrollView>
        
    </SafeAreaView>
  )
}

export default EligibilityScholarship