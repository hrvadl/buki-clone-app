import { Text } from "@/design/Text";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import useGetTopAdsQuery from "../hooks/useGetTopAdsQuery";
import Ad from "./Ad";

type Props = {
  style?: ViewStyle;
};

const TopAds = ({ style }: Props) => {
  const { data, isLoading, error } = useGetTopAdsQuery();
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Home">>();

  return (
    <View style={style}>
      <Text style={{ marginBottom: 10 }} variant="titleLarge">
        Top ads
      </Text>
      {error && !data ? (
        <Text variant="bodyMedium">
          Something went wrong... Try again later
        </Text>
      ) : null}
      {isLoading && !error ? (
        <ActivityIndicator size="small" />
      ) : (
        <ScrollView
          contentContainerStyle={{
            paddingVertical: 10,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {data.map((ad) => (
            <Ad
              style={styles.Ad}
              onPress={() => navigation.navigate("Ad", { ad })}
              ad={ad}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default TopAds;

const styles = StyleSheet.create({
  Ad: {
    marginHorizontal: 10,
  },
});
