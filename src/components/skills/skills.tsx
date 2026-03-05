import { Chip, Container, ListItem, Paper, Typography } from "@mui/material";
import { ReactElement } from "react";
import "./skills.css";

interface ChipData {
  key: number;
  label: string;
}

function SkillsTools(): ReactElement {
  const skills: ChipData[] = [
    { key: 1, label: "JavaScript" },
    { key: 2, label: "TypeScript" },
    { key: 3, label: "Css" },
    { key: 4, label: "HTML" },
    { key: 5, label: "React JS" },
    { key: 6, label: "ReactNative" },
    { key: 7, label: "NodeJs" },
    { key: 8, label: "Python" },
    { key: 9, label: "Sql" },
    { key: 10, label: "C#" },
  ];

  const tools: ChipData[] = [
    { key: 1, label: "Jira" },
    { key: 2, label: "VScode" },
    { key: 3, label: "Trello" },
    { key: 4, label: "Framer" },
    { key: 5, label: "Github" },
    { key: 6, label: "Android Studio" },
    { key: 7, label: "Cypress" },
    { key: 8, label: "Azure" },
  ];
  return (
    <Container sx={{ my: 4 }} id="skill-tool">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
          {skills.map((data) => {
            return (
              <ListItem key={data.key} style={{ width: "auto" }}>
                <Chip label={data.label} />
              </ListItem>
            );
          })}
        </Paper>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Tools
        </Typography>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
          {tools.map((data) => {
            return (
              <ListItem key={data.key}>
                <Chip label={data.label} />
              </ListItem>
            );
          })}
        </Paper>
      </div>
    </Container>
  );
}

export default SkillsTools;
