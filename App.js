// App.js
import { React, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ProductCategoryScreen from "./app/screens/ProductCategoryScreen";
import ProductDetailsScreen from "./app/screens/ProductDetailsScreen";
import ProductsScreen from "./app/screens/ProductsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import CartIcon from "./app/components/CartIcon";
import CartScreen from "./app/screens/CartScreen";
import { AuthContext } from "./app/config/AppContext";

const Stack = createStackNavigator();

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <AuthContext.Provider value={{ cartItems, addToCart }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={({ navigation }) => ({
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen
            name="CategoryList"
            component={ProductCategoryScreen}
            options={({ navigation }) => ({
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Products"
            component={ProductsScreen}
            options={({ navigation }) => ({
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={({ navigation }) => ({
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          {/* Add more screens as needed */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
