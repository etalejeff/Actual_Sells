// CartScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthContext from '../config/AppContext';

function CartScreen() {
    const { cartItems } = useContext(AuthContext);
  
    return (
      <View>
        {cartItems.map((item) => (
          <Text key={item.id}>{item.title}</Text>
        ))}
      </View>
    );
  }
  
  export default CartScreen;
