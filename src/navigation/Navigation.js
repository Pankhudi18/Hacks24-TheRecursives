import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash/Splash';
import SignupLawyer from '../screens/SignupLawyer/SignupLawyer';
import Verifyotp from '../screens/Verifyotp/Verifyotp';
import Settings from '../screens/Settings/Settings';
import VideoCall from '../screens/VideoCall/VideoCall';
import IntroScreen from '../screens/IntroScreen/IntroScreen';
import Signupclient from '../screens/Signupclient/Signupclient';
import Loginclient from '../screens/Loginclient/Loginclient';
import Verifyotpclient from '../screens/Verifyotpclient/Verifyotpclient';
import ClientTabNavigator from './ClientTabNavigator';
import Uploadtoipfs from '../screens/Uploadtoipfs/Uploadtoipfs';
import test from '../screens/test/test';
import LawyerDetails from '../screens/LawyerDetails/LawyerDetails';
import BookAppoinment from '../screens/BookAppoinment/BookAppoinment';
import OCR from '../screens/OCR/OCR';
import Register from '../screens/Register/Register';
import AcademicDetails from '../screens/AcademicDetails/AcademicDetails';
import Uploadfiles from '../screens/Uploadfiles/Uploadfiles';
import EligibilityScholarship from '../screens/Eligibility/EligibilityScholarship';
import ScholarshipDetails from '../screens/ScholarshipDetails.js/ScholarshipDetails';
import PlayQuiz from '../screens/Quizes/PlayQuiz';








const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{ headerShown: false }}>
                 <Stack.Screen name="Splash" component={Splash} />
                 <Stack.Screen name="AcademicDetails" component={AcademicDetails} />
                <Stack.Screen name="IntroScreen" component={IntroScreen} />
                <Stack.Screen name="SignupLawyer" component={SignupLawyer} />
                <Stack.Screen name="ScholarshipDetails" component={ScholarshipDetails} />
                <Stack.Screen name="EligibilityScholarship" component= {EligibilityScholarship}/>
                {/* <Stack.Screen name="financialAid" component= {financialAid}/> */}
                <Stack.Screen name="Verifyotp" component={Verifyotp} />
                <Stack.Screen name="VideoCall" component={VideoCall} />
                <Stack.Screen name="Uploadtoipfs" component={Uploadtoipfs} />
                <Stack.Screen name="test" component={test} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen
                name="Settings" component={Settings} />
                {/* Client screens */}
                <Stack.Screen name="Loginclient" component={Loginclient} />
                <Stack.Screen name="Uploadfiles" component={Uploadfiles} />
                <Stack.Screen name="Signupclient" component={Signupclient} />
                <Stack.Screen name="Verifyotpclient" component={Verifyotpclient} />
                <Stack.Screen name="LawyerDetails" component={LawyerDetails} />
                <Stack.Screen name="BookAppoinment" component={BookAppoinment} />
                <Stack.Screen name="OCR" component={OCR} />
                <Stack.Screen name="PlayQuiz" component={PlayQuiz} />
                <Stack.Screen 
                options={{ gestureEnabled: false }}
                name="ClientTabNavigator" component={ClientTabNavigator} />
                

                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;