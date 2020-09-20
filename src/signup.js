import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik'
import * as Yup from 'yup'
import Error from './Error'
import {useState }from "react";

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    ScrollView,
	KeyboardAvoidingView
} from 'react-native';





const SignUp = ({ navigation }) => {
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
        firstname: Yup
            .string(),
        lastName: Yup
            .string()

    })
const [isShowingText, setIsShowingText] = useState('');
  const signUpFetch = async (value) => {
	  setIsShowingText('');
        try {
            const fetchedsignUp = await fetch('https://final-project-node-js.herokuapp.com/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            })
            const data = await fetchedsignUp.json()
			
            console.log(data);
            if(data.error){
				setIsShowingText(data.error);
                //console.log()
            }
			else{
				navigation.navigate('SignIn')
			}	
            
        } catch (error) {

        }
    }

    return (
	
        <Formik
            initialValues={{ firstname: '',email: '', password: '' }}
            validationSchema={validation}
            onSubmit={(values, { setSubmitting, resetForm }) => {
				console.log('o')
                setSubmitting(true)
				signUpFetch((values))
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
								<Text style={styles.headtext} >SignUp</Text>
								
							
							</View>
							<View style={styles.main}>
							
									 <Text style={styles.textname}>Name</Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name='user'
                                    color='#05375a'
                                    size={20}
                                />
                                <TextInput
                                    onChangeText={handleChange('firstname')}
                                    onBlur={handleBlur('name')}
                                    placeholder='Your name'
                                    placeholderTextColor='#666666'
                                    style={styles.textInput}
                                    value={values.firstname}

                                />
                            </View>
                            <Error touch={touched.name} error={errors.name} />
            


							
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
                                        }]}>Sign Up</Text>
                 

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

export default SignUp;

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