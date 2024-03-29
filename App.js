import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { useFonts } from "expo-font";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "./screens/PostsScreen/PostsScreen";
import { Feather } from "@expo/vector-icons";
import LogoutBtn from "./components/LogoutBtn";
import Home from "./screens/Home/Home";
import CommentsScreen from "./screens/CommentsScreen/CommentsScreen";
import BackBtn from "./components/BackBtn";
import MapScreen from "./screens/MapScreen/MapScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={styles.container}
      >
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerLeft: false,
            headerTitle: "Коментарі",
            headerLeft: () => <BackBtn />,
          }}
        />
      </MainStack.Navigator>
      <MainStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
