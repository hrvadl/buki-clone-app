import { Subject } from "@/models/category";
import React, { useState } from "react";
import { ChosenCategoryContextType } from "../types/chosen-category-context";
import { ChosenCategoryContext } from "./ChosenCategoryContext";

type Props = {
  children: React.ReactNode;
};

const ChosenCategoryContextProvider = ({ children }: Props) => {
  const [value, setValue] = useState<ChosenCategoryContextType>({
    active: "",
    setActive,
  });

  function setActive(name: keyof typeof Subject | "") {
    name === value.active
      ? setValue((s) => ({ ...s, active: "" }))
      : setValue((s) => ({ ...s, active: name }));
  }

  return (
    <ChosenCategoryContext.Provider value={value}>
      {children}
    </ChosenCategoryContext.Provider>
  );
};

export default ChosenCategoryContextProvider;
