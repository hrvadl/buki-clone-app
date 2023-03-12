export type Category = {
  name: keyof typeof Subject;
  adQuantity: number;
};

export const Subject = {
  Physics: "Physics",
  IT: "IT",
  Chemistry: "Chemistry",
  Math: "Math",
};
