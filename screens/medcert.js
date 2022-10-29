import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';

const MedCert = ( {navigation} ) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let parameter = global.id

    const getMed = async () => {
        try {
        const response = await fetch(`http://10.0.2.2:8000/api/medi/${parameter}`);
        const json = await response.json();
        console.log(json);
        setData(json.reqmed);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        getMed();
    }, []);
    return(
        <View style = {{ padding: 30 }}>
            <Text style = { styles.header }>Your Medical Certificate</Text>
            <Text>{data.fname}</Text>
            <Text>{data.lname}</Text>
            <Text>{data.verdict}</Text>
            <Text style={styles.txt}>{parameter}</Text>
        </View>
    );
}
export default MedCert;
const styles = StyleSheet.create({
    appButtonText: {
      fontSize: 30,
      color: "white",
      alignSelf: "center",
      fontFamily:"sans-serif-condensed"
    },
    appButtonContainer: {
        backgroundColor:'#4350A8',
        height:40,
        width:205,
        borderRadius:10,
        marginTop:50,
    },
    txt: {
        color: 'black'
    }
  })
