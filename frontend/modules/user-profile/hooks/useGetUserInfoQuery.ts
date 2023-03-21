import { ErrorApiResponse } from "@/models/api-response";
import { User } from "@/models/user";
import { useQuery } from "react-query";
import { getUserInfo } from "../api/get-user-info";

export default function useGetUserInfoQuery(id: number) {
  const { data, error, isLoading } = useQuery<User, Error | ErrorApiResponse>(
    "get-user-info" + id,
    () => getUserInfo(id)
  );

  return { data, error, isLoading };
}
