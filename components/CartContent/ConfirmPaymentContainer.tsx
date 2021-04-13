import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
const ConfirmPaymentContainer = ({...props}: any) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SimpleLineIcons
          style={{ padding: 5 }}
          name="handbag"
          size={30}
          color="#421514"
        />
        <Text style={styles.cartNumber}>9</Text>
      </View>
      <View
        style={{ flex: 2, justifyContent: "center", alignItems: "flex-start" }}
      >
        <Text style={styles.priceText}>114.000đ</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {props.onPress()}}>
          <Text style={styles.headerText}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmPaymentContainer;

const styles = StyleSheet.create({
  cartNumber: {
    position: "absolute",
    marginLeft: 13,
    paddingTop: "25%",
    fontSize: 13,
    fontWeight: "600",
  },
  buttonContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9D423",
    borderRadius: 6,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 20,
    color: "black",
    textTransform: "uppercase",
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,
    color: "#EA1E1E",
  },
});
