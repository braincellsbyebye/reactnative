import React, { Component, useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default class AptView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
            aptname: '',
            aptdate:'',
            apttime:'',
            aptpurpose:'',

        }
    }

    async getData() {
        try {
            const response = await fetch('http://10.0.2.2:8000/api/appointment');
            const json = await response.json();

            this.setState({ data: json.appointment })
        }
        catch(error) {
            console.error(error);
        } finally {
            this.setState({ isLoading: false })
        }
    }

    async SetApt () {
        try{
            const response = fetch('http://10.0.2.2:8000/api/addapt', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: this.state.aptname,
                  aptdate: this.state.aptdate,
                  apttime: this.state.apttime,
                  aptpurpose: this.state.aptpurpose
                })
              });
              if ((await response).status === 201) {

                this.setState({
                    aptname: '',
                    aptdate:'',
                    apttime:'',
                    aptpurpose:'',

                })
                this.getData();
              }
        }
        catch(error) {
            console.error(error);
        } finally {
            this.setState({ isLoading: false })
        }
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        const { data, isLoading } = this.state;

        return(
            <View style={{ flex: 1, padding: 24 }}>
                { isLoading ? <ActivityIndicator /> : (
                    <View>
                        <TextInput style={styles.textInput} 
                        placeholder='Name' 
                        onChangeText={ text => this.setState({ aptname: text }) }
                        Text = {this.state.aptname} />

                        <TextInput style={styles.textInput} 
                        placeholder='Date' 
                        onChangeText={ text => this.setState({ aptdate: text }) }
                        Text = {this.state.aptdate} />

                        <TextInput style={styles.textInput} 
                        placeholder='Time' 
                        onChangeText={ text => this.setState({ apttime: text }) }
                        Text = {this.state.apttime} />

                        <TextInput style={styles.textInput} 
                        placeholder='Purpose' 
                        onChangeText={ text => this.setState({ aptpurpose: text }) }
                        Text = {this.state.aptpurpose} />

                        <Button title='Set Appointment' 
                        color='darkorange'
                        onPress={() => { this.SetApt() } }
                        />
                    </View>
                )}
                { isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={ data }
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                        <Text style={styles.item} >{item.name}, {item.aptdate}, {item.apttime}, {item.aptpurpose},</Text>
                        )}
                        />
                )}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    item: {
        margin: 10,
        padding: 10,
        fontSize:20,
        backgroundColor: 'bisque',
    },
    textInput:{
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        margin: 10,
        backgroundColor: 'bisque',
    }
})