// ProductsScreen.js
import {React, useContext} from "react";
import { View, StyleSheet } from "react-native";
import ProductList from "../components/ProductList";
import { AuthContext } from '../config/AppContext';

// You can replace this with a call to your backend to get the products of the selected category
const products = [
  {
    id: 1,
    title: "Product 1",
    price: "$5.99",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Product 2",
    price: "$3.99",
    image: "https://picsum.photos/200/300",
  },
  // Add more products as needed
];

function ProductsScreen({ route }) {
  const { addToCart } = useContext(AuthContext); 

  return (
    <View style={styles.container}>
      <ProductList
        products={products}
        onProductPress={() => {}}
        onAddToCart={addToCart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});

export default ProductsScreen;
