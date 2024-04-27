/* 
To Do:
 - Connect this page to the PictureView.js document after taking a picture
 - Add Zoom
 - Add Auto Focus
 - Make the header include flip camera, flash, 
Notes:
 -
*/

// import packages
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DocScan = ({navigation}) => {
  const [type, setType] = useState(CameraType.back);
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);

  if (!permission) {
    return (
      <View>
        <Text>
          letters
        </Text>
      </View>
    )
  };

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync(null);
      setCapturedImage(photo.uri);
      
    }
    alert("pic")
  }

  function toggleCameraType () {
    setType(current => (current === CameraType.back ? CameraType.front: CameraType.back))
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer} >
        <Camera 
          style={styles.camera} 
          type={type}
          ref={ref => setCamera(ref)}
          ratio={'1:1'}
        >
          {capturedImage && <Image source={{uri: capturedImage}} style={styles.picturePreview} />}
        </Camera>
      </View>
      <View style={styles.bottomBarContainer}>
        <TouchableOpacity style={styles.cameraButton} onPress={() => takePicture()}>
          <FontAwesome 
            name='circle' 
            size={70}
            style={styles.whiteColor}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text>
            Flip Camera
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  bottomBarContainer: {
    backgroundColor: 'rgba(0, 0, 0, 1.0)',
    height: '20%',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  picturePreview: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%'
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
    height: '80%',
  },
  cameraButton: {
    alignSelf: 'center',
    paddingTop: '2em',
  },
  whiteColor: {
    color: 'white',
  }
});

const CameraPreview = ({photo}) => {
  <View>
    <Image
      source={{uri: photo && photo.uri}}
    />
  </View>
}

export default DocScan;