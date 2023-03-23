import Container from "@/design/container/Container";
import NotFound from "@/design/NotFound";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import SearchHeader from "@/modules/search/components/SearchHeader";
import UserListComponent from "@/modules/search/components/UserList";
import useFindUsers from "@/modules/search/hooks/useFindUsers";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "Search">;

const UserList = memo(UserListComponent);

const Search = ({ navigation }: Props) => {
  const { search, data, onChangeSearch, isLoading } = useFindUsers();

  const isDataAvailable = data && data?.length > 0 && search !== "";

  return (
    <View>
      <SearchHeader
        onChangeSearch={onChangeSearch}
        search={search}
        onPressGoBack={() => navigation.goBack()}
      />
      <Container>
        {isLoading ? (
          <ActivityIndicator />
        ) : isDataAvailable ? (
          <UserList users={data} />
        ) : (
          <NotFound
            title="Not found"
            subtitle="Seems like there's nothing suitable..."
          />
        )}
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Search;
