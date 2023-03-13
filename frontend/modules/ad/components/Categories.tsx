import { Subject } from "@/models/category";
import React, { useCallback, useContext } from "react";
import { View } from "react-native";
import { ChosenCategoryContext } from "../context/ChosenCategoryContext";
import useCountCategoriesQuery from "../hooks/useCountCategoriesQuery";
import Category from "./Category";

const Categories = () => {
  const { data } = useCountCategoriesQuery();
  const { active, setActive } = useContext(ChosenCategoryContext);

  const onChooseHandler = useCallback((name: keyof typeof Subject) => {
    setActive(name);
  }, []);

  return (
    <View>
      {data?.map((category) => (
        <Category
          {...category}
          isActive={category.name === active}
          onChoose={onChooseHandler}
        />
      ))}
    </View>
  );
};

export default Categories;
