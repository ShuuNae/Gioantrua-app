import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";

interface DayList {
  id: string;
  day: string;
}

const renderDayList: ListRenderItem<DayList> = ({ item }) => (
  <TouchableOpacity style={styles.container}>
    <Text style={styles.contentText}>{item.day}</Text>
  </TouchableOpacity>
);
export default renderDayList;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
    paddingTop: 12,
    paddingHorizontal: 16,
    backgroundColor: "#E5E5E5",
  },
  contentText: {
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: "400",
  },
});
