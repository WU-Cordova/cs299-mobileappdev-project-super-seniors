/* 
To do:
 -
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

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="DocScan">
        <Stack.Screen 
          name="DocScan"
          component={DocScan}
        />
        <Stack.Screen 
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;