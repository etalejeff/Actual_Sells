//ProductCategoryScreen.js
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';
import { AuthContext } from '../config/AppContext';

const categories = [
  {
    id: 1,
    title: 'Product 1',
    price: '$5.99',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    title: 'Product 2',
    price: '$3.99',
    image: 'https://picsum.photos/200/300',
  },
  // Add more products as needed
];

function ProductCategoryScreen({ navigation}) {
  const { addToCart } = useContext(AuthContext);

  const handleProductPress = (category) => {
    navigation.navigate('Products', { category, addToCart });
  };

  return (
    <View style={styles.container}>
      <ProductList 
        products={categories} 
        onProductPress={handleProductPress} 
        onAddToCart={addToCart} // Pass addToCart function to ProductList
      />
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
