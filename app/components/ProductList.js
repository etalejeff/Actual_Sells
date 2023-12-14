// ProductList.js
import React from "react";
import {
  FlatList,
  StyleSheet,
} from "react-native";
import ProductCard from "./ProductCard";

function ProductList({ data, onPress, onAddToCart }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
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

export default ProductList;
