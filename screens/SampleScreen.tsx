import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";

import { RootStackParamList } from "../types";

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "NotFound">) {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: "pink", alignItems: "center", width: "50%"}}>
      <Image
        style={{ width: 144, height: 144, resizeMode: "stretch", borderRadius: 10 }}
        source={{
          uri:
            "https://s3-alpha-sig.figma.com/img/ed83/52fa/3ed241dd96943f230377562055db315b?Expires=1618185600&Signature=JBt8Qnjo-WACu33nTiRrw1T~m1oONgR7Hqbi44hnAwZwWRm36K2l0cWQ0scMmGJEqcv47m2FJOlEnStNHA9q2nnn9SoiFFlBZUuBOPn0S4FrtIGDqlwJdNAmmQ5V5M7X7jQoPiQaMWlsa00z1l21Atd~L3JANUzGsCVEgeGmIA17lYYHlb0RrC7XDrF~EbJ3x9vx4h63Y3MQ~upC5RY4XT1Dz3b-1jVB3d8lHP6dOwng9~nIzi8l4j4LPr7a0PjlFqRkem-iT2LY6NMcglIFsSMiwqWFzxpZzLJj7yloqFH8kI65i88daU-JOA~O2tI7HKhLZRSkwvJpxmMqdUvfdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        }}
      />
      <Text>Cơm cá riêu hồng chiên</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
