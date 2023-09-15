import { React, useEffect } from 'react'
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Utils, colors } from '../../contants';
import { useNavigation } from '@react-navigation/native';
import PushNotification from 'react-native-push-notification'
import moment, { min } from 'moment';

const Prepare = () => {
  const navigation = useNavigation();
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

  //   const schduleNotification = () => {
  //     const currentDate = new Date();  // This creates a new Date object with the current date and time
  //     console.log("HOURS>>>",currentDate.getHours());
  //     const year = currentDate.getFullYear();
  //     const month = String(currentDate.getMonth() + 1).padStart(2, '0');  // Adding 1 because months are zero-based
  //     const day = String(currentDate.getDate()).padStart(2, '0');
  
  //     const formattedDate = `${year}-${month}-${day}`;

  //     console.log("FORMATTED DATE>>>>", formattedDate);
  //     const hours = currentDate.getHours()
  //     const minutes = currentDate.getMinutes()
  //     const seconds = currentDate.getSeconds()
  
  //     const reminderDateTime = moment(formattedDate, 'YYYY-MM-DD').set({
  //       hour: hours,
  //       minute: minutes,
  //       second: seconds,
  //     }).toDate()
  //     // const reminderDateTime = moment(`${date1} ${time}`, 'YYYY-MM-DD hh:mm:ss A').utc().format();
  //     console.log('reminderDateTime>>>>>', reminderDateTime);
  
  //     const temp = new Date(reminderDateTime)
  
  //     PushNotification.localNotificationSchedule({
  //       channelId: 'reminders',
  //       title: 'Noice',
  //       message: 'Your reminder has been set',
  //       date: temp,
  //     })
  //   };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <TouchableOpacity onPress={() => {navigation.navigate('test')}} style={{ height: Utils.ScreenHeight(7), width: '80%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary, marginVertical: Utils.ScreenHeight(2), borderRadius: 5 }}>
        <Text style={{ color: colors.white, fontSize: 17, fontWeight: '800' }}>Start Interview</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Prepare;
