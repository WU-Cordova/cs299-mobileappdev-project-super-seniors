import { View, Text, StyleSheet, Button, Image } from "react-native";
import { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';

import IconButton from "./IconButtons";

const icons = {
    picButton: 'circle',
    flipCamera: 'refresh',
    uploadFile: 'upload',
};

export default function DocumnetScanner ({ imageReaderNav }) {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const takePicture = async () => {
        if(camera){
            const data = await camera.takePictureAsync(null)
            setImage(data.uri);
        }
    };

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    };

    

    if (!permission) {
        return (
          <View>
            <Text>
              letters
            </Text>
          </View>
        );
    };
    
    if (!permission.granted) {
        return (
          <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
    }

    return (
    <View style={{ flex: 1}}>
        <View style={styles.cameraContainer}>
            <Camera 
                ref={ref => setCamera(ref)} 
                style={styles.fixedRatio} 
                type={type}
                ratio={'1:1'} 
            > 
                {image && <Image source={{uri: image}} style={{flex:1}}/>}
            </Camera>
            <View style={styles.cameraBarContainer}>
                <IconButton 
                    onPress={imageReaderNav}
                    icon={icons.uploadFile}
                    iconStyle={styles.whiteColor}
                    buttonStyle={styles.flipCameraButtonStyle}
                    size={50}
                />
                <IconButton
                    onPress={takePicture}
                    icon={icons.picButton}
                    iconStyle={styles.picButtonIconStyle}
                    buttonStyle={styles.picButtonButtonStyle}
                    size={80}
                />
                <IconButton 
                    onPress={toggleCameraType}
                    icon={icons.flipCamera}
                    iconStyle={styles.whiteColor}
                    buttonStyle={styles.flipCameraButtonStyle}
                    size={50}
                />
            </View>
        </View>
        
    </View>
    );
};

const styles = StyleSheet.create({
    cameraContainer : {
        flex: 1,
        justifyContent: 'center',
    },
    cameraBarContainer: {
        backgroundColor: 'rgba(0, 0, 0, 1.0)',
        height: '20%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    flipCameraButtonStyle: {
        marginTop: '15%',
        borderColor: 'white',
        borderWidth: 1,
    },
    flipCameraIconStyle: {

    },
    whiteColor: {
        color: 'white',
    },
    fixedRatio:{
        flex: 1,
        aspectRatio: 1
    },
    picButtonButtonStyle: {
        marginTop: '10%',
        borderColor: 'white',
        borderWidth: 1,
    },
    picButtonIconStyle: {
        color: 'white',
    },
});