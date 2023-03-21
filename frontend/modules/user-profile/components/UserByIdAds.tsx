import { Ad as AdType } from "@/models/ad";
import Ad from "@/modules/ad/components/Ad";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  ads: AdType[];
  style?: ViewStyle;
};

const UserByIdAds = ({ ads, style }: Props) => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "ProfileById">>();
  return (
    <View style={style}>
      {ads.map((ad) => (
        <Ad
          key={ad.id}
          onPress={() => navigation.navigate("Ad", { ad })}
          style={styles.Ad}
          ad={ad}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  Ad: { marginVertical: 10 },
});

export default UserByIdAds;
