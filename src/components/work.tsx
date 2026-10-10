import { Box, Button, Link, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import { GITHUB_URL } from "../sections";
import { colors, monoFont } from "../theme";
import { container, Eyebrow } from "./ui";

type Kind = "extension" | "website";

interface WorkItem {
  title: string;
  kind: Kind;
  description: string;
  meta: string;
  url?: string; // shows a "View project" link when set
  image?: string; // screenshot in /public, e.g. `${process.env.PUBLIC_URL}/work/crm.png`
}

// TODO: add links and screenshots for the other extensions as they launch.
const work: WorkItem[] = [
  {
    title: "Amazon Research Overlay",
    kind: "extension",
    description:
      "Shows FBA fees, profit, ROI, a sales estimate and selling eligibility right on Amazon product pages, so sellers can size up a product without leaving the page.",
    meta: "Amazon · React · Cloudflare Workers",
  },
  {
    title: "Marketplace Profit Overlay",
    kind: "extension",
    description:
      "Works out net profit and margin after every fee on Etsy and eBay listings, updated as you type.",
    meta: "Etsy · eBay · React",
    image: `${process.env.PUBLIC_URL}/work/marketplace-profit-overlay.webp`,
  },
  {
    title: "Real Estate Deal Overlay",
    kind: "extension",
    description:
      "Puts cash flow, cap rate, cash-on-cash and DSCR on property listings, so investors can judge a place before they open a spreadsheet.",
    meta: "Trade Me · realestate.co.nz · Zillow",
  },
  {
    title: "Helpdesk Reply Sidebar",
    kind: "extension",
    description:
      "Drafts AI replies from your own macros and help centre, right inside Freshdesk, Zendesk and Gmail.",
    meta: "Freshdesk · Zendesk · Gmail",
  },
  {
    title: "Save to CRM",
    kind: "extension",
    description:
      "Shows whether a sender or company is already in your CRM and saves them in one click, with no more copy and paste.",
    meta: "Pipedrive · Zoho",
  },
  {
    title: "Extreme Edge",
    kind: "website",
    description:
      "Redesigned the climbing gym's website and managed a smooth move from the old site to the new one.",
    meta: "Climbing gym · Auckland",
  },
];

const kinds = {
  extension: { label: "Chrome extension", color: colors.blue, tint: colors.blueTint, ink: "#3E5F7C", placeholder: "[Screenshot]" },
  website: { label: "Website rework", color: "#8A5A00", tint: "#F1ECE0", ink: "#6B5A33", placeholder: "[Before / after screenshot]" },
};

const filters: { id: "all" | Kind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "extension", label: "Chrome extensions" },
  { id: "website", label: "Websites" },
];

function WorkCard({ item }: { item: WorkItem }): ReactElement {
  const kind = kinds[item.kind];
  return (
    <Box
      component="article"
      className="reveal"
      sx={{
        bgcolor: "background.paper",
        border: `1px solid ${colors.line}`,
        borderRadius: "18px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {item.image ? (
        <Box
          component="img"
          src={item.image}
          alt={`${item.title} screenshot`}
          sx={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", display: "block" }}
        />
      ) : (
        <Box
          sx={{
            aspectRatio: "16 / 10",
            bgcolor: kind.tint,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: kind.ink,
            fontSize: 13,
          }}
        >
          {kind.placeholder}
        </Box>
      )}
      <Box sx={{ p: 2.75, display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
        <Typography
          sx={{
            fontFamily: monoFont,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: kind.color,
          }}
        >
          {kind.label}
        </Typography>
        <Typography variant="h3" sx={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.01em" }}>
          {item.title}
        </Typography>
        <Typography sx={{ fontSize: 15, color: "text.secondary", flex: 1 }}>
          {item.description}
        </Typography>
        <Box
          sx={{
            mt: 1.25,
            pt: 1.75,
            borderTop: "1px solid #EEF0F3",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "8px 12px",
            fontSize: 14,
          }}
        >
          <Box component="span" sx={{ color: colors.muted }}>
            {item.meta}
          </Box>
          {item.url && (
            <Link href={item.url} target="_blank" rel="noreferrer" underline="none" sx={{ fontWeight: 600 }}>
              View project →
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
}

function Work(): ReactElement {
  const [filter, setFilter] = useState<"all" | Kind>("all");
  const shown = work.filter((item) => filter === "all" || item.kind === filter);

  return (
    <Box component="section" id="work" aria-labelledby="work-title" sx={container}>
      <Box
        className="reveal"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 3,
          mb: 4.5,
        }}
      >
        <Box sx={{ flex: "1 1 440px", minWidth: 0 }}>
          <Eyebrow>Work</Eyebrow>
          <Typography id="work-title" variant="h2" sx={{ mb: 2, fontSize: "clamp(30px, 4vw, 46px)" }}>
            Client work &amp; smaller builds
          </Typography>
          <Typography sx={{ fontSize: 17, color: "text.secondary", maxWidth: "52ch" }}>
            Focused tools and website reworks for businesses. Usually small,
            always practical, and built around how the team actually works.
          </Typography>
        </Box>
        <Box role="group" aria-label="Filter work" sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {filters.map((f) => {
            const active = filter === f.id;
            return (
              <Button
                key={f.id}
                aria-pressed={active}
                onClick={() => setFilter(f.id)}
                sx={{
                  minHeight: 44,
                  px: 2.25,
                  fontSize: 14,
                  border: "1.5px solid",
                  borderColor: active ? colors.ink : "#C5CBD5",
                  bgcolor: active ? colors.ink : "transparent",
                  color: active ? colors.white : colors.ink,
                  "&:hover": { bgcolor: active ? "#000" : "#E9ECF0" },
                }}
              >
                {f.label}
              </Button>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
          gap: 2.5,
        }}
      >
        {shown.map((item) => (
          <WorkCard key={item.title} item={item} />
        ))}
      </Box>

      <Typography className="reveal" sx={{ mt: 4, fontSize: 15, color: colors.muted }}>
        More experiments and university projects are on{" "}
        <Link href={GITHUB_URL} target="_blank" rel="noreferrer" sx={{ fontWeight: 600 }}>
          GitHub
        </Link>
        .
      </Typography>
    </Box>
  );
}

export default Work;
