import { Box, Button, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { ReactElement } from "react";
import { colors, monoFont } from "../theme";
import { Eyebrow, Pill, pillList } from "./ui";

// Buttons only appear once their URL is filled in; screenshots live in /public/mythicvitals.
// appUrl stays empty until the Google Play listing goes live.
const mythicVitals = {
  pitch: "A fantasy RPG for Android, powered by your real day.",
  summary:
    "Your steps, calories, water and active minutes turn into the abilities you cast in turn-based battles. Most fitness games pay you for one more mile; MythicVitals caps rewards at a solid, healthy day, so there's never a reason to overdo it.",
  features: [
    {
      title: "Your day becomes your loadout",
      text: "Activity from Android Health Connect turns into Speed, Fire, Water and Strength casts for the dungeon.",
    },
    {
      title: "Four ways to fight",
      text: "A branching story campaign, an endless monthly tower, weekly trials and asynchronous PvP duels.",
    },
    {
      title: "Health data stays yours",
      text: "Raw data never leaves the phone. Multiplayer only ever sees abstracted 0–100 scores.",
    },
  ],
  role: "Solo design & development",
  stack: ["React Native", "Expo", "TypeScript", "Firebase", "Health Connect"],
  websiteUrl: "https://drammaster.github.io/Mythic-Vitals-Website/",
  appUrl: "",
  screenshots: [
    {
      src: `${process.env.PUBLIC_URL}/mythicvitals/hero.webp`,
      alt: "MythicVitals hero screen: milestone rings for steps, calories, active minutes and water, with the casts they grant",
      placeholder: "",
    },
    {
      src: `${process.env.PUBLIC_URL}/mythicvitals/combat.webp`,
      alt: "MythicVitals combat: a critical hit against a boss, with four ability casts along the bottom",
      placeholder: "",
    },
  ],
};

const smallLabel = {
  mb: 1.25,
  fontFamily: monoFont,
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#8F94A8",
} as const;

function Phone({
  shot,
  className,
  border,
  transform,
}: {
  shot: (typeof mythicVitals.screenshots)[number];
  className: string;
  border: string;
  transform: string;
}): ReactElement {
  return (
    <Box
      className={className}
      sx={{
        width: "min(220px, 40vw)",
        aspectRatio: "230 / 470",
        borderRadius: "36px",
        bgcolor: "#1B1E2E",
        border: `7px solid ${border}`,
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: shot.src ? 0 : 2,
        color: "#8F94A8",
        fontSize: 13,
        transform,
        boxShadow: "0 30px 60px rgba(0, 0, 0, 0.45)",
      }}
    >
      {shot.src ? (
        <Box
          component="img"
          src={shot.src}
          alt={shot.alt}
          sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        shot.placeholder
      )}
    </Box>
  );
}

function MythicVitals(): ReactElement {
  const [first, second] = mythicVitals.screenshots;
  return (
    <Box
      component="section"
      id="mythicvitals"
      aria-labelledby="mv-title"
      sx={{ bgcolor: "background.paper" }}
    >
      <Box className="mv-shell" sx={{ bgcolor: colors.night, color: "#F1F0EA" }}>
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            px: { xs: 2.5, sm: 3 },
            py: "clamp(72px, 10vw, 120px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(48px, 6vw, 72px)",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: "999 1 520px", minWidth: 0 }}>
            <Eyebrow className="reveal" color={colors.gold}>
              Flagship project
            </Eyebrow>
            <Typography
              id="mv-title"
              variant="h2"
              className="reveal"
              sx={{ fontSize: "clamp(48px, 8vw, 104px)", lineHeight: 0.98, letterSpacing: "-0.045em" }}
            >
              Mythic
              <Box component="span" sx={{ color: colors.gold }}>
                Vitals
              </Box>
            </Typography>
            <Typography
              className="reveal"
              sx={{
                mt: 3,
                fontWeight: 500,
                fontSize: "clamp(20px, 2.4vw, 26px)",
                lineHeight: 1.35,
                letterSpacing: "-0.01em",
                maxWidth: "30ch",
              }}
            >
              {mythicVitals.pitch}
            </Typography>
            <Typography
              className="reveal"
              sx={{ mt: 2.5, fontSize: 17, color: colors.nightText, maxWidth: "56ch" }}
            >
              {mythicVitals.summary}
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: "none",
                m: 0,
                mt: 5,
                p: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))",
                gap: 3,
              }}
            >
              {mythicVitals.features.map((feature, i) => (
                <Box
                  component="li"
                  key={i}
                  className="reveal"
                  sx={{ borderTop: `1px solid ${colors.nightLine}`, pt: 2 }}
                >
                  <Typography sx={{ mb: 0.5, fontWeight: 600 }}>{feature.title}</Typography>
                  <Typography sx={{ fontSize: 14, color: colors.nightText }}>
                    {feature.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              className="reveal"
              sx={{ mt: 5, display: "flex", flexWrap: "wrap", gap: "28px 40px" }}
            >
              <Box>
                <Typography sx={smallLabel}>My role</Typography>
                <Typography sx={{ fontWeight: 500 }}>{mythicVitals.role}</Typography>
              </Box>
              <Box>
                <Typography sx={smallLabel}>Built with</Typography>
                <Box component="ul" sx={pillList}>
                  {mythicVitals.stack.map((tech) => (
                    <Pill key={tech} tone="dark">
                      {tech}
                    </Pill>
                  ))}
                </Box>
              </Box>
            </Box>

            {(mythicVitals.websiteUrl || mythicVitals.appUrl) && (
              <Box className="reveal" sx={{ mt: 5, display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                {mythicVitals.websiteUrl && (
                  <Button
                    variant="contained"
                    href={mythicVitals.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    endIcon={<NorthEastIcon />}
                    sx={{ bgcolor: colors.gold, color: "#1A1404", "&:hover": { bgcolor: "#F0C463" } }}
                  >
                    Visit the MythicVitals site
                  </Button>
                )}
                {mythicVitals.appUrl && (
                  <Button
                    variant="outlined"
                    href={mythicVitals.appUrl}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ color: "#F1F0EA", borderColor: "#4A4F68", borderWidth: 1.5 }}
                  >
                    Get the app
                  </Button>
                )}
              </Box>
            )}
          </Box>

          <Box
            aria-hidden={!first.src && !second.src}
            sx={{
              flex: "1 1 300px",
              minWidth: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 3,
              pb: 7,
            }}
          >
            <Phone
              shot={first}
              className="float-a"
              border="#262A3D"
              transform="rotate(-6deg) translateX(20px)"
            />
            <Phone
              shot={second}
              className="float-b"
              border={colors.gold}
              transform="rotate(4deg) translate(-20px, 32px)"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MythicVitals;
