import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Animatable from 'react-native-animatable';

import Dialog, { DialogContent } from 'react-native-popup-dialog';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Error from './Error';;;
import { Avatar, Accessory } from 'react-native-elements';

import {
    View,
	Platform,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    ScrollView,
	KeyboardAvoidingView,
	Dimensions,
	AsyncStorage,
	ActivityIndicator,
	ImageBackground,
	Image,
	Button
} from 'react-native';




const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
class Profile extends React.Component {
	
		state = {
		visible:false,
		firstname:'',
		image: 'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859',
	}
	    fetchUser = async () => {

        try {

            const token = await AsyncStorage.getItem('token')
            //console.log(token);
            const fetchData = await fetch('https://final-project-node-js.herokuapp.com/auth/profile', {
                method: 'GET',
                headers: {
                    'auth-token': token
                }
            })
            const fetchedData = await fetchData.json()
            //console.log(fetchedData);
            await this.setState({
                firstname: fetchedData.firstname,
				
            })
			//console.log(this.state.firstname)
        } catch (error) {
            console.log(error);
        }
    }
	  componentDidMount() {
        this.fetchUser()
    }
	render() {
		let { image } = this.state;
		
		
	const {navigation}  = this.props;
    const validation = Yup.object().shape({
        email: Yup
            .string()
            .email('Invalid email adress!')
            .max(30, 'Email must  be shorter than 30!')
            .required('Email is Required!'),
        password: Yup
            .string()
            .min(6, 'Invalid password')
            .required('Password is Required!'),
        name: Yup
            .string(),
        lastName: Yup
            .string()

    })

 
   let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync();
    //console.log(pickerResult);
	if(pickerResult.uri){
	await this.setState({ image: pickerResult.uri });
	this.setState({ visible: false });
	}
	
  }
  
  let _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
	//console.log(value)
    if (value) {
      return( true)
    }
	else{
		return (false)
	}
  } catch (error) {
     console.log(error)
  }
};
//console.log(_retrieveData())
  let logout = async () =>{
	  await  AsyncStorage.removeItem('token')
	  navigation.navigate('Add')  
	  
	 
	  
	  
  }
 
                return (
				
                    <View style={styles.container}>

                        <StatusBar backgroundColor='black' barStyle='light-content' />

                        <Animatable.View
                            style={styles.footer}
                            animation='fadeInUpBig'
                        >
								
                          
							<View style={styles.head}>
							<TouchableOpacity   onPress={logout}>
									   <Text>LogOut</Text>
						   </TouchableOpacity>
						   
								<Animatable.Text animation="pulse" easing="ease-in" iterationCount="infinite" style={styles.headtext} >{this.state.firstname}</Animatable.Text>
								
								<View style={ styles.profilephoto }>
							
								<View style={ styles.klor }>
								 <Image source={{uri:this.state.image}} style={styles.logoi}></Image>
								
								
								
								
								
								
								
							
								
								</View>
			<TouchableOpacity style={styles.editicon} onPress={() => {this.setState({ visible: true })}}  >
									   
						      
				         <Icon1
										name="edit"
										size={25}
										color="black"
										
									/>
				
									</TouchableOpacity>
									</View>	
									
					
								</View>
								
							<Dialog
    visible={this.state.visible}
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}
  >
  
    <DialogContent>
	<View style={styles.dude}>
	<Text style={styles.title}>How do you want to upload photo?</Text>
	<View style={styles.cont}>
	
		<TouchableOpacity style={styles.choose} onPress={this.getPermissionAsync }>
			<Icon
			name="photograph"
			size={20}
			color="black"
		/>
		<Text>Choose photo</Text>

		
		</TouchableOpacity>
		<TouchableOpacity onPress={openImagePickerAsync} style={styles.choose}>
		<Icon
		name="camera"
		size={20}
		color="black"
		/>
		<Text>Take photo</Text>

		</TouchableOpacity>
		</View>
		</View>
    </DialogContent>
  </Dialog>

                        </Animatable.View>
						
						</View>
        
						
				

      

    );
 }


  getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
	  else{
		  this._pickImage()
	  }
	  
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
		  if(result.uri){
        await this.setState({ image: result.uri });
		this.setState({ visible: false });
		  }
		//console.log("yo"+this.state.image)
		
      }

      //console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

 
 
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
	i:{
		textAlign:'center',
		marginTop:'50%',
		fontSize:25
	},
	  cont: {
        width:deviceWidth/2,
		height:deviceWidth/4,
		flexDirection:'column',
		alignItems:'center',
		justifyContent:'center',
		
		

    },
	dude:{
		flexDirection:'column',
		alignItems:'center'
		
	},
	title:{
		textAlign:'center',
		marginTop:25,
		marginBottom:25,
	},
	choose: {
		width:'100%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection:'row',
		height:50,
		marginBottom:10,
		
		borderWidth:1,
		borderColor:'black',
	
		

    },
	profilephoto: {
		marginTop:50,
       justifyContent:'center',
	   alignItems:'center',
	   flexWrap:'wrap',
	   flexDirection:'row',
	   alignSelf:'center',
	   
    },
		avatar: {
		borderWidth:1,
		borderColor:'black'
	   
    },
	klor:{
		width:150,
		height:150,
		borderWidth:1,
		borderColor:'black',
		borderRadius:360, 
		display:'flex'
		
	},

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
	editicon: {


		alignSelf:'flex-end'
	

    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30,

    },
	logoi: {
        width:148,
		height:148,
		borderRadius:360,
		alignSelf:'center'

    },
	headtext:{
		textAlign:'center',
		fontSize:45
	},
	
	  main: {
        width:'100%',
		height:'80%',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30,
		justifyContent:'center',
		alignItems:'center'
    },
	head: {
        width:'100%',
		height:'100%',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30,

    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    textname: {
        color: 'black',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 5
    },


    button: {
        alignItems: 'center',
        marginTop: 25,
		width:'50%'
    },
    sub: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        justifyContent: 'center',
		borderWidth:1,
        alignItems: 'center',
    },
    textSign: {
        fontSize: 15

    }
});