import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {getImageFromServer, uploadImageOnServer} from '../utils/helper';
import Placeholder from '../assets/images/placeholder.png';

const uploadImage = () => {
  const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState();
  const [response, setResponse] = useState();
  const [serverImage, setServerImage] = useState();

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary();
    setGalleryPhoto(result.assets[0].uri);
  };

  const onSaveImage = async () => {
    const formData = new FormData();
    if (cameraPhoto) {
      formData.append('image', {
        uri: cameraPhoto,
        type: 'image/jpeg',
        name: 'image.jpeg',
      });
    } else {
      formData.append('image', {
        uri: galleryPhoto,
        type: 'image/jpeg',
        name: 'image.jpeg',
      });
    }
    const res = await uploadImageOnServer(formData);
    console.log('res :', res);
    alert(res?.message);
    setResponse(res?.url);
  };

  const onGetImage = async () => {
    const imageUrl = await getImageFromServer(response);
    console.log('imageUrl :', imageUrl);
    setServerImage(imageUrl);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openCamera} style={styles.button}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={openGallery} style={styles.button}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onSaveImage} style={styles.button}>
        <Text style={styles.buttonText}>Save Image on Server</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onGetImage} style={styles.button}>
        <Text style={styles.buttonText}>Get Image from Server</Text>
      </TouchableOpacity>

      <Image
        style={styles.imageStyle}
        source={serverImage ? {uri: serverImage} : Placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EFEC',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1F1B1E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 250,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#F0EFEC',
    fontWeight: 'bold',
  },
  imageStyle: {
    height: 150,
    width: 150,
    marginTop: 30,
    borderRadius: 5,
  },
});

export default uploadImage;
