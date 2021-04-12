import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { CartScreenParamList } from "../types";

import CartScreen from "../screens/Cart/CartScreen";
import FinishPaymentScreen from "../screens/Cart/FinishPaymentScreen";
import PaymentScreen from "../screens/Cart/PaymentScreen";
import ShipInfoScreen from "../screens/Cart/ShipInfoScreen";

const Stack = createStackNavigator<CartScreenParamList>();

const CartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="ShipInfo" component={ShipInfoScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="FinishPayment" component={FinishPaymentScreen} />
    </Stack.Navigator>
  );
};

export default CartStackNavigator;

const styles = StyleSheet.create({});
