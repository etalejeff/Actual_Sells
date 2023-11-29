import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';

const products = [
  {
    id: 1,
    title: 'Fresh Vegetables',
    price: '$5.99',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    title: 'Organic Fruits',
    price: '$3.99',
    image: 'https://picsum.photos/200/300',
  },
  // Add more products as needed
];

function ProductCategoryScreen({ navigation }) {
  const handleProductPress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.container}>
      <ProductList products={products} onProductPress={handleProductPress} />
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
