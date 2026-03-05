import {
    Container,
    Typography
} from '@mui/material';
import { ReactElement } from 'react';

function About(): ReactElement {
  return (
    <Container sx={{ my: 4 }} id="aboutme">
      <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center' }} gutterBottom>
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

export default About;