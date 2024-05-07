/* 
To do:
All these things are just things we need to add for this app to work
 - Connecting tensor flow to the app
 - Creating a PictureView.js doc where we can select the line of scanned text
 - Connecting to firebase
 - Authentication with firebase
Notes:

*/

// import pakages
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Card } from 'react-native';
// import screens
import Home from './screens/Home.js';
import DocScan from './screens/DocScan.js';
import PictureView from './screens/PictureView.js';
import TextCamera from './screens/TextCamera.js';
import ImageReader from './screens/ImageReader.js';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          name="DocScan"
          component={DocScan}
        />
        <Stack.Screen 
          name="PictureView"
          component={PictureView}
        />
        <Stack.Screen 
          name="TextCamera"
          component={TextCamera}
        />
        <Stack.Screen
          name="ImageReader"
          component={ImageReader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;