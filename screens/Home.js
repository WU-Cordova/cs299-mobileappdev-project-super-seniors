/*
To do:
 - Make Top bar and bottom bar components to switch between screens
 - Make the buttons work
 - Style the Bottom Top bar
 - Add bottom bar code to here
 - Bottom bar should always be at the bottom of the screen 
 - Data from the user which would be here needs to be given to the doc view component
Notes: 
 - All of the icons should be from the fontAwesome font library for consistency
*/

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Card } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';

import BottomBar from '../components/BottomBar';
import ViewDocuments from '../components/ViewDocuments';

/* Setting constants */
const PageTypes = {
  Documents: "Documents",
  Camera: "Camera",
  DocumentPage: "Document_Name"
};

const leftCornerIcons = {
  BackHome: 'chevron-left', /* FontAwesome */
  SortArrow: 'chevron-down', /* FontAwesome */
};

const rightCornerIcons = {
  PictureView: 'th-large', /* FontAwesome */
  ListView: 'list-ul', /* FontAwesome */
  Help: 'question', /* FontAwesome */
};

const documentViews = {
  PictureView: 'picture-view',
  ListView: 'list-view',
}

const Home = ({navigation}) => {

  /* Use State */
  const [pageType, setPageType] = useState(PageTypes.Documents);
  const [pageView, setPageView] = useState(documentViews.PictureView);
  const [picViewTrue, setPicViewTrue] = useState(true); /* we want the boolean to be opposite of if the view is picture view (picture view = flase) */

  /* functions */
  function changeDocView () {
    if (picViewTrue) {
      setPicViewTrue(false)
      setPageView(documentViews.ListView)
    } else if (!picViewTrue) {
      setPicViewTrue(true)
      setPageView(documentViews.PictureView)
    }
  };

  /* button presses */
  const changeViewPress = () => {
    changeDocView()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.sortButtion}>
          <FontAwesome.Button name={leftCornerIcons.SortArrow} onPress={alert('Test')}>
            <Text>Sort</Text>
          </FontAwesome.Button>  
        </View>
          <Text>{pageType}</Text>
        <View style={styles.viewButtons}>
            <FontAwesome.Button name={rightCornerIcons.ListView} onPress={changeViewPress} disabled={!picViewTrue} />
            <FontAwesome.Button name={rightCornerIcons.PictureView} onPress={changeViewPress} disabled={picViewTrue}/>
        </View>
      </View>

      <View style={styles.doclist}>
        <Text style={styles.header}>
          Edit Documents:
        </Text>

        <ViewDocuments docview={pageView} />
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
  },
  topbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
},
viewButtons: {
    flexDirection: 'row',
    paddingRight: 10, 
},
sortButtion: {
    flexDirection: 'row',
    paddingLeft: 10,
},
});

export default Home;