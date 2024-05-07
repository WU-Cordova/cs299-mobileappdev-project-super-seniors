/* 
To Do:
 - Connect this page to the DocScan.js after you take a picture. or if you select a picture.
 - Add Zoom
 - Add Auto Focus
 - Make the header include flip camera, flash, 
Notes:
 -
*/

import { 
    Button, 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Alert
} from "react-native"; 
import * as ImagePicker from "expo-image-picker"; 
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from 'expo-media-library';
import { useRef, useState ,useEffect, useCallback, med } from "react"; 
import {db} from '../services/firebaseconfig'
import { collection, addDoc, updateDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { StatusBar } from 'expo-status-bar';
import { Entypo, FontAwesome } from '@expo/vector-icons';


const PictureView = ({navigation}) => {
    const [fileUri, setFileUri] = useState(""); 
    const [fileType, setFileType] = useState(""); 
    const [heightAspect, setHeightAspect] = useState("3"); 
    const [widthAspect, setWidthAspect] = useState("4"); 
    const [image, setImage] = useState(null);

    const handlePickFile = async () => { 
        if (heightAspect == "0" || widthAspect == "0") { 
            const res = 
                await ImagePicker.launchImageLibraryAsync({ 
                    mediaTypes: 
                        ImagePicker.MediaTypeOptions.Images, 
                    quality: 1, 
                    allowsEditing: true, 
                    allowsMultipleSelection: false, 
                }); 
            if (res.canceled) return; 
  
            setFileUri(res.assets[0].uri); 
            setFileType(res.assets[0].type); 
        } else { 
            const res = 
                await ImagePicker.launchImageLibraryAsync({ 
                    mediaTypes: 
                        ImagePicker.MediaTypeOptions.Images, 
                    quality: 1, 
                    aspect: [ 
                        parseInt(widthAspect), 
                        parseInt(heightAspect), 
                    ], 
                    allowsEditing: true, 
                    allowsMultipleSelection: false, 
                }); 
            if (res.canceled) return; 
  
            setFileUri(res.assets[0].uri); 
            setFileType(res.assets[0].type); 
        } 
    }; 

    const firebaseSave = async () => {
        try {
          const imageRef = collection(db, "Images");
          await addDoc(imageRef,
            {
              ImageUri: fileUri
            });
            MediaLibrary.saveToLibraryAsync(fileUri);
            console.log(fileUri)
        } catch (e) {
          console.error("Error received! ", e);
        }
      };

    const saveImage = ()=> {
        Alert.alert('Do you want to save this image?', 'Save image to CameraRoll and firebase', [
            {
                isPreferred: true,
                text: 'Yes',
                onPress: firebaseSave,
                style: 'default',
            },
            {
                isPreferred: false,
                text: 'No',
                onPress: () => {},
                style: 'cancel',
            },
    ]);
    };
  
    const saveFile = async (uri, mimetype) => { 
        let fileName = Date.now() + ".jpg"; 
        const permissions = 
            await  
                FileSystem.StorageAccessFramework 
                    .requestDirectoryPermissionsAsync(); 
        if (permissions.granted) { 
            const base64 = 
                await FileSystem.readAsStringAsync(uri, { 
                    encoding: 
                        FileSystem.EncodingType.Base64, 
                }); 
            await FileSystem.StorageAccessFramework.createFileAsync( 
                permissions.directoryUri, 
                fileName, 
                mimetype 
            ) 
                .then(async (uri) => { 
                    await FileSystem.writeAsStringAsync( 
                        uri, 
                        base64, 
                        { 
                            encoding: 
                                FileSystem.EncodingType 
                                    .Base64, 
                        } 
                    ); 
                }) 
                .catch((e) => console.log(e)); 
        } else { 
            alert("Permission not granted"); 
        } 
    }; 
    return ( 
        <View style={styles.container}> 
            {fileUri.length != 0 ? ( 
                <Image 
                    source={{ uri: fileUri }} 
                    style={{ 
                        width: 400, 
                        height: 400, 
                        objectFit: "contain", 
                    }} 
                /> 
            ) : ( 
                <View></View> 
            )} 
            <View 
                style={{ 
                    flexDirection: "column", 
                    alignItems: "center", 
                }}> 
            </View> 
            <Text>Scanned Text: </Text>
            <View 
                style={{ 
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: "space-evenly", 
                    width: "100%", 
                    padding: 10, 
                }}> 
                  
                <Button 
                    title="Pick Image"
                    onPress={handlePickFile}/> 
                      
                {fileUri.length != 0 ? ( 
                    <> 
                        <Button 
                            title="Save Image"
                            onPress={saveImage} 
                        /> 
                        <Button 
                            title="reset"
                            onPress={() => setFileUri("")} 
                        /> 
                    </> 
                ) : ( 
                    <></> 
                )} 
            </View> 
        </View> 
    ); 
}
  
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: "#fff", 
        alignItems: "center", 
        justifyContent: "space-evenly", 
        height: "100%", 
    }, 
    heading1: { 
        fontSize: 28, 
        fontWeight: "bold", 
        color: "green", 
        textAlign: "center", 
    }, 
    input: { 
        width: 50, 
        height: 30, 
        borderColor: "gray", 
        borderWidth: 1, 
        textAlign: "center", 
        borderRadius: 5, 
        padding: 5, 
        margin: 5, 
    }, 
    inputLabel: { 
        fontSize: 20, 
        margin: 5, 
        padding: 5, 
    }, 
});

export default PictureView