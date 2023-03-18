import { Text } from "@/design/Text";
import { Ad, SubjectMapping } from "@/models/ad";
import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  ad: Ad;
};

const AdAboutTab = ({ ad }: Props) => {
  return (
    <View>
      <Text style={styles.Text} variant="bodyLarge">
        Subject: {SubjectMapping[ad.subject]}
      </Text>
      <Text style={styles.Text} variant="bodyLarge">
        Description: {ad.description}
      </Text>
    </View>
  );
};

export default AdAboutTab;

const styles = StyleSheet.create({
  Text: {
    marginVertical: 10,
  },
});
