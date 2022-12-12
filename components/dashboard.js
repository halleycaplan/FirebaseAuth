// components/dashboard.js
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import firebase from '../database/firebase';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }
  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  


  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.introText}>
          Hello, {this.state.displayName}
        </Text>
        <View style={styles.allButtons}>
        
        <TouchableOpacity 
        style={styles.inputBox}
        onPress={() => this.props.navigation.navigate('Change')}>    
        <Text style={styles.textStyle}>Change Makers</Text>   
        </TouchableOpacity> 

        <TouchableOpacity 
        style={styles.inputBox}
        onPress={() => this.props.navigation.navigate('Explore')}>    
        <Text style={styles.textStyle}>Curious Explorers</Text>   
        </TouchableOpacity> 

        <TouchableOpacity 
        style={styles.inputBox}
        onPress={() => this.props.navigation.navigate('Collaborate')}>    
        <Text style={styles.textStyle}>Inclusive Collaborators</Text>   
        </TouchableOpacity> 
       
        <TouchableOpacity 
        style={styles.inputBox}
        onPress={() => this.props.navigation.navigate('Communicate')}>    
        <Text style={styles.textStyle}>Creative Communicators</Text>   
        </TouchableOpacity> 

        <TouchableOpacity 
        style={styles.inputBox}
        onPress={() => this.props.navigation.navigate('Think')}>    
        <Text style={styles.textStyle}>Critical Thinkers</Text>   
        </TouchableOpacity> 

      </View>
        <Button style={styles.inputBox}
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  introText: {
    fontSize: 20,
    color: "black",
  },
  textStyle: {
    fontSize: 15,
    color: "#3740FE",
  },
  inputBox: {
    backgroundColor: 'orange',
    width: 300,
    height: 50,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#3740FE",
    borderWidth: .5,
  },
  allButtons: {
    margin: 5,
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    maxWidth: 300,
  },
});