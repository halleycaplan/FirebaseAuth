import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class Post2 extends Component {
    render () {
      return (
        <View style={styles.container}>
          <h1>Post2</h1>
          <img src="http://cdn.shopify.com/s/files/1/0531/9816/0042/products/7_505742c2-536f-47f1-be62-2e1fee570616_1200x1200.png?v=1652214107" width="250" height="250"/>
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

export default Post2;