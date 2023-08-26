import { View, Text, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch/useFetch';
import styles from "./Category.style"
import Button from '../Button/Button';
import { useSelector } from 'react-redux';

export default function Category ({alldata, navigation})
{
    const apiUrl = "https://fakestoreapi.com/products/categories";
  const { loading, error, data } = useFetch( apiUrl );
  const token = useSelector( s => s.user );
  const onSelect = (item) =>
  {
    const filteredData  = alldata.filter( a => a.category === item );
 
    navigation.navigate("ProductPage", { filteredData }); 
    }
  const renderCategory = ( { item } ) => <Text style={styles.category} onPress={()=>onSelect(item)}>{ item }</Text> 
  return (
    <View>
     {!token&&<Button text='Login' onPress={ () => navigation.navigate( "LoginPage" ) } style={ styles.button }  />} 
      <FlatList
        horizontal
        data={ data } 
        renderItem={ renderCategory }
        
      />
    </View>
  )
}