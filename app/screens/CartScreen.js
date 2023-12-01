// CartScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCart } from '../config/AppContext';

function CartScreen({ navigation, route }) {
  // Fetch the cart items from the route parameters
  const { cartItems } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Shopping Cart</Text>
      {/* Render cart items here */}
      {cartItems.map((item, index) => (
        <View key={index} style={styles.cartItem}>
          <Text>{item.name}</Text>
          {/* Add more details about the item */}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
});

export default CartScreen;
