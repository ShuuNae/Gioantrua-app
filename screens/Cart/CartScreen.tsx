import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import userData from "../../Api/userData";
import HeaderCart from "../../components/banner/HeaderCart";
import ConfirmPaymentContainer from "../../components/CartContent/ConfirmPaymentContainer";
import FoodOderList from "../../components/CartContent/FoodOderList";
import PaymentContainer from "../../components/CartContent/PaymentContainer";
import ShipInfo from "../../components/CartContent/ShipInfo";
import CustomInput from "../../components/CustomComponents/CustomInput";
import CustomScrollView from "../../components/CustomComponents/CustomScrollView";
import PaymentStep from "../../components/CartContent/PaymentStep";

const CartScreen = ({ navigation, route, ...props }: any) => {

  const moveToPaymentSelector = () => {
    navigation.navigate('Payment')
  }

  const userDataClone = { ...userData };
  const [userInfo, setUserInfo] = React.useState(userDataClone);
  React.useEffect(() => {
    if (route.params?.updatedUserInfo) {
      // updatedUserInfo updated, do something with `route.params.updatedUserInfo`
      // For example, send the post to the server
      setUserInfo(route.params?.updatedUserInfo);
    }
  }, [route.params?.updatedUserInfo]);

  const discountIcon = (
    <MaterialCommunityIcons
      name="ticket-confirmation"
      size={24}
      color="#696969"
    />
  );

  const noteIcon = (
    <MaterialIcons name="sticky-note-2" size={24} color="#696969" />
  );

  return (
    <SafeAreaView style={styles.container}>
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

      <View style={styles.content}>
        <CustomScrollView>
          <View style={[styles.contentLayout, { backgroundColor: "#E5E5E5" }]}>
            <PaymentStep step={0} />
          </View>
          <View style={styles.contentLayout}>
            <ShipInfo navigation={navigation} userData={userInfo} />
          </View>
          <View style={styles.contentLayout}>
            <FoodOderList />
          </View>
          <View style={styles.contentLayout}>
            <CustomInput
              titleText="Ghi Chú"
              icon={noteIcon}
              placeholder="Thêm ghi chú của bạn (nếu có)"
            />
          </View>
          <View style={styles.contentLayout}>
            <CustomInput
              titleText="Khuyến Mãi"
              icon={discountIcon}
              placeholder="Nhập mã khuyến mãi"
              isButtonShow={true}
            />
          </View>
          <View style={styles.contentLayout}>
            <PaymentContainer />
          </View>
          <View style={styles.contentLayout}>
            <ConfirmPaymentContainer title="xác nhận" onPress={() => {moveToPaymentSelector()}} />
          </View>
        </CustomScrollView>
      </View>
    </SafeAreaView>
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
  content: {
    flex: 2.5,
    backgroundColor: "#E5E5E5",
  },
  contentLayout: {
    backgroundColor: "#FFFFFF",
    padding: "3%",
    marginTop: "2%",
  },
});
{
}
