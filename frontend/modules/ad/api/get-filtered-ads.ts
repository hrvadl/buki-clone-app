import Environment from "@/Config";
import apiRequest from "@/lib/fetch";
import { Ad } from "@/models/ad";
import isAd from "@/models/ad/utils/is-ad";
import { Subject } from "@/models/category";

const baseUrl = Environment.REACT_APP_API_URL + "/api/ad";

const isAdsList = (data: unknown): data is Ad[] =>
  Array.isArray(data) && (data.length === 0 || isAd(data[0]));

export const getFilteredAds = async (filter: keyof typeof Subject | "") => {
  let url = baseUrl;

  if (filter) url += "?subject=" + filter;

  const data = await apiRequest.get(url);

  if (!isAdsList(data)) throw new Error("Something went wrong");

  return data;
};
