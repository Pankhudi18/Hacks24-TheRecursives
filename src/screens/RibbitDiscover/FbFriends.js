import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const FbFriends = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style = {{backgroundColor: '#181818', height: '100%'}}>
      <View style = {{alignItems: 'center', marginTop: 60,}}>
            <Text style = {{ fontSize: 50, fontWeight: '900', color: '#fbe34d'}}>Ribbit</Text>
        </View>

    <View style = {{alignItems: 'center', marginTop: 45,}}>
      <Text style = {{ fontSize: 20, fontWeight: '400', color: '#f6f6f6'}}>Find Facebook Friends as follow</Text>
    </View>
       
    <TouchableOpacity style = {{alignItems: 'center', marginTop: 30}}
    onPress = {() => navigation.navigate('DiscoverPeople')}>
    <View style = {{ backgroundColor: '#fbe34d' , borderRadius: 25, height: 45, width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', magrinTop: 30 }}>
      <Text style = {{color: '#181818'}}>FIND FACEBOOK FRIENDS</Text>
    </View>
  </TouchableOpacity>

  <View style = {{marginTop: 40, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
    <TouchableOpacity onPress = {() => navigation.navigate('')}>
    <Text style={{ fontSize: 14, color: '#747474', marginTop: 5, color: '#fbe34d' }}>
    SKIP
  </Text>
  </TouchableOpacity>
    </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default FbFriends