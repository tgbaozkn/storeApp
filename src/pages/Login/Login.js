import { View, Text, Image, KeyboardAvoidingView , Platform } from 'react-native'
import React from 'react'
import { SafeAreaView, Alert } from 'react-native'
import styles from "./Login.style";
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Formik } from 'formik';
import usePost from '../../hooks/usePost';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

const Login = () =>
{
    const { data, error, loading, post } = usePost();
    const dispatch = useDispatch();
    const authUrl = process.env.EXPO_PUBLIC_LOGIN_AUTH_URL;

    function handleLogin ( values )
    {
        post( authUrl + '/login', (values) );

    }
    if (error  )
    {
        Alert.alert( "Store", error);
      
    }
    if ( data)
    {
       
   
        if ( data.token?.length > 1 )
        {
            const token = data.token;
            dispatch({type : "SET_USER", payload:{token}})
        }
         else 
        {
                Alert.alert( "Store", "User not found" );
        }
    }
    
    return (
      <SafeAreaView style={styles.container}>
    <View style={styles.logo_container}>
            <Image source={require("../../../assets/shoppinglogo.png")} style={styles.image} />
            </View>
                <KeyboardAvoidingView
                style={{ flex: 1 }}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
            <Formik
                initialValues={ { username: '', password: ''} }
                onSubmit={ handleLogin }
                //validasyon işlemleri için yup paketi ve validationSchema
            >
                { ( { handleSubmit, handleChange, values } ) => (
                    <View style={ styles.body_container }>
                        <Input
                            placeholder={ "Enter username" }
                            value={ values.username }
                            onChangeText={ handleChange( 'username' ) }
                            iconName={ "account" }
                            secureTextEntry={false}
                        />
                  
                          <Input
                            placeholder={ "Enter password" }
                            value={ values.password }
                            onChangeText={ handleChange( 'password' ) }
                            iconName={ "key" }
                            secureTextEntry={true}
                        />
                        <Button text={"Login"} onPress={handleSubmit} loading={loading} />
                    </View>
                )}


                </Formik>
                </KeyboardAvoidingView>
            </SafeAreaView>
  )
}

export default Login
