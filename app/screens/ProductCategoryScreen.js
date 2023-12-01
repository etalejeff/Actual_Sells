// CategoryCategoryScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import CategoryList from "../components/CategoryList";

const categories = [
  {
    id: 1,
    title: "Vegetables",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Poultry",
    image: "https://picsum.photos/200/300",
  },
  // Add more categories as needed
];

function CategoryScreen({ navigation }) {
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
