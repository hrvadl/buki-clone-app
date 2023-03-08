export type UserRole = "Student" | "Teacher";

export type User = {
  id: number;
  email: string;
  role: UserRole;
  password: string;
  name: string | null;
  number: string | null;
  token: string;
};

export const roleMap = {
  Teacher: 0,
  Student: 1,
} as const;
