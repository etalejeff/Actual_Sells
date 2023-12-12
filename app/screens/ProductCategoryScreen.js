// CategoryCategoryScreen.js
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import CategoryList from "../components/CategoryList";
import axios from "axios";

function CategoryScreen({ navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from API
    axios.get("https://0343-41-90-181-124.ngrok-free.app/categories")
      .then(response => setCategories(response.data))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  const handleCategoryPress = (category) => {
    navigation.navigate("Products", { category });
  };

  const handleAddToCartCategory = (category) => {
    console.log("Adding category to cart:", category.title);
  };

  return (
    <View style={styles.container}>
      <CategoryList
        data={categories}
        onPress={handleCategoryPress}
        onAddToCart={handleAddToCartCategory}
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

export default CategoryScreen;
