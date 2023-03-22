import DeleteOnSwipeButton from "@/design/DeleteOnSwipeButton";
import { Ad as AdType } from "@/models/ad";
import Ad from "@/modules/ad/components/Ad";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import useDeleteAdMutation from "../hooks/useDeleteAdMutation";

type Props = {
  ads: AdType[];
  style?: ViewStyle;
};

const MyAds = ({ ads, style }: Props) => {
  const { onDelete } = useDeleteAdMutation();

  return (
    <View style={style}>
      {ads.map((ad) => (
        <GestureHandlerRootView key={ad.id}>
          <Swipeable
            containerStyle={styles.Card}
            useNativeAnimations
            renderRightActions={() => (
              <DeleteOnSwipeButton
                onPress={() => onDelete(ad.id)}
                buttonWidth={100}
                style={styles.DeleteOnSwipeButton}
              />
            )}
          >
            <Ad ad={ad} />
          </Swipeable>
        </GestureHandlerRootView>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  Card: {
    paddingBottom: 15,
  },
  DeleteOnSwipeButton: { position: "relative", width: 80, marginBottom: 15 },
});

export default MyAds;
