import Container from "@/design/container/Container";
import LikeButton from "@/design/LikeButton";
import { Text } from "@/design/Text";
import { Ad } from "@/models/ad";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

type Props = {
  isLiked: boolean;
  onReactHandler: () => void;
  ad: Ad;
};

const AdHeading = ({ ad, isLiked, onReactHandler }: Props) => {
  return (
    <View>
      <Image
        style={styles.Image}
        source={require("@/assets/ad-placeholder.jpg")}
      />
      <Container>
        <View style={styles.Heading}>
          <Text variant="boldLarger">{ad.author.name}</Text>
          <LikeButton
            onPress={onReactHandler}
            color={isLiked ? "#000" : "#fff"}
          />
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: 300,
    borderRadius: 10,
  },
  Heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AdHeading;
