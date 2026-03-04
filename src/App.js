import React, { useState, useEffect } from 'react';
import './styles/style.css';

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
    <div id="proj">
      <h2>Projects</h2>
      <ul id="repo-list">
        {repos.map((repo) => {
          const rep = repo.name.split('-');
          const icon = getIcon(rep[1]);
          const linker = `https://github.com/Drammaster/${repo.name}`;
          return (
            <li className="repo_item" key={repo.id}>
              <a target="_blank" rel="noreferrer" href={linker}>
                <div>
                  <h3>
                    {rep[0]} {icon}
                  </h3>
                  <p>{repo.description}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function About() {
  return (
    <div id="aboutme">
      <h2>About me</h2>
      <div id="abouttext">
        A passionate computer science graduate from the University of Auckland
        with 4 years of experience working as a climbing instructor as part of a
        large team fulfilling various roles. With many years of university
        experience working with Python, SQL, HTML, CSS, JavaScript and C#, I am
        now looking to start my career in IT as a software developer or
        SalesForce developer.
      </div>
    </div>
  );
}

function SkillsTools() {
  return (
    <div id="skill-tool">
      <div id="skills">
        <h2>Skills</h2>
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
      </div>

      <div id="tools">
        <h2>Tools</h2>
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
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div id="head-content">
        <h1>Csaba Darazs</h1>
        <a className="button" href="Csaba Darazs CV.pdf" target="_blank">
          View Resume
        </a>
      </div>
      <div id="overlay"></div>
    </header>
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
