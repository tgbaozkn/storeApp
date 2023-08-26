import { View, Text,Image } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch/useFetch';
import styles from "./Detail.style"
const Detail = ( { route } ) =>
{
  const apiUrl = process.env.EXPO_PUBLIC_API_URL + `/${ route.params.id }`;
  const { loading, error, data } = useFetch( apiUrl );

  return (
    <View style={styles.container}>
      <Text style={ styles.title }>{ data.title}</Text>
      <Image source={ { uri: data.image } } style={ styles.image } />
      <Text style={ styles.detail }>{ data.description }</Text>
      <Text style={ styles.category }>{ data.category }</Text>
      <Text style={ styles.price }>{ data.price }€</Text>
    </View>
  )
}

export default Detail;