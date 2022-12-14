import React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView
} from 'react-native'

const options = ['9PM-10PM' , '10AM-11AM','11AM-12PM' , '1PM-2PM','2PM-3PM' , '3PM-4PM', '4PM-5PM'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const MDPicker = (props) => {

    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);
    }

    const option = options.map((item, index) => {
        return(
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >

                <Text style={styles.text}>
                    {item}
                </Text>

            </TouchableOpacity>
        )
    })
    return (
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT/4}]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    option: {
        alignItems: 'flex-start'
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
    }

})

export {MDPicker}