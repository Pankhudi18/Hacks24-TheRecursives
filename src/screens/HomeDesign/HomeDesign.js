import { React, useEffect, useState } from 'react'
import { Image, Text, View, Dimensions, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Utils, colors } from '../../contants';
import { useNavigation, useRoute } from '@react-navigation/native';
import PushNotification from 'react-native-push-notification'
import moment, { min } from 'moment';
import ImagesPath from '../../assests/ImagesPath';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { DraxProvider, DraxView } from 'react-native-drax';

const { width, height } = Dimensions.get('window')

const HomeDesign = () => {

  const [iconPress, setIconPress] = useState('')
  const [chairImagePress, setChairImagePress] = useState('');
  const [tableImagePress, setTableImagePress] = useState('');
  const [chairPress, setChairPress] = useState('');
  const [tablePress, setTablePress] = useState('');
  const [framePress, setFramePress] = useState('');
  const [frameImagePress, setFrameImagePress] = useState('');

  // const navigation = useNavigation();
  // const route = useRoute();
  // const data = route?.params?.data;
  // console.log("data||||||||||", data)



  // useEffect(() => {
  //   PushNotification.configure({
  //     onRegister: function (token) {
  //       console.log('TOKEN', token);
  //     },
  //     onNotification: function (notification) {
  //       console.log('NOTIFICATION', notification);
  //     },
  //     popInitialNotification: true,
  //     requestPermissions: false,
  //   });

  //   PushNotification.createChannel(
  //     {
  //       channelId: 'reminders',
  //       channelName: 'Task Reminder Notification',
  //       channelDescription: 'Reminder for any task',
  //     },
  //     () => { }
  //   );

  //   PushNotification.getScheduledLocalNotifications((rn) => {
  //     console.log('SN ---', rn);
  //   });
  // }, []);

  // const schduleNotification = () => {
  //   // const currentDate = new Date();  
  //   // console.log("HOURS>>>", currentDate.getHours());
  //   // const year = currentDate.getFullYear();
  //   // const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
  //   // const day = String(currentDate.getDate()).padStart(2, '0');

  //   // const formattedDate = ${year}-${month}-${day};

  //   // console.log("FORMATTED DATE>>>>", formattedDate);
  //   // const hours = currentDate.getHours()
  //   // const minutes = currentDate.getMinutes()
  //   // const seconds = currentDate.getSeconds()

  //   // const reminderDateTime = moment(formattedDate, 'YYYY-MM-DD').set({
  //   //   hour: hours,
  //   //   minute: minutes,
  //   //   second: seconds,
  //   // }).toDate()
  //   // console.log('reminderDateTime>>>>>', reminderDateTime);

  //   // const temp = new Date(reminderDateTime)

  //   PushNotification.localNotification({
  //     channelId: 'reminders',
  //     title: 'Noice',
  //     message: 'Your reminder has been set',
  //     // date: reminderDateTime,
  //   })
  // };

  // const Courses = () => {
  //   return (
  //     <View style={{ backgroundColor: colors.white, height: Utils.ScreenHeight(100) }}>
  //       <View style={{ marginTop: Utils.ScreenHeight(3), marginHorizontal: Utils.ScreenWidth(3) }}>
  //         <Text style={{ fontSize: Utils.ScreenHeight(2.6), color: colors.black, fontWeight: 500, }} >Top Courses in Personal{'\n'} Development</Text>
  //         <ScrollView horizontal={true}>
  //           <View style={{ marginRight: Utils.ScreenWidth(4) }}>
  //             <View style={{ height: Utils.ScreenHeight(15), borderRadius: 10, width: Utils.ScreenWidth(50), borderWidth: 1, marginTop: Utils.ScreenHeight(2), borderColor: colors.grey2 }}>
  //               <Image
  //                 source={ImagesPath.LegalBridge.ud1}
  //                 style={{ height: Utils.ScreenHeight(17), width: Utils.ScreenWidth(50), resizeMode: "contain" }} />
  //             </View>
  //             <Text style={{ marginTop: Utils.ScreenHeight(1), fontSize: Utils.ScreenHeight(1.8), color: colors.black, marginLeft: Utils.ScreenWidth(1) }}>Master your brain:{'\n'}Neuroscience for personal {'\n'}Development</Text>
  //           </View>
  //           <View style={{ marginRight: Utils.ScreenWidth(4) }}>
  //             <View style={{ height: Utils.ScreenHeight(15), borderRadius: 10, width: Utils.ScreenWidth(50), borderWidth: 1, marginTop: Utils.ScreenHeight(2), borderColor: colors.grey2 }}>
  //               <Image
  //                 source={ImagesPath.LegalBridge.ud3}
  //                 style={{ height: Utils.ScreenHeight(17), width: Utils.ScreenWidth(50), resizeMode: "contain" }} />
  //             </View>
  //             <Text style={{ marginTop: Utils.ScreenHeight(1), fontSize: Utils.ScreenHeight(1.8), color: colors.black, marginLeft: Utils.ScreenWidth(1) }}>Master your brain:{'\n'}Neuroscience for personal {'\n'}Development</Text>
  //           </View>
  //           <View style={{ marginRight: Utils.ScreenWidth(4) }}>
  //             <View style={{ height: Utils.ScreenHeight(15), borderRadius: 10, width: Utils.ScreenWidth(50), borderWidth: 1, marginTop: Utils.ScreenHeight(2), borderColor: colors.grey2 }}>
  //               <Image
  //                 source={ImagesPath.LegalBridge.ud2}
  //                 style={{ height: Utils.ScreenHeight(17), width: Utils.ScreenWidth(50), resizeMode: "contain" }} />
  //             </View>
  //             <Text style={{ marginTop: Utils.ScreenHeight(1), fontSize: Utils.ScreenHeight(1.8), color: colors.black, marginLeft: Utils.ScreenWidth(1) }}>Master your brain:{'\n'}Neuroscience for personal {'\n'}Development</Text>
  //           </View>


  //         </ScrollView>
  //       </View>
  //       <View style={{
  //         marginTop: Utils.ScreenHeight(3),
  //         marginHorizontal: Utils.ScreenWidth(5),
  //         paddingBottom: Utils.ScreenHeight(2), height: Utils.ScreenHeight(6), flexDirection: 'row', marginVertical: Utils.ScreenWidth(1), justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey2, paddingVertical: Utils.ScreenHeight(1)
  //       }}>
  //         <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
  //           <Text style={{ marginVertical: 5, fontSize: Utils.ScreenHeight(1.5), color: colors.grey, textAlign: 'center' }}>View Analysed Image</Text>
  //           <Text style={{ color: colors.black }}>Download Question Papers</Text>

  //         </View>
  //         <TouchableOpacity

  //           style={{ justifyContent: 'center' }}>
  //           <Image source={ImagesPath.home.right_arrow} style={{ width: 13, height: 13, resizeMode: 'contain', marginRight: Utils.ScreenWidth(3) }} />
  //         </TouchableOpacity>
  //       </View>

  //       <View style={{
  //         marginTop: Utils.ScreenHeight(3),
  //         marginHorizontal: Utils.ScreenWidth(5),
  //         paddingBottom: Utils.ScreenHeight(2), height: Utils.ScreenHeight(6), flexDirection: 'row', marginVertical: Utils.ScreenWidth(1), justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey2, paddingVertical: Utils.ScreenHeight(1)
  //       }}>
  //         <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
  //           <Text style={{ marginVertical: 5, fontSize: Utils.ScreenHeight(1.5), color: colors.grey, textAlign: 'center' }}>View Analysed Image</Text>
  //           <Text>Download Exam Resources</Text>

  //         </View>
  //         <TouchableOpacity

  //           style={{ justifyContent: 'center' }}>
  //           <Image source={ImagesPath.home.right_arrow} style={{ width: 13, height: 13, resizeMode: 'contain', marginRight: Utils.ScreenWidth(3) }} />
  //         </TouchableOpacity>
  //       </View>





  //     </View>,
  //   )
  // }

  const chairs = [
    require("../../assests/images/temps/chair1.png"),
    require("../../assests/images/temps/chair2.png"),
    require("../../assests/images/temps/chair3.png"),
    require("../../assests/images/temps/chair4.png"),
    require("../../assests/images/temps/chair5.png"),
    require("../../assests/images/temps/chair7.png"),
    require("../../assests/images/temps/chair8.png"),
  ]

  const tables = [
    require("../../assests/images/temps/table1.png"),
    require("../../assests/images/temps/table2.png"),
    require("../../assests/images/temps/table3.png"),
    require("../../assests/images/temps/table4.png"),
  ]

  const frames = [
    require("../../assests/images/temps/frame1.png"),
    require("../../assests/images/temps/frame2.png"),
    require("../../assests/images/temps/frame3.png"),
    require("../../assests/images/temps/frame4.png"),
    require("../../assests/images/temps/frame5.png"),
  ]

  const renderChairs = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { setChairImagePress(item); setChairPress(iconPress) }} style={{ marginHorizontal: 20, left: 120, marginVertical: 5 }}>
        <Image style={{ resizeMode: 'contain', width: 120, height: 120, borderRadius: 50, borderWidth: 1, backgroundColor: iconPress === item ? 'red' : 'white' }} source={item} />
      </TouchableOpacity>
    )
  }

  const renderTables = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { setTableImagePress(item); setTablePress(iconPress) }} style={{ marginHorizontal: 20, left: 120, marginVertical: 10, top: 20 }}>
        <Image style={{ resizeMode: 'contain', width: 120, height: 120, backgroundColor: iconPress === item ? 'red' : 'white' }} source={item} />
      </TouchableOpacity>
    )
  }

  const renderFrames = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { setFrameImagePress(item); setFramePress(iconPress) }} style={{ marginHorizontal: 20, left: 120, top: 20 }}>
        <Image style={{ resizeMode: 'contain', width: 120, height: 120, backgroundColor: iconPress === item ? 'red' : 'white' }} source={item} />
      </TouchableOpacity>
    )
  }
  

  console.log("ICon PRes>>>",iconPress)

  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'absolute', top: 40, alignSelf: 'center' }}>
        <Image style={{ width: Utils.ScreenWidth(135), height: Utils.ScreenHeight(50), resizeMode: 'cover', transform: [{ rotate: '90deg' }] }} source={{ uri: "https://t4.ftcdn.net/jpg/02/87/98/61/360_F_287986158_2Tz2w7QKcgmbpecZZzveGUdN9RNPB3c4.jpg " }} />
      </View>
      <View style={{ height: 40 }} />
      {tablePress === 'table' &&
        <View style={{ position: 'relative', top: 80, left: 0, width: 50, height: 50 }}>
          <Image style={{ width: Utils.ScreenWidth(45), height: Utils.ScreenHeight(15), resizeMode: 'cover', transform: [{ rotate: '90deg' }] }} source={tableImagePress} />
        </View>
      }
      <View style={{ height: 20 }} />
      <TouchableOpacity onPress={() => setIconPress('table')} style={{ position: 'relative', top: 20, left: 360, width: 50, height: 50 }}>
        <Image style={{ width: 50, height: 50, transform: [{ rotate: '90deg' }], borderRadius: 50, borderWidth: 1, backgroundColor: iconPress === 'table' ? 'red' : 'white' }} source={ImagesPath.earning.table} />
      </TouchableOpacity>
      {framePress === 'frame' &&
        <View style={{ position: 'relative', top: 100, left: 190, width: 50, height: 50 }}>
          <Image style={{ width: Utils.ScreenWidth(30), height: Utils.ScreenHeight(15), resizeMode: 'cover', transform: [{ rotate: '90deg' }] }} source={frameImagePress} />
        </View>
      }
      <View style={{ height: 20 }} />
      <TouchableOpacity onPress={() => setIconPress('frame')} style={{ position: 'relative', top: 20, left: 360, width: 50 }}>
        <Image style={{ width: 50, height: 50, transform: [{ rotate: '90deg' }], borderRadius: 50, borderWidth: 1, backgroundColor: iconPress === 'frame' ? 'red' : 'white' }} source={ImagesPath.earning.painting} />
      </TouchableOpacity>
      <View style={{ height: 30 }} />
      <TouchableOpacity onPress={() => setIconPress('mat')} style={{ position: 'relative', top: 20, left: 360, width: 50 }}>
        <Image style={{ width: 50, height: 50, transform: [{ rotate: '90deg' }], borderRadius: 50, borderWidth: 1, backgroundColor: iconPress === 'mat' ? 'red' : 'white' }} source={ImagesPath.earning.mat} />
      </TouchableOpacity>
      <View style={{ height: 30 }} />
      <TouchableOpacity onPress={() => setIconPress('plant')} style={{ position: 'relative', top: 20, left: 360, width: 50 }}>
        <Image style={{ width: 50, height: 50, transform: [{ rotate: '90deg' }], borderRadius: 50, borderWidth: 1, backgroundColor: iconPress === 'plant' ? 'red' : 'white' }} source={ImagesPath.earning.plant} />
      </TouchableOpacity>
      {chairPress === 'chair' &&
        <View style={{ position: 'relative', bottom: 50, left: 40, width: 50, height: 50 }}>
          <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} />
          <Image style={{ width: Utils.ScreenWidth(25), height: Utils.ScreenHeight(20), resizeMode: 'cover', transform: [{ rotate: '90deg' }] }} source={chairImagePress} />
        </View>
      }
      <View style={{ height: 30 }} />
      <TouchableOpacity onPress={() => setIconPress('chair')} style={{ position: 'relative', top: 20, left: 360, width: 50, height: 50 }}>
        <Image style={{ width: 50, height: 50, transform: [{ rotate: '90deg' }], borderRadius: 50, borderWidth: 1, backgroundColor: iconPress === 'chair' ? 'red' : 'white' }} source={ImagesPath.earning.chair} />
      </TouchableOpacity>
      {
        iconPress === "chair" ?
          <FlatList style={{ transform: [{ rotate: '90deg' }], right: 20, top: 70 }} data={chairs} numColumns={1} renderItem={renderChairs} />
          :
          iconPress === "table" ?
            <FlatList style={{ transform: [{ rotate: '90deg' }], right: 20, top: 70 }} data={tables} numColumns={1} renderItem={renderTables} />
            :
            iconPress === "frame" ?
              <FlatList style={{ transform: [{ rotate: '90deg' }], right: 20, top: 70 }} data={frames} numColumns={1} renderItem={renderFrames} />
              :
              <View style={{ position: 'absolute', bottom: 110, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', transform: [{ rotate: '90deg' }] }}>
                <Text>Tap icon to start your design</Text>
              </View>
      }
    </View >
  )
}

export default HomeDesign;