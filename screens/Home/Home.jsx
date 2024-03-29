import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import LogoutBtn from "../../components/LogoutBtn";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import BackBtn from "../../components/BackBtn";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

const Home = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator screenOptions={styles.tabOptions}>
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerLeft: false,
          headerTitle: "Публікації",
          headerRight: () => <LogoutBtn />,
          tabBarIcon: () => (
            <Ionicons name="ios-grid-outline" size={24} color="#BDBDBD" />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerLeft: false,
          headerTitle: "Створити публікацію",
          headerLeft: () => <BackBtn />,
          tabBarIcon: () => <Ionicons name="add" size={24} color="white" />,
          tabBarIconStyle: {
            width: 70,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FF6C00",
            borderRadius: 30,
          },
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          headerLeft: false,
          headerTitle: "ProfileScreen",
          headerRight: () => <LogoutBtn />,
          tabBarIcon: () => <Feather name="user" size={24} color="#BDBDBD" />,
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabOptions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#ffffff",
    tabBarInactiveTintColor: "#212121",
    tabBarStyle: {
      height: 83,
      paddingTop: 9,
      paddingHorizontal: 82,
    },
  },
});

export default Home;
