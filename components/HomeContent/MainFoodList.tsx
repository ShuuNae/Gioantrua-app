import React from "react";
import { FlatList, ListRenderItem, StyleSheet, View, Text } from "react-native";
import RenderMainFoodList from "./RenderMainFoodList";

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
  data: Array<MainFoodList>;
  type: string;
}

const MainFoodList = (props: IProps) => {
  const renderMainFoodList: ListRenderItem<MainFoodList> = (item) => {
    return <RenderMainFoodList data={item} />;
  };

  const numColumns = Math.ceil(props.data.length / 2);
  let type = "vertical";
  return props.type === type ? (
    <FlatList
      scrollEnabled={false}
      contentContainerStyle={{
        alignSelf: "flex-start",
      }}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={props.data}
      renderItem={renderMainFoodList}
    />
  ) : (
    <FlatList
      data={props.data}
      renderItem={renderMainFoodList}
      horizontal={true}
    />
  );
};

export default MainFoodList;

const styles = StyleSheet.create({
  /////////////////////
});
