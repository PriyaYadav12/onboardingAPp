import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack'; 
import { Welcome, Signup,ProfilePictureScreen,Summary } from "./screens";

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Set the swipe transition
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ProfilePictureScreen"
          component={ProfilePictureScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Summary"
          component={Summary}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
