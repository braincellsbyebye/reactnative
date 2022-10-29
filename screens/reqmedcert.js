import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const ReqMed = ( {navigation} ) => {

    var v_id = global.id
    var v_fname = global.fname
    var v_lname = global.lname
    var v_ver = "TBA"

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const ReqCert = async () => {
        try{
            const response = await fetch('http://10.0.2.2:8000/api/reqmed', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fname: v_fname,
                    lname: v_lname,
                    verdict: v_ver,
                    uid: v_id,
                })
            });
            alert('Request Success!');
        const json = await response.json();
        setData(json.reqmed);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    return(
        <View style = {{ flex: 1, justifyContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <Image source = { require('../images/qrscan.png')}/>
            <Text style = {{ fontSize: 20, color: 'black'}}>Request Your Medical Certificate</Text>
            <TouchableOpacity onPress={ReqCert} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Request</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MedCert')} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Get Certificate</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    appButtonText: {
      fontSize: 25,
      color: "white",
      alignSelf: "center",
      fontFamily:"sans-serif-condensed"
    },
    appButtonContainer: {
        backgroundColor:'#4350A8',
        height:40,
        width:205,
        borderRadius:10,
        marginTop:20,
    },
  })
export default ReqMed;