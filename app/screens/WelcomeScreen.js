// WelcomeScreen.js
import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen(props) {
  const navigation = useNavigation();

  const handleExplorePress = () => {
    // Navigate to the product list screen
    navigation.navigate('ProductList');
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo-red.png")} />
          <Text>Buy Farm Feed</Text>
        </View>
      </ImageBackground>
      <TouchableOpacity style={styles.exploreButton} onPress={handleExplorePress}>
        <Text style={styles.exploreText}>Explore Products</Text>
      </TouchableOpacity>
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
  exploreButton: {
    backgroundColor: "#4ecdc4",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    position: 'absolute',
    bottom: 50,
  },
  exploreText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
