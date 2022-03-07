import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './pages/Splash';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Splash" component={Splash}/>
       <Stack.Screen name="Login" component={Login}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

