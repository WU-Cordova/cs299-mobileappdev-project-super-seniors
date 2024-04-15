import { Text, View, StyleSheet, SafeAreaView } from "react-native";

const Topbar = ({pagetype}) => {

    return (
        <SafeAreaView>
            <View style={styles.container}>
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
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default Topbar;