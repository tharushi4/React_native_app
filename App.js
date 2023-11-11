import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import IndianScreen from './screens/IndianScreen';
import ItalianScreen from './screens/ItalianScreen';
import ChineseScreen from './screens/ChineseScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Signup' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'Details' }} />
        <Stack.Screen name="Indian Section" component={IndianScreen} options={{ title: 'Indian Section' }} />
        <Stack.Screen name="Italian Section" component={ItalianScreen} options={{ title: 'Italian Section' }} />
        <Stack.Screen name="Chinese Section" component={ChineseScreen} options={{ title: 'Chinese Section' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
