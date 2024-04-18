/*
To do:
 - Make elements in the top bar inline and in thier proper place
 - Make the buttons work
 - Change the button icons to FontAwesome

Notes:
*/

import { Text, View, StyleSheet, SafeAreaView, Button, Alert } from "react-native";
import { Entypo, FontAwesome } from '@expo/vector-icons';

const leftCornerIcons = {
    BackHome: 'chevron-thin-left', /* Entypo */
    SortArrow: 'arrow-down', /* Entypo */
};

const rightCornerIcons = {
    PictureView: 'grid', /* Entypo */
    ListView: 'list-ul', /* FontAwesome */
    Help: 'help', /* Entypo */
}


const Topbar = ({pagetype}) => {

    function changePage (pagetype) {
        
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Entypo name='arrow-down' />
                <Text>
                    {pagetype}
                </Text>
                <FontAwesome.Button name={rightCornerIcons.ListView} onPress={alert('Test')} />
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
    }
});

export default Topbar;