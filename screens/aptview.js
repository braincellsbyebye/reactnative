import React, { useState, useEffect } from 'react';
import {View, Button, Text, TextInput, StyleSheet, Alert} from 'react-native';

const AptView = ( {navigation} ) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [purpose, setPurpose] = useState('');

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    var x = global.id
    var y = global.fname
    var z = global.lname

    const getApt = async () => {
        try {
        const response = await fetch('http://10.0.2.2:8000/api/appointment');
        const json = await response.json();
        setData(json.appointment);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        getApt();
    }, []);

    const AddApt = async () => {
        try{
            const response = await fetch('http://10.0.2.2:8000/api/addapt', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fname: y,
                    lname: z,
                    aptcategory: category,
                    aptdate: date,
                    apttime: time,
                    aptpurpose: purpose,
                    user_id: x,
                })
            });
            if ((response).status === 201) {
                setName('');
                setCategory('');
                setDate('');
                setTime('');
                setPurpose('');
                setid('');
            }
            Alert.alert('Appointment Set!');
            navigation.navigate('Appointment');
        const json = await response.json();
        setData(json.appointment);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }


    return(
        <View style = {{ flex: 1, justifyContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setCategory(text)] }
            placeholder='Enter Category (Dental/Clinic)'
            placeholderTextColor= 'gray'
            maxLength={6} 
            />
            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setDate(text)] }
            placeholder='Enter Date'
            placeholderTextColor= 'gray'
            maxLength={15} 
            />
            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setTime(text)] }
            placeholder='Enter Time'
            placeholderTextColor= 'gray'
            maxLength={15} 
            />
            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setPurpose(text)] }
            placeholder='Enter purpose'
            placeholderTextColor= 'gray'
            maxLength={15} 
            />
            <Button onPress={ AddApt } title='Set Appointment'></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
    padding: 2,
    width: 300,
    height: 40,
    marginLeft: 30,
    marginBottom: 10,
    borderColor: 'gray',
    borderBottomWidth: 1.5,
    shadowRadius: 10,
    fontSize: 20,
    color: 'black',
    },
})

export default AptView;