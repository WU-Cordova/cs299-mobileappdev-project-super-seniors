import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View, Image, Alert } from 'react-native';
import { storage } from 'firebase/storage'

import { storeData, getData } from '../config/asyncStorage';

import IconButton from '../components/IconButtons'
import DocumnetScanner from '../components/DocumentScanner';

const NoImage = require('../assets/NoImage.jpeg')



// constants
const icons = {
  picButton: 'circle',
  flipCamera: 'refresh',
  uploadFile: 'upload',
};

const TextCamera = ({navigation}) => {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    function navigateFileSelect() {
        navigation.navigate('PictureView')
    };

    useEffect(() => {
        (async () => {
            
        })();
    }, []);

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
        <View style={styles.container}>
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
                        onPress={navigateFileSelect}
                        icon={icons.uploadFile}
                        iconStyle={styles.whiteColor}
                        buttonStyle={styles.uploadFileButtonStyle}
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
    )
};
  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
    },
    cameraContainer: {
        height: '100%',
        width: '100%'
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
    uploadFileButtonStyle: {
        marginTop: '15%',
        borderColor: 'white',
        borderWidth: 1,

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
  
  
export default TextCamera;