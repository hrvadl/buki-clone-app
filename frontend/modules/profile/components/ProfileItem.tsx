import Avatar from "@/design/avatar";
import { User } from "@/models/user";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Text } from "react-native-paper";

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
        <Text style={{ fontWeight: "bold" }} variant="bodyLarge">
          {name}
        </Text>
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
