import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState }from "react";
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik'
import * as Yup from 'yup'
import Error from './Error'

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    ScrollView,
	KeyboardAvoidingView,
	 AsyncStorage,
	 
} from 'react-native';





const SignIn = ({ navigation }) => {
const [isShowingText, setIsShowingText] = useState('');
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

		    const signInFetch = async (value) => {
				setIsShowingText(' ');
        try {
            const fetchedSignIn = await fetch('https://final-project-node-js.herokuapp.com/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            })
            const data = await fetchedSignIn.json()
			if(data.auth_token){
             await AsyncStorage.setItem('token',  data.auth_token)
			await  AsyncStorage.getItem('token') ? navigation.navigate('Profile') : navigation.navigate('SingIn')  
			
			}
			else{
			setIsShowingText('Email or Password are invalid!');
			}				
        } catch (error) {
            console.log(error);
        }
    }

    return (
	
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validation}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true)
				signInFetch(values)
                setTimeout(() => {
                    console.log(JSON.stringify(values))
                }, 1000)
                
                setSubmitting(false)
            }
            }
        >

            {(
                {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }
            ) => {
                return (
				
                    <KeyboardAvoidingView 
							behavior={Platform.OS == "ios" ? "padding" : "height"} 
							  style={styles.container}>
                        <StatusBar backgroundColor='black' barStyle='light-content' />

                        <Animatable.View
                            style={styles.footer}
                            animation='fadeInUpBig'
                        >
								
                          
							<View style={styles.head}>
							<TouchableOpacity   onPress={() => {
                                       navigation.navigate('Add')
                                    handleSubmit
                                    }}><Text>Back</Text></TouchableOpacity>
								<Text style={styles.headtext} >SignIn</Text>
								
							
							</View>
							<View style={styles.main}>
							

            


							
                            <Text style={styles.textname}>Email</Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name='user-o'
                                    color='#05375a'
                                    size={20}
                                />
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    placeholder='Your Email'
                                    placeholderTextColor='#666666'
                                    style={styles.textInput}
                                    value={values.email}

                                />
                            </View>
                            <Error touch={touched.email} error={errors.email} />

                            <Text style={styles.textname}>Password</Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name='lock'
                                    color='#05375a'
                                    size={20}
                                />
                                <TextInput

                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    placeholder='Your Password'
                                    placeholderTextColor='#666666'
                                    style={styles.textInput}
                                    value={values.password}
                                    secureTextEntry={true}
                                />
                            </View>
                            <Error touch={touched.password} error={errors.password} />
							<Text style={{color:'red'}}>{isShowingText}</Text>
                            <View style={styles.button}>
                                <TouchableOpacity
                                    style={styles.sub}
                               onPress={handleSubmit}

                                >
                   
                                        <Text style={[styles.textSign, {
                                            color: 'black'
                                        }]}>Sign In</Text>
                 

                                </TouchableOpacity>

                            </View>
							</View>
                        </Animatable.View>
						</KeyboardAvoidingView >
        
						
					)
            }
            }
        </Formik>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30,

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
		height:'20%',
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

    textInput: {
        width: '50%',
        paddingLeft: 15,
        color: '#05375a',
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