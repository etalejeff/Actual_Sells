// AddProductsScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function AddProductsScreen() {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [categoryId, setCategoryId] = useState(1);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://2694-41-90-189-71.ngrok-free.app/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddCategory = () => {
    const categoryData = { name: categoryName, image: categoryImage };
    console.log('Adding category:', categoryData);

    fetch('https://2694-41-90-189-71.ngrok-free.app/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: categoryName, image: categoryImage }),
    });
  };

  const handleAddProduct = () => {
    const productData = { name: productName, price: productPrice, image: productImage, category_id: categoryId };
    console.log('Adding product:', productData);

    fetch('https://2694-41-90-189-71.ngrok-free.app/products', {
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
        <Picker.Item label="Choose category" value="" style={{ color: "#000", fontSize: 15 }}/>
        {categories.map((category) => (
          <Picker.Item key={category.id} label={category.name} value={category.id} style={{ color: "#000", fontSize: 15 }} />
        ))}
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