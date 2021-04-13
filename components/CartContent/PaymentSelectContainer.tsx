import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomRadioButton from "../CustomComponents/CustomRadioButton"

const PaymentSelectContainer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Hình Thức Thanh Toán</Text>
            <CustomRadioButton title="Tiền mặt" />
            <CustomRadioButton title="Momo" />
        </View>
    )
}

export default PaymentSelectContainer

const styles = StyleSheet.create({
    container: {
        // height: 350,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 17,
        lineHeight: 22,
        color: "black",
        paddingBottom: "2%"
      },
})
