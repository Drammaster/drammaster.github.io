import { createTheme } from "@mui/material";

// Shared colour tokens, so sections can use the exact palette from the design.
export const colors = {
  ink: "#0F1720",
  body: "#4A5462",
  muted: "#5A6472",
  line: "#E1E4EA",
  ground: "#F5F6F8",
  white: "#FFFFFF",
  blue: "#1A6AA6",
  blueDark: "#0F4C7A",
  blueTint: "#E8F1F9",
  blueInk: "#124F7D",
  night: "#0D0F1A",
  nightLine: "#2E3247",
  nightText: "#B4B8C8",
  gold: "#E8B54A",
};

export const monoFont = "'IBM Plex Mono', ui-monospace, monospace";

const theme = createTheme({
  palette: {
    primary: { main: colors.blue, dark: colors.blueDark },
    text: { primary: colors.ink, secondary: colors.body },
    background: { default: colors.ground, paper: colors.white },
    divider: colors.line,
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    h1: { fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.06 },
    h2: { fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 },
    h3: { fontWeight: 700, letterSpacing: "-0.015em", lineHeight: 1.3 },
    h4: { fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.35 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        body: { overflowX: "clip", lineHeight: 1.6 },
        // Keep anchored sections clear of the sticky header.
        "section[id]": { scrollMarginTop: 72 },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, minHeight: 48, paddingInline: 26 },
      },
    },
  },
});

export default theme;
