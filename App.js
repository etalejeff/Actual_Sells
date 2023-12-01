// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ProductCategoryScreen from "./app/screens/ProductCategoryScreen";
import ProductDetailsScreen from "./app/screens/ProductDetailsScreen";
import ProductsScreen from "./app/screens/ProductsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import CartScreen from "./app/screens/CartScreen";
import { Ionicons } from "@expo/vector-icons";
import { CartProvider } from "./app/config/AppContext";

const Stack = createStackNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                  <Ionicons
                    name="basket-outline"
                    size={30}
                    color="#fff"
                    style={{ marginRight: 15 }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Categories"
            component={ProductCategoryScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                  <Ionicons
                    name="basket-outline"
                    size={30}
                    color="#fff"
                    style={{ marginRight: 15 }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;
