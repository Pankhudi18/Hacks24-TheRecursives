import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Utils, colors} from '../../contants';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagesPath from '../../assests/ImagesPath';
import {useNavigation} from '@react-navigation/native';
import CustomLoader from '../../component/CustomLoader';
const UploadImgAI = () => {
  const [loaderVisible, setloaderVisible] = useState(false);
  const [input, setInput] = useState('');
  const [newImage, setNewImage] = useState('');

  console.log('New Image>>>>>', newImage);

  const postdata = async url => {
    var formdata = new FormData();
    formdata.append('image', {
      uri: url?.uri,
      type: url?.type,
      name: url?.fileName,
    });
    formdata.append('prompt', input);
    console.log('urllis  ', JSON.stringify(formdata));
    var requestOptions = {
      method: 'POST',
      body: formdata,
      // redirect: 'follow'
    };
    setloaderVisible(true);
    await fetch(
      'https://7c5f-203-212-25-243.ngrok-free.app/api/v1/generate-ai-design/',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log('Result>>>>', result);
        if (result?.status) {
          setflag(true);
          setloaderVisible(false);
        }
        // setNewImage("https://7c5f-203-212-25-243.ngrok-free.app/images/warli.png");

        // Clear the timeout if the component unmounts or if you want to cancel the fetch for some reason
        const data = setTimeout(() => {
          setloaderVisible(false);
        }, 20000);

        // Cleanup function to clear the timeout if the component is unmounted
        return () => {
          clearTimeout(data);
        };
      })
      .catch(error => {
        console.log('error', error);
        setloaderVisible(false);
      });
  };

  const [videopath, setvideopath] = useState();
  const [sendData, setSendData] = useState();

  const selectGelleryReg = async () => {
    const result = await launchImageLibrary({
      mediaType: 'image',
    });

    setvideopath(result?.assets[0]?.uri);
    setSendData(result?.assets[0]);
    console.log('Video Path>>>>', videopath);
    // setvideopath(url?.uri)
  };
  const [flag, setflag] = useState();
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{backgroundColor: colors.black}} />
      <SafeAreaView>
        <ScrollView style={{backgroundColor: colors.black, height: '100%'}}>
          {/* <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: Utils.ScreenHeight(2) }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.3}
                            style={styles.backViewCss}
                        >
                            <Image source={ImagesPath.signUp.backIcon} style={styles.backIconCss} />
                        </TouchableOpacity>
                        <View style={{ alignSelf: 'center', width: '70%', alignItems: 'center' }}>
                            <Image style={[styles.logoIconCss]} source={ImagesPath.home.logo_primary} />
                        </View>
                    </View>

                    <View style={{ width: '95%', marginLeft: Utils.ScreenWidth(2), marginTop: Utils.ScreenWidth(5), alignItems: 'flex-start', height: Utils.ScreenHeight(5), borderBottomWidth: 1, borderColor: colors.grey2 }}>
                        <Text style={{ textAlign: 'center', color: colors.black, fontSize: 17, fontWeight: '600' }}>
                            Upload Video for
                        </Text>
                    </View>
                    <Text style={styles.addQualiTextCss}>Add Video of your today's work. </Text>

                    <TouchableOpacity
                        onPress={() => { selectGelleryReg() }}
                        style={{
                            height: Utils.ScreenHeight(12),
                            borderRadius: 50,
                            width: Utils.ScreenHeight(12), borderWidth: 0.5, borderColor: colors.grey, justifyContent: "center", alignSelf: "center", marginTop: Utils.ScreenHeight(5)
                        }}>
                        <Text style={{ textAlign: "center", fontSize: Utils.ScreenHeight(4), fontWeight: 300, color: colors.grey }}>+</Text>
                    </TouchableOpacity>
                    <Text style={{ marginTop: Utils.ScreenHeight(3), textAlign: "center", }}>Add Video</Text>
                    {flag &&
                        <View style={{ marginHorizontal: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(3) }}>
                            <VideoPlayer
                                //    autoplay
                                video={{ uri: videopath }}

                                style={{ height: Utils.ScreenHeight(30), }}

                            />
                        </View>
                    } */}

          {/* <View style={{ marginTop: Utils.ScreenWidth(8), marginBottom: 10, marginHorizontal: Utils.ScreenWidth(4) }}>
                        <AppButton
                        title="Continue"
                        buttonWidth={Utils.ScreenWidth(90)}
                        onPress={() => { 
                            if(flag)
                            navigation.navigate("HomeScreen")
                            else alert("Upload a video first")
                        }}
                    //onPress={() => { navigation.navigate('OnboardingScreen8') }}
                    />
                    </View> */}
          <View style={{margin: 35}}>
            <Text
              style={{
                fontSize: 32,
                fontFamily: 'Poppins-SemiBold',
                fontWeight: 'bold',
                color: 'red',
              }}>
              HOME STYLER
            </Text>
            <Text
              style={{
                fontSize: 32,
                fontFamily: 'Poppins-SemiBold',
                fontWeight: 'bold',
                color: colors.white,
              }}>
              AI DESIGNER
            </Text>
          </View>
          <Text style={{marginLeft: 30}}>Let AI design for you.</Text>
          <TouchableOpacity
            onPress={() => {
              selectGelleryReg();
            }}
            style={{
              width: '90%',
              height: Utils.ScreenHeight(22),
              borderRadius: 20,
              backgroundColor: colors.white,
              marginHorizontal: 20,
              padding: 30,
            }}>
            <Text
              style={{fontSize: 24, fontWeight: '600', color: colors.black}}>
              Upload an <Text style={{color: colors.red}}>Image</Text>{' '}
            </Text>
            <Text style={{marginTop: 7}}>
              Generate inspiring AI Images {'\n'} in seconds.
            </Text>
            <View style={{marginTop: 30, marginLeft: 10}}>
              <Image
                source={ImagesPath.earning.next}
                style={{width: 30, height: 30, resizeMode: 'contain'}}
              />
            </View>
          </TouchableOpacity>
          {videopath && (
            <View
              style={{
                height: Utils.ScreenHeight(14),
                backgroundColor: 'white',
                width: Utils.ScreenWidth(25),
                margin: 20,
                borderRadius: 10,
                alignSelf: 'center',
              }}>
              <Image
                style={{
                  height: Utils.ScreenHeight(14),
                  width: Utils.ScreenWidth(25),
                  resizeMode: 'cover',
                }}
                source={{uri: videopath}}
              />
            </View>
          )}
          {/* {newImage && (
            <View
              style={{
                height: Utils.ScreenHeight(14),
                backgroundColor: 'white',
                width: Utils.ScreenWidth(25),
                margin: 20,
                borderRadius: 10,
                alignSelf: 'center',
              }}>
              <Image
                style={{
                  height: Utils.ScreenHeight(24),
                  width: Utils.ScreenWidth(25),
                  resizeMode: 'cover',
                }}
                source={{uri: newImage}}
              />
            </View>
          )} */}
          <Text
            style={{
              marginLeft: 25,
              marginTop: 10,
              fontSize: 24,
              fontFamily: 'Poppins-SemiBold',
              fontWeight: 'bold',
              color: colors.white,
            }}>
            Share your idea below*
          </Text>
          <TextInput
            value={input}
            onChangeText={text => setInput(text)}
            placeholder="Enter Here"
            multiline
            numberOfLines={5}
            style={{
              paddingLeft: 10,
              textAlignVertical: 'top',
              width: '90%',
              height: 120,
              borderRadius: 5,
              borderWidth: 1,
              backgroundColor: 'white',
              alignSelf: 'center',
              marginTop: 15,
              fontSize: 16,
            }}
          />
          <TouchableOpacity
            onPress={() => postdata(sendData)}
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 25,
              alignItems: 'center',
              width: '30%',
              height: 60,
              backgroundColor: 'red',
              borderRadius: 10,
            }}>
            <Text
              style={{fontSize: 16, fontWeight: '600', color: colors.white}}>
              Submit
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <CustomLoader loaderVisible={loaderVisible} />
      </SafeAreaView>
    </>
  );
};

export default UploadImgAI;
