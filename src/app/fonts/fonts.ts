import { Chakra_Petch, Fira_Code, Outfit, Poppins } from "next/font/google";

export const chakra = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-chakra",
  weight: ["300","400","500","600","700"]
});

export const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["300","400","500","600","700"]
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100","200","300","400","500","600","700","800","900"]
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100","200","300","400","500","600","700","800","900"]
});
