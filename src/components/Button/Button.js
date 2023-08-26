import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from "./Button.style"
import { ActivityIndicator } from 'react-native'
const Button = ({text,onPress, loading}) => {
  return (
    <TouchableOpacity style={ styles.container } onPress={ onPress }>
      {loading ? <ActivityIndicator color="gray"/> :  <Text style={ styles.title } >{ text }</Text>}
         
    </TouchableOpacity>
  )
}

export default Button