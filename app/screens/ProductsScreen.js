// ProductsScreen.js
import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ProductList from "../components/ProductList";
import { useCart } from "../config/AppContext";
import { Ionicons } from "@expo/vector-icons";

const products = [
  {
    id: 1,
    title: "Fresh Vegetables",
    price: "$5.99",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Organic Fruits",
    price: "$3.99",
    image: "https://picsum.photos/200/300",
  },
  // Add more products as needed
];

function ProductsScreen({ navigation }) {
  const {addToCart, cartItems} = useCart();


  useEffect(() => {
    // Add a navigation event listener to update the header when the cart changes
    const unsubscribe = navigation.addListener("focus", () => {
      // Your logic to update the header
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Ionicons
              name="basket-outline"
              size={30}
              color="#fff"
              style={{ marginRight: 15 }}
            />
            {/* Display the cart count dynamically */}
            <Text style={{ color: "#fff", marginRight: 5 }}>
              {cartItems.length}
            </Text>
          </TouchableOpacity>
        ),
      });
    });

    // Cleanup the listener when the component unmounts
    return unsubscribe;
  }, [navigation, cartItems]);

  const handleProductPress = (product) => {
    navigation.navigate("Cart", { product });
  };

  const handleAddToCartProduct = (product) => {
    // Handle adding to cart logic for products
    console.log("Adding to cart:", product.title);
    addToCart(product);
  };

  return (
    <View style={styles.container}>
      <ProductList
        data={products}
        onPress={handleProductPress}
        onAddToCart={handleAddToCartProduct}
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
