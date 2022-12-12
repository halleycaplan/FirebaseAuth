import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class Post1 extends Component {
    render () {
      return (
        <View style={styles.container}>
          <h1>Post1</h1>
          <img src="https://play-lh.googleusercontent.com/VC7rta8PIK3MqmQG5c-F5CNJQ6cCv6Eb-kyBoUcQ2xj83dZVhn7YCj_GIWW8y7TnAMjU=w600-h300-pc0xffffff-pd"/>
          <Text>This is a post</Text>
          <Button
          title="Go Back"
          onPress={() => this.props.navigation.navigate('Change')}
        />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

export default Post1;