import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ImagesPath from '../../assests/ImagesPath'
import { colors } from '../../contants'
import { launchImageLibrary } from 'react-native-image-picker'
import { useNavigation } from '@react-navigation/native'

const PMSocials = () => {
    const [name, setName] = useState('')
    const navigation = useNavigation();
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [exp, setExp] = useState('');
    const [linkedinId, setLinkedinId] = useState('');
    const [instagramId, setInstagramId] = useState('');
    const [facebookId, setFacebookId] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [avatar, setAvatar] = useState('');

    const selectGelleryReg = async () => {
        const result = await launchImageLibrary({
            mediaType: 'image'
        })

        setImagePath(result?.assets[0]?.uri);
        console.log(videopath)
        // setvideopath(url?.uri)

    }

    const selectAvatar = async () => {
        const result = await launchImageLibrary({
            mediaType: 'image'
        })

        setAvatar(result?.assets[0]?.uri);
        console.log(videopath)
        // setvideopath(url?.uri)

    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View>
                <Text style={{ paddingLeft: 50, paddingTop: 20, fontSize: 25, fontWeight: '600' }}>Profile</Text>
                    <TouchableOpacity onPress={() => selectAvatar()} style={{ marginTop: 30, paddingLeft: 30 }}>
                        {
                            avatar ? 
                            <Image source={{uri: avatar}} style={{ height: 150, width: 130, resizeMode: 'contain', borderRadius: 20 }} />
                            :
                            <Image source={ImagesPath.earning.user} style={{ height: 150, width: 130, resizeMode: 'contain' }} />
                        }
                    </TouchableOpacity>
                    <Text style={{ paddingLeft: 20, paddingTop: 15, fontSize: 18, fontWeight: '600' }}>Enter your Details</Text>
                </View>
                <View>
                    <View style={{ marginTop: 40, borderRadius: 10, borderWidth: 1 }}>
                        <TextInput placeholder='Enter your Name' style={{ width: '100%', height: 65, paddingLeft: 10 }} value={name} onChangeText={(text) => setName(text)} />
                    </View>
                    <View style={{ marginTop: 40, borderRadius: 10, borderWidth: 1 }}>
                        <TextInput placeholder='Enter your Age' style={{ paddingLeft: 10, width: '100%', height: 55, }} value={age} onChangeText={(text) => setAge(text)} />
                    </View>
                    <View style={{ marginTop: 40, borderRadius: 10, borderWidth: 1 }}>
                        <TextInput placeholder='Enter your Gender' style={{ paddingLeft: 10, width: '100%', height: 55, }} value={gender} onChangeText={(text) => setGender(text)} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginTop: 40, borderRadius: 10, borderWidth: 1, marginLeft: 30, width: '40%', }}>
                    <TextInput placeholder='Total yrs of exp.' style={{ paddingLeft: 10, width: '100%', height: 55, }} value={exp} onChangeText={(text) => setExp(text)} />
                </View>
                <View style={{ marginTop: 40, borderRadius: 10, borderWidth: 1, marginLeft: 30, width: '40%', }}>
                    <TextInput placeholder='Enter Linkedin ID' style={{ paddingLeft: 10, width: '100%', height: 55, }} value={linkedinId} onChangeText={(text) => setLinkedinId(text)} />
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginTop: 40, borderRadius: 10, borderWidth: 1, marginLeft: 30, width: '40%', }}>
                    <TextInput placeholder='Instagram ID' style={{ paddingLeft: 10, width: '100%', height: 55, }} value={instagramId} onChangeText={(text) => setInstagramId(text)} />
                </View>
                <View style={{ marginTop: 40, borderRadius: 10, borderWidth: 1, marginLeft: 30, width: '40%', }}>
                    <TextInput placeholder='Facebook ID' style={{ paddingLeft: 10, width: '100%', height: 55, }} value={facebookId} onChangeText={(text) => setFacebookId(text)} />
                </View>
            </View>
            <TouchableOpacity onPress={() => selectGelleryReg()} style={{ width: '85%', height: 160, borderWidth: 1, borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 30, borderRadius: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Upload your CV</Text>
            </TouchableOpacity>
            {imagePath &&
                <View style={{height: 150, width: 200, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 30, borderRadius: 5 }}>
                    <Image source={{uri: imagePath}} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                </View>
            }
            <TouchableOpacity onPress={() => {navigation.navigate('DesignerHome')}} style={{ width: '50%', height: 55, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 50, borderRadius: 5, backgroundColor: '#A3A380' }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: colors.white }}>Submit</Text>
            </TouchableOpacity>
            <View style={{height: 20}}/>
        </ScrollView>
    )
}

export default PMSocials

const styles = StyleSheet.create({})