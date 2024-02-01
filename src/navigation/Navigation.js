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
import AIInterview from '../screens/AIInterview/AIInterview';
import Inspo from '../screens/DIY/Inspo';
import BedRoom from '../screens/DIY/BedRoom';
import LivingRoom from '../screens/DIY/LivingRoom';
import InspoProcess from '../screens/DIY/InspoProcess';
import DecorHome from '../screens/DecorHome/DecorHome';
import DesignerHome from '../screens/DesignerHome/DesignerHome';
import DesignerList from '../screens/DesignerList/DesignerList';
import HomeDesign from '../screens/HomeDesign/HomeDesign';
import Chatbot from '../screens/ChatBot/ChatBot';
import Ecommerce from '../screens/Ecommerce/Ecommerce';
import Dashboard from '../screens/Dashboard/Dashboard';
import UploadImgAI from '../screens/UploadImgAI/UploadImgAI';
import OnboardDesigner from '../screens/OnboadDesigner.js/OnboardDesigner';
import FbLogin1 from '../screens/FireBase/FbLogin1';
import RegisterL from '../screens/FireBase/RegisterL';
import ChatFeature from '../screens/ChatFeature/ChatFeature';
import Payment from '../screens/Payment/Payment';
import MentorProfile from '../screens/MentorProfile/MentorProfile';
import LoginDesigner from '../screens/LoginDesigner/LoginDesigner';
import LoginDoctor from '../screens/LoginDoctor/LoginDoctor';
import OnboardWelcome from '../screens/OnboardWelcome/OnboardWelcome';
import PMSocials from '../screens/PMSocials/PMSocials';
import DashboardPM from '../screens/DashboardPM/DashboardPM';


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
                {/* <Stack.Screen name="financialAid" component={financialAid} /> */}
                <Stack.Screen name="Settings" component={Settings} />

                <Stack.Screen name="Inspo" component={Inspo} screenOptions={{ headerShown: false }}/>
                <Stack.Screen name="BedRoom" component={BedRoom} screenOptions={{ headerShown: false }}/>
                <Stack.Screen name="LivingRoom" component={LivingRoom} screenOptions={{ headerShown: false }}/>
                <Stack.Screen name="InspoProcess" component={InspoProcess} screenOptions={{ headerShown: false }}/>
                <Stack.Screen name="DecorHome" component={DecorHome} screenOptions={{ headerShown: false }}/>
                <Stack.Screen name="DesignerHome" component={DesignerHome} screenOptions={{ headerShown: false }}/>
                <Stack.Screen name="DesignerList" component={DesignerList} screenOptions={{ headerShown: false }}/>
                <Stack.Screen name="OnboardDesigner" component={OnboardDesigner} screenOptions={{ headerShown: false }}/>
              
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
                <Stack.Screen name='HomeDesign' component={HomeDesign}/>   
                <Stack.Screen name='ChatBot' component={Chatbot}/>  
                <Stack.Screen name='Ecommerce' component={Ecommerce}/>       
                <Stack.Screen name='Dashboard' component={Dashboard}/> 
                <Stack.Screen name='UploadImgAI' component={UploadImgAI}/>        
                <Stack.Screen name='FbLogin1' component={FbLogin1}/>
                <Stack.Screen name='RegisterL' component={RegisterL}/>
                <Stack.Screen name='Chat' component={ChatFeature}/>
                <Stack.Screen name='Payment' component={Payment}/>
                <Stack.Screen name='MentorProfile' component={MentorProfile}/>
                <Stack.Screen name='LoginDesigner' component={LoginDesigner}/>
                <Stack.Screen name='LoginDoctor' component={LoginDoctor}/>
                <Stack.Screen name='OnboardWelcome' component={OnboardWelcome}/>
                <Stack.Screen name='PMSocials' component={PMSocials}/>
                <Stack.Screen name='DashboardPM' component={DashboardPM}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;