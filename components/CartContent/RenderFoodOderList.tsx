import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListRenderItemInfo,
  SafeAreaView
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface FoodOderList {
  id: string;
  foodName: string;
  price: string;
  isSale: boolean;
  salePrice: string;
  number: number;
}

interface IProps {
  data: ListRenderItemInfo<FoodOderList>;
}

const RenderFoodOderList = (props: IProps) => {
  const item = { ...props.data.item };
  const [foodCount, setFoodCount] = React.useState<number>(item.number);
  const plusFoodCount = () => {
    setFoodCount((foodCount) => foodCount + 1);
  };
  const minusFoodCount = () => {
    setFoodCount((foodCount) => foodCount - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.foodNameText}>{item.foodName}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "rgb(217, 217, 217)",
              opacity: foodCount > 1 ? 1 : 0.3,
            }}
            onPress={() => {
              minusFoodCount();
            }}
            disabled={foodCount <= 1}
          >
            <AntDesign name="minus" size={24} color="#111111" />
          </TouchableOpacity>

          <Text style={styles.numberOfFood}>{foodCount}</Text>

          <TouchableOpacity
            style={{
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "rgb(217, 217, 217)",
              // opacity: foodCount < props.data.item.number ? 1 : 0.3,
            }}
            onPress={() => {
              plusFoodCount();
            }}
            //   disabled={foodCount >= props.data.item.number}
          >
            <AntDesign name="plus" size={24} color="#111111" />
          </TouchableOpacity>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.salePriceText}>{item.salePrice}đ</Text>
          <Text style={styles.priceText}>{item.price}đ</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RenderFoodOderList;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  numberOfFood: {
    paddingHorizontal: 16,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 17,
    paddingTop: 2,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 4,
  },
  priceText: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: -0.24,
    color: "#111111",
    // textAlign: "center",
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

  headerText: {
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,
    color: "black",
  },
  foodNameText: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    color: "black",
    opacity: 0.5,
  },
});
