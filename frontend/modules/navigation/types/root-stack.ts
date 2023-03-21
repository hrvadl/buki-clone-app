import { Ad } from "@/models/ad";
import { NavigatorScreenParams } from "@react-navigation/native";
import { HomeTabs } from "./home-tabs";

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeTabs>;
  SignUp: { role: "Student" | "Teacher" } | undefined;
  PreSignUp: undefined;
  LogIn: undefined;
  Search: undefined;
  AddAd: undefined;
  Ad: { ad: Ad } | undefined;
  ProfileById: { id: number } | undefined;
};
