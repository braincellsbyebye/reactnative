import React, { useState, useEffect } from 'react';
import {View, Button, Text, TextInput, StyleSheet, Alert} from 'react-native';

const Signup = ( {navigation} ) => {
    const [name, setUsername] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const AddUser = async () => {
        try{
            const response = await fetch('http://10.0.2.2:8000/api/mregister', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: name,
                    fname: fname,
                    lname: lname,
                    email: email,
                    password: pw,
                })
            });
            if ((response).status === 201) {
                setUsername('');
                setFname('');
                setLname('');
                setEmail('');
                setPw('');
            }
            Alert.alert('User Created!');
            navigation.navigate('LoginForm');
        const json = await response.json();
        setData(json.useracc);
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
            onChangeText = { (text) => [setUsername(text)] }
            placeholder='Enter Username'
            placeholderTextColor= 'gray'
            maxLength={15} 
            />
            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setFname(text)] }
            placeholder='Enter First Name'
            placeholderTextColor= 'gray'
            maxLength={30} 
            />
            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setLname(text)] }
            placeholder='Enter Last Name'
            placeholderTextColor= 'gray'
            maxLength={30} 
            />
            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setEmail(text)] }
            placeholder='Enter Email'
            placeholderTextColor= 'gray'
            />
            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setPw(text)] }
            placeholder='Enter Password'
            placeholderTextColor= 'gray'
            secureTextEntry
            />
            <Button onPress={ AddUser } title='Register'></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginTop:10,
        paddingTop:5,
        borderWidth:1,
        borderRadius:10,
        marginBottom:10,
        width:290,
    },
})

export default Signup;