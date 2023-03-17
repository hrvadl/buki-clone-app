import { Subject } from "../category";
import { User } from "../user";

export type Ad = {
  subject: keyof typeof Subject;
  id: number;
  author: User;
  description: string;
};
