import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Utils } from '../../contants';
import { Image } from 'react-native';

const Notification = () => {
    const navigation = useNavigation();
    const [searched, setSearched] = useState('');
  return (
    <SafeAreaView>
    <ScrollView style = {{backgroundColor: '#181818', height: '100%'}}>

<View style = {{flexDirection: 'row'}}>
    <View style = {{backgroundColor: '#00000047', height: Utils.ScreenHeight(6), width: Utils.ScreenHeight(6), borderRadius: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(2), marginHorizontal: Utils.ScreenWidth(4), alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/9678/9678560.png'}}
        style = {{tintColor: '#FFFFFF', height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(4)}}/>
    </View>
    <View style = {{marginTop: Utils.ScreenHeight(2), justifyContent: 'center', marginHorizontal: Utils.ScreenWidth(14)}}>
        <Text style = {{color: '#FFFFFF', fontSize: 24, fontWeight: 800,}}>Notifications</Text>
    </View>
</View>

<View style = {{marginHorizontal: Utils.ScreenWidth(6), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(3), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/445e/d4c5/3f7d58f86dbb7b244f4e00b7cd7d3b23?Expires=1699228800&Signature=pC9prnI7Xh5Lm~zZi4cHz1n9eNwi9NJfB3uE-2pIThKlbGX-M~jriESAIGrMRF4NGm8Hdhy8-KYZjfuxzIT226BvXZoM2Su6b1tFpTR4wUuBENXx49Y0eH8gP~7ESvN8QjNE54byqRQPPiAamU2H21JaCG1IZVcpxxpMR~gYuDZDeNQN1SRvBpo8x8HQzUhyNrGLAE9FrHxrBEj~It7tMYZxTHWtZgUP40wrxO46i46RydRcofMVXKD3gNb2f5g6nUEXQIaNpkNsjMPeLM6Wc-iJSHdDI-R1fV~K8U9oiLkylH2cS0xvyRLNNlfKE648aKQEB6JAjoMJD0RFEOzo2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10), borderWidth: 1, borderColor: '#cdb12b' }}/>
        <View style = {{width: '90%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(5), fontSize: 16, fontWeight: '400', color: '#f6f6f6', maxWidth: '80%'}}>100+ follow requests</Text>
        </View> 
    </View>
  </View>

  <View style={{height: 0.5, backgroundColor: 'gray'}} />

<View style = {{flexDirection: 'row', marginTop: Utils.ScreenHeight(2), marginHorizontal: Utils.ScreenWidth(6)}}>
  <Text style = {{color: 'white', fontSize: 15}}>New</Text>
  <Text style = {{color: '#868686', marginHorizontal: Utils.ScreenWidth(2), fontSize: 15}}>(2)</Text>
  </View>
  
  <View style = {{marginHorizontal: Utils.ScreenWidth(4), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1699228800&Signature=DLzzimD6OZbLYbx8JYsTp3kinafFNbFV3hibCRFABsPRqCH4EdwcP00CWtwXAs8dvdzjbuTeEBVWElrXDKFWPj1TMB3wMfG-Ytrj3jDMotdFaDsBDVV1BLY8g7bU4xFrB4tABRomnSEr7AjEaexspdXGMVBUjf4hPISazR4Q0jNbntAr5TqtwZoi80zWq5TD6Sfd2n-uofZtSk7ajS11mndH9qyGwk~1RHmUSgnG8D3SYSjz~GnhlAmrvHyM7V1uubVpBOH1r1d1LBGZqj9GvL~ge-0DvXdmJY57j4ZO6jMcIy4OLsLqU~OFzoZcJsM9KAfjoxlrflAghu-hKXHRqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10) }}/>
        <View style = {{width: '70%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(6), fontSize: 16, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Jennifer Lopez</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(6), fontSize: 13}}>
          Liked your post   3m ago
        </Text>
        </View> 
        <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/e9cf/3e92/0c2242cf4d44e4a3c9689d864d11bc81?Expires=1699228800&Signature=YOkwduBeRDYgHeJhWCcHjf2q-0J74qyxZUVoIAeciHTgp6GxjuvQ1Bc2aov2-55K2FzRHL9LZIHFhqnYCdYjZ6McNPG~ZnE~gKB9SS21d0P~VQMG5CQ2NW6q3UQ-~SaT1WIxu0PGT9lqMC7nnhWezCCFG2S~qyFaoJpctspdI666WC1hj7EfRcuOgejanSR0YdtUGXKfAzgzM31m-tfe1jv2hIJoJr~JA1AE8c0oZEIMGbxGWmANyh0H54uai46k89TAgbchrskppG71-mbHKBzptvAMN9QKfu3dVCi5sEnLG01QvTTbKdgIVPC4DFC9RckZqvJld58Nx6UAwyg4-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
          style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(2) }}/>
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(4), justifyContent: 'center'}}>
    <View style = {{ flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/4adb/ab01/17080b30102ee2a681ae1a05a7b4e18f?Expires=1699228800&Signature=qMfvJ9kRx3TsrXegahijv1O~pOwi51gT3mLFiLMrkFpEC1oXez1Qc9mGlOl3IqbCeeCJaDYT1tqYhb6VWZAz-TChrDaDWDtIcntp45Bzz9IFcDE9gRvKcbmx0VSi7R1zNpQmGPYm23qNCgMlD15A1rVZKjXifauk8Ta2S0DxUTuw-5hL~WFtlI3J3hI-AeOgw08E14VZenqd7ZTfcatba9a6dsIXQSKX0~b89ezrne0O8BL6qqElF0eW0j-bxf-I1PWFS7v5kKjVeH5YDiB6KtvOGNtFFRfjGdaoNfGSn0eW-In5IIhPYbVe6eun21aPAkbQ3Qpjv7en6R-EGUblCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10) }}/>
        <View style = {{width: '70%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(6), fontSize: 16, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Genelia Dcruz</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(6), fontSize: 13}}>
          Commented: Great job on your work!   3m ago
        </Text>
        </View> 
        <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/baa0/fd7a/60d982412a690cbb762000deabac76a0?Expires=1699228800&Signature=Wh6cS3-ym8A~d9Wfx5XpWXbK2oiq2kz9-PbJ6k05DnefoQSuVzYiAIhlCYV05-0iYg9JNr~OLqtzAIg2Qm~f829h1Pcg1cFw2UkyNuwxvFepyuUwfMadA-hg9iPasAWgl48YoT3Q1RjKJnmqPY34mFGhyBmujTUzYmPvH9gJ0kByktkZZh0EHR05l4785VJ7y6tr-2~17bpyJy6spHs7Hf3Hw58xj4rz68uZMTIPXuFRoJOMiUUZwMmu8EY89b8wOmRNM65RXQnF0Tuax23U5uvLXt94i0~bD4QuM3hapn73yQmt4UV9sO5aeKwnBbwsOJMndthC~pjIicuSAwqjfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
          style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(2) }}/>
    </View>
  </View>

  <View style = {{flexDirection: 'row', marginTop: Utils.ScreenHeight(2), marginHorizontal: Utils.ScreenWidth(6)}}>
  <Text style = {{color: 'white', fontSize: 15}}>Today</Text>
  <Text style = {{color: '#868686', marginHorizontal: Utils.ScreenWidth(2), fontSize: 15}}>(23)</Text>
  </View>
     
  <View style = {{marginHorizontal: Utils.ScreenWidth(4), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/7fb0/ce3a/e567c15b620ad1a71bf891bfafa316b8?Expires=1699228800&Signature=GtUWeocqYUB4I9hQjc0-nf32e9jsTZsQ8m-XJLrClwu9nDZTJDvZ0rgsUIjJtd~6jbcT0VLVgYbPN9xu-eWVbRIEU20p2M6dDKWe-aEctjylwTe4CO1SX9JJqC05Qo76OxEllazk2vGCNy4JSg4AQnUEnWFBpeZnhXOC0qsyTW6tIOFhUAeX5dt3jSgpoccH9~v9-EBIzvKpkOLSnqiT4Iu54iVzVShJsDs0SccchVJYxr3GJEUBpO-lrEkgz0KmgxyjrlbWt~fMdDPy83xhFx9IlYZVFbOc~T9EW~YDJVKC2HUz9mbcTuPkIzKOGA1KlZ7An55RHc1ZLwYfSuWOxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10) }}/>
        <View style = {{width: '66%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(6), fontSize: 16, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Jennifer Lopez</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(6), fontSize: 13}}>
          Started following you  3m ago
        </Text>
        </View> 
        <TouchableOpacity onPress = {() => navigation.navigate('Challenges')}
        style  = {{borderColor: '#fbe34d', borderWidth: 1, height: Utils.ScreenHeight(5), width: Utils.ScreenWidth(20), borderRadius: Utils.ScreenWidth(10), alignItems: 'center', justifyContent: 'center', marginTop: Utils.ScreenHeight(2)}}>
            <Text style = {{fontSize: 14, fontWeight: 400, color: '#f6f6f6',}}> Follow</Text>
        </TouchableOpacity>
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(4), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(1), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1699228800&Signature=DLzzimD6OZbLYbx8JYsTp3kinafFNbFV3hibCRFABsPRqCH4EdwcP00CWtwXAs8dvdzjbuTeEBVWElrXDKFWPj1TMB3wMfG-Ytrj3jDMotdFaDsBDVV1BLY8g7bU4xFrB4tABRomnSEr7AjEaexspdXGMVBUjf4hPISazR4Q0jNbntAr5TqtwZoi80zWq5TD6Sfd2n-uofZtSk7ajS11mndH9qyGwk~1RHmUSgnG8D3SYSjz~GnhlAmrvHyM7V1uubVpBOH1r1d1LBGZqj9GvL~ge-0DvXdmJY57j4ZO6jMcIy4OLsLqU~OFzoZcJsM9KAfjoxlrflAghu-hKXHRqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10) }}/>
        <View style = {{width: '66%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(0), marginLeft: Utils.ScreenWidth(6), fontSize: 16, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Jennifer Lopez</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(6), fontSize: 13}}>
          Started following you  3m ago
        </Text>
        </View> 
        <TouchableOpacity style  = {{borderColor: '#fbe34d', borderWidth: 1, height: Utils.ScreenHeight(5), width: Utils.ScreenWidth(20), borderRadius: Utils.ScreenWidth(10), alignItems: 'center', justifyContent: 'center', marginTop: Utils.ScreenHeight(2)}}>
            <Text style = {{fontSize: 14, fontWeight: 400, color: '#f6f6f6',}}> Follow</Text>
        </TouchableOpacity>
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(4), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(1), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/4adb/ab01/17080b30102ee2a681ae1a05a7b4e18f?Expires=1699228800&Signature=qMfvJ9kRx3TsrXegahijv1O~pOwi51gT3mLFiLMrkFpEC1oXez1Qc9mGlOl3IqbCeeCJaDYT1tqYhb6VWZAz-TChrDaDWDtIcntp45Bzz9IFcDE9gRvKcbmx0VSi7R1zNpQmGPYm23qNCgMlD15A1rVZKjXifauk8Ta2S0DxUTuw-5hL~WFtlI3J3hI-AeOgw08E14VZenqd7ZTfcatba9a6dsIXQSKX0~b89ezrne0O8BL6qqElF0eW0j-bxf-I1PWFS7v5kKjVeH5YDiB6KtvOGNtFFRfjGdaoNfGSn0eW-In5IIhPYbVe6eun21aPAkbQ3Qpjv7en6R-EGUblCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10) }}/>
        <View style = {{width: '70%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(6), fontSize: 16, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Jennifer Lopez</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(6), fontSize: 13}}>
          Liked your post   3m ago
        </Text>
        </View> 
        <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/e9cf/3e92/0c2242cf4d44e4a3c9689d864d11bc81?Expires=1699228800&Signature=YOkwduBeRDYgHeJhWCcHjf2q-0J74qyxZUVoIAeciHTgp6GxjuvQ1Bc2aov2-55K2FzRHL9LZIHFhqnYCdYjZ6McNPG~ZnE~gKB9SS21d0P~VQMG5CQ2NW6q3UQ-~SaT1WIxu0PGT9lqMC7nnhWezCCFG2S~qyFaoJpctspdI666WC1hj7EfRcuOgejanSR0YdtUGXKfAzgzM31m-tfe1jv2hIJoJr~JA1AE8c0oZEIMGbxGWmANyh0H54uai46k89TAgbchrskppG71-mbHKBzptvAMN9QKfu3dVCi5sEnLG01QvTTbKdgIVPC4DFC9RckZqvJld58Nx6UAwyg4-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
          style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(2) }}/>
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(4), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(1), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/7fb0/cfc1/0e87bd1e664d7d447307e274003434cd?Expires=1699228800&Signature=DLzzimD6OZbLYbx8JYsTp3kinafFNbFV3hibCRFABsPRqCH4EdwcP00CWtwXAs8dvdzjbuTeEBVWElrXDKFWPj1TMB3wMfG-Ytrj3jDMotdFaDsBDVV1BLY8g7bU4xFrB4tABRomnSEr7AjEaexspdXGMVBUjf4hPISazR4Q0jNbntAr5TqtwZoi80zWq5TD6Sfd2n-uofZtSk7ajS11mndH9qyGwk~1RHmUSgnG8D3SYSjz~GnhlAmrvHyM7V1uubVpBOH1r1d1LBGZqj9GvL~ge-0DvXdmJY57j4ZO6jMcIy4OLsLqU~OFzoZcJsM9KAfjoxlrflAghu-hKXHRqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10) }}/>
        <View style = {{width: '70%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(6), fontSize: 16, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Jennifer Lopez</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(6), fontSize: 13}}>
          Liked your post   3m ago
        </Text>
        </View> 
        <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/e9cf/3e92/0c2242cf4d44e4a3c9689d864d11bc81?Expires=1699228800&Signature=YOkwduBeRDYgHeJhWCcHjf2q-0J74qyxZUVoIAeciHTgp6GxjuvQ1Bc2aov2-55K2FzRHL9LZIHFhqnYCdYjZ6McNPG~ZnE~gKB9SS21d0P~VQMG5CQ2NW6q3UQ-~SaT1WIxu0PGT9lqMC7nnhWezCCFG2S~qyFaoJpctspdI666WC1hj7EfRcuOgejanSR0YdtUGXKfAzgzM31m-tfe1jv2hIJoJr~JA1AE8c0oZEIMGbxGWmANyh0H54uai46k89TAgbchrskppG71-mbHKBzptvAMN9QKfu3dVCi5sEnLG01QvTTbKdgIVPC4DFC9RckZqvJld58Nx6UAwyg4-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
          style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(2) }}/>
    </View>
  </View>


    </ScrollView>
  </SafeAreaView>
  )
}

export default Notification