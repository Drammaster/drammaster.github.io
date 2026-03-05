import {
    Box,
    Container,
    Link,
    Typography,
    CardContent
} from '@mui/material';
import { ReactElement, useEffect, useState } from "react";
import Card from '@mui/material/Card';

interface Repository {
  id: number;
  name: string;
  description: string;
}

async function fetchRepos(): Promise<Repository[]> {
  const resp = await fetch('https://api.github.com/users/drammaster/repos');
  return await resp.json();
}

function getIcon(suffix: string): ReactElement | null {
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
  const [repos, setRepos] = useState<Repository[]>([]);

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
            <Link href={linker} target="_blank" rel="noreferrer" underline="none">
              <Card sx={{ width: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {rep[0]} {icon}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                  <Typography variant="body2">{repo.description}</Typography>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </Box>
    </Container>
  );
}

export default Projects;