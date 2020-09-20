import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView,ImageBackground,Image,Dimensions,ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements'
import Constants from 'expo-constants';
const deviceWidth = Dimensions.get('window').width;
export default function Listitem(props) {
  return (
        <View style={styles.item}>
        <View style={styles.avatar}>
{props.loading ?<ActivityIndicator style={{marginTop:deviceWidth/2}}  size='large' /> :<Image source={{uri:props.tvyal.img}} style={styles.image}></Image>}</View>
        <View style={styles.name}><Text style={styles.nametext}>{props.tvyal.name}</Text></View>
        <View style={styles.position}><Text style={styles.pos}>{props.tvyal.position}</Text></View>
        <View style={styles.number}><Text style={styles.numtext}>{props.tvyal.number }</Text></View>
        </View>


  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

        // backgroundColor: 'red',
    },
    avatar: {
	width: deviceWidth/2-2,
    height: deviceWidth,

        // backgroundColor: 'red',
    },
    position: {
        width: deviceWidth/2-1,
        flexDirection:'column',
		borderBottomWidth:1,
		borderColor:'#d9c894',
		

    },
    name: {
        width: deviceWidth/2-1,
        flexDirection:'column',
		borderBottomWidth:1,
		borderColor:'#d9c894'
		
		

        
    },
    number: {
        width: deviceWidth/8,
		alignSelf:'center',
		alignItems:'center',
		justifyContent:'center',
		height:deviceWidth/4,
		backgroundColor:'#d9c894',
		paddingTop:deviceWidth/8






        
    },
    nametext: {
        color:'white',
        fontWeight:'bold',
		fontSize: deviceWidth*5/100
    },
    numtext: {
        color:'white',
        fontSize: deviceWidth*5/100,

    },
    pos: {
        color:'#d9c894',
        fontSize: deviceWidth*3/100,

    },
    surnametext: {
        color:'black',
        fontSize:30,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 10,
        color: 'orange'
    },
    main: {
        width: '100%',
        height: '100%',


    },
    item: {
        width: deviceWidth/2,
        height: deviceWidth+deviceWidth/4,
        backgroundColor: 'black',
        marginVertical: 20,
        alignSelf: 'center',
        flexDirection:'column',
		borderWidth:1,
		borderColor:'white',
		marginBottom:deviceWidth/8
		



    },
    itemtext: {
        fontSize: 20
    },
    image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }, 
  imageu: {
    flex: 1,
    resizeMode: "cover",
  },
})