import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { Utils } from '../../contants'
import { useNavigation } from '@react-navigation/native'

const ForYou = () => {
  const navigation = useNavigation();
  const [searched, setSearched] = useState('');
  return (
    <SafeAreaView>
      <ScrollView style = {{backgroundColor: '#181818', height: '100%'}}>

      <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(3)}}>
        <View style = {{  borderColor: '#6C6C6C', backgroundColor: '#111111',  borderWidth: 1, borderRadius: 25, height: 45, width: '90%', flexDirection: 'row', alignItems: 'center', magrinTop: Utils.ScreenHeight(2) }}>
            <TextInput
            style = {{fontSize: 14, color: '#6C6C6C', marginHorizontal: 3, maxWidth: '80%',  marginLeft: Utils.ScreenWidth(8) }}
            placeholder = "Search posts, people, tags"
            placeholderTextColor="#6C6C6C"
            value = {searched}
            onChangeText= {setSearched}/>
            <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/751/751463.png' }}
            style={{ height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), tintColor: '#6C6C6C', marginLeft: Utils.ScreenWidth(18), }}
            />
        </View>
        </View> 

        <ScrollView horizontal = {true} style = {{backgrouncColor: '#00000069', marginTop: Utils.ScreenHeight(3), width: '100%'}}>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress = {() => navigation.navigate('Trending')}>
          <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Trending</Text>
          </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate('ForYou')}>
            <Text style = {{color: '#FFFFFF', marginLeft: Utils.ScreenWidth(6) }}>For You</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate('Accounts')}>
            <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Accounts</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate('Accounts')}>
            <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Reels</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate('Audio')}>
            <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Audio</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Tags</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>   

          <View>
            <View style = {{width: '100%', marginTop: Utils.ScreenHeight(2), flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/cfa5/5606/4480fe9a8885cc68f9122ac4022948cb?Expires=1698624000&Signature=I9ZqxKAVxkwXSGz0QbsNHEbnv2PlHtF0RBc7ZJho1QOWrcRT2weVEy9cwPYRYAcrx-OMkbOY7m1N4hg3395-3i4dactQSauxOx77GEZdtX-FdnNZ~WuC917ESdn-TKIueBa8najkoWStQ07Q84EADG7JLA6-wyAw8sjUgXZgiUy2MJpsdd6WBg1Q0AR59E5rHlfSOeq5raUz2yFYjr2alN~vZ-mBTyssonPj~~06mkQC6fk-V4EXsKaOcjKrkaUVA3jOUVuJvkapvxYGsA6F5bt7eXHKRDrH9gJ8HU~gHfPkulOOaxaNZLCfhmqIVfAzVvJ4XLlRAKa~Tu9Nx6ULLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(33)}}/>

              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/cfa5/5606/4480fe9a8885cc68f9122ac4022948cb?Expires=1698624000&Signature=I9ZqxKAVxkwXSGz0QbsNHEbnv2PlHtF0RBc7ZJho1QOWrcRT2weVEy9cwPYRYAcrx-OMkbOY7m1N4hg3395-3i4dactQSauxOx77GEZdtX-FdnNZ~WuC917ESdn-TKIueBa8najkoWStQ07Q84EADG7JLA6-wyAw8sjUgXZgiUy2MJpsdd6WBg1Q0AR59E5rHlfSOeq5raUz2yFYjr2alN~vZ-mBTyssonPj~~06mkQC6fk-V4EXsKaOcjKrkaUVA3jOUVuJvkapvxYGsA6F5bt7eXHKRDrH9gJ8HU~gHfPkulOOaxaNZLCfhmqIVfAzVvJ4XLlRAKa~Tu9Nx6ULLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(33)}}/>

              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/cfa5/5606/4480fe9a8885cc68f9122ac4022948cb?Expires=1698624000&Signature=I9ZqxKAVxkwXSGz0QbsNHEbnv2PlHtF0RBc7ZJho1QOWrcRT2weVEy9cwPYRYAcrx-OMkbOY7m1N4hg3395-3i4dactQSauxOx77GEZdtX-FdnNZ~WuC917ESdn-TKIueBa8najkoWStQ07Q84EADG7JLA6-wyAw8sjUgXZgiUy2MJpsdd6WBg1Q0AR59E5rHlfSOeq5raUz2yFYjr2alN~vZ-mBTyssonPj~~06mkQC6fk-V4EXsKaOcjKrkaUVA3jOUVuJvkapvxYGsA6F5bt7eXHKRDrH9gJ8HU~gHfPkulOOaxaNZLCfhmqIVfAzVvJ4XLlRAKa~Tu9Nx6ULLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(33)}}/>
            </View>

            <View style = {{width: '100%', marginTop: Utils.ScreenHeight(0.3), flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/cfa5/5606/4480fe9a8885cc68f9122ac4022948cb?Expires=1698624000&Signature=I9ZqxKAVxkwXSGz0QbsNHEbnv2PlHtF0RBc7ZJho1QOWrcRT2weVEy9cwPYRYAcrx-OMkbOY7m1N4hg3395-3i4dactQSauxOx77GEZdtX-FdnNZ~WuC917ESdn-TKIueBa8najkoWStQ07Q84EADG7JLA6-wyAw8sjUgXZgiUy2MJpsdd6WBg1Q0AR59E5rHlfSOeq5raUz2yFYjr2alN~vZ-mBTyssonPj~~06mkQC6fk-V4EXsKaOcjKrkaUVA3jOUVuJvkapvxYGsA6F5bt7eXHKRDrH9gJ8HU~gHfPkulOOaxaNZLCfhmqIVfAzVvJ4XLlRAKa~Tu9Nx6ULLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(33)}}/>

              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/cfa5/5606/4480fe9a8885cc68f9122ac4022948cb?Expires=1698624000&Signature=I9ZqxKAVxkwXSGz0QbsNHEbnv2PlHtF0RBc7ZJho1QOWrcRT2weVEy9cwPYRYAcrx-OMkbOY7m1N4hg3395-3i4dactQSauxOx77GEZdtX-FdnNZ~WuC917ESdn-TKIueBa8najkoWStQ07Q84EADG7JLA6-wyAw8sjUgXZgiUy2MJpsdd6WBg1Q0AR59E5rHlfSOeq5raUz2yFYjr2alN~vZ-mBTyssonPj~~06mkQC6fk-V4EXsKaOcjKrkaUVA3jOUVuJvkapvxYGsA6F5bt7eXHKRDrH9gJ8HU~gHfPkulOOaxaNZLCfhmqIVfAzVvJ4XLlRAKa~Tu9Nx6ULLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(33)}}/>

              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/cfa5/5606/4480fe9a8885cc68f9122ac4022948cb?Expires=1698624000&Signature=I9ZqxKAVxkwXSGz0QbsNHEbnv2PlHtF0RBc7ZJho1QOWrcRT2weVEy9cwPYRYAcrx-OMkbOY7m1N4hg3395-3i4dactQSauxOx77GEZdtX-FdnNZ~WuC917ESdn-TKIueBa8najkoWStQ07Q84EADG7JLA6-wyAw8sjUgXZgiUy2MJpsdd6WBg1Q0AR59E5rHlfSOeq5raUz2yFYjr2alN~vZ-mBTyssonPj~~06mkQC6fk-V4EXsKaOcjKrkaUVA3jOUVuJvkapvxYGsA6F5bt7eXHKRDrH9gJ8HU~gHfPkulOOaxaNZLCfhmqIVfAzVvJ4XLlRAKa~Tu9Nx6ULLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(33)}}/>
            </View>
          </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ForYou