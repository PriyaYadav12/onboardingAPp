import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';


const Summary = ({navigation}) => {
  const [userData, setUserData] = useState(null);
  const [profilePicture,setProfilePictureUri] = useState(null);

  useEffect(() => {
    // Fetch user data from local storage when the component mounts
    getUserDataFromStorage();
  }, []);

  const getUserDataFromStorage = async () => {
    try {
      // Retrieve the userDataString from local storage
      const userDataString = await AsyncStorage.getItem('userData');
      const profilePictureUri = await AsyncStorage.getItem('profilePicture');
      if (userDataString && profilePictureUri) {
        // Parse the userDataString back to an object
        const userDataObject = JSON.parse(userDataString);
        setUserData(userDataObject);
        setProfilePictureUri(profilePictureUri);     
     }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  return (
    <LinearGradient style={styles.container} colors={[COLORS.secondary, COLORS.primary]}>
        <View style={styles.container}>
        <Text style={styles.title}>
                Profile Summary
            </Text>
      {userData ? (
        <>
          {/* Display profile picture if available */}
          {profilePicture && (
            <View style={styles.profilePictureContainer}>
              <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
            </View>
          )}

          <View style={styles.userDataContainer}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.userData}>{userData.name}</Text>
          </View>

          <View style={styles.userDataContainer}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.userData}>{userData.email}</Text>
          </View>

          <View style={styles.userDataContainer}>
            <Text style={styles.label}>Password:</Text>
            <Text style={styles.userData}>{userData.password}</Text>
          </View>
          <Button
                        title="Confirm and Save"
                        onPress={() => navigation.navigate("Welcome")}
                        style={styles.button}
                    /> 
        </>
      ) : (
        <Text style={styles.text}>No user data found in local storage.</Text>
      )}
    </View>
    </LinearGradient>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize:20,
    fontWeight:400,
    color:COLORS.white,

  },
  userData: {
    textDecorationLine: 'underline',
    fontSize:20,
    fontWeight:400,
    color:COLORS.white,
  },
  profilePictureContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 10,
  },
  profilePicture: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
      marginBottom: 10,
  },
  userDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title:{
    fontSize:22,
    fontWeight:"bold",
    marginVertical:12,
    color:COLORS.white,
},
button:{
    marginTop: 18,
    marginBottom: 4,
    width:"100%",
},
});
export default Summary;
