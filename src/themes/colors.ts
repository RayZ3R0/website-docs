export type ColorScheme = {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: {
      light: string;
      dark: string;
    };
    text: {
      light: string;
      dark: string;
    };
  };
};

export const colorSchemes: ColorScheme[] = [
  {
    name: "Ocean",
    colors: {
      primary: "#0284c7",
      secondary: "#0ea5e9",
      accent: "#38bdf8",
      background: {
        light: "#ffffff",
        dark: "#0f172a",
      },
      text: {
        light: "#1e293b",
        dark: "#f1f5f9",
      },
    },
  },
  {
    name: "Forest",
    colors: {
      primary: "#166534",
      secondary: "#22c55e",
      accent: "#4ade80",
      background: {
        light: "#ffffff",
        dark: "#0c1a0f",
      },
      text: {
        light: "#1a2e21",
        dark: "#ecfdf5",
      },
    },
  },
  {
    name: "Sunset",
    colors: {
      primary: "#c2410c",
      secondary: "#ea580c",
      accent: "#fb923c",
      background: {
        light: "#ffffff",
        dark: "#1c1917",
      },
      text: {
        light: "#292524",
        dark: "#fef2f2",
      },
    },
  },
];

export const defaultColorScheme = colorSchemes[0];
