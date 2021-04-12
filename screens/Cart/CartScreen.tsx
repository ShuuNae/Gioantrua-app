import React from "react";
import { StyleSheet, View } from "react-native";
import userData from "../../Api/userData";
import HeaderCart from "../../components/banner/HeaderCart";
import FoodOderList from "../../components/CartContent/FoodOderList";
import ShipInfo from "../../components/CartContent/ShipInfo";

const CartScreen = ({ navigation, route, ...props }: any) => {
  const userDataClone = { ...userData };
  const [userInfo, setUserInfo] = React.useState(userDataClone);
  React.useEffect(() => {
    if (route.params?.updatedUserInfo) {
      // updatedUserInfo updated, do something with `route.params.updatedUserInfo`
      // For example, send the post to the server
      setUserInfo(route.params?.updatedUserInfo);
    }
  }, [route.params?.updatedUserInfo]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerCart}>
          <HeaderCart
            navigation={navigation}
            isHome={false}
            headerName="giỏ hàng"
            isCartShown={false}
          />
        </View>
      </View>
      <View style={styles.paymentStepContainer}></View>
      <View style={styles.content}>
        <View style={styles.shipInfoContainer}>
          <ShipInfo navigation={navigation} userData={userInfo} />
        </View>
        <View style={styles.oderList}>
          <FoodOderList />
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

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
  paymentStepContainer: {
    flex: 0.4,
    backgroundColor: "blue",
  },
  shipInfoContainer: {
    // flex: 0.5,
    backgroundColor: "#FFFFFF",
    padding: "3%",
  },
  content: {
    flex: 2.1,
    backgroundColor: "#E5E5E5",
  },
  oderList: {
    // flex: 0.5,
    backgroundColor: "#FFFFFF",
    padding: "3%",
    marginTop: "2%",
  },
});
{
}
