
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import SignupScreen from './screens/Signup'
import TabNavigator from './navigation/TabNavigator';
import LoginFormScreen from './screens/LoginForm';
import AptViewScreen from './screens/aptview';
import NotifScreen from './screens/notification';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home',headerShown: false }}
        />
        <Stack.Screen name="Selection" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="LoginForm" component={LoginFormScreen} />
        <Stack.Screen name="AptView" component={AptViewScreen} />
        <Stack.Screen name="Notification" component={NotifScreen} />
        <Stack.Screen name="Index" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;