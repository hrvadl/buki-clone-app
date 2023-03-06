import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import { View } from "react-native";
import { roles } from "../mocks/roles";
import RoleItem from "./RoleItem";

type Props = {};

const RoleForm = (props: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View>
      {roles.map((role) => (
        <RoleItem
          {...role}
          onPress={() =>
            navigation.navigate("SignUp", {
              role: role.role,
            })
          }
        />
      ))}
    </View>
  );
};

export default RoleForm;
