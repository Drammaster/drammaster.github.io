import React, { useState, useEffect } from 'react';
import './styles/style.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Link,
} from '@mui/material';

function visitorCount() {
  fetch('https://api.countapi.xyz/update/drammaster.co.nz/visits/?amount=1');
}

async function fetchRepos() {
  const resp = await fetch('https://api.github.com/users/drammaster/repos');
  return await resp.json();
}

function getIcon(suffix) {
  switch (suffix) {
    case 'Python':
      return <i className="fab fa-python"></i>;
    case 'HTMLCSS':
      return <i className="fab fa-html5"></i>;
    case 'React':
    case 'ReactNative':
      return <i className="fab fa-react"></i>;
    case 'JS':
      return <i className="fab fa-js-square"></i>;
    case 'Angular':
      return <i className="fab fa-angular"></i>;
    case 'TypeScript':
      return <i className="fab fa-typescript"></i>;
    default:
      return null;
  }
}

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos().then(setRepos);
  }, []);

  return (
    <Container sx={{ my: 4 }} id="proj">
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
        {repos.map((repo) => {
          const rep = repo.name.split('-');
          const icon = getIcon(rep[1]);
          const linker = `https://github.com/Drammaster/${repo.name}`;
          return (
            <Box component="li" key={repo.id} sx={{ mb: 2 }}>
              <Link href={linker} target="_blank" rel="noreferrer" underline="none">
                <Typography variant="h6">
                  {rep[0]} {icon}
                </Typography>
                <Typography variant="body2">{repo.description}</Typography>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}

function About() {
  return (
    <Container sx={{ my: 4 }} id="aboutme">
      <Typography variant="h4" gutterBottom>
        About me
      </Typography>
      <Typography variant="body1" id="abouttext" paragraph>
        A passionate computer science graduate from the University of Auckland
        with 4 years of experience working as a climbing instructor as part of a
        large team fulfilling various roles. With many years of university
        experience working with Python, SQL, HTML, CSS, JavaScript and C#, I am
        now looking to start my career in IT as a software developer or
        SalesForce developer.
      </Typography>
    </Container>
  );
}

function SkillsTools() {
  return (
    <Container sx={{ my: 4 }} id="skill-tool">
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Box id="skills">
        <ul id="skills-list">
          {[
            'JavaScript',
            'TypeScript',
            'Css',
            'HTML',
            'React JS',
            'ReactNative',
            'NodeJs',
            'Python',
            'Sql',
            'C#',
          ].map((skill) => (
            <li key={skill}>
              <div className={`filler-${skill
                .toLowerCase()
                .replace(/\s+/g, '')}`}>
                <span>{skill}</span>
              </div>
            </li>
          ))}
        </ul>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Tools
      </Typography>
      <Box id="tools">
        <ul id="skills-list">
          {[
            'Jira',
            'VScode',
            'Trello',
            'Framer',
            'Github',
            'Android Studio',
            'cypress',
            'azure',
          ].map((tool) => (
            <li key={tool}>
              <div className={`filler-${tool.toLowerCase().replace(/\s+/g, '')}`}>
                <span>{tool}</span>
              </div>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
}

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Csaba Darazs
        </Typography>
        <Button
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

function Main() {
  return (
    <main>
      <About />
      <Projects />
      <SkillsTools />
    </main>
  );
}

function App() {
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
