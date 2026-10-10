import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import { colors, monoFont } from "../theme";
import Toolkit from "./skills";
import { container, Eyebrow, JourneyCue } from "./ui";

// TODO: add a photo to /public (e.g. photo.jpg) and set this to
// `${process.env.PUBLIC_URL}/photo.jpg`.
const PHOTO_URL: string | null = null;

const services = [
  {
    title: "Web & mobile apps",
    text: "Full products from idea to release, built with React, React Native and TypeScript.",
  },
  {
    title: "Browser extensions",
    text: "Chrome extensions that put the numbers and shortcuts your team needs right on the pages they already use.",
  },
  {
    title: "Website reworks",
    text: "Redesigns, WordPress updates, hosting and migrations, with a smooth switch-over from the old site.",
  },
  {
    title: "Systems, data & QA",
    text: "Databases, business systems, Salesforce setups and test plans that keep things running and bug-free.",
  },
];

// TODO: update these dates and roles if anything has changed since your CV.
const background = [
  { when: "2015 – 2019", title: "Computer Science", where: "University of Auckland" },
  {
    when: "2016 – now",
    title: "Senior Team Member & IT",
    where: "Extreme Edge: database, POS, network and website redesign",
  },
  {
    when: "2020",
    title: "QA Tester",
    where: "UK startup: sprint test plans, regression testing and bug reports",
  },
];

const subheading = { mb: 2.5, fontSize: 22 } as const;

function About(): ReactElement {
  return (
    <Box
      component="section"
      id="about"
      aria-labelledby="about-title"
      sx={{ bgcolor: "background.paper", borderTop: `1px solid ${colors.line}` }}
    >
      <Box sx={{ ...container, pt: "clamp(64px, 9vw, 104px)" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(40px, 5vw, 56px)",
            alignItems: "flex-start",
          }}
        >
          <Box className="reveal" sx={{ flex: "1 1 320px", minWidth: 0 }}>
            <Eyebrow>Who I am</Eyebrow>
            <Typography
              id="about-title"
              variant="h2"
              sx={{ mb: 3, fontSize: "clamp(30px, 4vw, 46px)" }}
            >
              Practical software, built by someone who's run the systems himself.
            </Typography>
            {PHOTO_URL ? (
              <Box
                component="img"
                src={PHOTO_URL}
                alt="Csaba Darazs"
                sx={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                  borderRadius: "16px",
                  mb: 3,
                  display: "block",
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  borderRadius: "16px",
                  bgcolor: "#EEF1F5",
                  border: "1.5px dashed #B9C1CC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: colors.muted,
                  fontSize: 14,
                  mb: 3,
                }}
              >
                [Your photo]
              </Box>
            )}
            <Typography sx={{ mb: 2, color: "#3A4452" }}>
              I'm hardworking, goal-driven, and happiest when I'm learning a new
              technology. I work well in a team and I'm just as comfortable
              owning a project on my own.
            </Typography>
            <Typography sx={{ color: "#3A4452" }}>
              For years I also looked after the IT at a busy Auckland climbing
              gym: the business database, POS, network, security system and
              website. That taught me to build for real people with real
              constraints, and to explain technical things in plain language.
            </Typography>
          </Box>

          <Box sx={{ flex: "999 1 560px", minWidth: 0 }}>
            <Typography variant="h3" className="reveal" sx={subheading}>
              How I can help
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
                gap: 2,
              }}
            >
              {services.map((service) => (
                <Box
                  key={service.title}
                  className="reveal"
                  sx={{ bgcolor: colors.ground, borderRadius: "16px", p: 3 }}
                >
                  <Typography variant="h4" sx={{ mb: 1, fontSize: 18 }}>
                    {service.title}
                  </Typography>
                  <Typography sx={{ fontSize: 15, color: "text.secondary" }}>
                    {service.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Typography
              id="skills"
              variant="h3"
              className="reveal"
              sx={{ ...subheading, mt: 6, mb: 2 }}
            >
              Toolkit
            </Typography>
            <Toolkit />
          </Box>
        </Box>

        <Typography variant="h3" className="reveal" sx={{ ...subheading, mt: 9, mb: 3 }}>
          Background
        </Typography>
        <Box
          component="ol"
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
            gap: 3,
          }}
        >
          {background.map((item) => (
            <Box
              component="li"
              key={item.title}
              className="reveal"
              sx={{ borderTop: `3px solid ${colors.ink}`, pt: 2.25 }}
            >
              <Typography
                sx={{ mb: 0.75, fontFamily: monoFont, fontSize: 13, color: colors.muted }}
              >
                {item.when}
              </Typography>
              <Typography sx={{ mb: 0.75, fontWeight: 600 }}>{item.title}</Typography>
              <Typography sx={{ fontSize: 15, color: "text.secondary" }}>
                {item.where}
              </Typography>
            </Box>
          ))}
        </Box>

        <JourneyCue label="Next: the project I'm proudest of" />
      </Box>
    </Box>
  );
}

export default About;
