// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {
  const handleLogin = () => {
    // Simulate login functionality
    // For now, just navigate to the ProductCategoryScreen
    navigation.navigate('AddProducts');
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: 300,
  },
  button: {
    backgroundColor: '#4ecdc4',
    padding: 15,
    width: 300,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
