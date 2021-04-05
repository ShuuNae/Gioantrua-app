import * as React from "react";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import dayData from "../Api/dayData";
import drinksData from "../Api/drinksData";
import mainFoodData from "../Api/mainFoodData";
import sideFoodData from "../Api/sideFoodData";
import HeaderCart from "../components/banner/HeaderCart";
import DayList from "../components/HomeContent/DayList";
import MainFoodList from "../components/HomeContent/MainFoodList";
import { Text, View } from "../components/Themed";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          style={StyleSheet.absoluteFill}
          source={{
            uri:
              "https://s3-alpha-sig.figma.com/img/a62b/85c7/21832a2ac3256f384ecb9ead087bf1c0?Expires=1618185600&Signature=DMrNE3JAeaPsd-3MOT0Zd-L8rRMnV2KaCKH4UrkzhWmjBZluoJGedp-f8yD~Oxm~On1WSW8EaQINudZLYMgV00T5vwqX7crpC~Oi99HZVvYExT0hFLxPTc-hn~6bcDZXTG0GFSNkzlU0FJDIiI4KtBap3dQ9~UgjUzlF7Khtdl3Ip9tzXkeHQZ2bpIrymz0VcDN54vNM7PoLk8f6nm9swgdLrYgQIMdWgGwnoQ3HTjg0fDC5f2po3JbH7cXsvm668wpRcHXX4kCTq52vYLrA97YRY8QK8~3TfM5bTWVd30bMLppZy-rcoHZKJg3-2D5nCgcUqJOPwjei2JX6lPRREA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          }}
        />
        <View style={styles.headerCart}>
          <HeaderCart navigation={navigation} isHome={true} />
        </View>
      </View>
      <View style={styles.daySelector}>
        <FlatList
          data={dayData}
          renderItem={DayList}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.listContainer}>
            <Text style={styles.foodCategoryText}>Món Chính</Text>
            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={{ paddingVertical: 4 }}
            >
              <MainFoodList data={mainFoodData} type="vertical" />
            </ScrollView>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.foodCategoryText}>Món phụ</Text>
            <MainFoodList data={sideFoodData} type="horizontal" />
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.foodCategoryText}>Nước uống</Text>
            <MainFoodList data={drinksData} type="horizontal" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },

  headerCart: {
    marginTop: "12%",
    backgroundColor: "transparent",
    marginHorizontal: "5%",
    flex: 0.25,
    flexDirection: "row",
  },

  daySelector: {
    flex: 0.2,
    justifyContent: "center",
  },
  content: {
    flex: 2.5,
    backgroundColor: "#E5E5E5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  foodCategoryText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,
    paddingLeft: 12,
    paddingTop: 12,
  },

  listContainer: {
    paddingHorizontal: 4,
    backgroundColor: "#fff",
  },
});
