import {
  AppBar,
  Button,
  Fade,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { ReactElement, useEffect } from "react";
import About from "./components/about-me";
import Skills from "./components/skills/skills";
import "./styles/style.css";

import MenuIcon from "@mui/icons-material/Menu";

function visitorCount(): void {
  fetch("https://api.countapi.xyz/update/drammaster.co.nz/visits/?amount=1");
}

function Header(): ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Csaba Darazs
        </Typography>
        <div>
          <Button
            variant="outlined"
            color="inherit"
            id="fade-button"
            startIcon={<MenuIcon />}
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="fade-menu"
            slotProps={{
              list: {
                "aria-labelledby": "fade-button",
              },
            }}
            slots={{ transition: Fade }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        {/* <Button
          variant="outlined"
          startIcon={<InsertDriveFile />}
          color="inherit"
          component="a"
          href="Csaba Darazs CV.pdf"
          target="_blank"
        >
          View Resume
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}

function Main(): ReactElement {
  return (
    <main>
      <About />
      <Skills />
    </main>
  );
}

function App(): ReactElement {
  useEffect(() => {
    visitorCount();
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
