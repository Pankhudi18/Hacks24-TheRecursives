import { View, Text, SafeAreaView, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Utils } from '../../contants';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const RibbitSearch = () => {
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


        <ScrollView horizontal = {true} style = {{backgrouncColor: '', marginTop: Utils.ScreenHeight(3)}}>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style = {{color: '#FFFFFF', marginLeft: Utils.ScreenWidth(6)}}>Trending</Text>
            <TouchableOpacity onPress = {() => navigation.navigate('ForYou')}>
            <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6) }}>For You</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Celebrities</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>  

        <View>
          <View style = {{ marginHorizontal: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(2), }}>
            <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/9407/cd15/83fddf205ae790ade44cf4ca1b486e99?Expires=1698019200&Signature=AgEeJHq-GiT9eEjMhik~gSng9xkatG4ZqGwMeStICyl0Y3lYzg~Bt9oh7vjUBzJGP-70nYb1xyeexoa5CwABlm1uNQ81bxfznJaiFEtqldvpqgR7bYrRCu7j083b1czFBe2jpSCuBR~D4n7tPlYvIhe-L8uaU43KE8J4oFijHROQfULu-3Ct7FK3GtwNY5Vym5tFJjidtGzTLIrKqKm9zZ6HyKI7c0hY8YNSJr8Ar6moxzALySCxXhFgGEsZ9JrmpwwHdPvFWAo0tahqE5O8FuSNjT4Bi15b3HsmtTGkl1Y56CnMwFhcHw70QdYDlQxByDv0l3APSCW0KY8p8Krwcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
            style = {{height: Utils.ScreenHeight(44), width: '100%',borderRadius: Utils.ScreenWidth(8), opacity: 0.9, }}/>
            </View>
            <View style={{ position: 'absolute', top: '74%', left: 0,right: 0, marginLeft: Utils.ScreenWidth(12),  }}>
            <Text style={{ color: '#FFFFFF', fontSize: 24, fontWeight: '800', maxWidth: '80%' }}>
            SPECIAL SHOOTING {'\n'}FOR PARADA
            </Text>
          </View>
          </View>

