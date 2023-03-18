import { SubjectMapping } from "@/models/ad";
import { Category, Subject } from "@/models/category";
import { useMemo } from "react";
import { ImageSourcePropType } from "react-native";
import { useQuery } from "react-query";
import { getAndCountCategories } from "../api/count-categories";
import { initialData } from "../mocks/categories";

type CategoryAndIcon = Category & { icon: ImageSourcePropType };

export default function useCountCategoriesQuery() {
  const { data, error } = useQuery("count-categories", getAndCountCategories);

  data?.forEach((item) => {
    initialData[SubjectMapping[item.name]] = item.adQuantity;
  });

  const normalizedData = useMemo(() => {
    return !data
      ? ([] as CategoryAndIcon[])
      : (Object.keys(initialData) as (keyof typeof Subject)[]).reduce(
          (acc, key) => {
            acc.push({
              name: key,
              adQuantity: initialData[key],
              icon: require("@/assets/science.png"),
            });

            return acc;
          },
          [] as CategoryAndIcon[]
        );
  }, [data?.length ?? 0]);

  return { data: normalizedData, error };
}
