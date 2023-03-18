import Container from "@/design/container/Container";
import GoBackTopBar from "@/design/top-bar/GoBackTopBar";
import { AdHeading, useReactionMutation } from "@/modules/ad-by-id";
import AdTabs from "@/modules/ad-by-id/components/AdTabs";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Ad">;

const AdScreen = ({ navigation, route }: Props) => {
  if (!route.params?.ad) return null;

  const {
    params: { ad },
  } = route;

  const { isLiked, onReactHandler } = useReactionMutation(ad);

  return (
    <View>
      <GoBackTopBar
        onPressGoBack={() => navigation.goBack()}
        title="Advertisement"
      />
      <AdHeading ad={ad} isLiked={isLiked} onReactHandler={onReactHandler} />
      <Container>
        <AdTabs ad={ad} />
      </Container>
    </View>
  );
};

export default AdScreen;
