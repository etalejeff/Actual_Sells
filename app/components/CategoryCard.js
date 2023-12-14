// CategoryCard.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function CategoryCard({ category, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        {category.image && typeof category.image === "string" ? (
          <Image style={styles.image} source={{ uri:category.image }} />
        ) : (
          <Image style={styles.image} source={category.image} />
        )}
        <Text style={styles.name}>{category.name}</Text>
      </View>
    </TouchableOpacity>
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
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default CategoryCard;
