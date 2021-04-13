import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import HeaderCart from "../../components/banner/HeaderCart";
import PaymentStep from "../../components/CartContent/PaymentStep";
import ConfirmPaymentContainer from "../../components/CartContent/ConfirmPaymentContainer";
import PaymentSelectContainer from "../../components/CartContent/PaymentSelectContainer";
import CustomScrollView from "../../components/CustomComponents/CustomScrollView";
const PaymentScreen = ({ navigation }: any) => {
  const moveToFinishPayment = () => {
    navigation.navigate("FinishPayment");
  };

  return (
    <SafeAreaView style={styles.container}>
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
          <PaymentStep step={1} />
        </View>
        <View style={styles.contentMiddle}>
          <PaymentSelectContainer />
        </View>
        <View style={styles.contentBottom}>
          <ConfirmPaymentContainer title="thanh toán" onPress={() => moveToFinishPayment()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;

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
  contentLayout: {
    backgroundColor: "#FFFFFF",
    padding: "3%",
    marginTop: "2%",
  },
  contentMiddle: {
    flex: 6,
    backgroundColor: "#FFFFFF",
    padding: "3%",
    marginTop: "2%",
  },
  contentTop: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: "3%",
    marginTop: "2%",
  },
  contentBottom: {
    flex: 0.5,
    backgroundColor: "#FFFFFF",
    padding: "3%",
    marginTop: "2%",
  },
});
