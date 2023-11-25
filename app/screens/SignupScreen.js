// SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import CheckBox from 'expo-checkbox';

function SignupScreen({ navigation }) {
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignup = () => {
    // Simulate signup functionality
    // For now, just navigate to the ProductListScreen
    navigation.navigate('ProductList');
  };

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <TextInput placeholder="First Name" style={styles.input} />
      <TextInput placeholder="Last Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />
      <View style={styles.checkboxContainer}>
        <CheckBox value={agreeTerms} onValueChange={() => setAgreeTerms(!agreeTerms)} />
        <Text style={styles.checkboxText}>I agree to the Terms and Conditions</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={!agreeTerms}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 8,
  },
});

export default SignupScreen;
