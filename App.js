/*
To do:
 - Make Top bar and bottom bar components to switch between screens
 - Make the document view component

Notes: 

*/

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Card } from 'react-native';

import Topbar from './components/TopBar';
import BottomBar from './components/BottomBar';

/* Setting constants */
const PageTypes = {
  Documents: "Documents",
  Camera: "Camera",
  DocumentPage: "Document_Name"
};

export default function App() {

  const [pageType, setPageType] = useState(PageTypes.Documents)

  var data = [
    { key: '1', title: 'Doc 1'},
    { key: '2', title: 'Doc 2'},
    { key: '3', title: 'Doc 3'},
    { key: '4', title: 'Doc 4'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Topbar pagetype={pageType} />
      <View style={styles.doclist}>
        <Text style={styles.header}>
          Edit Documents:
        </Text>
        <FlatList 
          data={data}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
        <StatusBar style="auto" />
      </View>
      <BottomBar pagetype={pageType} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontWeight: "bold",
  },
  doclist: {
    padding:20,
  }
});
