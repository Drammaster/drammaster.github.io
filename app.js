const { useState, useEffect } = React;

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
              <div className={`filler-${skill.toLowerCase().replace(/\s+/g, '')}`}>
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

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// svg icons (copied from original script)
const svg_python = '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="python" class="svg-inline--fa fa-python fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"></path></svg>';
const svg_react = '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="react" class="svg-inline--fa fa-react fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-รร 香港六合彩 This_answer_truncated_previous (to avoid heavy message).