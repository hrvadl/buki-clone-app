export type UserRole = "Student" | "Teacher";

export type User = {
  id: number;
  email: string;
  role: UserRole;
  password: string;
  name: string | null;
  number: string | null;
};
