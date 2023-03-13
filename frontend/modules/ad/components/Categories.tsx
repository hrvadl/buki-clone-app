import { Subject } from "@/models/category";
import React, { useCallback, useContext } from "react";
import { ScrollView, ViewStyle } from "react-native";
import { ChosenCategoryContext } from "../context/ChosenCategoryContext";
import useCountCategoriesQuery from "../hooks/useCountCategoriesQuery";
import Category from "./Category";

type Props = {
  style?: ViewStyle;
};

const Categories = ({ style }: Props) => {
  const { data } = useCountCategoriesQuery();
  const { active, setActive } = useContext(ChosenCategoryContext);

  const onChooseHandler = useCallback((name: keyof typeof Subject) => {
    setActive(name);
  }, []);

  return (
    <ScrollView
      style={style}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {data?.map((category) => (
        <Category
          key={category.name}
          style={{
            marginRight: 20,
          }}
          {...category}
          isActive={category.name === active}
          onChoose={onChooseHandler}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
