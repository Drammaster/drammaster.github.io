import { Box, Typography } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { colors, monoFont } from "../theme";

// Centred page column used by every section.
export const container = {
  maxWidth: 1200,
  mx: "auto",
  px: { xs: 2.5, sm: 3 },
  boxSizing: "border-box",
} as const;

// Small uppercase label above headings.
export function Eyebrow({
  children,
  color = colors.blue,
  className,
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}): ReactElement {
  return (
    <Typography
      component="p"
      className={className}
      sx={{
        m: 0,
        mb: 2,
        fontFamily: monoFont,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color,
      }}
    >
      {children}
    </Typography>
  );
}

const pillTones = {
  blue: { bgcolor: colors.blueTint, color: colors.blueInk },
  grey: { bgcolor: "#EEF0F3", color: "#2B3440" },
  dark: { border: "1px solid #3A3F57", color: "#D9DAE3" },
};

// A rounded tag, rendered as a list item.
export function Pill({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: keyof typeof pillTones;
}): ReactElement {
  return (
    <Box
      component="li"
      sx={{
        px: 1.75,
        py: 0.75,
        borderRadius: 999,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.4,
        ...pillTones[tone],
      }}
    >
      {children}
    </Box>
  );
}

export const pillList = {
  listStyle: "none",
  m: 0,
  p: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: 1,
} as const;

// The "Next stop" signpost between chapters of the page.
export function JourneyCue({ label }: { label: string }): ReactElement {
  return (
    <Box
      aria-hidden="true"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        py: "clamp(56px, 8vw, 88px)",
        px: 2.5,
        textAlign: "center",
      }}
    >
      <Box
        className="cue-line"
        sx={{ width: 2, height: 88, bgcolor: colors.blue, borderRadius: "2px" }}
      />
      <Typography
        sx={{
          fontFamily: monoFont,
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: colors.muted,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
