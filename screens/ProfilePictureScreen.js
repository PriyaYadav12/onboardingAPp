import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfilePictureScreen = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);
    if (status !== 'granted') {
      alert('Permission to access the camera and gallery is required!');
    }
  };

  const takePictureFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  const choosePictureFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  const handleSave = async () => {
    try {
      if (imageUri) {
        // Save the imageUri to local storage
        await AsyncStorage.setItem('profilePicture', imageUri);
        Alert.alert('Profile Picture Saved!', 'Your profile picture has been saved.');
        // Navigate to the summary screen
        navigation.navigate('Summary');
      } else {
        Alert.alert('No Picture Selected', 'Please select a profile picture before saving.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while saving the profile picture.');
    }
  };

  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <Text style={styles.placeholderText}>No Profile Picture Selected</Text>
      )}

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={takePictureFromCamera}>
          <Text style={styles.buttonText}>Take Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={choosePictureFromGallery}>
          <Text style={styles.buttonText}>Choose from Gallery</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 18,
    color: 'gray',
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: 200, 
    alignItems: 'center',
    backgroundColor: "#007260",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: "#007260",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    borderRadius: 8,
    width: 200, 
    alignItems: 'center', 
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
     textAlign: 'center',
  },
});

export default ProfilePictureScreen;
