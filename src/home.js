import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import * as Animatable from 'react-native-animatable';

import { StyleSheet, Text, View,ImageBackground,ScrollView,Image,Dimensions, } from 'react-native';
import { Icon } from 'react-native-elements'
const backgroundimg= {uri:'https://www.uokpl.rs/fpng/f/238-2381781_dybala-png-dybala.png'}
const backgroundimg1= {uri:'https://i.pinimg.com/originals/f9/17/47/f917478267915f6f8b4a0cd2cb22b4eb.png'}

var deviceWidth = Dimensions.get('window').width;


export default function Home() {
  return (
    <View style={styles.container}>
	<View style={styles.header}>
	<View style={styles.title}>
	<Animatable.Text animation="pulse" easing="ease-in" iterationCount="infinite" style={styles.txt}>Welcome to Juventus-World</Animatable.Text>
	
	</View>
	</View>
		<View style={styles.logo}>
		<Image source={backgroundimg1} style={styles.logoi}></Image>
		</View><Text style={styles.txt} >Welcome To Juventus-World</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
	header:{
		width:'100%',
		height:'20%',
		backgroundColor:'white',
		
	},
		title:{
					width:'100%',
		height:'100%',
	justifyContent: 'center',
    alignItems: 'center'
	},
	txt:{
		fontSize:25
	},

	logo:{
	width: '100%',
    height: '80%',
	},
	logoi:{
		
		    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
		
	},


});
