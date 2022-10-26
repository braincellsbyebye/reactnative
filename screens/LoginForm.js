import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const LoginFormScreen = ( {navigation} ) => {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();

  const myfun = async () => {
    await fetch('http://10.0.2.2:8000/api/mlogin', {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'email':email, 'password':pw})
    }).then(res => res.json())
    .then(resData =>{
      if ("error" in resData) {
        alert('Login Credentials do not match')
      } else {
        global.id = resData.id
        global.username = resData.username
        global.email = resData.email
        global.fname = resData.fname
        global.lname = resData.lname
        navigation.navigate('Index')
      }
    })
  }

    return(
      <View style={styles.container}>
       
     <View>
       <Text style={styles.headerText}>'Hippo-Campus'</Text> 
     </View>

     <View>
     <Text style={styles.subheaderText}>MSEUF’s first beta web based and mobile 
       application clinic management system </Text> 
     </View>

     <View>
       <View>
         <Text style={styles.title}>LOGIN</Text> 
       </View>
     </View>

     <View>
     <TextInput
         placeholder = "Email"
         style={styles.input}
         value={email}
         onChangeText={(value) => setEmail(value)}
         >
       </TextInput>
       <TextInput
         placeholder = "Password"
         style={styles.input1}
         value={pw}
         onChangeText={(value) => setPw(value)}
         secureTextEntry>
       </TextInput>
       <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text>Not registered? Sign up <Text style={{ color: 'blue' }}>here</Text></Text></TouchableOpacity>
     </View>

     <TouchableOpacity 
         style={styles.button}
         title='Sign Up'
         onPress={myfun}
         >
       <Text style={styles.text}>LOGIN</Text>
       </TouchableOpacity>
    </View>
    );
};
const styles = StyleSheet.create({
  here:{
    marginTop: 30,
   }, 
    container:{
     flex: 1,
     justifyContent:"center",
     backgroundColor:"white",
     alignItems:"center",
     marginTop: 90,
    }, 
    headerText:{
      fontSize:32,
      textAlign:"center",
      fontWeight:"bold",
      marginTop:-100,
      fontFamily:"sans-serif-light",
      color:"black"
  
    },
    subheaderText:{
     fontSize:13,
     textAlign:"center",
     marginTop:-30,
     color:"black",
     fontWeight:"bold",
     fontFamily:"sans-serif-thin",
     justifyContent:"center",
   
   },
    title:{
     fontSize:25,
     marginTop:140,
     color:"black",
     fontFamily:"sans-serif-medium",
    },
    
   input:{
     marginTop:40,
     paddingTop:5,
     borderWidth:1,
     borderRadius:10,
     marginBottom:10,
     width:290,
   },
   input1:{
     marginTop:10,
     paddingTop:5,
     borderWidth:1,
     borderRadius:10,
     marginBottom:10,
     width:290,
   },
  
   input2:{
     marginTop:10,
     paddingTop:5,
     borderWidth:1,
     borderRadius:10,
     marginBottom:10,
     width:290,
   },
  
    text: {
      fontSize: 30,
      color: "white",
      alignSelf: "center",
      paddingLeft:5,
      fontFamily:"sans-serif-condensed"
    },
    button:{
     backgroundColor:'#4350A8',
     height:40,
     width:205,
     borderRadius:10,
     marginTop:15,
     marginLeft:5,
   },
  })

export default LoginFormScreen;