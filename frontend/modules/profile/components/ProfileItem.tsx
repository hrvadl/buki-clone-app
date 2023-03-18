import Avatar from "@/design/avatar";
import { Text } from "@/design/Text";
import { User } from "@/models/user";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  style?: ViewStyle;
} & User;

const ProfileItem = ({ style, name, email }: Props) => {
  return (
    <View style={[style, styles.ProfileWrapper]}>
      <Avatar
        style={{ marginRight: 30, width: 60, height: 60 }}
        letter={name?.charAt(0)}
      />
      <View>
        <Text variant="boldLarge">{name}</Text>
        <Text variant="bodyMedium">{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ProfileWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProfileItem;
