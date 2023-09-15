import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const SubmitApplication = (props) => {
    const navigation = useNavigation();
    const{route} = props
    const data = route?.params?.data;
    const summary = route?.params?.summary;
    useEffect(() => {
     console.log("data",data)
     console.log("summary",summary)
    
      
    }, [])
    
  return (
    <View>
      <Text>SubmitApplication</Text>
    </View>
  )
}

export default SubmitApplication