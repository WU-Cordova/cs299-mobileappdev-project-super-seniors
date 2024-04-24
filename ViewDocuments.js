/* 
To Do:
 - Style the list view
 - Style the document view
 - Make the docuemnts link to thier respective document views
*/
import { list } from "firebase/storage";
import { SafeAreaView, View, Image, FlatList, Text, StyleSheet,TouchableOpacity,Alert } from "react-native";

/* Constants */
var testdata = [
    { key: '1', title: 'Doc 1'},
    { key: '2', title: 'Doc 2'},
    { key: '3', title: 'Doc 3'},
    { key: '4', title: 'Doc 4'},
];

/* Pictures */
const BlankDocImage = require('../assets/FillerDoc.png');

const PictureList = props => {

    const addProductToCart = () => {
        Alert.alert('Success', 'Item selected')
    }

    return (
        <View style={styles.fileview} >
            <FlatList 
                data={props.data}
                style={styles.docimage}
                numColumns={2}
                renderItem={({item}) => 
                    <View>
                        <Image source={BlankDocImage} style={styles.docimage}/>
                        <Text style={styles.listtext}>{item.title}</Text>
                    </View>
                }
            />
        </View>
    );   
};

const DocumentList = props => {
    const itemselect = () => {
        Alert.alert('Success', 'Doc selected')
    }
    return (
        <View>
            <FlatList 
                data={props.data}
                style={styles.listview}
                renderItem={({item}) => 
                    <TouchableOpacity style={styles.listbutton} onPress={itemselect}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                }/>
        </View>
    );
};

const ViewDocuments = ({docview}) => {

    function displayChange (docview) {
        switch (docview) {
            case 'picture-view':
                return <PictureList data={testdata} />;
            case 'list-view':
                return <DocumentList data={testdata} />;
        }  
    };

    return (
        <SafeAreaView>
            <View>
                {displayChange(docview)}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    fileview: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    docimage: {
        width: '50%',
        numColumns: 2
    },
    listview:{
        flexDirection: 'column',
    },
    listbutton:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        height: 100
    }, listtext:{
        textAlign: 'center'
    }, docimage: {
    }
});

export default ViewDocuments;