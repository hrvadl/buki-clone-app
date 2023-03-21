import Container from "@/design/container/Container";
import { Text } from "@/design/Text";
import GoBackTopBar from "@/design/top-bar/GoBackTopBar";
import { UserContext } from "@/modules/navigation/context/user-context";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { ProfileItem } from "@/modules/profile";
import { useGetUserInfoQuery } from "@/modules/user-profile";
import LeftReview from "@/modules/user-profile/components/LeftReview";
import ReviewsList from "@/modules/user-profile/components/ReviewsList";
import UserByIdAds from "@/modules/user-profile/components/UserByIdAds";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "ProfileById">;

const Profile = ({ navigation, route }: Props) => {
  if (!route.params?.id) {
    navigation.goBack();
    return null;
  }

  const { user } = useContext(UserContext);

  if (route.params.id === user?.id)
    navigation.navigate("Home", { screen: "Profile" });

  const { data, error, isLoading } = useGetUserInfoQuery(route.params.id);

  if (error && !data) {
    alert(error.message);
    navigation.goBack();
  }

  if (!data) return null;

  return (
    <ScrollView>
      <GoBackTopBar
        title={data?.name ?? "User Profile"}
        onPressGoBack={() => navigation.goBack()}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Container>
          <ProfileItem style={{ marginBottom: 20 }} {...data} />
          <Text style={styles.AdsHeading} variant="titleLarge">
            User's ads
          </Text>
          <UserByIdAds ads={data.ads ?? []} />
          <Text style={styles.ReviewsHeading} variant="titleLarge">
            Reviews
          </Text>
          <ReviewsList reviews={data.recievedReviews ?? []} />
          <LeftReview user={data} />
        </Container>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  AdsHeading: {
    marginBottom: 10,
  },
  ReviewsHeading: {
    marginVertical: 10,
  },
});

export default Profile;
