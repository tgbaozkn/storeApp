import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Product from './src/pages/Products';
import Detail from './src/pages/Detail';
const Stack = createStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
          <Stack.Navigator >
              <Stack.Screen name='ProductPage'component={Product} options={{title:"Store",headerStyle:{backgroundColor:"#f5f093"},headerTitleStyle:{color:"#615e2f",fontSize:38}}}/>
              <Stack.Screen name='DetailPage' component={Detail} options={{title:"Details",headerStyle:{backgroundColor:"#615e2f"},headerTitleStyle:{color:"#f5f093",fontSize:38}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}