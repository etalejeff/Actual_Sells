// ProductDetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function ProductDetailsScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {/* Add more product details as needed */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
    fontSize: 18,
    marginTop: 10,
  },
});

export default ProductDetailsScreen;
