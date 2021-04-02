import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface MainFoodList {
  id: string;
  image: string;
  foodName: string;
  price: string;
  isSale: boolean;
  salePrice: string;
  number: number;
}

interface IProps {
  data: ListRenderItemInfo<MainFoodList>;
}

const RenderMainFoodList = (props: IProps) => {
  const [foodCount, setFoodCount] = React.useState<number>(1);
  const plusFoodCount = () => {
    setFoodCount((foodCount) => foodCount + 1);
  };
  const minusFoodCount = () => {
    setFoodCount((foodCount) => foodCount - 1);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{ borderRadius: 10 }}
        style={{ width: 144, height: 144 }}
        source={{
          uri: props.data.item.image,
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
        <Text style={styles.foodNameText}>{props.data.item.foodName}</Text>
      </View>

      <View style={styles.priceContainer}>
        {props.data.item.isSale ? (
          <Text style={styles.salePriceText}>{props.data.item.salePrice}đ</Text>
        ) : null}
        <Text style={styles.priceText}>{props.data.item.price}đ</Text>
      </View>
      <Text style={styles.amountOfFoodText}>
        {" "}
        {props.data.item.number > 0
          ? "Còn " + props.data.item.number + " suất"
          : "Hết hàng"}{" "}
      </Text>

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
            opacity: foodCount < props.data.item.number ? 1 : 0.3,
          }}
          onPress={() => {
            plusFoodCount();
          }}
          disabled={foodCount >= props.data.item.number}
        >
          <AntDesign name="plus" size={24} color="#111111" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[
          styles.addCartButton,
          {
            backgroundColor:
              props.data.item.number > 0 ? "#421514" : "rgba(17, 17, 17, 0.5)",
          },
        ]}
        disabled={!(props.data.item.number > 0)}
      >
        <Text style={styles.buttonText}>Thêm vào giỏ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderMainFoodList;

const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    width: 144,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    // padding: 10,
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 4,
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////
  priceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 4,
  },

  priceText: {
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: -0.41,
    color: "#EA1E1E",
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
});
