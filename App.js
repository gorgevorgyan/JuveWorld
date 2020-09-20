import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
const axios = require('axios').default;
import { StyleSheet, Text, View,ImageBackground,ActivityIndicator } from 'react-native';

import { Icon } from 'react-native-elements'
import Nav from './src/navigator';
import Home from './src/home';
import Add from './src/add';
import List from './src/list';
import Signup from './src/signup';
import Signin from './src/signin';



class App extends React.Component {
	
	state = {
		loading: false,
		monsters:[]

	}

	  fetchData = async () => {
    try {
      const data = await fetch('https://juvesquad.herokuapp.com/')
      const fetchedData = await data.json()
       await this.setState({ monsters: fetchedData })
	   this.setState({loading: true})
	  
    } catch (error) {
		this.setState({loading: true})
      console.log(error);
    }
  }

  componentDidMount(){
    this.fetchData()

  } 
  render() {
	  if(this.state.loading){
    return(<Nav data={this.state.monsters} loading={this.state.loading} />);
	  }
	  else{
		  return(<ActivityIndicator  size='large' /> );
	  }
  }

}
export default App