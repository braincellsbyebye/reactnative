import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const DetailsScreen = ( {route} ) => {
    return(
        <View style = {{ flex: 1, justifyContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ color: 'black' }}>Category: {route.params.item.aptcategory}</Text>
            <Text style={{ color: 'black' }}>Date: {route.params.item.aptdate}</Text>
            <Text style={{ color: 'black' }}>Time: {route.params.item.apttime}</Text>
            <Text style={{ color: 'black' }}>Purpose: {route.params.item.aptpurpose}</Text>
            <Text style={{ color: 'black' }}>Verification: {route.params.item.aptverify}</Text>
        </View>
    );
};
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
  })
export default DetailsScreen;