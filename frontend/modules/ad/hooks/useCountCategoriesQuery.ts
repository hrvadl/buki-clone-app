import { Category, Subject } from "@/models/category";
import { ImageSourcePropType } from "react-native";
import { useQuery } from "react-query";
import { getAndCountCategories } from "../api/count-categories";

const initialData = {
  [Subject.Chemistry]: 0,
  [Subject.IT]: 0,
  [Subject.Math]: 0,
  [Subject.Physics]: 0,
};

export default function useCountCategoriesQuery() {
  const { data, error } = useQuery("count-categories", getAndCountCategories);

  if (!data || error) return { data: (data ?? []) as [], error };

  data.forEach((item) => {
    initialData[item.name] = item.adQuantity;
  });

  const normalizedData = (
    Object.keys(initialData) as (keyof typeof Subject)[]
  ).reduce((acc, key) => {
    acc.push({
      name: key,
      adQuantity: initialData[key],
      icon: require("@/assets/science.png"),
    });

    return acc;
  }, [] as (Category & { icon: ImageSourcePropType })[]);

  return { data: normalizedData, error };
}
