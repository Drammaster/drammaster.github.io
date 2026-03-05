import {
    AppBar,
    Button,
    Toolbar,
    Typography
} from '@mui/material';
import { ReactElement, useEffect } from 'react';
import About from './components/about-me';
import './styles/style.css';
import { InsertDriveFile } from '@mui/icons-material';
import Skills from './components/skills/skills';

function visitorCount(): void {
  fetch('https://api.countapi.xyz/update/drammaster.co.nz/visits/?amount=1');
}





function Header(): ReactElement {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Csaba Darazs
        </Typography>
        <Button
            variant='outlined'
            startIcon={<InsertDriveFile />}
          color="inherit"
          component="a"
          href="Csaba Darazs CV.pdf"
          target="_blank"
        >
          View Resume
        </Button>
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
