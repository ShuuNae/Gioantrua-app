import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import HeaderCart from "../../components/banner/HeaderCart";

const ShipInfoScreen = ({ route, navigation, ...props }: any) => {
  const userData = { ...route.params.userInfo };
  const [userInfo, setUserInfo] = React.useState(userData);

  const inputHandler = (inputValue: string, inputName: string) => {
    setUserInfo((prevState: any) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  const confirmInfo = () => {
    // console.log(navigation);
    navigation.navigate("CartStack", {
      screen: "Cart",
      params: { updatedUserInfo: userInfo },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerCart}>
          <HeaderCart
            navigation={navigation}
            isHome={false}
            headerName="giỏ hàng"
          />
        </View>
      </View>
      <SafeAreaView style={styles.content}>
        <Text style={styles.headerText}>Thông Tin Giao Hàng</Text>

        <Text style={styles.labelText}>Họ tên</Text>
        <TextInput
          maxLength={50}
          style={styles.input}
          value={userInfo.username}
          onChangeText={(value) => {
            inputHandler(value, "username");
          }}
        />

        <Text style={styles.labelText}>Số điện thoại</Text>
        <TextInput
          maxLength={12}
          style={styles.input}
          value={userInfo.phoneNumber}
          keyboardType="numeric"
          onChangeText={(value) => {
            inputHandler(value, "phoneNumber");
          }}
        />

        <Text style={styles.labelText}>Địa chỉ nhận hàng</Text>
        <TextInput
          style={styles.input}
          value={userInfo.address}
          onChangeText={(value) => {
            inputHandler(value, "address");
          }}
          maxLength={100}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => confirmInfo()}
        >
          <Text style={styles.buttonText}>xác nhận</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default ShipInfoScreen;

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
    backgroundColor: "#fff",
    marginTop: "2%",
    paddingHorizontal: "4%",
    paddingVertical: "2%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,
    color: "black",
  },
  labelText: {
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,
    color: "rgba(17, 17, 17, 0.5)",
    paddingTop: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "rgba(17, 17, 17, 0.3)",
    paddingVertical: 5,
    paddingLeft: 12,
  },
  buttonContainer: {
    backgroundColor: "#F9D423",
    borderRadius: 6,
    marginTop: 16,
  },
  buttonText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 20,
    textAlign: "center",
    color: "black",
    paddingVertical: 10,
  },
});
