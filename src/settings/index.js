export const systemSettings = {
  darkMode: false,
  colors: {
    light: {
      primary: "#7F0203",
      secondary: "#E6DDC8",
      third: "#004368",
      fourth: "#00949B",
      fifth: "#C9F3F9",
      black: "#222222",
      white: "#FFFFFF",
    },
    dark: {
      primary: "#7F0203",
      secondary: "#E6DDC8",
      third: "#004368",
      fourth: "#00949B",
      fifth: "#C9F3F9",
      black: "#222222",
      white: "#FFFFFF",
    },
  },
};

export default systemSettings.darkMode
  ? systemSettings.colors.dark
  : systemSettings.colors.light; // this is for tailwind since it only works with export default (module)
