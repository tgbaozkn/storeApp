import { View, Text } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch/useFetch';

export default function Category ()
{
    const apiUrl = "https://fakestoreapi.com/products/categories";
    const { loading, error, data } = useFetch( apiUrl );
    console.log( data );
  return (
    <View>
          <Text>{ data}</Text>
    </View>
  )
}