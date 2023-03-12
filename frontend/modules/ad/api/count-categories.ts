import Environment from "@/Config";
import apiRequest from "@/lib/fetch";
import isCategory from "../utils/is-category";

const baseUrl = new URL(`${Environment.REACT_APP_API_URL}/api/categories/`);

export const getAndCountCategories = async () => {
  const data = await apiRequest.get(baseUrl);

  if (!isCategory(data)) throw new Error("Category not found");

  return data;
};
