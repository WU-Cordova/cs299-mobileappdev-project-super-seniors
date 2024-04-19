/* 
To Do:
 - Create the document name list view
 - Create document image list view
 - Connect TopBar component to connect to change views.
*/
import { SafeAreaView, View, Image, FlatList, Text } from "react-native";

var data = [
    { key: '1', title: 'Doc 1'},
    { key: '2', title: 'Doc 2'},
    { key: '3', title: 'Doc 3'},
    { key: '4', title: 'Doc 4'},
];

const BlankDocImage = require('../assets/FillerDoc.png')



const ViewDocuments = ({docview}) => {

    return (
        <SafeAreaView>
            <View>
                <FlatList 
                    data={data}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                />
            </View>
            <Text> 
                {docview}
            </Text>
        </SafeAreaView>
    );
};

export default ViewDocuments;