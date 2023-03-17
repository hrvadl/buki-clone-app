import { Subject } from "@/models/category";

export const initialData = {
  [Subject.Physics]: 0,
  [Subject.IT]: 0,
  [Subject.Chemistry]: 0,
  [Subject.Math]: 0,
};

export const subjectMapping: Record<number, string> = {
  0: Subject.Physics,
  1: Subject.IT,
  2: Subject.Chemistry,
  3: Subject.Math,
};

export const oppositeSubjectMapping: Record<string, number> = {
  [Subject.Physics]: 0,
  [Subject.IT]: 1,
  [Subject.Chemistry]: 2,
  [Subject.Math]: 3,
};
