import { Ad } from "@/models/ad";
import { ErrorApiResponse } from "@/models/api-response";
import { useMutation } from "react-query";
import { addAd } from "../api/add-ad";
import { AdInput } from "../types/add-ad-schema";

export default function useAddAddMutation() {
  const { mutate, data, error, isLoading } = useMutation<
    Ad,
    ErrorApiResponse | Error,
    AdInput
  >(addAd);

  return { addNewAd: mutate, error, isLoading, data };
}
