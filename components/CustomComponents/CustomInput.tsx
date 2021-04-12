import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { TextInput } from "react-native-gesture-handler";

interface IProps {
  isButtonShow?: boolean;
  titleText: string;
  icon: any;
  placeholder?: string;
}

const CustomInput = ({ isButtonShow = false, ...props }: IProps) => {
  return (
    <View>
      <Text style={styles.headerText}>{props.titleText}</Text>
      <View style={styles.inputContainer}>
        <View
          style={{
            flex: 0.4,
            alignItems: "center",
            justifyContent: "center",
            padding: "1%",
          }}
        >
          <>{props.icon}</>
        </View>
        <TextInput style={styles.textInput} placeholder={props.placeholder} />
        <View style={styles.buttonView}>
          {isButtonShow ? (
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Áp dụng</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "rgba(17, 17, 17, 0.3)",
    marginTop: "2%",
  },
  textInput: {
    paddingHorizontal: 5,
    flex: 3.2,
    padding: "1%",
  },
  buttonContainer: {
    backgroundColor: "#FDD40C",
    alignItems: "center",
    paddingVertical: "10%",
  },
  buttonText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "bold",
  },
  buttonView: {
    flex: 1.3,
  },
});
