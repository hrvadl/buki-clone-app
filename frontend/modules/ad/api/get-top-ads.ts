import Environment from "@/Config";
import apiRequest from "@/lib/fetch";
import { Ad } from "@/models/ad";
import isAd from "@/models/ad/utils/is-ad";

const url = new URL(Environment.REACT_APP_API_URL + "/api/ad/top");

export const getTopAds = async () => {
  const data = await apiRequest.get(url);

  if (!(Array.isArray(data) && (data.length === 0 || isAd(data[0]))))
    throw new Error("Something went wrong");

  return data as Ad[];
};
