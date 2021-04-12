import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  navigation?: any;
  isHome: boolean;
  headerName?: string;
  isCartShown?: boolean;
}

const HeaderCart = ({ isCartShown = true, ...props }: IProps) => {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        {props.isHome ? (
          <TouchableOpacity
            onPress={() => {
              props.navigation.openDrawer();
            }}
          >
            <SimpleLineIcons name="menu" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{ paddingTop: "5%" }}
          >
            <Ionicons name="arrow-back-sharp" size={30} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.headerText}>{props.headerName}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        {isCartShown ? (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("CartStack", { screen: "Cart" });
            }}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SimpleLineIcons
              style={{ padding: 5 }}
              name="handbag"
              size={30}
              color="black"
            />
            <Text style={styles.cartNumber}>99</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default HeaderCart;

const styles = StyleSheet.create({
  cartNumber: {
    position: "absolute",
    marginLeft: 12,
    paddingTop: 15,
    fontSize: 13,
    fontWeight: "600",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    lineHeight: 22,
    textTransform: "uppercase",
    paddingTop: 10,
  },
});
