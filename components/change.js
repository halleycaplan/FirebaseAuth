import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class Change extends Component {
  render () {  
    return (
      <View style={styles.container}>
        <Text>Change Makers</Text>
        <Button
          title="Post1"
          onPress={() => this.props.navigation.navigate('Post1')}
        />
        <Button
          title="Post2"
          onPress={() => this.props.navigation.navigate('Post2')}
        />
        <Button
          title="Post3"
          onPress={() => this.props.navigation.navigate('Post3')}
        />
        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate('Dashboard')}
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


export default Change;