import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MainFoodList from "../HomeContent/MainFoodList";

interface data {
  username: string;
  phoneNumber: string;
  address: string;
}

interface IProps {
  userData: data;
  navigation?: any;
  route?: any;
}

const ShipInfo = ({ ...props }: IProps) => {
  const userData = { ...props.userData };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông Tin Giao Hàng</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("CartStack", {
              screen: "ShipInfo",
              params: { userInfo: userData },
            });
          }}
        >
          <Text style={styles.fixButtonText}>Sửa</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.infoText}>{userData.username}</Text>
      <Text style={styles.infoText}>{userData.phoneNumber}</Text>
      <Text style={styles.infoText}>{userData.address}</Text>
    </View>
  );
};

export default ShipInfo;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 4,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,
    color: "black",
  },
  infoText: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    color: "black",
    paddingTop: 4,
  },
  fixButtonText: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    color: "#0265F9",
  },
});
