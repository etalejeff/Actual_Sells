// ProductDetailsScreen.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function ProductDetailsScreen({ route }) {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <View style={styles.addToCartContainer}>
          <TouchableOpacity style={styles.addToCartButton} onPress={handleRemoveFromCart}>
            <Text style={styles.addToCartButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.addToCartButtonText}>+</Text>
          </TouchableOpacity>
        </View>
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
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
    fontSize: 18,
    marginTop: 10,
  },
  addToCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartButton: {
    backgroundColor: '#4ecdc4',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 18,
  },
});

export default ProductDetailsScreen;
