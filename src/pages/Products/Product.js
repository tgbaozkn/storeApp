import React, { useState, useEffect } from "react";
import { SafeAreaView, ActivityIndicator, FlatList, Text } from "react-native";
import Config from "react-native-config";
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error"
import Category from "../../components/Category/Category";
const Product = ({navigation}) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const { loading, data, error } = useFetch( apiUrl );
   const handleProductSelect = (id) => { navigation.navigate("DetailPage",{id})};
  const renderProduct = ({ item }) => <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/>;
 
  return (
    <SafeAreaView>
       <Category/>
      {loading ? (
        <Loading />
      ) : (
         
        <FlatList data={data} renderItem={renderProduct} />
      ) }
      {
        error && <Error/>
      }
    </SafeAreaView>
  );
};
export default Product;
