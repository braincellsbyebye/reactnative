import React, {} from 'react';
import  {
   Text, 
   StyleSheet, 
   View,
   TextInput,
   TouchableOpacity,
  } from 'react-native';

const App = ({ onPress }) => {

  return (
    <View style={styles.container}>
       <View style={styles.ovalShape}></View>
       
     <View>
       <Text style={styles.headerText}>'Hippo-Campus'</Text> 
     </View>

     <View>
     <Text style={styles.subheaderText}>MSEUF’s first beta web based and mobile 
       application clinic management system </Text> 
     </View>

     <View>
       <View>
         <Text style={styles.title}>SIGN UP</Text> 
       </View>
     </View>

     <View>
     <TextInput
         placeholder = "Email"
         style={styles.input}>
       </TextInput>
       <TextInput
         placeholder = "Password"
         style={styles.input1}
         secureTextEntry>
       </TextInput>
       <TextInput
         placeholder = "Confirm Password"
         style={styles.input2}
           secureTextEntry>
       </TextInput>

     </View>

     <TouchableOpacity 
         style={styles.button}
          title='Sign Up'>
       <Text style={styles.text}>Sign Up</Text>
       </TouchableOpacity>


       

  
    </View>
  
  )
}

const styles = StyleSheet.create({
  container:{
   flex: 1,
   justifyContent:"center",
   backgroundColor:"white",
   alignItems:"center",
   paddingTop:350,
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
  ovalShape:{
   marginTop:-540,
   width:250,
   height:150,
   borderRadius:90,
   transform: [{scale:2}],
   backgroundColor:"#6C85BD",
   opacity:0.3,
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


export default App;
