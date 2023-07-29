import { View, Text,StyleSheet, TextInput, TouchableOpacity,Alert } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/colors';
import {Ionicons} from "@expo/vector-icons";
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default function Signup({navigation}) {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  
    const handleNameChange = (text) => {
      setName(text);
    };
  
    const handleEmailChange = (text) => {
      setEmail(text);
    };
  
    const handlePasswordChange = (text) => {
      setPassword(text);
    };
  
    const handleSignUp = () => {
        // Perform validation checks
        if (name.trim() === '') {
          setError('Name cannot be empty.');
          return;
        }
    
        if (!validateEmail(email)) {
          setError('Please enter a valid email address.');
          return;
        }
    
        if (password.length < 8) {
          setError('Password should be at least 8 characters long.');
          return;
        }
    
        setError(''); // Clear error message
        saveUserDataToStorage();
      };
      const saveUserDataToStorage = async () => {
        try {
          const userData = {
            name,
            email,
            password,
          };
      
          // Convert the userData object to a JSON string
          const userDataString = JSON.stringify(userData);
      
          // Save the userDataString to AsyncStorage
          await AsyncStorage.setItem('userData', userDataString);
      
          console.log('Signup successful!');
          console.log('User data saved to local storage.');
          navigation.navigate('ProfilePictureScreen', { userData });
        } catch (error) {
          console.error('Error saving user data:', error);
        }
      };
  
    // Function to validate email using regular expression
    const validateEmail = (email) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    };
    return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.viewContainer}>
            <Text style={styles.title}>
                Create Account
            </Text>
            <View style={styles.innerView}>
                <Text style={styles.inputTitle}>Name</Text>
                <View style={styles.inputView}><TextInput selectionColor="transparent" placeholder='Enter your Name' onChangeText={handleNameChange} placeholderTextColor={COLORS.black} keyboardType='default' style={styles.input}/></View>
            </View>
            <View style={styles.innerView}>
                <Text style={styles.inputTitle}>Email Address</Text>
                <View style={styles.inputView}><TextInput selectionColor="transparent" placeholder='Enter your Email' placeholderTextColor={COLORS.black} onChangeText={handleEmailChange} keyboardType='email address' style={styles.input}/></View>
            </View>
            <View style={styles.innerView}>
                <Text style={styles.inputTitle}>Password</Text>
                <View style={styles.inputView}>
                    <TextInput selectionColor="transparent" placeholder='Enter your Password' onChangeText={handlePasswordChange} placeholderTextColor={COLORS.black} secureTextEntry={isPasswordShown} style={styles.input}/>
                    <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={styles.signupButton}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                        </View>
            </View>
            {error !== '' && <Text style={styles.error}>{error}</Text>}

            <Button
            title="Sign Up"
            filled
            style={{
                marginTop: 18,
                marginBottom: 4,
            }}
            onPress={handleSignUp} // Call handleSignUp when the button is pressed
            />
        </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    safeArea : {
        flex:1,
        backgroundColor:COLORS.white,
    },
    viewContainer:{
        flex:1,
        marginHorizontal:22,
        paddingTop:100,
    },
    title:{
        fontSize:22,
        fontWeight:"bold",
        marginVertical:12,
        color:COLORS.black,
    },
    innerView:{
        marginBottom:12,
    },
    inputTitle:{
        fontSize:16,
        fontWeight:400,
        marginVertical:8
    },
    inputView:{
        width:"100%",
        height:48,
        borderColor:COLORS.black,
        borderWidth:1,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center",
        
    },
    input:{
        width:"100%",
        paddingLeft:22
    },
    signupButton:{
        position: "absolute",
         right: 12
    },
    error: {
        color: 'red',
        marginTop: 8,
        fontSize: 14,
      },
})