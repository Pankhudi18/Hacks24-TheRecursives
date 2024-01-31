// import { View, Text } from 'react-native'
// import React, { useState } from 'react'
// import axios from 'axios'

// const test = () => {
//   const [data, setData] = useState([]);
//   const apikey ='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'
//   const apiUrl= 'https://api.openai.com/v1/completions'
//   const [textInput, setTextInput] = useState('');


//   const client = axios.create({
//       headers:{
//           Authorization: "Bearer "+apikey,
//       }
//   })

//   const params = {
//       prompt: "hello",
//       model: "text-davinci-002",
//       max_tokens:100,
//       temperature:0.5,
//   }

//   const handleSend = async () =>{
//     console.log("pressed")
//   client.post("https://api.openai.com/v1/completions",params)
//   .then((result)=>{
//       console.log(result.data.choices[0].text);
//       const temp = result.data.choices[0].text.trim();
//       const temp2 = temp.replace('?'," ").trim();
//       console.log(temp);
//       // setData([...data, {type: 'user', 'text': textInput}, {type: 'bot', 'text': temp2}])
//       console.log(data);
//       // setTextInput("");
//   })
//   .catch((err)=>{
//       console.log(err)
//   })
//   }
//   return (
//     <View style={{marginTop:80}}>
//       <Text
//       onPress={()=>{handleSend()}}
//       >test</Text>
//     </View>
//   )
// }

// export default test

import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator
} from 'react-native';
import { useCameraDevices } from 'react-native-vision-camera';
import ImagesPath from '../../assests/ImagesPath';
import { Utils, colors } from '../../contants';
import VideoPlayer from 'react-native-video-player'
import { RNCamera } from 'react-native-camera';
import Voice from '@react-native-voice/voice';
import { useNavigation, useRoute } from '@react-navigation/native';

function App() {
  const devices = useCameraDevices()
  const device = devices.front
  const [error, setError] = useState("")
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [editable, setEditable] = useState(false)
  const [refse, setRefse] = useState(false);
  const [combinedResults, setCombinedResults] = useState([]);
  const [pitch, setPitch] = useState('');
  const [partialResults, setPartialResults] = useState([]);
  const [startState, setStartState] = useState(false)
  const [counter, setCounter] = useState(1)
  const [loaderVisible, setLoaderVisible] = useState(false)
  const [resultData, setResultData] = useState()
  const navigation = useNavigation()

  console.log("result>>>>", results);
  console.log("Counter>>>>", counter);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e) => {
    console.log('onSpeechStart: ', e);
    setStarted('√');
  };

  const onSpeechEnd = (e) => {
    console.log('onSpeechEnd: ', e);
    setEnd('√');
  };

  const onSpeechError = (e) => {
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = async (e) => {
    console.log('onSpeechResults: ', e);
    const newResult = { id: Date.now().toString(), value: e.value[0] };
    const updatedResults = [...results, newResult];
    setResults(updatedResults);
    setLoaderVisible(true)
    await fetch('https://nfc-backend-nyjt.onrender.com/analyzeQuestion', {
      method: 'POST',
      body: {
        value: results
      }
    }).then(res => res.text()).then(data => { console.log("DATA>>>>", data); setResultData(JSON.parse(data)); setLoaderVisible(false) })
    setCombinedResults(updatedResults.map(result => result.value));
    Voice.start();
    setRefse(!refse)
  };

  const onSpeechPartialResults = (e) => {
    console.log('onSpeechPartialResults: ', e);
    const newResult = { id: Date.now().toString(), value: e.value[0] };
    const updatedResults = [...results, newResult];
    setResults(updatedResults);
    setCombinedResults(updatedResults.map(result => result.value));
    console.log(results, 'Results');
    console.log(combinedResults, 'CombinedResults');
    setEditable(true);
  };

  const startRecognizing = async () => {

    try {
      await Voice.start('en-US');
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const handleQuestion = () => {
    if (counter <= 3) {
      return setCounter(counter + 1)
    }
    setCounter()
  }
  console.log("RESULT DATA>>>>", resultData);

  if (device == null) return <Text>Device Null</Text>
  return (
    <View>
      {
        loaderVisible &&
        <View style={{ alignItems: 'center', justifyContent: "center", flex: 1 }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Please wait till we analyse your response...</Text>
        </View>
      }

      <View style={{ height: Utils.ScreenHeight(85) }}>
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.front}
          captureAudio={false}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('AIInterview', { data: resultData })} style={{ position: 'absolute', top: 30, left: 20, width: '11%', height: 40, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={ImagesPath.signUp.backIcon} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
      </TouchableOpacity>
      {
        startState &&
        <View style={styles.video}>
          <VideoPlayer
            video={counter === 1 ? ImagesPath.home.firstQuestion : counter === 2 ? ImagesPath.home.secondQuestion : counter === 3 ? ImagesPath.home.thirdQuestion : null}
            videoWidth={100}
            autoplay
            videoHeight={100}
            thumbnail={counter === 1 ? ImagesPath.home.firstQuestion : counter === 2 ? ImagesPath.home.secondQuestion : counter === 3 ? ImagesPath.home.thirdQuestion : null}
            disableSeek
          />
        </View>
      }
      <TouchableOpacity onPress={handleQuestion} style={[styles.recordButton, { bottom: 90, backgroundColor: colors.chat, left: 10, width: '40%' }]}>
        <Text style={styles.recordButtonText}>Next Question</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setStartState(true)} style={[styles.recordButton, { bottom: 90, backgroundColor: 'green', right: 120, width: '22%' }]}>
        <Text style={styles.recordButtonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={startRecognizing} style={[styles.recordButton, { bottom: 70, right: 0 }]}>
        <Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={ImagesPath.home.microphone} />
      </TouchableOpacity>
      <Text style={{ color: 'black', position: 'relative', bottom: 30, left: 30 }}>Answers:</Text>
      {results.map(result => (
        <View key={result.id}>
          <Text style={{ color: 'grey', fontSize: 16, position: 'relative', bottom: 20, left: 30 }}> => {result.value}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1
  },
  camera: {
    height: Dimensions.get('window').height - 160,
    width: Dimensions.get('window').width
  },
  recordButton: {
    position: 'absolute',
    padding: 15,
    alignItems: 'center',
    borderRadius: 50,
    width: '32%'
  },
  video: {
    position: 'absolute',
    width: '40%',
    height: Utils.ScreenHeight(25),
    borderRadius: 20,
    top: 10,
    right: 10
  },
  recordButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  videoPlayer: {
    flex: 1,
    marginTop: 20,
  },
})

export default App;