import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';

const HScreen = ( {navigation} ) => {
    const [data, setData] = useState("");
    const [isLoading, setLoading] = useState("");
    let parameter = global.id

    const getUserDetails = async () => {
        try {
        const response = await fetch(`http://10.0.2.2:8000/api/edit/${parameter}`);
        const json = await response.json();
        setData(json.useracc);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        getUserDetails();
    }, []);
    return(
        <View style={{ flex:1, }}>
            <View style = {{ backgroundColor: "#011387",flex: 0.5}}>
                <Text style = {{ fontSize: 18, color: 'white', marginTop: 10, marginLeft: 10}}>WELCOME!</Text>
                <Image style={styles.gt2} source = { require('../images/hannah.png')}/>
                <Text style = {styles.gt3}>{data.username}</Text>
                <Text style = {styles.gt4}>{data.email}</Text>
                <Image style={styles.gt5} source = { require('../images/logo2.png')}/>
            </View>
            <View style = {{ backgroundColor: "white",flex: 1, borderRadius:20, marginTop: -95}}>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 150 }}>
                    <Text style={styles.txt}>Get Started</Text>
                    <Text style={styles.txt}>__________________________________________________</Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('Appointment')}>
                        <Text style={styles.txt}>Want to book an appointment? Click Here!</Text>
                    </TouchableOpacity>
                    <Text style={styles.txt}>__________________________________________________</Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('RequestMedicalCertificate')}>
                        <Text style={styles.txt}>Request a medical certificate for pickup? Click Here!</Text>
                    </TouchableOpacity>
                    <Text style={styles.txt}>__________________________________________________</Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('Appointments')}>
                        <Text style={styles.txt}>Want to see accepted appointments? Click Here!</Text>
                    </TouchableOpacity>
                    <Text style={styles.txt}>__________________________________________________</Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('Doctor')}>
                        <Text style={styles.txt}>Want to see our Doctors? Click Here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
};
const styles = StyleSheet.create({
    txt: {
        color: 'black'
    },
    cont: {
        marginLeft: 10
    },
    an: {
        marginLeft:20,
        marginTop:30,
    },
    sp: {
        marginLeft:250,
        marginTop:-570,
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
        width:100,
        height:100,
        borderRadius: 50,
        marginTop: -60,
        marginLeft: 270,
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
export default HScreen;