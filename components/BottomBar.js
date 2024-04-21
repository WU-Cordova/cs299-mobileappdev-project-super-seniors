import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const barIcons = {
    Camera: 'camera',
}

const BottomBar = ({pagetype}) => {

    return (
        <SafeAreaView>
            <View>
                <FontAwesome.Button name={barIcons.Camera} onPress={alert('Test')} />
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
});

export default BottomBar;