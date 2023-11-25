// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ProductListScreen from './app/screens/ProductListScreen';
import ProductDetailsScreen from './app/screens/ProductDetailsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
