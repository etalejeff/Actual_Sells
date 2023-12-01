// CartScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CartScreen({ navigation }) {
  // Fetch the cart items from your state or context
  const cartItems = []; // Replace with your logic to get cart items

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {/* Render cart items here */}
      {cartItems.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Text>{item.title}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
});

export default CartScreen;
