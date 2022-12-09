import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Change Makers"
        onPress={() => navigation.navigate('Change')}
      />
      <Button
        title="Curious Explorers"
        onPress={() => navigation.navigate('Explore')}
      />
      <Button
        title="Inclusive Collaborators"
        onPress={() => navigation.navigate('Collaborate')}
      />
      <Button
        title="Creative Communicators"
        onPress={() => navigation.navigate('Communicate')}
      />
      <Button
        title="Critical Thinkers"
        onPress={() => navigation.navigate('Think')}
      />
    </View>
  );
}





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Change" component={Change} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Collaborate" component={Collaborate} />
        <Stack.Screen name="Communicate" component={Communicate} />
        <Stack.Screen name="Think" component={Think} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;