import { Box, Link, Typography } from "@mui/material";
import { ReactElement } from "react";
import About from "./components/about-me";
import Contact from "./components/contact";
import Header from "./components/header";
import Hero from "./components/hero";
import MythicVitals from "./components/mythic-vitals";
import { container, JourneyCue } from "./components/ui";
import Work from "./components/work";
import { colors } from "./theme";

function Footer(): ReactElement {
  return (
    <Box component="footer" sx={{ borderTop: `1px solid ${colors.line}` }}>
      <Box
        sx={{
          ...container,
          py: 3,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px 16px",
        }}
      >
        <Typography sx={{ fontSize: 14, color: colors.muted }}>
          © {new Date().getFullYear()} Csaba Darazs · Auckland, New Zealand
        </Typography>
        <Link
          href="#top"
          underline="none"
          sx={{ minHeight: 44, display: "inline-flex", alignItems: "center", fontSize: 14, fontWeight: 500, color: colors.muted }}
        >
          Back to top ↑
        </Link>
      </Box>
    </Box>
  );
}

function App(): ReactElement {
  return (
    <Box id="top">
      <Header />
      <main>
        <Hero />
        <About />
        <MythicVitals />
        <JourneyCue label="Next: what I build for other businesses" />
        <Work />
        <JourneyCue label="Last stop: let's work together" />
        <Contact />
      </main>
      <Footer />
    </Box>
  );
}

export default App;
