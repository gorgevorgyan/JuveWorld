import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,ImageBackground,Button,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './signup';
import Signin from './signin';
const Stack = createStackNavigator();
 export default function Add(props) {
	     const navSignIn = () => {
        props.navigation.navigate('SignIn')
    }
    const navSignUp = () => {
        props.navigation.navigate('SignUp')
    }
  return (
    <View style={styles.container}>
    
    <View style={styles.header}>
    <Text style={styles.title}>SignUp/SignIn</Text>
    </View>
    <View style={styles.main}>
	
    <TouchableOpacity onPress={navSignUp}  style={styles.button} >
    <Text style={styles.yui}>SignUp</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={navSignIn} style={styles.button} >
	    <Text style={styles.yui}>SignIn</Text>
    </TouchableOpacity>
    </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
    yui: {
    color: 'black',
  },
  header:{
    width:'100%',
    height:'30%',
    justifyContent:'center',
    alignItems:'center'

  },
  title:{
textAlign:'center',
fontSize:50

  },
  main:{
    width:'100%',
    height:'50%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'

  },
  text: {
    textAlign:'center',
    color: 'white'
  },  
  button: {
    width:100,
    justifyContent: 'center',
    alignItems: 'center',
    height:50,
    marginRight:20,
	borderWidth:1,
	borderColor:'black'

  },
  
});
