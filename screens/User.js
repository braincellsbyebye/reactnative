import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native';

const UserScreen = ( {navigation} ) => {
    return(
        <View style={{ flex:1, }}>
            <View style = {{ backgroundColor: "#011387",flex: 0.4, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={styles.gt2} source = { require('../images/hannah.png')}/>
                <Text style = {{ fontSize: 18, color: 'white'}}>{global.username}</Text>
                <Text style = {{ fontSize: 11, color: 'white'}}>{global.email}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                    <View style={styles.editprof}>
                        <Text style={{ fontWeight:'bold', color: 'black', }}>Edit Profile</Text>
                        <Image style={styles.gt} source = { require('../images/gt.png')}/>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{ marginTop: 15, marginLeft: 15, }}>PREFERENCES</Text>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <View style={styles.edit3}>
                        <Text style={{ fontWeight:'bold', color: 'black', }}>About</Text>
                        <Image style={styles.gt1} source = { require('../images/gt.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Policy')}>
                <View style={styles.edit2}>
                        <Text style={{ fontWeight:'bold', color: 'black', }}>Policy</Text>
                        <Image style={styles.gt1} source = { require('../images/gt.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UpdatePw')}>
                <View style={styles.edit2}>
                        <Text style={{ fontWeight:'bold', color: 'black', }}>Update Password</Text>
                        <Image style={styles.gt1} source = { require('../images/gt.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => [Alert.alert("You Have been successfully logged out"), navigation.popToTop()] }>
                <View style={styles.edit2}>
                        <Text style={{ fontWeight:'bold', color: 'black', }}>Logout</Text>
                        <Image style={styles.gt1} source = { require('../images/gt.png')}/>
                </View>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    editprof: {
      backgroundColor: 'white',
      padding:5,
      borderRadius: 20,
      width: 150,
      alignItems: 'center',
      marginTop:15,
    },
    gt: {
        width:10,
        height:10,
        marginLeft: 110,
        marginTop: -12,
      },
    gt2: {
    width:50,
    height:50,
    borderRadius: 50,
    marginTop: -12,
    },
    gt1: {
        width:10,
        height:10,
        marginLeft: 290,
        marginTop: -12,
      },
    edit1: {
      backgroundColor: 'white',
      padding:15,
      width: 320,
      marginTop:10,
      shadowOpacity:1,
      marginLeft: 30,
    },
    edit2: {
        backgroundColor: 'white',
        padding:15,
        width: 320,
        marginTop:5,
        shadowOpacity:1,
        marginLeft: 30,
      },
      edit3: {
        backgroundColor: 'white',
        padding:15,
        width: 320,
        marginTop:10,
        shadowOpacity:1,
        marginLeft: 30,
      },
  })
export default UserScreen;