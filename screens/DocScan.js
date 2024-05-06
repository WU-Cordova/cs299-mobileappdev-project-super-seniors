/* 
To Do:
 - Connect this page to the PictureView.js document after taking a picture
 - Add Zoom
 - Add Auto Focus
 - Make the header include flash
 - Camera should flip the inwards view so that the camera view is fliped 180 so the picure captureed is correct
Notes:
 -
*/

// import packages
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View, Image, Alert } from 'react-native';
import { storage } from 'firebase/storage'

import { storeData, getData } from '../config/asyncStorage';

import IconButton from '../components/IconButtons'

const NoImage = require('../assets/NoImage.jpeg')



// constants
const icons = {
  picButton: 'circle',
  flipCamera: 'refresh'
};

const PicturePreview = props => {
  return (
    <View>
      <TouchableHighlight onPress={props.onPress}>
        <Image source={props.capturedImage} 
        style={styles.picturePreview} />
      </TouchableHighlight>
    </View>
  )
}

const DocScan = ({navigation}) => {
  const [type, setType] = useState(CameraType.back);
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [uploaded, setUploaded] = useState(0);

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
      storeData('photo', photo.uri)
    }
    alert("pic")
  }

  function toggleCameraType () {
    setType(current => (current === CameraType.back ? CameraType.front: CameraType.back))
  };

  function navigatePictureView () {
    navigation.navigate('PictureView')
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
          <PicturePreview 
            onPress={navigatePictureView} 
            capturedImage={{uri: capturedImage}} 
          />
          {console.log(capturedImage)}
        </Camera>
      </View>
      <View style={styles.bottomBarContainer}>
        <IconButton
          onPress={takePicture}
          icon={icons.picButton}
          iconStyle={styles.whiteColor}
          buttonStyle={styles.pictureButton}
          size={80}
        />
        <IconButton
          onPress={takePicture}
          icon={icons.picButton}
          iconStyle={styles.whiteColor}
          buttonStyle={styles.pictureButton}
          size={80}
        />
        <IconButton 
          onPress={toggleCameraType}
          icon={icons.flipCamera}
          iconStyle={styles.whiteColor}
          buttonStyle={styles.flipCameraButton}
          size={50}
        />
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
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  pictureButton: {
    marginTop: '10%'
  },
  whiteColor: {
    color: 'white',
  },
  flipCameraButton: {
    marginTop: '15%'
  }
});


export default DocScan;