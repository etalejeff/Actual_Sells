// AddProductsScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function AddProductsScreen() {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleAddCategory = () => {

    fetch('https://your-backend-url/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: categoryName, image: categoryImage }),
    });
  };

  const handleAddProduct = () => {
    // Make a POST request to your backend
    fetch('https://your-backend-url/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: productName, price: productPrice, image: productImage, category_id: categoryId }),
    });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="New Category Name" onChangeText={setCategoryName} />
      <TextInput placeholder="Category Image URL" onChangeText={setCategoryImage} />
      <Button title="Add Category" onPress={handleAddCategory} />
      <TextInput placeholder="New Product Name" onChangeText={setProductName} />
      <TextInput placeholder="Product Price" onChangeText={setProductPrice} />
      <TextInput placeholder="Product Image URL" onChangeText={setProductImage} />
      <Picker selectedValue={categoryId} onValueChange={(itemValue) => setCategoryId(itemValue)}>
        {/* You need to fetch and map your categories here */}
        <Picker.Item label="Category 1" value="1" />
        <Picker.Item label="Category 2" value="2" />
      </Picker>
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default AddProductsScreen;