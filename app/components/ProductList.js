// ProductList.js
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

function ProductList({ data, onPress }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)}>
          <View style={styles.card}>
            {item.image && typeof item.image === 'string' ? (
              <Image style={styles.image} source={{ uri: item.image }} />
            ) : (
              <Image style={styles.image} source={item.image} />
            )}
            <Text style={styles.title}>{item.title || item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </TouchableOpacity>
      )}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    color: 'green',
    marginBottom: 10,
    marginLeft: 10,
  },
  list: {
    paddingHorizontal: 20,
  },
});

export default ProductList;
