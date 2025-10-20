 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import HomeScreen from './src/components/HomeScreen';
 import LoginScreen from './src/components/LoginScreen';
 import PulseiraScreen from './src/components/PulseiraScreen';
 import InfoScreen from './src/components/InfoScreen';
 
 
 const Stack = createStackNavigator();
 
 export default function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Pulseira" component={PulseiraScreen} />
         <Stack.Screen name="Info" component={InfoScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }