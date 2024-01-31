import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/navigation/Navigation';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications



console.disableYellowBox = true;

function App() {
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>

        <Navigation />

    </GestureHandlerRootView>

    
  );
}

export default App;

