import { Box, Button, Link, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ReactElement } from "react";
import { colors, monoFont } from "../theme";
import { container, Eyebrow } from "./ui";

const currently = [
  { title: "Building MythicVitals", rest: ", my flagship app" },
  { title: "Chrome extensions", rest: " for e-commerce, real estate and support teams" },
  { title: "Website reworks", rest: " for local businesses" },
];

function Hero(): ReactElement {
  return (
    <Box
      component="section"
      aria-labelledby="hero-title"
      sx={{ ...container, pt: "clamp(48px, 9vw, 96px)", pb: "clamp(40px, 6vw, 64px)" }}
    >
      <Box
        className="hero-copy"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(32px, 5vw, 56px)",
          alignItems: "flex-end",
        }}
      >
        <Box sx={{ flex: "999 1 560px", minWidth: 0 }}>
          <Eyebrow>Software developer · Auckland, NZ</Eyebrow>
          <Typography
            id="hero-title"
            variant="h1"
            sx={{ fontSize: "clamp(36px, 6vw, 72px)", maxWidth: "15ch" }}
          >
            I build apps, browser tools and websites that make businesses run
            smoother.
          </Typography>
          <Typography
            sx={{
              mt: 3,
              fontSize: "clamp(17px, 1.6vw, 19px)",
              color: "text.secondary",
              maxWidth: "58ch",
            }}
          >
            I'm Csaba, a computer science graduate from the University of
            Auckland. I turn slow, manual work into simple software, from my own
            app MythicVitals to Chrome extensions and website reworks for local
            businesses.
          </Typography>
          <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            <Button
              variant="contained"
              href="#contact"
              endIcon={<ArrowForwardIcon />}
              sx={{ bgcolor: colors.ink, "&:hover": { bgcolor: "#000" } }}
            >
              Work with me
            </Button>
            <Button
              variant="outlined"
              href="#mythicvitals"
              sx={{ color: colors.ink, borderColor: "#C5CBD5", borderWidth: 1.5 }}
            >
              Explore MythicVitals
            </Button>
          </Box>
        </Box>

        <Box
          component="aside"
          aria-label="What I'm working on"
          sx={{
            flex: "1 1 300px",
            minWidth: 0,
            bgcolor: "background.paper",
            border: `1px solid ${colors.line}`,
            borderRadius: "20px",
            p: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 2.25 }}>
            <Box
              sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#1F9D55" }}
            />
            <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
              Open to new projects
            </Typography>
          </Box>
          <Typography
            sx={{
              mb: 1.5,
              fontFamily: monoFont,
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: colors.muted,
            }}
          >
            Right now
          </Typography>
          <Box
            component="ul"
            sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexDirection: "column", gap: 1.75 }}
          >
            {currently.map((item) => (
              <Box
                component="li"
                key={item.title}
                sx={{ display: "flex", gap: 1.75, alignItems: "flex-start", fontSize: 15, lineHeight: 1.5 }}
              >
                <Box
                  sx={{
                    flex: "0 0 6px",
                    height: 6,
                    mt: "9px",
                    borderRadius: "50%",
                    bgcolor: colors.blue,
                  }}
                />
                <span>
                  <strong style={{ fontWeight: 600 }}>{item.title}</strong>
                  {item.rest}
                </span>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Link
        href="#about"
        className="bob"
        underline="none"
        sx={{
          mt: "clamp(40px, 6vw, 72px)",
          mx: "auto",
          width: "fit-content",
          minHeight: 44,
          display: "flex",
          alignItems: "center",
          gap: 1.25,
          color: colors.muted,
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        Scroll to get to know me
        <ArrowDownwardIcon sx={{ fontSize: 16 }} />
      </Link>
    </Box>
  );
}

export default Hero;
