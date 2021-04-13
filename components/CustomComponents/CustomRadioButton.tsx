import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  title: string;
  onPress?: any;
}

const CustomRadioButton = ({ ...props }: IProps) => {
  const [isSelected, setSelected] = React.useState<boolean>(false);
  const handleSelectionChange = () => {
    setSelected((prevState) => !prevState);
  };
  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center"}}
        onPress={() => handleSelectionChange()}
      >
        {isSelected ? (
          <Ionicons name="radio-button-on" size={24} color="#FDD40C" />
        ) : (
          <Ionicons name="radio-button-off" size={24} color="black" />
        )}

        <Text style={styles.titleText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomRadioButton;

const styles = StyleSheet.create({
    titleText: {
        fontWeight: "400",
        fontSize: 15,
        lineHeight: 20,
        paddingLeft: "2%"
    }
});
