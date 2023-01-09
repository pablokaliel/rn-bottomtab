import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { New } from "../pages/New";
import { Notification } from "../pages/Notification";
import { Profile } from "../pages/Profile";
import { Search } from "../pages/Search";
import { Ionicons } from "@expo/vector-icons";
import { ButtonNew } from "../components/ButtonNew";

const { Screen, Navigator } = createBottomTabNavigator();

export default function Routes() {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#adadad",
        headerShown: false,
      }}
    >
      <Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Pesquisar"
        component={Search}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={color} />;
            }
            return <Ionicons name="search-outline" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Novo"
        component={New}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <ButtonNew size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Notificação"
        component={Notification}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return (
                <Ionicons name="notifications" size={size} color={color} />
              );
            }
            return (
              <Ionicons
                name="notifications-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      <Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />;
            }
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}
