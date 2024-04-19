/*
To do:
 - Make elements in the top bar inline and in thier proper place
 - Make the buttons work
 - Change the button icons to FontAwesome
 - Top Barshould change the App main view
Notes:
 - Clean Up Document, i think we Should delete this file
*/

import { Text, View, StyleSheet, SafeAreaView, Button, Alert } from "react-native";
import { Entypo, FontAwesome } from '@expo/vector-icons';

const leftCornerIcons = {
    BackHome: 'chevron-left', /* FontAwesome */
    SortArrow: 'chevron-down', /* FontAwesome */
};

const rightCornerIcons = {
    PictureView: 'th-large', /* FontAwesome */
    ListView: 'list-ul', /* FontAwesome */
    Help: 'help', /* Entypo */
}


const Topbar = ({pagetype}) => {

    function changePage (pagetype) {
        
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.navButtions}>
                    <FontAwesome.Button name={leftCornerIcons.SortArrow} onPress={alert('Test')}>
                        <Text>
                            Sort
                        </Text>
                    </FontAwesome.Button>  
                </View>
                <Text>
                    {pagetype}
                </Text>
                <View style={styles.viewButtons}>
                    <FontAwesome.Button name={rightCornerIcons.ListView} onPress={alert('Test')} />
                    <FontAwesome.Button name={rightCornerIcons.PictureView} onPress={alert('Test')} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'black',
        borderWidth: 1,
    },
    viewButtons: {
        flexDirection: 'row',
    },
    navButtions: {
        flexDirection: 'row',
    },
});

export default Topbar;