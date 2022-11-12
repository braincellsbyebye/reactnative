import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';

const IndexScreen = ( {navigation} ) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let parameter = global.id

    const getApt = async () => {
        try {
        const response = await fetch(`http://10.0.2.2:8000/api/apt/${parameter}`);
        const json = await response.json();
        setData(json.appointment);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    const getDoc = async () => {
        try {
        const response = await fetch(`http://10.0.2.2:8000/api/doctors`);
        const json = await response.json();
        setData(json.doctors);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        getApt();
    }, []);
    return(
        <View style={{ flex:1, }}>
            <View style = {{ backgroundColor: "#011387",flex: 0.5}}>
                <Text style = {{ fontSize: 18, color: 'white', marginTop: 10, marginLeft: 10}}>WELCOME!</Text>
                <Image style={styles.gt2} source = { require('../images/hannah.png')}/>
                <Text style = {styles.gt3}>{global.username}</Text>
                <Text style = {styles.gt4}>{global.email}</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Notification')}>
                    <Image style={styles.gt5} source = { require('../images/bell.png')}/>
                </TouchableOpacity>
            </View>
            <View style = {{ backgroundColor: "white",flex: 1, borderRadius:20, marginTop: -95}}>
                <View style={{ marginLeft: 15, marginTop: 15,}}>
                    <TouchableOpacity style={styles.an}>
                        <Text>Appointments</Text>
                    </TouchableOpacity>
                    {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        style = {{ height: 550, marginLeft: 35 }}
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {navigation.navigate('Details', {item:item})}}>
                                <View style={styles.cont}>
                                    <Text style = {styles.txt}>{item.aptcategory}{"\n"}</Text>
                                </View>
                            </TouchableOpacity>
                            
                        )}
                    />
                    )}
                    <TouchableOpacity style={styles.sp}>
                        <Text>Specialist</Text>
                    </TouchableOpacity>
                    {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        style = {{ height: 550, marginLeft: 150 }}
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {navigation.navigate('Details', {item:item})}}>
                                <View style={styles.cont}>
                                    <Text style = {styles.txt}>{item.docname}{"\n"}</Text>
                                </View>
                            </TouchableOpacity>
                            
                        )}
                    />
                    )}
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