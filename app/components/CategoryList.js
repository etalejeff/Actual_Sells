// CategoryList.js
import React from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from "react-native";
import CategoryCard from "./CategoryCard";

function CategoryList({ data, onPress, onAddToCart }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CategoryCard
          category={item}
          onPress={() => onPress(item)}
          onAddToCart={() => onAddToCart(item)}
        />
      )}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    color: "green",
    marginBottom: 10,
    marginLeft: 10,
  },
  list: {
    paddingHorizontal: 20,
  },
});

export default CategoryList;
