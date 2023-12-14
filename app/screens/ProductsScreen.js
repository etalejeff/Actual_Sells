// ProductsScreen.js
import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ProductCard from "../components/ProductCard"; 
import ProductList from "../components/ProductList";
import { useCart } from "../config/AppContext";
import { Ionicons } from "@expo/vector-icons";

function ProductsScreen({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const categoryId = parseInt(route.params.categoryId, 10); // Ensure it's an integer

  useEffect(() => {
    fetch("https://fc70-41-90-181-124.ngrok-free.app/products")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.category_id === categoryId
        );
        console.log("Filtered products:", filteredProducts);
        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [categoryId]);
  
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="basket-outline"
                size={5}
                color="#fff"
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: "#000", fontSize: 10 }}>
                {cartItems.length}
              </Text>
            </View>
          </TouchableOpacity>
        ),
      });
    });

    return unsubscribe;
  }, [navigation, cartItems]);

  const handleProductPress = (product) => {
    navigation.navigate("ProductDetails", { product });
  };

  const handleAddToCartProduct = (product) => {
    console.log("Adding to cart:", product.name);
    addToCart(product);
  };

  return (
    // <View style={styles.container}>
    //   {products.map((product) => (
    //     <ProductCard
    //       key={product.id}
    //       product={product}
    //       onPress={() => handleProductPress(product)}
    //       onAddToCart={() => handleAddToCartProduct(product)}
    //     />
    //   ))}
    // </View>
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
    padding: 16,
  },
});

export default ProductsScreen;
