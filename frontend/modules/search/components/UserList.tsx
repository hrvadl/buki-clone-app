import { User } from "@/models/user";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { ProfileItem } from "@/modules/profile";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type Props = {
  users: User[];
  style?: ViewStyle;
};

const UserList = ({ users, style }: Props) => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "ProfileById">>();

  return (
    <FlatList
      style={style}
      data={users}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("ProfileById", { id: item.id })}
        >
          <ProfileItem {...item} />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default UserList;
