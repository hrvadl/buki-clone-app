import { Ad } from "../ad";

export type UserRole = "Student" | "Teacher";

export type User = {
  id: number;
  email: string;
  role: "0" | "1";
  password: string;
  name: string;
  number: string;
  description: string;
  token: string;
  favorites: Ad[];
};

export const roleMap = {
  Teacher: 0,
  Student: 1,
} as const;

export const oppositeRoleMap: Record<number, string> = {
  0: "Teacher",
  1: "Student",
};
