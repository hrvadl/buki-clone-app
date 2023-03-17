import { Text } from "@/design/Text";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import useGetTopAdsQuery from "../hooks/useGetTopAdsQuery";

type Props = {
  style?: ViewStyle;
};

const TopAds = ({ style }: Props) => {
  const { data, isLoading, error } = useGetTopAdsQuery();

  return (
    <View style={style}>
      <Text style={{ marginBottom: 10 }} variant="titleLarge">
        Top ads
      </Text>
      {error ? (
        <Text variant="bodyMedium">
          Something went wrong... Try again later
        </Text>
      ) : null}
      {isLoading && !error ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text>blah</Text>
      )}
    </View>
  );
};

export default TopAds;

const styles = StyleSheet.create({});
