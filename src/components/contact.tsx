import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { ReactElement } from "react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../sections";
import { colors } from "../theme";
import { container } from "./ui";

const linkButton = {
  justifyContent: "space-between",
  minHeight: 52,
  px: 3,
  fontSize: 16,
} as const;

const outlined = {
  ...linkButton,
  color: colors.white,
  borderColor: "#8DBCE0",
  borderWidth: 1.5,
  "&:hover": { borderColor: colors.white, bgcolor: "rgba(255, 255, 255, 0.08)" },
} as const;

function Contact(): ReactElement {
  return (
    <Box
      component="section"
      id="contact"
      aria-labelledby="contact-title"
      sx={{ ...container, pb: "clamp(64px, 8vw, 96px)" }}
    >
      <Box
        className="reveal"
        sx={{
          bgcolor: colors.blue,
          color: colors.white,
          borderRadius: "clamp(20px, 3vw, 28px)",
          p: "clamp(32px, 6vw, 72px)",
          display: "flex",
          flexWrap: "wrap",
          gap: 4.5,
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: "999 1 480px", minWidth: 0 }}>
          <Typography
            id="contact-title"
            variant="h2"
            sx={{ mb: 2.25, fontSize: "clamp(30px, 4.5vw, 54px)", lineHeight: 1.06, maxWidth: "18ch" }}
          >
            Got a process that eats your team's time?
          </Typography>
          <Typography sx={{ fontSize: "clamp(16px, 1.6vw, 18px)", color: "#E4EFF8", maxWidth: "52ch" }}>
            Tell me about it. I'll tell you honestly whether an app, an
            extension or a website change would fix it, and what it would take.
          </Typography>
        </Box>
        <Box sx={{ flex: "1 1 240px", minWidth: 0, display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Button
            variant="contained"
            href={`mailto:${EMAIL}`}
            endIcon={<ArrowForwardIcon />}
            sx={{ ...linkButton, bgcolor: colors.white, color: colors.ink, "&:hover": { bgcolor: "#EAF2F9" } }}
          >
            Email me
          </Button>
          {LINKEDIN_URL && (
            <Button
              variant="outlined"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              endIcon={<NorthEastIcon />}
              sx={outlined}
            >
              LinkedIn
            </Button>
          )}
          <Button
            variant="outlined"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            endIcon={<NorthEastIcon />}
            sx={outlined}
          >
            GitHub
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
