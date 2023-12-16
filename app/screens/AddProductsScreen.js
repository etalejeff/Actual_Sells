// AddProductsScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';

function AddProductsScreen() {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [categoryId, setCategoryId] = useState(1);
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);

  // const selectImage = (setImage) => {
  //   let options = {
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };

  //   launchImageLibrary(options, (response) => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else {
  //       setImage(response.uri);
  //     }
  //   });
  // };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
      <Button title="Select Category Image" onPress={() => pickImage(setCategoryImage)} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Add Category" onPress={handleAddCategory} />
      <TextInput placeholder="New Product Name" onChangeText={setProductName} />
      <TextInput placeholder="Product Price" onChangeText={setProductPrice} />
      <Button title="Select Product Image" onPress={() => pickImage(setProductImage)} />
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