import Environment from "@/Config";
import apiRequest from "@/lib/fetch";
import isAd from "@/models/ad/utils/is-ad";
import { AdInput } from "../types/add-ad-schema";

const url = new URL(Environment.REACT_APP_API_URL + "/api/ad");

export const addAd = async (data: AdInput) => {
  const res = await apiRequest.post(url, { body: JSON.stringify(data) });

  if (!isAd(res)) throw new Error("Something went wrong");

  console.log(res);

  return res;
};
