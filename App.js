import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

export default function App() {

  var data = [
    { key: '1', title: 'Doc 1'},
    { key: '2', title: 'Doc 2'},
    { key: '3', title: 'Doc 3'},
    { key: '4', title: 'Doc 4'},
  ];

  return (
    <SafeAreaView style={styles.container}>
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
