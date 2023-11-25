// ProductCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function ProductCard({ product, onPress, onAddToCart }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        {product.image && typeof product.image === 'string' ? (
          <Image style={styles.image} source={{ uri: product.image }} />
        ) : (
          <Image style={styles.image} source={product.image} />
        )}
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    color: 'green',
    marginBottom: 10,
    marginLeft: 10,
  },
  addToCartButton: {
    backgroundColor: '#4ecdc4',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductCard;
