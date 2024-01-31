import { View, Text, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Utils } from '../../contants'
import { useNavigation } from '@react-navigation/native';

const Accounts = () => {
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
            <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6) }}>For You</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate('Accounts')}>
            <Text style = {{color: '#FFFFFF', marginLeft: Utils.ScreenWidth(6)}}>Accounts</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> navigation.navigate('Reels')}>
            <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Reels</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> navigation.navigate('Audio')}>
            <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Audio</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate('')}>
            <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Tags</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>

    <ScrollView>
    <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/445e/d4c5/3f7d58f86dbb7b244f4e00b7cd7d3b23?Expires=1698624000&Signature=huesmq-BQ3w7PPHQXGbb44nXQHWFaU1NtMr~3xzTtfctDgT-xtg~fBFHXKtI2MgOnhE2B8DP7wWORch1fYlExVvfWDQ-1sTwBuv-yjqncPaO9SghF3k1QmeVUVQBnMyYb1XND2CWKpJeFfB-NhMDD13mCMwtUQW9su-LKNaoteBupSHBIkjfSaIxa-FQesJu7IXIvZTvTTKl6zKSOrX0wvf1iNAo-Y0f0GXViczgpQpPRvWDBxXVOwfgKrrExx1iD4N-qpwm4aF~DclEUR8uWorAQor75P5mUJXeTqq8ZYlGRnsitI77G7BHayBGFnJAAGpUiPrmZL-HNo-L9kJnKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10) }}/>
        <View style = {{width: '60%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(4), fontSize: 16, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Jennifer Lopez</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(4)}}>
          Jennifer
        </Text>
        </View> 
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(1), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/5f4c/2c9e/0a80d44ac77fbcec00e9cad0a70bd609?Expires=1698624000&Signature=cGIl3UEtTrfG5ICagCbcKvRzm1V7B~9MEijkarJ6jKNCi7z~CRZUPExNCIFVFWhM0Nx99IIOZZQL~vLCsLEMGd-jvrmfJ9sdMYLs3yy1cBlgMaS~U2YoVy2q0FMjHmjjhAps-rB4pQ75PXYGlfLQXMfpC0aPeo9b~p4N8s6Ywhb-GprRL9diz6wfTzHqUg7OBg3PcvdoGywR33JsE95BnNlXzRprlQmPlJNtB8LkkMZjLTneUx3c0-vihFJqo4fzI5Uu6dXvLOGDmzAWEj3EazYcsEqeXLPPotG3Jn45ee0REBto3rubhrNWvXTxx3ao~-dVXFSmKptL2tHJNsU-iA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10) }}/>
        <View style = {{width: '60%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(4), fontSize: 16, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Jennifer.lyeuw</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(4)}}>
          Jennifer
        </Text>
        </View> 
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(1), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/5f4c/2c9e/0a80d44ac77fbcec00e9cad0a70bd609?Expires=1698624000&Signature=cGIl3UEtTrfG5ICagCbcKvRzm1V7B~9MEijkarJ6jKNCi7z~CRZUPExNCIFVFWhM0Nx99IIOZZQL~vLCsLEMGd-jvrmfJ9sdMYLs3yy1cBlgMaS~U2YoVy2q0FMjHmjjhAps-rB4pQ75PXYGlfLQXMfpC0aPeo9b~p4N8s6Ywhb-GprRL9diz6wfTzHqUg7OBg3PcvdoGywR33JsE95BnNlXzRprlQmPlJNtB8LkkMZjLTneUx3c0-vihFJqo4fzI5Uu6dXvLOGDmzAWEj3EazYcsEqeXLPPotG3Jn45ee0REBto3rubhrNWvXTxx3ao~-dVXFSmKptL2tHJNsU-iA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10) }}/>
        <View style = {{width: '60%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(4), fontSize: 16, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>jilo</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(4)}}>
          jennifer estevers
        </Text>
        </View> 
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(1), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/4739/9029/eb99a0d6b84f05895aa92b20206a8927?Expires=1698624000&Signature=qpyvGrzMyjEQbjvTs6U4C9YwZrdImW6R6s-ysZnhx6URpkJCLRECazyUZekgNExtgPyrWgRKcPdiYpPoYMZtxcu4aCQ1VLtPhDcrs1PK1KJGANev41PRCfotsokPz6FU0BaHm1hCI9sQgnVExFL95PhImXzFeib-0haaG~DQH7Grcnvt-bx-uS2xwOEN2qcyVars~DC4REsQ1XE3q7qD9pq1hi0-jMwCg0gqJ61CZMYzb6-MbRh-sbK9OLcIQeABwfOAu94eW6xBHuCsoVYaueA3S8~M0s509MJ7sM1uawo8KtTOHgTKOEUOb65DVwqwQ8F~njGScg9Sc6FVHgz9AQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10) }}/>
        <View style = {{width: '60%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(4), fontSize: 16, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Jennifer Lopez</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(4)}}>
          Jennifer
        </Text>
        </View> 
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(1), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/4739/9029/eb99a0d6b84f05895aa92b20206a8927?Expires=1698624000&Signature=qpyvGrzMyjEQbjvTs6U4C9YwZrdImW6R6s-ysZnhx6URpkJCLRECazyUZekgNExtgPyrWgRKcPdiYpPoYMZtxcu4aCQ1VLtPhDcrs1PK1KJGANev41PRCfotsokPz6FU0BaHm1hCI9sQgnVExFL95PhImXzFeib-0haaG~DQH7Grcnvt-bx-uS2xwOEN2qcyVars~DC4REsQ1XE3q7qD9pq1hi0-jMwCg0gqJ61CZMYzb6-MbRh-sbK9OLcIQeABwfOAu94eW6xBHuCsoVYaueA3S8~M0s509MJ7sM1uawo8KtTOHgTKOEUOb65DVwqwQ8F~njGScg9Sc6FVHgz9AQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10) }}/>
        <View style = {{width: '60%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(4), fontSize: 16, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Jennifer Lopez</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(4)}}>
          Jennifer
        </Text>
        </View> 
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(1), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/4739/9029/eb99a0d6b84f05895aa92b20206a8927?Expires=1698624000&Signature=qpyvGrzMyjEQbjvTs6U4C9YwZrdImW6R6s-ysZnhx6URpkJCLRECazyUZekgNExtgPyrWgRKcPdiYpPoYMZtxcu4aCQ1VLtPhDcrs1PK1KJGANev41PRCfotsokPz6FU0BaHm1hCI9sQgnVExFL95PhImXzFeib-0haaG~DQH7Grcnvt-bx-uS2xwOEN2qcyVars~DC4REsQ1XE3q7qD9pq1hi0-jMwCg0gqJ61CZMYzb6-MbRh-sbK9OLcIQeABwfOAu94eW6xBHuCsoVYaueA3S8~M0s509MJ7sM1uawo8KtTOHgTKOEUOb65DVwqwQ8F~njGScg9Sc6FVHgz9AQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10) }}/>
        <View style = {{width: '60%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(4), fontSize: 16, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Jennifer Lopez</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(4)}}>
          Jennifer
        </Text>
        </View> 
    </View>
  </View>
    </ScrollView>


      </ScrollView>
    </SafeAreaView>
  )
}

export default Accounts