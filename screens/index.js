import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Touchable} from 'react-native';

const IndexScreen = ( {navigation} ) => {
    return(
        <View style={{ flex:1, }}>
            <View style = {{ backgroundColor: "#011387",flex: 0.5}}>
                <Text style = {{ fontSize: 18, color: 'white', marginTop: 10, marginLeft: 10}}>WELCOME!</Text>
                <Image style={styles.gt2} source = { require('../images/hannah.png')}/>
                <Text style = {styles.gt3}>Name</Text>
                <Text style = {styles.gt4}>User ID</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Notification')}>
                    <Image style={styles.gt5} source = { require('../images/bell.png')}/>
                </TouchableOpacity>
            </View>
            <View style = {{ backgroundColor: "white",flex: 1, borderRadius:20, marginTop: -95}}>
                <View style={{ marginLeft: 15, marginTop: 15,}}>
                    <TouchableOpacity style={styles.an}>
                        <Text>Announcement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sp}>
                        <Text>Specialist</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    an: {
        marginLeft:20,
        marginTop:30,
    },
    sp: {
        marginLeft:250,
        marginTop:-17,
    },
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
    marginTop: 15,
    marginLeft: 10,
    },
    gt5: {
        width:40,
        height:40,
        borderRadius: 50,
        marginTop: -75,
        marginLeft: 330,
        },
    gt3: {
        color: 'white',
        marginLeft: 75,
        marginTop: -45,
        fontSize: 15,
        },
    gt4: {
        color: 'white',
        marginLeft: 75,
        fontSize:11,
        },
    gt1: {
        width:10,
        height:10,
        marginLeft: 290,
        marginTop: -12,
      },
  })
export default IndexScreen;