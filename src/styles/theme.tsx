import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  colors: {
    background: "#f4f7fb", // pale blue-gray for softer background
    text: "#0f172a", // deep navy text for strong contrast
    primary: "#1d4ed8", // bold but not neon blue
    card: "#e0f0ff", // light, airy blue card
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: "#0a1120", // deep navy background
    text: "#e2e8f0", // soft near-white text
    primary: "#3b82f6", // vibrant blue accent
    card: "#1e3a8a", // rich navy-blue card
  },
};
