import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ListRenderItem,
} from "react-native";
import Collapsible from "react-native-collapsible";
import RenderFoodOderList from "./RenderFoodOderList";

interface FoodOderList {
  id: string;
  foodName: string;
  price: string;
  isSale: boolean;
  salePrice: string;
  number: number;
}
const testData = [
  {
    id: "1",
    foodName: "Cơm cá riêu hồng chiên",
    price: "27.000",
    isSale: true,
    salePrice: "30.000",
    number: 1,
  },
  {
    id: "2",
    foodName: "Cơm cá riêu hồng chiên",
    price: "27.000",
    isSale: true,
    salePrice: "30.000",
    number: 2,
  },
  {
    id: "3",
    foodName: "Cơm cá riêu hồng chiên",
    price: "27.000",
    isSale: true,
    salePrice: "30.000",
    number: 1,
  },
];

const FoodOderList = () => {
  const orderListData = [...testData];
  const [foodOderListData, setFoodOderListData] = React.useState(orderListData);

  const [isCollapsed, setCollapsed] = React.useState<boolean>(true);
  const handleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  const renderFoodOderList: ListRenderItem<FoodOderList> = (item) => {
    return <RenderFoodOderList data={item} />;
  };

  const renderSeparatorList = () => {
    return (
      <View
        style={{
          borderStyle: "dashed",
          borderWidth: 0.5,
          borderRadius: 0.1,
          opacity: 0.2,
          backgroundColor: "#111111",
        }}
      ></View>
    );
  };

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.headerText}>Đơn hàng của bạn</Text>
        <Text>{testData.length} món</Text>
      </View>
      <Collapsible collapsed={isCollapsed}>
        <SafeAreaView>
          <FlatList
            data={foodOderListData}
            renderItem={renderFoodOderList}
            ItemSeparatorComponent={renderSeparatorList}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </Collapsible>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={handleCollapse}>
          <Text style={styles.buttonText}>
            {isCollapsed ? "Mở rộng" : "Rút gọn"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FoodOderList;

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    color: "#0265F9",
    // textAlign: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,
    color: "black",
  },
});
