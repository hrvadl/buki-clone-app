import { User } from "../user";

export type Review = {
  reviewer: User;
  reviewee: User;
  text: string;
  rate: number;
};