<View style = {{marginHorizontal: Utils.ScreenWidth(8)}}>
    <View style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8'}}
        style  = {{height: Utils.ScreenHeight(7), width: Utils.ScreenHeight(7), borderRadius: Utils.ScreenWidth(10) }}/>
        <View style = {{width: '60%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(4), fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '80%'}}>Bremella Dcruz</Text>
        </View>
        <TouchableOpacity onPress = {()=> navigation.navigate('')}
        style  = {{backgroundColor: '#fbe34d', borderWidth: 1, height: 36, width: 80, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop: Utils.ScreenHeight(1)}}>
            <Text style = {{fontSize: 14, fontWeight: 600, color: '#0E0E0E',}}> Follow</Text>
        </TouchableOpacity>
    </View>
  </View>
      
      <View style = {{marginHorizontal: Utils.ScreenWidth(6)}}>
        <Text style = {{color: '#FFFFFF', fontSize: 14}}>#streetstylefashion2023</Text>

        <ScrollView horizontal = {true} style = {{marginTop: Utils.ScreenHeight(1),}}>
            <View style = {{flexDirection: 'row'}}>
              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/5031/ecbe/44b437b58207fdc0b2ec1c71dc0642cd?Expires=1698624000&Signature=hWMlktXajwsUUfkQCuIlcAn2nESMhb1t3EydOrM3OOx-sei9ITRlcfkgYDdwx0oADRBmnXLAV0yo9G9tLTiFBpsk5hmHoiZ-xxeWlsppbSOACo8s3p-4yqf6eH~TqjTCBw9RLwKk24H71gcE8CepcueS9a7v9JhXmk5YeO80lgIq7fQnh4~i0L3XYcAMqk56OKgXpQ9MHUS8cQjPliOVxEcTgsu3DiY8KIkR8OJJptgVsIDYhwqO-UDUvSNzT8a01MSRupb8-b10JY3bQ5uggPdtY9SOxHXviquBZV9q3NOL15LbqhVA9X1MPwBklECciMgoD6iN3HkGjaKPPvtabA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(28),  borderRadius: Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(1)}}/>
            
              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/baa0/fd7a/60d982412a690cbb762000deabac76a0?Expires=1698624000&Signature=AmpgN2oXhSu5a-svbdrLhvYa-ReiT4dhL2lYVNSyxbENpx44KTSuMaeE1Wul9~s5uhJHv1SSYFtGPMMmtdBTy9DEoNDbmv2MWlBlSWKrYXMXgzQbV2nKT6SvOIDBFduVVS~BnBbF3MK6mlaZ4vnbzecsHqjRYXFGCxjRsRw7CltKiycAJdCkvG0ESF-aRw81Dw8SaqdNnwwNF4rmrjQPyiA1-Xx6~7g3-EfIRuBtOk7byz9V1HSp-~GPk2vPTxUxc2-uEWm8iiVA527vZXcLJHFBWhcQ1qWXPB3qe4lKF-XApFx-NfjpFYMQ6~ghxm74aO~wmqtkrcAGwJnJOsbDmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(28),  borderRadius: Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(1)}}/>

              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/3057/e700/e95cf40a0da3091196280f3d233320ae?Expires=1698624000&Signature=F-KfKDzozdJ6qGkoQtzccxO~vhEvCz16IWdiAOlL0bTgsmQcr~HiIou7ArZIYL23OOCTKhGu4gHInUAlwmgpyVz0ommBRRKPTvcQt0Anq~4mqrfmLPXls9CeaHuAZj~ZKl7H-p4U9nUXRikQsVKzxCco5-cZpeXbuYTD3LFqp1ZDW6OP46BiiIOwstxhY36t5bYSlcFTeUZcEee5Hb03fqJ73GxkeZlZajRaHdLzQs1yJ7coNwDLBiMeB0AsyJZAiEBUoT5SlsF-Abbvn6nIZsHRxqp0a~hBlv~fJuRcw3AJhOEdKfavx0pfyRm2fGnvGVJymQ-HqPCqjNJBHdAUFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(28),  borderRadius: Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(1)}}/>
   
              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/2243/b581/66fef442776f65f6111b3a20634ce162?Expires=1698624000&Signature=oEaiEgCLkET7ltwxpe1EDY4WjB0~OUFQTuURKt3jv0p4EpQFt0nCqiTg9dv-01D8urmshhQv9oXNtQme7UIv2N9mn2XOYVWk5-rjilno1t0uJ112DUqm4CYdbdHbLc0wOwYc9lYSYfMrd9rQxK-3vucBu0ySA39Y8IAd11u4T9n0FwkjA1TmBT2AJWhmKxi2-i~LlBtNWcGXTj073bOfIKKJ-YreJwM2tNledC0w0Z64g4qbUcE848jbrFo0JQM9SgTthZZjckd4Obkk9XetL8Ns0ovmkXveq0pcJXSNg-hePLEwODIkncm1msNQ8d-l1yK1kgmmo0GiO2Yjs-ErCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(28),  borderRadius: Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(1)}}/>
            </View>
        </ScrollView>
      </View>
        
      <View style = {{marginHorizontal: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(2)}}>
        <Text style = {{color: '#FFFFFF', fontSize: 14}}>#travelwithginilia</Text>

        <ScrollView horizontal = {true} style = {{marginTop: Utils.ScreenHeight(1),}}>
            <View style = {{flexDirection: 'row'}}>
              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/4e2e/dc19/58bb9c96954f38e7383c312ac4e2e81a?Expires=1698624000&Signature=S9dSpAO9~cc2ukMdiuMneJNrH9bgmz0uuDFiwLVjMFZe7KS8dYv1vbnF51klalnV917H~9RnsbAkOAJnrSbfKmiRX-1pCfJIDxX98AGgiHzt2Cl8~GNIY30hFo3-mRJvSJt6wyN7LH4BqOBJSzP2yM1DY19y-TEbPqE3Os3XN61uLbw2C-RSCOKShWepxZsPWG15xV~xsISXIHJ1gDbL625pMKPul~covZKJASGp9GJFJ8toSd3C~udM8IyMkqTsrUO8DcB2ZaSvZBn2eDJ4~XgymrTWenbFBtytWjdElqE89ic-kvESqoPUH6HLDe-qikrfdGy3oKb8fTbjQOH7mQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(28),  borderRadius: Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(1)}}/>
            
              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/2bf9/12a4/793a6c62a2f8bd0c0c6d05d36e5b2a92?Expires=1698624000&Signature=YN87H9ZOfNkbqAyhgiGYDxdFm5tj4fw5QWnkHC8ljzbeGlJvMxO4srGuMTLCkNYJMDSspwSIwLdYmEyKRRNu4plhWsLtYQcliKqnVuRa~yEiscQmvzRsBcmh7Lpo5xynj-lMVmN~PsbJ80LBlNQ8rVnEg7p0nBAT3ENVEieANQbESl112~KMcL82H5TvKJuSZuFeK2UuO8LVxWuIqGwVGXCRqryV2F6uyN5rLn3q-nTtVvqPZN949HKSUX4cOlZAEQFKBPsQTKGDNRxTmu61U1KP-Ql0b5T9S2yLSc20U9wt~cZxLm8ca59tBDrSaNoDpcWvYIJWthzHoThWt-Czag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(28),  borderRadius: Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(1)}}/>

              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/917e/68d0/c3e1e987aded96f7692cf1e0788d5364?Expires=1698624000&Signature=DuHByvJui~HT2hKhgPzpFTYp18LZ~pHDg5Hh2ChxZSE7a6SSiNkGT7vOgjD22ZHjm~R1qmZGe8wZmvGDBMUvcN2xwbAwFBUb8922-TRQgYC7IY91b2AU3SBavtfGyiL7chKydWPXS6LbThw8DsSToPz6PIW7ZkkcKyJWgtkIqEsnA1cHoB2MaHhvvBwCiExxCbntfJSOAnB4QKxgwqG1Bukf-65~i7fN5fFVrvQhSDXDdtT6u5KGzxy-2Aia8IISYl6qvSQrCUMMCv1jJeVXc3XhnTpLzbF-AbnqI6ksftBu9xvM4GPXZVNu-O80m1JR3m8bNFx~NCVfMa6adL0keg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(28),  borderRadius: Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(1)}}/>
   
              <Image source = {{uri: 'https://s3-alpha-sig.figma.com/img/8792/e5a7/d107e34fe072b347a7fcd896c504790e?Expires=1698624000&Signature=ezZVJLzz8q1ELc0rKpEaTtyyFY0p1-VzLLWcAOh383Rg-uSAbmouy3nNwPrnqJNLQPeJCZSUAB2Okq1yFlPDR7iInZhP1TeqT1p~jcCEQVJs~uiqVk~8NTWdeZKRpujDDgCBD6dau33CDCRKOFT~YaZuLJ6qbjy~B5clOrkcF6JUFeEs7PcMbJSvSg6qONWLqAhXnFe5175MVTIldw0vSzZgbBY4sMfmBBw3BEpjKr3C~TqaoZrcSC2KzORnWUFZB4gyHb2FeYeS451wpIbxS0wEnxxYu~czYq7P7Sq8oyXOFaMwgVzpeQTW4MbbK3JZXC3tUb-y1kJyZ24Ona5Kqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
              style = {{height: Utils.ScreenHeight(20), width: Utils.ScreenWidth(28),  borderRadius: Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(1)}}/>
            </View>
        </ScrollView>
      </View>
    
       </ScrollView>
    </SafeAreaView>
  )
}

export default RibbitSearch