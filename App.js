// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Think from './components/think';
import Communicate from './components/communicate';
import Change from './components/change';
import Collaborate from './components/collaborate';
import Explore from './components/explore';
import Post1 from './components/Post1';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Dashboard' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen
       initialRouteName="Dashboard"
       name="Think" 
       component={Think} 
       options={
         { title: 'Think' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen
       initialRouteName="Dashboard"
       name="Communicate" 
       component={Communicate} 
       options={
         { title: 'Communicate' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen
       initialRouteName="Dashboard"
       name="Change" 
       component={Change} 
       options={
         { title: 'Change' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen
       initialRouteName="Dashboard"
       name="Collaborate" 
       component={Collaborate} 
       options={
         { title: 'Collaborate' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen
       initialRouteName="Dashboard"
       name="Explore" 
       component={Explore} 
       options={
         { title: 'Explore' },
         {headerLeft: null} 
       }
      />
    <Stack.Screen
       initialRouteName="Dashboard"
       name="Post1" 
       component={Post1} 
       options={
         { title: 'Post1' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
      
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}