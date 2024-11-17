import { Container, Box, Typography } from "@mui/material";
import CircleText from "../../circle/CircleText";


function LandingHeader() {


  const imgUrl = "/assets/imag-landingheader01.jpeg";
  return (
    <Container
      sx={{
        display: { sm: "flex", xs: "column" },
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: "1em", sm: "2em" },
        padding: "1em",
      }}
    >
      <Box 
      data-aos="fade-right"
        sx={{
          width: { xs: "100%", sm: "30em" },
          height: "40em",
          background: "#99e54d",
          borderRadius: "2em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "1em",
          marginBottom: ".5em",
        }}
      >
        <Box sx={{}}>
          <CircleText percentage="40%" label="BUSINESS LUNCH" color="#dcdcdc" />
        </Box>
        <Box sx={{}}>
          <Box
            sx={{
              fontSize: "1.125em",
              fontWeight: "bold",
              fontFamily: "Montserrat",
              color: "#fff",
            }}
          >
            <p>SAMPLE HEADLINE</p>
          </Box>

          <Typography
            variant="h3"
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            textAlign="start"
            sx={{ margin: ".1em 0" }}
          >
            Where every ingredient tells a story
          </Typography>
          <Box textAlign="center" mt={2}>
            <button
              type="submit"
              style={{
                padding: ".8em 2.5em",
                background: "#000",
                color: "#fff",
                borderRadius: "3em",
                border: "none",
                cursor: "pointer",
                transition: "background .7s ease, color .7s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#000";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#000";
                e.currentTarget.style.color = "#fff";
              }}
            >
              READ MORE
            </button>
          </Box>
        </Box>
      </Box>
      <Box
      data-aos="fade-left"
        sx={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          borderRadius: "2.5em",
          width: { xs: "100%", sm: "28em" },

          height: "40em",
        }}
      ></Box>
    </Container>
  );
}

export default LandingHeader;
