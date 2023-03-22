import Avatar from "@/design/avatar";
import { Ad as AdType } from "@/models/ad";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Card, Text } from "react-native-paper";

type Props = {
  ad: AdType;
  style?: ViewStyle;
  onPress?: (id: number) => void;
  onPressAvatar?: (id: number) => void;
};

const Ad = ({ ad, style, onPress, onPressAvatar }: Props) => {
  return (
    <Card onPress={() => onPress?.(ad.id)} style={[style]}>
      <Card.Cover
        resizeMode="cover"
        source={require("@/assets/ad-placeholder.jpg")}
      />
      <Card.Content style={styles.Content}>
        <Text style={styles.Text} numberOfLines={1} variant="bodyLarge">
          {ad.description}
        </Text>
        <Avatar
          onPress={() => onPressAvatar?.(ad.id)}
          style={styles.Avatar}
          letter={ad.author.name.charAt(0)}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  Content: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Avatar: {
    marginLeft: 20,
    width: 50,
    height: 50,
  },
  Text: {
    width: 150,
  },
});

export default Ad;
