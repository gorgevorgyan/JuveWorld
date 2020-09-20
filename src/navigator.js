import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './home';
import Add from './add';
import {useState }from "react";
import List from './list';
import Signup from './signup';
import Signin from './signin';
import Profile from './Profile';
import { Image, StyleSheet,AsyncStorage } from 'react-native';


const Tab = createMaterialBottomTabNavigator();

function Navigator(){
	const [auth, check] = useState(false);
let _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
	//console.log(value)
    if (value) {
      check(true)
    }
	else{
		check(false)
	}
  } catch (error) {
     console.log(error)
  }
};
_retrieveData()
	return(
	<Stack.Navigator headerMode={false}>
		<Stack.Screen name="Auth" component={auth ? Profile : Add  } />
		<Stack.Screen name="Add" component={ Add  } />
		<Stack.Screen name="SignUp" component={Signup} />
		<Stack.Screen name="SignIn" component={Signin} />
		<Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
	)
}
export default function Nav(props) {
    return (

        <NavigationContainer style={styles.nav}>
            <Tab.Navigator
                initialRouteName="Home"
                labeled={false}
                barStyle={{ backgroundColor: 'white' }}
            >
                <Tab.Screen
                    options={{
                        tabBarIcon: () => {
                            return (
                                    <Icon
										name="home"
										size={26}
										color="black"
									/>
                            )
                        }
                    }}
                    name="Home" component={Home} />
                <Tab.Screen
                    options={{
                        tabBarIcon: () => {
                            return (

                                     <Icon
										name="team"
										size={26}
										color="black"
									/>
                            )
                        }
                    }}
                    name="List" children={() => <List data={props.data}/>} />
                <Tab.Screen
                                    options={{
                        tabBarIcon: () => {
                            return (
                                    <Icon
										name="user"
										size={24}
										color="black"
									/>
                            )
                        }
                    }}
                    name="Auth" component={Navigator} />
          </Tab.Navigator>
        </NavigationContainer>

    )
}


const styles = StyleSheet.create({

});