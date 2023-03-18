import { useQuery } from "react-query";
import { getTopAds } from "../api/get-top-ads";

export default function useGetTopAdsQuery() {
  const { data, isLoading, error } = useQuery("get-top-ads", getTopAds);

  return { data: data ?? [], isLoading, error };
}
