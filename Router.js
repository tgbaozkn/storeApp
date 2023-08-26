import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Product from './src/pages/Products';
import Detail from './src/pages/Detail';
import Login from './src/pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './src/components/Loading/Loading';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();
export default function Router ()
{
  const userSession = useSelector( s => s.user );
  const isAuthLoading = useSelector( s => s.isAuthLoading )
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
        { isAuthLoading ? <Loading/> :
          !userSession ? (
            <Stack.Navigator >
            <Stack.Screen name='LoginPage' component={Login} options={{title:"Login",headerStyle:{backgroundColor:"#C46200"},headerTitleStyle:{color:"white",fontSize:38}}}/>

            </Stack.Navigator>
          ) :
      <Stack.Navigator >
              
              <Stack.Screen name='ProductPage'component={Product} options={{title:"Store",headerStyle:{backgroundColor:"#f5f093"},headerRight:()=>(<Icon name='logout' size={40} color={"#615e2f"} onPress={()=>dispatch({type:"REMOVE_USER"})}  />),headerTitleStyle:{color:"#615e2f",fontSize:38}}}/>
              <Stack.Screen name='DetailPage' component={Detail} options={{title:"Details",headerStyle:{backgroundColor:"#615e2f"},headerTitleStyle:{color:"#f5f093",fontSize:38}}}/>
      </Stack.Navigator>
           
        }
    </NavigationContainer>
  )
}