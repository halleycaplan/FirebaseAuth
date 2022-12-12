import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class Post3 extends Component {
    render () {
      return (
        <View style={styles.container}>
          <h1>Post3</h1>
          <img src="https://ih1.redbubble.net/image.2062342699.4767/st,small,507x507-pad,600x600,f8f8f8.jpg" width="250" height="250"/>
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

export default Post3;