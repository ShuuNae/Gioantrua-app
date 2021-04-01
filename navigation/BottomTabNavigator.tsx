import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import OrderListScreen from "../screens/OrderListScreen";
import AccountScreen from "../screens/AccountScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: "#FDD40C" }}
    >
      <BottomTab.Screen
        name="Home"
        // children={() => <HomeScreen navigation={navigation} />}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Danh mục"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="appstore-o"
              size={20}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Đơn hàng"
        component={OrderListScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="list-alt"
              size={20}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Tài khoản"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={20} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerBackground: () => (
            <Image
              style={StyleSheet.absoluteFill}
              source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg",
              }}
            />
          ),
          headerStyle: {
            height: 200,
          },
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Category"
        component={CategoryScreen}
        options={{ headerTitle: "DANH MỤC" }}
      />
    </TabTwoStack.Navigator>
  );
}
