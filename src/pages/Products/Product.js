import React, { useState, useEffect } from "react";
import { SafeAreaView, ActivityIndicator, FlatList, Text } from "react-native";

import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Category from "../../components/Category/Category";

import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
const Product = ({ navigation, route }) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const { loading, data, error } = useFetch( apiUrl );
  const handleProductSelect = (id) => {
    navigation.navigate("DetailPage", { id });
  };
  const renderProduct = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  const filteredData = route.params?.filteredData;
  const user = useSelector( s => s.user );
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Category alldata={data} navigation={navigation} />

      {loading ? (
        <Loading />
      ) : (
      
         
            
          <FlatList data={typeof filteredData ==="undefined" ? data : filteredData} renderItem={renderProduct} ListFooterComponent={<Button loading={false} onPress={()=>dispatch({type:"REMOVE_USER"})} text={"LOG OUT"} />} />
 
      )}
      {error && <Error />}
    </SafeAreaView>
  );
};
export default Product;
