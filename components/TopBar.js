import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Entypo } from '@expo/vector-icons';

const Topbar = ({pagetype}) => {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Entypo name='chevron-thin-left' />
                <Text>
                    {pagetype}
                </Text>
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