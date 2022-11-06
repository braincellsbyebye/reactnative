import React, { useState, useEffect } from 'react';
 import  {
    Text, 
    StyleSheet, 
    View,
    Image,
    ScrollView,
    TextInput,
    Button,
    Alert,
    
   } from 'react-native';
 
 const UserProfile = ({navigation}) => {

    const [data, setData] = useState('');
    const [isLoading, setLoading] = useState(true);

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [username, setUsername] = useState('');

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
 
    const Update = async () => {
        try{
            const response = await fetch(`http://10.0.2.2:8000/api/update-user/${parameter}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: pw,
                })
            });
            if ((response).status === 201) {
                setEmail('');
                setUsername('');
                setPw('');
            }
            Alert.alert('User Updated!');
            navigation.navigate('User');
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }
   return (

    <ScrollView>
     <View style={{ flex:1 }}>
     <Image style={styles.back} source={require('../images/backarrow.png')}></Image>  
      <View>
        <Text style={styles.editheader}>Edit Profile</Text>
      </View>
        <Text style={styles.circle}></Text>
        <Text style={styles.circle1}></Text> 
        <Image style={styles.edit} source={require('../images/edit.png')}></Image>  
      
      <View>
        <Text>First Name: {data.fname}</Text>
        <Text>Last Name: {data.lname}</Text>
        <Text style={styles.user}>Username</Text>
        <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setUsername(text)] }
            placeholder='Enter purpose'
            placeholderTextColor= 'gray'
            maxLength={15} 
            />
        <Text style={styles.email}>Email Address</Text>
        <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setEmail(text)] }
            placeholder='Enter purpose'
            placeholderTextColor= 'gray'
            maxLength={15} 
            />
        <Text style={styles.password}>Password</Text>
        <TextInput 
            style = { styles.input }
            onChangeText = { (text) => [setPw(text)] }
            placeholder='Enter Password'
            placeholderTextColor= 'gray'
            secureTextEntry
            />
        <Button onPress={Update} title="Test"></Button>

      </View>
        
      </View>
      </ScrollView>


 
   )
 }
 const styles = StyleSheet.create({  
  back:{
    height:20,
    marginTop:50,
    marginLeft:30,
  },
  input: {
    marginTop:10,
    paddingTop:5,
    borderWidth:1,
    borderRadius:10,
    marginBottom:10,
    width:290,
},
   editheader:{
    color:'black',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:35,
    fontFamily:'sans-serif-light',
    marginTop:20,

   },

   circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor:'#D8DCF4',
    marginLeft:150,
    marginTop:20
  },

  edit:{
    marginLeft:170,
    marginTop:-70
  },

  circle1: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor:'white',
    marginLeft:160,
    marginTop:-90
  },

  name:{
    padding:10,
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:12,
  },

  user:{
    padding:10,
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:12,
  },

  email:{
    padding:10,
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:12,
  },

  uname:{
    padding:10,
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:12,
  },

  password:{
    padding:10,
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:12,
  },

  birth:{
    padding:10,
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:12,
  },

  rectangle: {
    height: 50,
    width: 340,
    borderRadius: 10,
    backgroundColor:'#D8DCF4',
    marginLeft:30,
    marginTop:10
  },

  rectangle1: {
    height: 50,
    width: 340,
    borderRadius: 10,
    backgroundColor:'#D8DCF4',
    marginLeft:30,
    marginTop:10
  },

  rectangle2: {
    height: 50,
    width: 340,
    borderRadius: 10,
    backgroundColor:'#D8DCF4',
    marginLeft:30,
    marginTop:10
  },

  rectangle3: {
    height: 50,
    width: 340,
    borderRadius: 10,
    backgroundColor:'#D8DCF4',
    marginLeft:30,
    marginTop:10
  },

  rectangle4: {
    height: 50,
    width: 340,
    borderRadius: 10,
    backgroundColor:'#D8DCF4',
    marginLeft:30,
    marginTop:10
  },

  rectangle5: {
    height: 50,
    width: 340,
    borderRadius: 10,
    backgroundColor:'#D8DCF4',
    marginLeft:30,
    marginTop:10
  },  
 
 })
 
 
 export default UserProfile;
 