import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PaymentContainer = () => {
  return (
    <View>
      <Text style={styles.headerText}>Cộng Giỏ Hàng</Text>
      <View style={styles.contentContainer}>
        <Text>Tạm tính</Text>
        <Text style={styles.headerText}>114.000đ</Text>
      </View>
      <View
        style={{
          borderStyle: "dashed",
          borderWidth: 0.5,
          borderRadius: 0.1,
          opacity: 0.2,
          backgroundColor: "#111111",
        }}
      ></View>
      <View style={styles.contentContainer}>
        <Text>Khuyến mãi</Text>
        <Text style={styles.headerText}>- 0đ</Text>
      </View>
    </View>
  );
};

export default PaymentContainer;

const styles = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,
    color: "black",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: "1%",
  },
});
