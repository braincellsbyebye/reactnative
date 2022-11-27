import React, {} from 'react';
import  {
   Text, 
   StyleSheet, 
   View,
   Image,
   ScrollView,
   
  } from 'react-native';

const DoctorOne = ({}) => {

  return (

   <ScrollView>
    <View> 
       <Image style={styles.doc} source={require('../images/doct.png')}></Image> 

       <View>
         <Text style={styles.circle}></Text> 
         <Image style={styles.docname} source={require('../images/doc3.png')}></Image>  
       <View>
         <Text style={styles.docheader}>Doctor Michael Folly</Text>
       </View>
       <View>
         <Text style={styles.special}>Residential Doctor</Text>
       </View>
       </View>
         <Text style={styles.about}>About Doctor</Text>
         <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nulla a
         elit sodales iaculis. Proin volutpat commodo commodo. Proin odio quam, laoreet 
         ac aliquam quis, iaculis at velit. Vestibulum faucibus mi quis dui egestas sodales. Vestibulum at nisl tellus. Vivamus tempor blandit ultrices.</Text>
         
         <View>
           <Text></Text>
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

 doc:{
   height:250,
   width:400,
   marginTop:-50,

 }, 

 
 circle: {
   height: 80,
   width: 80,
   borderRadius: 50,
   backgroundColor:'#ADE9F7',
   marginLeft:20,
   marginTop:20
 },

  docheader:{
   color:'black',
   textAlign:'center',
   fontWeight:'bold',
   fontSize:20,
   fontFamily:'sans-serif-light',
   marginTop:-60,
   marginLeft: 63
  },

  special:{
   color:'black',
   textAlign:'center',
   fontWeight:'bold',
   fontSize:15,
   fontFamily:'sans-serif-light',
   marginTop:-40,
   marginLeft: 5
  },


 docname:{
   marginLeft:25,
   marginTop:-75,
   height:70,
   width:70
 },

 sched:{
   color:'black',
   textAlign:'center',
   fontWeight:'bold',
   fontSize:20,
   fontFamily:'sans-serif-light',
   marginTop:20,
   marginLeft:-150,
 },

 about:{
   color:'black',
   textAlign:'center',
   fontWeight:'bold',
   fontSize:20,
   fontFamily:'sans-serif-light',
   marginTop:30,
   marginLeft:-220,

 },

 description:{
   textAlign:'justify',
   marginLeft:25,
   marginRight:25,
 },

 rectangle: {
   height: 80,
   width: 340,
   borderRadius: 10,
   backgroundColor:'#6BA7CE',
   marginLeft:30,
   marginTop:10
 },

 square: {
   height: 50,
   width: 50,
   backgroundColor:'#0675B0',
   marginLeft:50,
   marginTop:-65,
 },

 cons:{
   textAlign:'justify',
   marginLeft:120,
   fontWeight:'bold',
   color:'white',
   fontSize:20,
   marginTop:-65,
 },

 
 cons1:{
   textAlign:'justify',
   marginLeft:120,
   fontWeight:'bold',
   color:'white',
   fontSize:12,
   marginTop:-25,
 },

 cons2:{
   textAlign:'justify',
   marginLeft:200,
   fontWeight:'bold',
   color:'white',
   fontSize:12,
   marginTop:-25,
 },

 cons3:{
   textAlign:'justify',
   marginLeft:120,
   fontWeight:'bold',
   color:'white',
   fontSize:12,
   marginTop:-10,
 },

 cons4:{
   textAlign:'justify',
   marginLeft:200,
   fontWeight:'bold',
   color:'white',
   fontSize:12,
   marginTop:-15,
 },

 cons5:{
   textAlign:'justify',
   marginLeft:120,
   fontWeight:'bold',
   color:'white',
   fontSize:12,
   marginTop:-10,
 },

 cons6:{
   textAlign:'justify',
   marginLeft:200,
   fontWeight:'bold',
   color:'white',
   fontSize:12,
   marginTop:-15,
 },

 rectangleone: {
   height: 80,
   width: 340,
   borderRadius: 10,
   backgroundColor:'#115293',
   marginLeft:30,
   marginTop:10
 },

 squareone: {
   height: 50,
   width: 50,
   backgroundColor:'#6BA7CE',
   marginLeft:50,
   marginTop:-65,
 },

 consone:{
   textAlign:'justify',
   marginLeft:120,
   fontWeight:'bold',
   color:'white',
   fontSize:20,
   marginTop:-50,
 },

 rectangletwo: {
   height: 80,
   width: 340,
   borderRadius: 10,
   backgroundColor:'#6BA7CE',
   marginLeft:30,
   marginTop:25
 },

 squaretwo: {
   height: 50,
   width: 50,
   backgroundColor:'#0675B0',
   marginLeft:50,
   marginTop:-62,
 },

 constwo:{
   textAlign:'justify',
   marginLeft:120,
   fontWeight:'bold',
   color:'white',
   fontSize:20,
   marginTop:-60,
 },

 day:{
   marginLeft:65,
   marginTop:-45,
   color:'white',
   fontWeight:'bold',
   fontFamily:'serif'
 },

 month:{
   marginLeft:60,
   marginTop:-25,
   color:'white',
   fontWeight:'bold',
   fontFamily:'serif'
 },

 day1:{
   marginLeft:65,
   marginTop:-60,
   color:'white',
   fontWeight:'bold',
   fontFamily:'serif'
 },

 month1:{
   marginLeft:60,
   marginTop:-40,
   color:'white',
   fontWeight:'bold',
   fontFamily:'serif'
 },

 day2:{
   marginLeft:65,
   marginTop:-58,
   color:'white',
   fontWeight:'bold',
   fontFamily:'serif'
 },

 month2:{
   marginLeft:60,
   marginTop:-38,
   color:'white',
   fontWeight:'bold',
   fontFamily:'serif'
 },


})


export default DoctorOne;