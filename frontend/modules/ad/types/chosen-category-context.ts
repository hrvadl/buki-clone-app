import { Subject } from "@/models/category";

export type ChosenCategoryContextType = {
  active: keyof typeof Subject | "";
  setActive: (key: keyof typeof Subject | "") => void;
};
