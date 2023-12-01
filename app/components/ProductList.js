// ProductList.js
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

function ProductList({ products, onProductPress, onAddToCart }) {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id.toString()}
      renderItem={({ item }) => (
        <ProductCard product={item} onPress={() => onProductPress(item)} onAddToCart={() => onAddToCart(item)} />
      )}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },
});

export default ProductList;
