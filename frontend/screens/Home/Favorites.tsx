import Container from "@/design/container/Container";
import { FavoritesList, NotFound } from "@/modules/favorites";
import { UserContext } from "@/modules/navigation/context/user-context";
import { SafeAreaView } from "@/modules/platform";
import React, { useContext } from "react";

const Favorites = () => {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView>
      <Container>
        {user?.favorites?.length ? (
          <FavoritesList ad={user.favorites} />
        ) : (
          <NotFound />
        )}
      </Container>
    </SafeAreaView>
  );
};

export default Favorites;
