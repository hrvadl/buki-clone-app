import { useState } from "react";
import useFindUsersQuery from "./useFindUsersQuery";

export default function useFindUsers() {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useFindUsersQuery(search);

  const onChangeSearch = (value: string) => {
    setSearch(value);
  };

  return { search, onChangeSearch, isLoading, data };
}
