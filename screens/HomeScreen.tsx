import * as React from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { View, Text } from "../components/Themed";
import dayData from "../Api/dayData";
import DayList from "../components/HomeContent/DayList";
import mainFoodData from "../Api/mainFoodData";

import MainFoodList from "../components/HomeContent/MainFoodList";
import HeaderCart from "../components/banner/HeaderCart";

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
          <HeaderCart navigation={navigation} />
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
        <Text>Món Chính</Text>
        <FlatList
          data={mainFoodData}
          renderItem={MainFoodList}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
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
    backgroundColor: "#fff",
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
});
