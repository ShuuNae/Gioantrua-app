import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface MainFoodList {
  id: string;
  image: string;
  foodName: string;
  price: string;
  isSale: boolean;
  salePrice: string;
  number: number;
}
const MainFoodList: ListRenderItem<MainFoodList> = ({ item }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{ borderRadius: 10 }}
        style={{ width: 144, height: 144 }}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          width: 144,
          height: 40,
          justifyContent: "center",
        }}
      >
        <Text style={styles.foodNameText}>{item.foodName}</Text>
      </View>

      <View style={styles.priceContainer}>
        {item.isSale ? (
          <Text style={styles.salePriceText}>{item.salePrice}đ</Text>
        ) : null}
        <Text style={styles.priceText}>{item.price}đ</Text>
      </View>
      <Text style={styles.amountOfFoodText}>
        {" "}
        {item.number > 0 ? "Còn " + item.number + " suất" : "Hết hàng"}{" "}
      </Text>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "rgb(217, 217, 217)",
          }}
        >
          <AntDesign name="minus" size={24} color="#111111" />
        </TouchableOpacity>

        <Text style={styles.numberOfFood}>1</Text>

        <TouchableOpacity
          style={{
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "rgb(217, 217, 217)",
          }}
        >
          <AntDesign name="plus" size={24} color="#111111" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.addCartButton, {backgroundColor: (item.number>0)? "#421514" : "rgba(17, 17, 17, 0.5)" }]}
        disabled={!(item.number > 0)}
      >
        <Text style={styles.buttonText}>Thêm vào giỏ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainFoodList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    padding: 10,
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 4,
  },

  priceText: {
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: -0.41,
    color: "#EA1E1E",
  },

  salePriceText: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    color: "#111111",
    opacity: 0.5,
    paddingRight: 8,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },

  ///////////////////////
  foodNameText: {
    fontSize: 15,
    fontWeight: "400",
    flexShrink: 1,
    textAlign: "center",
  },

  /////////////////////
  numberOfFood: {
    paddingHorizontal: 16,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 17,
    paddingTop: 2,
  },

  amountOfFoodText: {
    fontWeight: "400",
    fontSize: 13,
    textAlign: "center",
    paddingTop: 2,
    paddingBottom: 8,
  },
  /////////////////////
  addCartButton: {
    borderRadius: 4,
    marginTop: 12,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 18,
    paddingVertical: 7,
    paddingHorizontal: 20,
  },
  /////////////////////
});
