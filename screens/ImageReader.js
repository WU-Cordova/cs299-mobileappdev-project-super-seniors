import { View, SafeAreaView, Text, StyleSheet, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import TextRecgonition from 'react-native-text-recognition'

const ImageReader = () => {
    const [image, setImage] = useState('null');
    const [imageUri, setImageUri] = useState('null')

    useEffect(() => {
        (async () => {
            console.log(image)
            if (imageUri.length > 4) {
                const result = await TextRecgonition.recognize(image.assets[0].uri);

                console.log("use Effect")
                console.log(result)
            }
        })();
    }, [image]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        })

        console.log(result)

        if (!result.canceled) {
            setImageUri(result.assets[0].uri)
            setImage(result)
            //console.log(image)
        }
    };

    return (
        <SafeAreaView>
            <View>
                <Button title="Choose Image" onPress={pickImage} />
                {imageUri.length != 0 ? ( 
                    <Image 
                        source={{ uri: imageUri }} 
                        style={{ 
                            width: 400, 
                            height: 400, 
                            objectFit: "contain", 
                        }} 
                    /> 
                    ) : ( 
                    <View></View> 
                )} 
                <Text style={{alignSelf: 'center'}}>
                    Text: {imageUri}
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

})

export default ImageReader;