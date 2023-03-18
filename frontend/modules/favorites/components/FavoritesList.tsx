import { Ad as AdType } from "@/models/ad";
import Ad from "@/modules/ad/components/Ad";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";

type Props = {
  ad: AdType[];
};

const FavoritesList = ({ ad }: Props) => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Home">>();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 60,
      }}
      showsVerticalScrollIndicator={false}
    >
      {ad.map((ad) => (
        <Ad
          key={ad.id}
          style={{ marginVertical: 10 }}
          onPress={() => navigation.navigate("Ad", { ad })}
          ad={ad}
        />
      ))}
    </ScrollView>
  );
};

export default FavoritesList;
