import { useQuery } from "react-query";
import { findUsers } from "../api/find-users";
import useDebounce from "./useDebounce";

export default function useFindUsersQuery(search: string) {
  const { refetch, data, error, isLoading } = useQuery(
    "find-" + search,
    () => findUsers(search),
    {
      retry: false,
      enabled: false,
    }
  );

  useDebounce(() => search !== "" && refetch(), [search]);

  return { data, error, isLoading };
}
