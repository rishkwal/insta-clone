import { Component,  } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  pressingButton = () => {
    alert('called function 2')
  }

  render(){
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>Welcome to New Text</Text>
      <Text style={{color: 'black'}}>Another Text</Text>
      <Button title='Helo'/>
      <TouchableOpacity style={
        {height: 50, 
        paddingHorizontal: 10, 
        backgroundColor:'red', 
        justifyContent: 'center',
        alignItems:'center'}}
        
        onPress={() => this.pressingButton()}
        >
          <Text style={{fontSize:25}}>Button 2</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
};
