import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import drinksData from "../../Api/drinksData";
import mainFoodData from "../../Api/mainFoodData";
import sideFoodData from "../../Api/sideFoodData";
import HeaderCart from "../../components/banner/HeaderCart";
import MainFoodList from "../../components/HomeContent/MainFoodList";
import { View } from "../../components/Themed";

const TopTab = createMaterialTopTabNavigator();
const windowWidth = Dimensions.get("window").width;
const numColumns = Math.floor(windowWidth / 144);

export default function CategoryScreen({navigation}:any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerCart}>
          <HeaderCart navigation={navigation} isHome={false} headerName="danh mục" />
        </View>
      </View>
      <View style={styles.content}>
        <TopTab.Navigator>
          <TopTab.Screen
            name="Món chính"
            children={() => (
              <MainFoodList
                data={mainFoodData}
                type="noScrollVertical"
                numColumns={numColumns}
              />
            )}
          />
          <TopTab.Screen
            name="Món phụ"
            children={() => (
              <MainFoodList
                data={sideFoodData}
                type="noScrollVertical"
                numColumns={numColumns}
              />
            )}
          />
          <TopTab.Screen
            name="Nước uống"
            children={() => (
              <MainFoodList
                data={drinksData}
                type="noScrollVertical"
                numColumns={numColumns}
              />
            )}
          />
        </TopTab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});
