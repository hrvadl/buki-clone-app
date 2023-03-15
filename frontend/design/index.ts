import {
  configureFonts,
  DefaultTheme,
  MD3LightTheme,
} from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/src/types";

const fontConfig = {
  displayLarge: {
    fontFamily: "Montserrat-Regular",
    letterSpacing: 0,
    fontWeight: "400" as const,
    lineHeight: 64,
    fontSize: 57,
  },
  displayMedium: {
    fontFamily: "Montserrat-Regular",
    letterSpacing: 0,
    fontWeight: "400" as const,
    lineHeight: 52,
    fontSize: 45,
  },
  displaySmall: {
    fontFamily: "Montserrat-Regular",
    letterSpacing: 0,
    fontWeight: "400" as const,
    lineHeight: 44,
    fontSize: 36,
  },
  headlineLarge: {
    fontFamily: "Montserrat-Regular",
    letterSpacing: 0,
    fontWeight: "400" as const,
    lineHeight: 40,
    fontSize: 32,
  },
  headlineMedium: {
    fontFamily: "Montserrat-Regular",
    letterSpacing: 0,
    fontWeight: "400" as const,
    lineHeight: 36,
    fontSize: 28,
  },
  headlineSmall: {
    fontFamily: "Montserrat-Regular",
    letterSpacing: 0,
    fontWeight: "400" as const,
    lineHeight: 32,
    fontSize: 24,
  },
  titleLarge: {
    fontFamily: "Montserrat-Regular",
    letterSpacing: 0,
    fontWeight: "400" as const,
    lineHeight: 28,
    fontSize: 22,
  },
  titleMedium: {
    fontFamily: "Montserrat-Medium",
    letterSpacing: 0.15,
    fontWeight: "500" as const,
    lineHeight: 24,
    fontSize: 16,
  },
  titleSmall: {
    fontFamily: "Montserrat-Medium",
    letterSpacing: 0.1,
    fontWeight: "500" as const,
    lineHeight: 20,
    fontSize: 14,
  },
  labelLarge: {
    fontFamily: "Montserrat-Medium",
    letterSpacing: 0.1,
    fontWeight: "500" as const,
    lineHeight: 20,
    fontSize: 14,
  },
  labelMedium: {
    fontFamily: "Montserrat-Medium",
    letterSpacing: 0.5,
    fontWeight: "500" as const,
    lineHeight: 16,
    fontSize: 12,
  },
  labelSmall: {
    fontFamily: "Montserrat-Medium",
    letterSpacing: 0.5,
    fontWeight: "500" as const,
    lineHeight: 16,
    fontSize: 11,
  },
  bodyLarge: {
    fontFamily: "Montserrat-Regular",
    letterSpacing: 0.5,
    fontWeight: "400" as const,
    lineHeight: 22,
    fontSize: 16,
  },
  bodyMedium: {
    fontFamily: "Montserrat-Regular",
    letterSpacing: 0.5,
    fontWeight: "400" as const,
    lineHeight: 20,
    fontSize: 14,
  },
  bodySmall: {
    fontFamily: "Montserrat-Regular",
    letterSpacing: 0.4,
    fontWeight: "400" as const,
    lineHeight: 16,
    fontSize: 12,
  },
  default: {
    fontFamily: "Montserrat-Regular",
    letterSpacing: 0.5,
    fontWeight: "400" as const,
    lineHeight: 22,
    fontSize: 14,
  },
};

const theme: ThemeProp = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    ...DefaultTheme.colors,
    primary: "#1E0094",
    onBackground: "#ededed",
  },
};

export default theme;
