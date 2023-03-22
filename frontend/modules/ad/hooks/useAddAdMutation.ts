import { Ad } from "@/models/ad";
import { ErrorApiResponse } from "@/models/api-response";
import { UserContext } from "@/modules/navigation/context/user-context";
import { useContext } from "react";
import { useMutation } from "react-query";
import { addAd } from "../api/add-ad";
import { AdInput } from "../types/add-ad-schema";

export default function useAddAddMutation() {
  const { data, error, isLoading, mutateAsync } = useMutation<
    Ad,
    ErrorApiResponse | Error,
    AdInput
  >(addAd);
  const { user, setUser } = useContext(UserContext);

  const addNewAd = async (inputs: AdInput) => {
    if (!user) return;
    const ad = await mutateAsync(inputs);

    setUser({ ...user, ads: [...(user.ads ?? []), ad] });
  };

  return { addNewAd, error, isLoading, data };
}
