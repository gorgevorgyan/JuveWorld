import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView,ImageBackground,Image } from 'react-native';
import { Icon } from 'react-native-elements'
import Constants from 'expo-constants';
import Listitem from './listitems';
const backgroundimg= {uri:'https://www.pixelstalk.net/wp-content/uploads/2016/07/Bayern-Munich-Desktop-Background.jpg'}

export default function List(props) {

  const HEIGHT = 200
  return (
  <View style={styles.container}>

  <ScrollView style={styles.main}>
  { 
	props.data ? props.data.map((i,index)=>{
  return (
  <Listitem key={index} tvyal={i}/>

              )
                    }):null

}

  </ScrollView>

  </View>

  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    avatar: {
        width: '20%',
        height: '100%',
               borderRightWidth:2,
        borderRightColor:'#ca1112',
        // backgroundColor: 'red',
    },
    position: {
        width: '30%',
        height: '100%',
        flexDirection:'row',
        borderRightWidth:2,
        borderRightColor:'#ca1112',
        justifyContent:'center',
        alignItems:'center'
    },
    name: {
        width: '30%',
        height: '100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:2,
        borderRightColor:'#ca1112',
        
    },
    number: {
        width: '20%',
        height: '100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',


        
    },
    nametext: {
        color:'black',
        fontSize:30,
        fontWeight:'bold',
    },
    numtext: {
        color:'black',
        fontSize:30,
        fontWeight:'bold',
    },
    pos: {
        color:'black',
        fontWeight:'bold',
        fontSize:30
    },
    surnametext: {
        color:'black',
        fontSize:30,
    },
    header: {
        width: '100%',
        height: '15%',
        backgroundColor: '#000',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 10,
        color: 'orange'
    },
    main: {
        width: '100%',
        height: '85%',


    },
    item: {
        width: '90%',
        height: 200,
        backgroundColor: 'white',
        marginVertical: 20,
        alignSelf: 'center',
        flexDirection:'row'

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