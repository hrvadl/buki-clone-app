import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
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
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "AddAd">>();

  return (
    <View style={style}>
      <Text style={{ marginBottom: 10 }} variant="titleLarge">
        Latest ads
      </Text>
      {!data || isLoading ? (
        <ActivityIndicator />
      ) : (
        data.map((ad) => (
          <Ad
            onPress={() => navigation.navigate("Ad", { ad })}
            style={{ marginVertical: 10 }}
            ad={ad}
          />
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default LatestAds;
