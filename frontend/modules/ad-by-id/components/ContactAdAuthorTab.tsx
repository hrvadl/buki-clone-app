import Avatar from "@/design/avatar";
import { Text } from "@/design/Text";
import { User } from "@/models/user";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  author: User;
};

const ContactAdAuthorTab = ({ author }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, "Ad">>();

  return (
    <View>
      <View style={styles.AvatarContainer}>
        <Avatar
          onPress={() => navigation.navigate("ProfileById", { id: author.id })}
          style={styles.Avatar}
          letter={author.name.charAt(0)}
        />
      </View>
      <Text variant="bodyLarge" style={styles.Text}>
        Email: {author.email}
      </Text>
      <Text variant="bodyLarge" style={styles.Text}>
        Number: {author.number}
      </Text>
    </View>
  );
};

export default ContactAdAuthorTab;

const styles = StyleSheet.create({
  AvatarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  Text: {
    marginVertical: 10,
  },
  Avatar: {
    height: 50,
    width: 50,
    marginRight: 20,
  },
});
