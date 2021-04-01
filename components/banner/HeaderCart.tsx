import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import navigation from "../../navigation";

const HeaderCart = ({...props}: any) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <TouchableOpacity onPress={() => {props.navigation.openDrawer()}} >
          <SimpleLineIcons name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text></Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
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
      </View>
    </View>
  );
};

export default HeaderCart;

const styles = StyleSheet.create({
  cartNumber: {
    position: "absolute",
    marginLeft: 12,
    paddingTop: 15,
    fontSize: 13,
    fontWeight: "600"
  },
});
