import React, { useState, useEffect } from 'react';
import {View, Button, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Modal} from 'react-native';
import { ModalPicker } from './components/ModalPicker'
import { MDPicker } from './components/MD';

const ClinicApt = ( {navigation} ) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [purpose, setPurpose] = useState('');

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [t, setT] = useState('Select Time...');

    const [isModalVisible, setisModalVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    var x = global.id
    var y = global.fname
    var z = global.lname
    var v_ver = "TBA"
    var ct = "Clinic"

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
                    aptcategory: ct,
                    aptdate: date,
                    apttime: t,
                    aptpurpose: purpose,
                    aptverify: v_ver,
                    user_id: x,
                })
            });
            if ((response).status === 201) {
                setName('');
                setCategory('');
                setDate('');
                setT('');
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

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const settheData = (option) => {
        setChooseData(option)
    }

    const cmv = (bool) => {
        setModalVisible(bool)
    }

    const sd = (option) => {
        setT(option)
    }

    return(
        <View style = {{ flex: 1, justifyContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            
            <Text>{ct} Appointment</Text>

            <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setDate(text)] }
            placeholder='Enter Date'
            placeholderTextColor= 'gray'
            maxLength={15} 
            />

            <TouchableOpacity style={styles.opt} onPress={() => cmv(true) }>
                <Text>{t}</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='fade'
                visible={modalVisible}
                nRequestClose={() => cmv(false)}
            >
                <MDPicker 
                    changeModalVisibility={cmv}
                    setData={setT}
                />
            </Modal>

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
        marginTop:10,
        paddingTop:5,
        borderWidth:1,
        borderRadius:10,
        marginBottom:10,
        width:290,
    },
    opt: {
        marginTop:10,
        paddingTop:12,
        paddingBottom:12,
        borderWidth:1,
        borderRadius:10,
        marginBottom:10,
        width:290,
    }
})

export default ClinicApt;