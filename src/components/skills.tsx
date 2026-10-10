import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import { colors, monoFont } from "../theme";
import { Pill, pillList } from "./ui";

const toolkit: { label: string; tone: "blue" | "grey"; items: string[] }[] = [
  {
    label: "Languages",
    tone: "blue",
    items: ["TypeScript", "JavaScript", "HTML & CSS", "Python", "SQL", "C#", "PHP"],
  },
  {
    label: "Frameworks",
    tone: "blue",
    items: ["React", "React Native", "Node.js", "Chrome Extensions", "WordPress", "Salesforce"],
  },
  {
    label: "Tools",
    tone: "grey",
    items: ["GitHub", "VS Code", "Azure", "Cypress", "Android Studio", "Jira", "MS SQL Server"],
  },
];

// The grouped list of languages, frameworks and tools shown in the About section.
function Toolkit(): ReactElement {
  return (
    <Box sx={{ borderTop: `1px solid ${colors.line}` }}>
      {toolkit.map((group) => (
        <Box
          key={group.label}
          className="reveal"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            gap: "10px 24px",
            py: 2.25,
            borderBottom: `1px solid ${colors.line}`,
          }}
        >
          <Typography
            component="h4"
            sx={{
              flex: "0 0 120px",
              fontFamily: monoFont,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.muted,
            }}
          >
            {group.label}
          </Typography>
          <Box component="ul" sx={{ ...pillList, flex: "1 1 280px" }}>
            {group.items.map((item) => (
              <Pill key={item} tone={group.tone}>
                {item}
              </Pill>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Toolkit;
