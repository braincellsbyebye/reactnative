import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import IndexScreen from '../screens/index';
import AppointmentScreen from '../screens/appointment';
import QRScreen from '../screens/qrcode';
import UserScreen from "../screens/User";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Index" component={IndexScreen} options={{ headerShown:false }}/>
            <Tab.Screen name="QR Code" component={QRScreen} options={{ headerShown:false }}/>
            <Tab.Screen name="Appointment" component={AppointmentScreen} options={{ headerShown:false }}/>
            <Tab.Screen name="User" component={UserScreen} options={{ headerShown:false }}/>
        </Tab.Navigator>
    );
    
}

export default TabNavigator;