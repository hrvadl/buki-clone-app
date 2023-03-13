import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import { View } from "react-native";
import { roles } from "../mocks/roles";
import RoleItem from "./RoleItem";

const RoleForm = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View>
      {roles.map((role) => (
        <RoleItem
          key={role.role}
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
