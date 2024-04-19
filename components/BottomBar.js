/*
To do:
 - Centering Picture icon in the Button
 - Remove Blue Button outline from button to make button a circle
Notes:
 - This file might be deleted so that it is just all on the main home page screen
*/

import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const barIcons = {
    Camera: 'camera',
}

const BottomBar = ({pagetype}) => {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FontAwesome.Button 
                    name={barIcons.Camera} 
                    onPress={alert('Test')} 
                    style={styles.cameraButton}
                    mask='circle'
                />
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
    cameraButton: {
        color: '#097969',
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 2,
        borderRadius: 30,
        width: 60,
        height: 60,
        inconStyle: {
            marginRight: 20,
        }
    },
});

export default BottomBar;