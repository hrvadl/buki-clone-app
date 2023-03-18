import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { getFilteredAds } from "../api/get-filtered-ads";
import { ChosenCategoryContext } from "../context/ChosenCategoryContext";

export default function useFetchAds() {
  const { active } = useContext(ChosenCategoryContext);

  const { data, refetch, isLoading, error } = useQuery(
    ["get-filtered-ads", active],
    () => getFilteredAds(active),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    refetch();
  }, [active]);

  return { data, refetch, isLoading, error };
}
