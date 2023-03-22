import AddIcon from "@/design/add-icon/AddIcon";
import Container from "@/design/container/Container";
import NotFound from "@/design/NotFound";
import { Text } from "@/design/Text";
import GoBackTopBar from "@/design/top-bar/GoBackTopBar";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { ProfileItem, useProfile } from "@/modules/profile";
import MyAds from "@/modules/profile/components/MyAds";
import MyReviews from "@/modules/profile/components/MyReviews";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

const Profile = () => {
  const { logOut, user } = useProfile();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToAddScreen = () => {
    navigation.navigate("AddAd");
  };

  if (!user) {
    logOut();
    navigation.navigate("LogIn");
    return null;
  }

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
      <GoBackTopBar title="Profile" onPressGoBack={() => navigation.goBack()} />
      <Container>
        <ProfileItem style={{ marginBottom: 20 }} {...user!} />
        <TouchableOpacity onPress={goToAddScreen} style={styles.AddNew}>
          <AddIcon style={{ marginRight: 10 }} />
          <Text variant="bodyLarge">Add new ad</Text>
        </TouchableOpacity>
        <Button mode="contained" textColor="#fff" onPress={logOut}>
          <Text style={{ color: "#fff" }}>Log Out</Text>
        </Button>
        <Text style={styles.Heading} variant="titleLarge">
          My Ads
        </Text>
        {user?.ads?.length ? (
          <MyAds ads={user?.ads} />
        ) : (
          <NotFound
            subtitle="Seems like you haven't posted anything yet"
            title="No ads"
          />
        )}
        <Text style={styles.Heading} variant="titleLarge">
          My Reviews
        </Text>
        {user?.recievedReviews?.length ? (
          <MyReviews reviews={user?.recievedReviews} />
        ) : (
          <NotFound
            subtitle="Seems like yoy haven't received any review yet"
            title="No reviews"
          />
        )}
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  AddNew: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  Heading: {
    marginVertical: 15,
  },
});

export default Profile;
