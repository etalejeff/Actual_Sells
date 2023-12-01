// CartIcon.js
import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { AuthContext } from '../config/AppContext';

function CartIcon({ navigation }) {
  const { cartItems } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <Text>{cartItems.length}</Text>
    </TouchableOpacity>
  );
}

export default CartIcon;