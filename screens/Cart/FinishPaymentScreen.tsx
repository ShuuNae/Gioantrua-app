import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HeaderCart from "../../components/banner/HeaderCart";
import PaymentStep from "../../components/CartContent/PaymentStep";

const FinishPaymentScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerCart}>
          <HeaderCart
            navigation={navigation}
            isHome={false}
            headerName="thanh toán"
            isCartShown={false}
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={[styles.contentTop, { backgroundColor: "#E5E5E5" }]}>
          <PaymentStep step={2} />
        </View>
        <View style={styles.contentMiddle}>
          <Text style={styles.headerText}>Đặt hàng thành công</Text>
          <Text style={styles.contentText}>
            Đơn hàng của bạn đang được chuẩn bị và sẽ được giao đến bạn trong
            giây lát.
          </Text>
          <Text style={styles.contentText}>
            Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!
          </Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate("Root");
            }}
          >
            <Text style={styles.buttonText}>VỀ TRANG CHỦ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FinishPaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  header: {
    flex: 0.4,
    backgroundColor: "#FDD40C",
  },
  headerCart: {
    marginTop: "12%",
    backgroundColor: "transparent",
    marginHorizontal: "5%",
    flex: 0.7,
    flexDirection: "row",
  },
  content: {
    flex: 2.5,
    backgroundColor: "#E5E5E5",
  },
  contentMiddle: {
    flex: 6.5,
    backgroundColor: "#FFFFFF",
    padding: "3%",
    marginTop: "2%",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  contentTop: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: "3%",
    marginTop: "2%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,
    color: "black",
    paddingBottom: "2%",
    // textAlign: "center",
  },
  contentText: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    textAlign: "center",
    opacity: 0.5,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 20,
    color: "black",
    textTransform: "uppercase",
    paddingVertical: 10,
    paddingHorizontal: "30%",
  },
  buttonContainer: {
    backgroundColor: "#F9D423",
    borderRadius: 6,
    marginTop: "3%",
  },
});
