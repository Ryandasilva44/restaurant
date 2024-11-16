import { Container, Box, Typography } from "@mui/material";
import CircleText from "../circle/CircleText";
import "../../../styles/button/SectionMenu.scss";

function Section04() {
  const imageUrl = "/assets/food-14.jpg";

  return (
    <Container>
      <Box
        sx={{
          textAlign: { xs: "center", sm: "start" },
          padding: "2em",
          marginBottom: "1em",
          borderRadius: "1.5em",
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
          width: "100%",
          height: "35em",
        }}
      >
        <Box
          sx={{
            padding: "2em",
            display: "flex",
            justifyContent: {xs: "center", sm: "start"}
          }}
        >
          <CircleText percentage="40%" label="BUSINESS LUNCH" color="#99e54d" />
        </Box>
        <Typography
          variant="h3"
          color="#fff"
          fontFamily="Montserrat"
          fontWeight="bold"
        >
          <p>Keep up to date with us</p>
        </Typography>
        <Box
          sx={{
            display: { xs: "column", sm: "flex" },
          }}
        >
          <input
            type="text"
            style={{
              width: "80%",
              borderRadius: "3em",
              padding: ".5em",
              marginRight: "1em",
              outline: "none",
              border: "none"
            }}
          />
          <Box>
            <button className="button" style={{ fontFamily: "Montserrat" }}>
              Submit
            </button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
export default Section04;
