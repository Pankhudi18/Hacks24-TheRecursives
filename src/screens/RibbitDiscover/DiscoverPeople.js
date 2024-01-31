import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const DiscoverPeople = () => {
  return (
    <SafeAreaView>
    <ScrollView style = {{backgroundColor: '#181818', height: '100%'}}>
        <View style = {{alignItems: 'center', marginTop: 60,}}>
            <Text style = {{ fontSize: 50, fontWeight: '900', color: '#fbe34d'}}>Ribbit</Text>
         </View>

    <View style = {{alignItems: 'center', marginTop: 25,}}>
      <Text style = {{ fontSize: 20, fontWeight: '500', color: '#f6f6f6'}}>Discover People</Text>
    </View>

    <View style = {{marginTop: 60, marginHorizontal: 20, flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8'}}
        style  = {{height: 56, width: 56, borderRadius: 30 }}/>
        <Text style = {{marginTop: 20, marginHorizontal: 16, fontSize: 14, fontWeight: '500', color: '#f6f6f6', maxWidth: '60%'}}>Shrutisinha</Text>
        <TouchableOpacity onPress = {()=> navigation.navigate('')}
        style  = {{borderColor: '#fbe34d', borderWidth: 1, height: 36, width: 80, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginHorizontal: 60}}>
            <Text style = {{fontSize: 14, fontWeight: 400, color: '#f6f6f6',}}> Follow</Text>
        </TouchableOpacity>
    </View>

    <View style = {{height: 0.8, backgroundColor: '#747474', width: '92%', marginHorizontal: 10}}/>
      
    <View style = {{marginTop: 14, marginHorizontal: 20, flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8'}}
        style  = {{height: 56, width: 56, borderRadius: 30 }}/>
        <Text style = {{marginTop: 20, marginHorizontal: 16, fontSize: 14, fontWeight: '500', color: '#f6f6f6'}}>Shrutisinha</Text>
        <TouchableOpacity style  = {{borderColor: '#fbe34d', borderWidth: 1, height: 36, width: 80, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginHorizontal: 60}}>
            <Text style = {{fontSize: 14, fontWeight: 400, color: '#f6f6f6',}}> Follow</Text>
        </TouchableOpacity>
    </View>

    <View style = {{height: 0.8, backgroundColor: '#747474', width: '92%', marginHorizontal: 10}}/>

    <View style = {{marginTop: 14, marginHorizontal: 20, flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8'}}
        style  = {{height: 56, width: 56, borderRadius: 30 }}/>
        <Text style = {{marginTop: 20, marginHorizontal: 16, fontSize: 14, fontWeight: '500', color: '#f6f6f6'}}>Shrutisinha</Text>
        <TouchableOpacity style  = {{borderColor: '#fbe34d', borderWidth: 1, height: 36, width: 80, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginHorizontal: 60}}>
            <Text style = {{fontSize: 14, fontWeight: 400, color: '#f6f6f6',}}> Follow</Text>
        </TouchableOpacity>
    </View>

    <View style = {{height: 0.8, backgroundColor: '#747474', width: '92%', marginHorizontal: 10}}/>

    <View style = {{marginTop: 14, marginHorizontal: 20, flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8'}}
        style  = {{height: 56, width: 56, borderRadius: 30 }}/>
        <Text style = {{marginTop: 20, marginHorizontal: 16, fontSize: 14, fontWeight: '500', color: '#f6f6f6'}}>Shrutisinha</Text>
        <TouchableOpacity style  = {{borderColor: '#fbe34d', borderWidth: 1, height: 36, width: 80, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginHorizontal: 60}}>
            <Text style = {{fontSize: 14, fontWeight: 400, color: '#f6f6f6',}}> Follow</Text>
        </TouchableOpacity>
    </View>

    <View style = {{height: 0.8, backgroundColor: '#747474', width: '92%', marginHorizontal: 10}}/>

    <View style = {{marginTop: 14, marginHorizontal: 20, flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8'}}
        style  = {{height: 56, width: 56, borderRadius: 30 }}/>
        <Text style = {{marginTop: 20, marginHorizontal: 16, fontSize: 14, fontWeight: '500', color: '#f6f6f6'}}>Shrutisinha</Text>
        <TouchableOpacity style  = {{borderColor: '#fbe34d', borderWidth: 1, height: 36, width: 80, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginHorizontal: 60}}>
            <Text style = {{fontSize: 14, fontWeight: 400, color: '#f6f6f6',}}> Follow</Text>
        </TouchableOpacity>
    </View>

    <View style = {{height: 0.8, backgroundColor: '#747474', width: '92%', marginHorizontal: 10}}/>

    <View style = {{marginTop: 14, marginHorizontal: 20, flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8'}}
        style  = {{height: 56, width: 56, borderRadius: 30 }}/>
        <Text style = {{marginTop: 20, marginHorizontal: 16, fontSize: 14, fontWeight: '500', color: '#f6f6f6'}}>Shrutisinha</Text>
        <TouchableOpacity style  = {{borderColor: '#fbe34d', borderWidth: 1, height: 36, width: 80, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginHorizontal: 60}}>
            <Text style = {{fontSize: 14, fontWeight: 400, color: '#f6f6f6',}}> Follow</Text>
        </TouchableOpacity>
    </View>

    <View style = {{height: 0.8, backgroundColor: '#747474', width: '92%', marginHorizontal: 10}}/>

    <View style = {{marginTop: 14, marginHorizontal: 20, flexDirection: 'row', height: 70, }}>
        <Image source = {{uri :  'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8'}}
        style  = {{height: 56, width: 56, borderRadius: 30 }}/>
        <Text style = {{marginTop: 20, marginHorizontal: 16, fontSize: 14, fontWeight: '500', color: '#f6f6f6'}}>Shrutisinha</Text>
        <TouchableOpacity style  = {{borderColor: '#fbe34d', borderWidth: 1, height: 36, width: 80, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginHorizontal: 60}}>
            <Text style = {{fontSize: 14, fontWeight: 400, color: '#f6f6f6',}}> Follow</Text>
        </TouchableOpacity>
    </View>

    <View style = {{height: 0.8, backgroundColor: '#747474', width: '92%', marginHorizontal: 10}}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DiscoverPeople