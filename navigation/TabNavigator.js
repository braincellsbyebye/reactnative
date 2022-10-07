import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import HomeScreen from '../screens/Home';
import AppointmentScreen from '../screens/appointment';
import QRScreen from '../screens/qrcode';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="QR Code" component={QRScreen}/>
            <Tab.Screen name="Appointment" component={AppointmentScreen}/>
        </Tab.Navigator>
    );
    
}

export default TabNavigator;