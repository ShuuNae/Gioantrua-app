import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StepIndicator from "react-native-step-indicator";

const indicatorStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: "#4aae4f",
  separatorUnFinishedColor: "rgba(17, 17, 17, 0.3)",
  stepIndicatorFinishedColor: "#FDD40C",
  stepIndicatorUnFinishedColor: "#a6a6a6",
  stepIndicatorCurrentColor: "#FDD40C",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#421514",
  stepIndicatorLabelUnFinishedColor: "rgba(17, 17, 17, 0.5)",
  labelColor: "#666666",
  labelSize: 12,
  currentStepLabelColor: "#FDD40C",
};

const renderLabel = ({
  position,
  label,
  currentPosition,
}: {
  position: number;
  stepStatus: string;
  label: string;
  currentPosition: number;
}) => {
  return (
    <Text
      style={
        position === currentPosition
          ? styles.stepLabelSelected
          : styles.stepLabel
      }
    >
      {label}
    </Text>
  );
};

const PaymentStep = ({ ...props }: any) => {
  const [currentPage, setCurrentPage] = React.useState<number>(props.step);
  return (
    <View>
      <StepIndicator
        customStyles={indicatorStyles}
        stepCount={3}
        currentPosition={currentPage}
        labels={["Giỏ hàng", "Thanh toán", "Hoàn tất"]}
        renderLabel={renderLabel}
      />
    </View>
  );
};

export default PaymentStep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepLabel: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#111111",
    // opacity: 0.5,
  },
  stepLabelSelected: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "500",
    color: "black",
  },
});
