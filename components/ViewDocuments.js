/* 
To Do:
 - Style the list view
 - Style the document view
 - Make the docuemnts link to thier respective document views
*/
import { SafeAreaView, View, Image, FlatList, Text, StyleSheet, } from "react-native";

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
    return (
        <View style={styles.fileview} >
            <FlatList 
                data={props.data}
                style={styles.docimage}
                renderItem={({item}) => 
                    <View>
                        <Image source={BlankDocImage}/>
                        <Text>{item.title}</Text>
                    </View>
                }
            />
        </View>
    );   
};

const DocumentList = props => {
    return (
        <View>
            <FlatList 
                data={props.data}
                renderItem={({item}) => 
                    <View>
                        <Text>{item.title}</Text>
                    </View>}
                />
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
        flexDirection: 'row',
    },
    docimage: {
        width: '50%'
    }
});

export default ViewDocuments;