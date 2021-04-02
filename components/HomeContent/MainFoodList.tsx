import React from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
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
  numColumns?: number;
}

const MainFoodList = (props: IProps) => {
  const renderMainFoodList: ListRenderItem<MainFoodList> = (item) => {
    return <RenderMainFoodList data={item} />;
  };

  const numColumns = Math.ceil(props.data.length / 2);
  let vertical = "vertical";
  let horizontal = "horizontal";
  return props.type === vertical ? (
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
  ) : props.type === horizontal ? 
    (
    <FlatList
      data={props.data}
      renderItem={renderMainFoodList}
      horizontal={true}
    />
  ): (<FlatList
    data={props.data}
    contentContainerStyle={{
      backgroundColor: '#fff'
    }}
    renderItem={renderMainFoodList}
    numColumns={props.numColumns}
  />);
};

export default MainFoodList;

const styles = StyleSheet.create({
  /////////////////////
});
