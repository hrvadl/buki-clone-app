import { createContext } from "react";
import { ChosenCategoryContextType } from "../types/chosen-category-context";

const defaultValue: ChosenCategoryContextType = {
  active: "",
  setActive() {},
};

export const ChosenCategoryContext =
  createContext<ChosenCategoryContextType>(defaultValue);
