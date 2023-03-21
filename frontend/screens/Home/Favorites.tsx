import Container from "@/design/container/Container";
import GoBackTopBar from "@/design/top-bar/GoBackTopBar";
import { FavoritesList, NotFound } from "@/modules/favorites";
import { UserContext } from "@/modules/navigation/context/user-context";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View } from "react-native";

const Favorites = () => {
  const { user } = useContext(UserContext);
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Home">>();

  return (
    <View>
      <GoBackTopBar
        title="Favorites"
        onPressGoBack={() => navigation.goBack()}
      />
      <Container>
        {user?.favorites?.length ? (
          <FavoritesList ad={user.favorites} />
        ) : (
          <NotFound />
        )}
      </Container>
    </View>
  );
};

export default Favorites;
