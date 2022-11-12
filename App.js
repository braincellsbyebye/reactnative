
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login'
import SignupScreen from './screens/Signup'
import TabNavigator from './navigation/TabNavigator';
import LoginFormScreen from './screens/LoginForm';
import AptViewScreen from './screens/aptview';
import NotifScreen from './screens/notification';
import MedCert from './screens/medcert';
import About from './screens/About';
import Policy from './screens/Policy';
import DetailsScreen from './screens/Details';
import UserProfile from './screens/UserProfile';
import ClinicApt from './screens/aptviewclinic';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{ title: 'Home',headerShown: false }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="LoginForm" component={LoginFormScreen} />
        <Stack.Screen name="AptView" component={AptViewScreen} />
        <Stack.Screen name="Notification" component={NotifScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Policy" component={Policy} />
        <Stack.Screen name="Index" component={TabNavigator} />
        <Stack.Screen name="MedCert" component={MedCert} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="AptClinic" component={ClinicApt} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;