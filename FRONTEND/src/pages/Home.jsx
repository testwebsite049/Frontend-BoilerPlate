import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Our App
        </Typography>
        <Typography variant="body1" gutterBottom>
          Navigate through the app using the links below:
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            component={Link}
            to="/about-us"
            variant="contained"
            sx={{ mx: 1 }}
          >
            About Us
          </Button>
          <Button
            component={Link}
            to="/contact-us"
            variant="contained"
            sx={{ mx: 1 }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
