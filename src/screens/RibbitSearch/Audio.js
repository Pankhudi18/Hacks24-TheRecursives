import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { Utils } from '../../contants';

const Audio = () => {
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
          <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Accounts</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('Accounts')}>
          <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Reels</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('Audio')}>
          <Text style = {{color: '#FFFFFF', marginLeft: Utils.ScreenWidth(6)}}>Audio</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('Tags')}>
          <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Tags</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('Location')}>
          <Text style = {{color: '#868686', marginLeft: Utils.ScreenWidth(6)}}>Tags</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>

  <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/1d1b/afa4/8530ab1162ab0676defc95aefdd75f87?Expires=1699228800&Signature=R-rlmI4r4IIt0P2Ml9H6hT8K1JJAILDAyXD6FvyG4xbn5Gg9pvkGwGckLNxcicOlfB2JuXTIo0-Q0Sy0ccYYj5LYsRkH7vCiDRI73RLaVGoVdVQv~Zrv9DZA3nV5Atxn9MwfkCTOOM8pJ1Q-0cvgN0JgCux--Sg-XKekJ6DW7-fEygE7qEUDOkEp-fJsUMeIozeDOybCupwPHevszPKpbjV0VLq3PZwa8VeQrCpFSJRd2As0FdxHX6GPCE80sXF547TKPh-HxMDpHEXxJrQzqezEEOB03tHk~aKKP32LjmS37ZfU6Dyxx6DKO3uXGRjPhd3e2mOPhLAE8vWziLuD3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(8), width: Utils.ScreenHeight(8), borderRadius: Utils.ScreenWidth(2)}}/>
        <View style = {{width: '86%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(6), fontSize: 15, fontWeight: '500', color: '#f6f6f6', maxWidth: '90%'}}>Starboy, Weekend</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(6), fontSize: 14, marginTop: Utils.ScreenHeight(0.5)}}>
          Lorem Ipsum Dollar sit amet
        </Text>
        </View> 
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/59b7/76e5/839cd87428e3668613a2e9664302d8f6?Expires=1699228800&Signature=WjNxIgUukTI2-tskxGXeBxwjk6r60v2YFQtxtV1FifVCzRdw0geDhjIhE64JclCopoOCMve47k9DoOlLf4Sap7E1HMWhRO6fjkx1Yj7yqPfg6u8AY1u3vcjF8rsv7gVmHPQ37vF1Bpea~b0dJ-~TGnRwanPFhKeb9LBHjkCyMAzNTEpBd8SgBeGpxDhda6g2tqqkfcWhcVOwFlsUiSgmzBLpc4QIhYx8BEhz4xT7I70wyEgnrED1idddKVgPlTmeNepvHg2vWogR07J9RrMde-uz3ea6bBHTp2h~6kBkxIGviP-sTZ0G2SXk7sjINtV8JwievNV6dx73236AbqGnDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(8), width: Utils.ScreenHeight(8), borderRadius: Utils.ScreenWidth(2)}}/>
        <View style = {{width: '86%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(6), fontSize: 15, fontWeight: '500', color: '#f6f6f6', maxWidth: '90%'}}>As it was</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(6), fontSize: 14, marginTop: Utils.ScreenHeight(0.5)}}>
          Harry Stles . 179k reels
        </Text>
        </View> 
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/1620/80fc/3432ff44c03d5f01c891d352fdaae93e?Expires=1699228800&Signature=irY4M5Y5kSyFJmbzW99ro6Z3BzXKAfcgyJa1Ni5exkkKkoGzWpouJhndr-9p3HQuGHsa1ghvWec5gdilrcoCkHvQKiStZN3eTGGvgtgyHm7JXP5vNiXtzwJanmiBxVslJ2i0et~0Hev0n4WXHiy~Oz5ZZNjzB3BPvoVDwcbcIOaQuq2hmxQW0RLqww6fOJtXD3EC6DAPxX89kiz6HaVAYMxgy3TekgQjZQmlrE6uPUmigb-o2IHpUJuFKP8zh7Q-WjUF~ETcwPsSrmu7CA~eAEA~CX2vjY-nJIdLzsmBFZiwzKC0uT-8ThUVICnstnJULObuAE9xTJnN5Xg8v9hRNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(8), width: Utils.ScreenHeight(8), borderRadius: Utils.ScreenWidth(2)}}/>
        <View style = {{width: '86%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(6), fontSize: 15, fontWeight: '500', color: '#f6f6f6', maxWidth: '90%'}}>With You</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(6), fontSize: 14, marginTop: Utils.ScreenHeight(0.5)}}>
          AP Dhillon 179k Reels
        </Text>
        </View> 
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/1620/80fc/3432ff44c03d5f01c891d352fdaae93e?Expires=1699228800&Signature=irY4M5Y5kSyFJmbzW99ro6Z3BzXKAfcgyJa1Ni5exkkKkoGzWpouJhndr-9p3HQuGHsa1ghvWec5gdilrcoCkHvQKiStZN3eTGGvgtgyHm7JXP5vNiXtzwJanmiBxVslJ2i0et~0Hev0n4WXHiy~Oz5ZZNjzB3BPvoVDwcbcIOaQuq2hmxQW0RLqww6fOJtXD3EC6DAPxX89kiz6HaVAYMxgy3TekgQjZQmlrE6uPUmigb-o2IHpUJuFKP8zh7Q-WjUF~ETcwPsSrmu7CA~eAEA~CX2vjY-nJIdLzsmBFZiwzKC0uT-8ThUVICnstnJULObuAE9xTJnN5Xg8v9hRNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(8), width: Utils.ScreenHeight(8), borderRadius: Utils.ScreenWidth(2)}}/>
        <View style = {{width: '86%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(6), fontSize: 15, fontWeight: '500', color: '#f6f6f6', maxWidth: '90%'}}>Livelong</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(6), fontSize: 14, marginTop: Utils.ScreenHeight(0.5)}}>
          Lorem Ipsum Dollar sit amet
        </Text>
        </View> 
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/c31c/8cca/d690e40671f424f8085f0ece15dbc49f?Expires=1699228800&Signature=ZdB4N1uFlBYRrfYRhA6~MCI1sHC8D3lfSlbDS1kojz0uVvnPU2tzmQ0bZErtP781cX-udPB1KrJWBD-EHM2dFwR4odvjZ-yDqgBs9ZsGsfQw1QxWkmFi18x72ku1owaCY-jPBxsv-Lqo2oOxRjJriIjIl9GG6yVm~Uc3Lpl66CcMOj6jjC~M-njDncQYZZKNljgc82CLxBbh~qPJD4D80e39mWz5PUaglB5cG4Ug3eFS5wyLElhgO6SfvZDKSIa9oNGEKdy1F8vVCeTAAJlFTXhMhUPzj3fzBiL8HU88DlejZpZQpjK5ZFfOaa3iUfuDd94rX9bw~iqn-J4QdescwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(8), width: Utils.ScreenHeight(8), borderRadius: Utils.ScreenWidth(2)}}/>
        <View style = {{width: '86%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(6), fontSize: 15, fontWeight: '500', color: '#f6f6f6', maxWidth: '90%'}}>oioeogiioj</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(6), fontSize: 14, marginTop: Utils.ScreenHeight(0.5)}}>
          Lorem Ipsum Dollar sit amet
        </Text>
        </View> 
    </View>
  </View>

  <View style = {{marginHorizontal: Utils.ScreenWidth(8), justifyContent: 'center'}}>
    <View style = {{marginTop: Utils.ScreenHeight(2), flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://s3-alpha-sig.figma.com/img/c31c/8cca/d690e40671f424f8085f0ece15dbc49f?Expires=1699228800&Signature=ZdB4N1uFlBYRrfYRhA6~MCI1sHC8D3lfSlbDS1kojz0uVvnPU2tzmQ0bZErtP781cX-udPB1KrJWBD-EHM2dFwR4odvjZ-yDqgBs9ZsGsfQw1QxWkmFi18x72ku1owaCY-jPBxsv-Lqo2oOxRjJriIjIl9GG6yVm~Uc3Lpl66CcMOj6jjC~M-njDncQYZZKNljgc82CLxBbh~qPJD4D80e39mWz5PUaglB5cG4Ug3eFS5wyLElhgO6SfvZDKSIa9oNGEKdy1F8vVCeTAAJlFTXhMhUPzj3fzBiL8HU88DlejZpZQpjK5ZFfOaa3iUfuDd94rX9bw~iqn-J4QdescwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}
        style  = {{height: Utils.ScreenHeight(8), width: Utils.ScreenHeight(8), borderRadius: Utils.ScreenWidth(2)}}/>
        <View style = {{width: '86%'}}>
        <Text style = {{marginTop: Utils.ScreenHeight(1), marginLeft: Utils.ScreenWidth(6), fontSize: 15, fontWeight: '500', color: '#f6f6f6', maxWidth: '90%'}}>Livelong</Text>
        <Text style = {{color: '#777777', marginHorizontal: Utils.ScreenWidth(6), fontSize: 14, marginTop: Utils.ScreenHeight(0.5)}}>
          Lorem Ipsum Dollar sit amet
        </Text>
        </View> 
    </View>
  </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Audio