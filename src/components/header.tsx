import {
  AppBar,
  Box,
  Button,
  Fade,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import React, { ReactElement } from "react";
import { RESUME_URL, sections } from "../sections";
import { colors } from "../theme";
import { container } from "./ui";

function Header(): ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        bgcolor: "rgba(245, 246, 248, 0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${colors.line}`,
        color: colors.ink,
      }}
    >
      <Toolbar
        disableGutters
        sx={{ ...container, width: "100%", gap: 1.5, minHeight: { xs: 64 } }}
      >
        <Link
          href="#top"
          underline="none"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: "-0.02em",
            color: colors.ink,
            whiteSpace: "nowrap",
          }}
        >
          Csaba Darazs
          <Box component="span" sx={{ color: colors.blue }}>
            .
          </Box>
        </Link>

        <Box
          component="nav"
          aria-label="Sections"
          sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}
        >
          {sections.map((section) => (
            <Button
              key={section.id}
              href={`#${section.id}`}
              sx={{
                color: "#2B3440",
                fontWeight: 500,
                fontSize: 15,
                minHeight: 44,
                px: 1.75,
              }}
            >
              {section.label}
            </Button>
          ))}
          <Button
            variant="outlined"
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            endIcon={<FileDownloadOutlinedIcon />}
            sx={{
              ml: 1,
              minHeight: 44,
              px: 2.25,
              fontSize: 15,
              color: colors.ink,
              borderColor: colors.ink,
              borderWidth: 1.5,
            }}
          >
            Résumé
          </Button>
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            color="inherit"
            id="nav-button"
            aria-label="Open navigation menu"
            aria-controls={open ? "nav-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(event) => setAnchorEl(event.currentTarget)}
            sx={{ width: 44, height: 44 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="nav-menu"
            slotProps={{ list: { "aria-labelledby": "nav-button" } }}
            slots={{ transition: Fade }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {sections.map((section) => (
              <MenuItem
                key={section.id}
                component="a"
                href={`#${section.id}`}
                onClick={handleClose}
                sx={{ minHeight: 44 }}
              >
                {section.label}
              </MenuItem>
            ))}
            <MenuItem
              component="a"
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              onClick={handleClose}
              sx={{ minHeight: 44 }}
            >
              Résumé
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
      <Box
        className="scroll-progress"
        aria-hidden="true"
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -1,
          height: 3,
          bgcolor: colors.blue,
        }}
      />
    </AppBar>
  );
}

export default Header;
