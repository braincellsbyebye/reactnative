import React from 'react';
import  {
   Text,
   Image, 
   StyleSheet, 
   View,
   TouchableOpacity,
  } from 'react-native';

const App = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.title}>Select Yourself As</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Selection')} style={styles.appButton}>
        <Text style={styles.appButtonText}>STUDENT AND EMPLOYEE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Selection')} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>CLINIC PERSONNEL</Text>
      </TouchableOpacity>


  
    </View>
  
  )
}

const styles = StyleSheet.create({
  logo:{
    width:250,
    height:150,
    marginTop:110,
    marginLeft:70,
  },
  title:{
    fontFamily:"serif",
    marginLeft:135,  
    fontSize:15,
    marginTop:90, 
  },  
  bgimage:{
    width:350,
    height:250,
    marginTop:20,
    marginLeft:-80,
  },
  appButton: {
    width:320,
    height:50,
    marginLeft:30,
    marginTop:30,
    borderRadius:20,
    borderRadius:10,
    borderRightWidth:1,
    borderTopWidth:1,
    borderLeftWidth:1,
    borderRightColor:"black",
    borderLeftColor:"black",
    borderBottomWidth:1,
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    alignSelf: "center",
    paddingTop:10,
    paddingLeft:5
  },
  appButtonContainer: {
    width:320,
    height:50,
    marginLeft:30,
    marginTop:30,
    borderRadius:20,
    borderRadius:10,
    borderRightWidth:1,
    borderTopWidth:1,
    borderLeftWidth:1,
    borderRightColor:"black",
    borderLeftColor:"black",
    borderBottomWidth:1,
  },
  img:{
    width:50,
    height:50,
    marginTop:-35,
  },
  img1:{
    width:45,
    height:45,
    marginLeft:15,
    marginTop:-34,
  }
})


export default App;