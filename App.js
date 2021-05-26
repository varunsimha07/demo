import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View ,SafeAreaView ,ScrollView,Switch ,Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { Card, ListItem, Icon } from 'react-native-elements'
import Home from './components/Home'
import EndScreen from './components/EndScreen';
import Challenge from './components/Challenge';
import Exercise from './components/Exercise';
import Images from './components/Images';


const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer >
        <Stack.Navigator  initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen  name="Home" component={Home} options={{title:null}}/>
          <Stack.Screen  name="Challenge" component={Challenge} options={{title:null}}/>
          <Stack.Screen  name="Exercise" component={Exercise} options={{title:null}}/>
          <Stack.Screen  name="Images" component={Images} options={{title:null}}/>
          <Stack.Screen  name="Endscreen" component={EndScreen} options={{title:null}}/>
          <Stack.Screen name="Date" component={Date} options={{title:null}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
