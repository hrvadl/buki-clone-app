import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import useFetchAds from "../hooks/useFetchAds";
import Ad from "./Ad";

type Props = {
  style?: ViewStyle;
};

const LatestAds = ({ style }: Props) => {
  const { data, isLoading } = useFetchAds();

  if (!data || isLoading) return <ActivityIndicator />;

  return (
    <View style={style}>
      {data.map((it) => (
        <Ad ad={it} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default LatestAds;
