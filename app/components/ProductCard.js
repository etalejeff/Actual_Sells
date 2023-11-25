import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function ProductCard({ product, onPress }) {
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
});

export default ProductCard;
