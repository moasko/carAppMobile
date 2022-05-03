import React from 'react';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Home from './screens/Home';
import Scanner from './screens/Scanner';
import ScanneResults from './screens/ScanneResults';
import MapTrack from './screens/MapTrack';
import InvalidQr from './screens/InvalidQr';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen options={{
          headerShown: false
        }} name="Home" component={Home} />

        <Stack.Screen options={{
          headerShown: false
        }} name="Scanner" component={Scanner} />

        <Stack.Screen name="ScanneResults" 
        options={{
          headerShown: false
        }}
        component={ScanneResults} />

        <Stack.Screen options={{
          headerShown: false
        }} name="MapTrack" component={MapTrack} />

        <Stack.Screen options={{
          headerShown: false
        }} component={InvalidQr} name="InvalidQr" />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


