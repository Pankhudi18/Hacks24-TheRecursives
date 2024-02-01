import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import RazorpayCheckout from 'react-native-razorpay';
import { colors } from '../../contants';

const Payment = () => {
    const pay = ()=>{


      var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.jpg',
        currency: 'INR',
        key: 'rzp_test_fkXrfkoxh732OT',
        amount: '1',
        name: 'Mentor Match',
        order_id: 'order_NPzHYf5gH2IiQz',//Replace this with an order_id created using Orders API.
        prefill: {
          email: 'visheshgatha@gmail.com',
          contact: '9644679096',
          name: 'Vishesh Gatha'
        },
        theme: {color: '#374785'}
      }
      RazorpayCheckout.open(options).then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      }).catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
       
    }
    
  return (
    <SafeAreaView>
      <Text style={{color: colors.black}}
      onPress={()=>{pay()}}
      >Payment</Text>
      
   </SafeAreaView>
  )
}

export default Payment