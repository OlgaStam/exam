import { Container, Typography } from "@mui/material";

type Props = {};

const Header = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <Typography
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: [40],
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        Our Shop Page
      </Typography>
    </Container>
  );
};

export default Header;
