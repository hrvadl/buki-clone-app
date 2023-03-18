import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import useFetchAds from "../hooks/useFetchAds";
import Ad from "./Ad";

type Props = {
  style?: ViewStyle;
};

const LatestAds = ({ style }: Props) => {
  const { data, isLoading } = useFetchAds();

  return (
    <View style={style}>
      <Text style={{ marginBottom: 10 }} variant="titleLarge">
        Latest ads
      </Text>
      {!data || isLoading ? (
        <ActivityIndicator />
      ) : (
        data.map((it) => <Ad ad={it} />)
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default LatestAds;
