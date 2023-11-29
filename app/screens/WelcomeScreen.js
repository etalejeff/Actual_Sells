// WelcomeScreen.js
import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen(props) {
  const navigation = useNavigation();

  const handleExplorePress = () => {
    // Navigate to the product list screen
    navigation.navigate('CategoryList');
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo-red.png")} />
          <Text>Buy Farm Feed</Text>
        </View>
      </ImageBackground>
      <View style={styles.authButtonsContainer}>
        <TouchableOpacity style={styles.authButton} onPress={handleLoginPress}>
          <Text style={styles.authButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.authButton} onPress={handleSignupPress}>
          <Text style={styles.authButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  exploreText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  authButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 150,
    width: '100%',
  },
  authButton: {
    backgroundColor: '#fc5c65',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  authButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
