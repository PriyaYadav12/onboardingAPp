import { View, Text, StyleSheet,Pressable, Image,Platform, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';
const Welcome = ({ navigation }) => {
  return (
    <LinearGradient style={styles.container} colors={[COLORS.secondary, COLORS.primary]}>
      <View style={styles.container}>
        <Image source={require("../assets/1.png")} style={styles.pic1} />
        <Image source={require("../assets/2.png")} style={styles.pic2} />
        <Image source={require("../assets/3.png")} style={styles.pic3} />
        <Image source={require("../assets/4.png")} style={styles.pic4} />
        <View style={styles.innerview}>
            <Text style={styles.title}>Let's Get</Text>
            <Text style={styles.started}>Started</Text>
            <Button
                        title="Welcome"
                        onPress={() => navigation.navigate("Signup")}
                        style={styles.button}
                    />        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pic1: {
    width: 100, 
    height: 100,
    borderRadius:20,
    position: "absolute",
    top:10,
    transform:[
        {translateX:20},
        {translateY:50},
        {rotate:"-15deg"}
    ]
  },
  pic2: {
    width: 100, 
    height: 100,
    borderRadius:20,
    position: "absolute",
    top:-30,
    left: 100,
    transform:[
        {translateX:50},
        {translateY:50},
        {rotate:"-15deg"}
    ]
  },
  pic3: {
    width: 100, 
    height: 100,
    borderRadius:20,
    position: "absolute",
    top:130,
    left: -50,
    transform:[
        {translateX:50},
        {translateY:50},
        {rotate:"15deg"}
    ]
  },
  pic4: {
    width: 200, 
    height: 200,
    borderRadius:20,
    position: "absolute",
    top:110,
    left: 100,
    transform:[
        {translateX:50},
        {translateY:50},
        {rotate:"-15deg"}
    ]
  },
  innerview:{
    paddingHorizontal:22,
    position:"absolute",
    top:450,
    width:"100%",
  },
  title:{
    fontSize:50,
    fontWeight:800,
    color:COLORS.white,
  },
  started:{
    fontSize:46,
    fontWeight:800,
    color:COLORS.white,
  },
  button:{
    marginTop:22,
    width:"100%",
  }
});
