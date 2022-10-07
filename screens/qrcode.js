import React from 'react';
import {View, Button, Text} from 'react-native';

const QRScreen = ( {navigation} ) => {
    return(
        <View style = {{ flex: 1, justifyContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{ fontSize: 20, color: 'black'}}>QR Code View</Text>
        </View>
    );
};

export default QRScreen;