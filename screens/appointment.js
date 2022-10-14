import React from 'react';
import {View, Image, StyleSheet, Button, Text, TouchableOpacity} from 'react-native';

const AppointmentScreen = ( {navigation} ) => {
    return(
        <View style = {{ flex: 1,}}>
            <Image style={styles.img} source = { require('../images/aptimg.png')}/>
            <Text style={styles.bk}>Book Appointment</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('AptView')}>
                <Image style={styles.img2} source = { require('../images/clinicimg.png')}/>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    img: {
      marginTop: -20,
    },
    bk: {
        marginTop: 20,
        marginLeft:20,
        fontWeight: 'bold',
        fontSize:18,
    },
    img2: {
        marginTop:50,
        marginLeft:45,
    },
  })

export default AppointmentScreen;