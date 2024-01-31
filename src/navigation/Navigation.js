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
import financialAid from '../screens/FinancialAid/financialAid';
import AIInterview from '../screens/AIInterview/AIInterview';
import LoginEmail from '../screens/RibbitLoginPage/LoginEmail';
import CreateAccount from '../screens/RibbitLoginPage/CreateAccount';
import FbFriends from '../screens/RibbitDiscover/FbFriends';
import DiscoverPeople from '../screens/RibbitDiscover/DiscoverPeople';
import AddProfile from '../screens/RibbitProfile/AddProfile';
import LoginPhone from '../screens/RibbitLoginPhone/LoginPhone';
import LoginOTP from '../screens/RibbitLoginPhone/LoginOTP';
import RibbitSearch from '../screens/RibbitSearch/RibbitSearch';
import ForYou from '../screens/RibbitSearch/ForYou';
import Accounts from '../screens/RibbitSearch/Accounts';
import Reels from '../screens/RibbitSearch/Reels';
import Audio from '../screens/RibbitSearch/Audio';
import Tags from '../screens/RibbitSearch/Tags';
import Location from '../screens/RibbitSearch/Location';
import Notification from '../screens/RibbitNotification/Notification';
import Challenges from '../screens/RibbitChallenges/Challenges';
import takeSurvey from '../screens/RibbitTakeSurvey/takeSurvey';
import Watch from '../screens/WatchData/Watch';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Watch"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name = "Notification" component = {Notification}/>
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
                <Stack.Screen name="financialAid" component={financialAid} />
                <Stack.Screen name = "LoginEmail" component = {LoginEmail}/>
                <Stack.Screen name = "CreateAccount" component = {CreateAccount}/>
                <Stack.Screen name = "FbFriends" component = {FbFriends}/>
                <Stack.Screen name = "DiscoverPeople" component = {DiscoverPeople}/>
                <Stack.Screen name = "AddProfile" component = {AddProfile}/>
                <Stack.Screen name = "LoginPhone" component = {LoginPhone}/>
                <Stack.Screen name = "LoginOTP" component = {LoginOTP}/>
                <Stack.Screen name = "RibbitSearch" component = {RibbitSearch}/>
                <Stack.Screen name = "ForYou" component = {ForYou}/>
                <Stack.Screen name = "Accounts" component = {Accounts}/>
                <Stack.Screen name = "Reels" component = {Reels}/>
                <Stack.Screen name = "Audio" component = {Audio}/>
                <Stack.Screen name = "Tags" component = {Tags}/>
                <Stack.Screen name = "Location" component = {Location}/>
                <Stack.Screen name = "Challenges" component = {Challenges}/>
                <Stack.Screen name = "takeSurvey" component = {takeSurvey}/>
                <Stack.Screen name = "Watch" component = {Watch}/>
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
                <Stack.Screen name="AIInterview" component={AIInterview} />
                <Stack.Screen 
                options={{ gestureEnabled: false }}
                name="ClientTabNavigator" component={ClientTabNavigator} />
       
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;