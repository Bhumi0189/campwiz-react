import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" mt={4}>
        CampWiz NxT - React Version 
      </Typography>
      <Typography variant="body1" mt={2}>
        Root path is working successfully.
      </Typography>
    </Container>
  );
};

export default Home;