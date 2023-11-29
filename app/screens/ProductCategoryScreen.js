// ProductCategoryScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';

const categories = [
  {
    id: 1,
    name: 'Fresh Vegetables',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: 'Organic Fruits',
    image: 'https://picsum.photos/200/300',
  },
  // Add more categories as needed
];

function ProductCategoryScreen({ navigation }) {
  const handleCategoryPress = (category) => {
    navigation.navigate('Products', { category });
  };

  return (
    <View style={styles.container}>
      <ProductList data={categories} onPress={handleCategoryPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
  },
});

export default ProductCategoryScreen;
