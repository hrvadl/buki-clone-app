import { Subject } from "../category";
import { User } from "../user";

export type Ad = {
  subject: keyof typeof SubjectMapping;
  id: number;
  author: User;
  description: string;
};

export const SubjectMapping: Record<number, string> = {
  0: Subject.Physics,
  1: Subject.IT,
  2: Subject.Chemistry,
  3: Subject.Math,
};

export const OppositeSubjectMapping: Record<string, number> = {
  [Subject.Physics]: 0,
  [Subject.IT]: 1,
  [Subject.Chemistry]: 2,
  [Subject.Math]: 3,
};
