import { Container, Box, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutSection02() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const imgUrl = "/assets/img02aboutsection02.jpg";
  return (
    <Container
      sx={{
        marginTop: "5em",
        gap: "1.5em",
        display: { xs: "column", sm: "flex" },
        padding: "1em",
        border: ".15em solid #fff",
        background: "#fff",
        borderRadius: "3em",
        width: "90%",
      }}
    >
      <Box
      data-aos="zoom-in"
        sx={{
          borderRadius: "3em",
          backgroundImage: `url(${imgUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "cover",
          width: "100%",
          maxWidth: "100%",
          height: "30em",
        }}
      ></Box>

      <Box
        sx={{
          padding: "2.5em 0em 0em 0em",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          fontFamily="Montserrat"
          marginBottom="1.5em"
        >
          OUR MISSION
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "2em", sm: "2.5em" },
            fontFamily: "Montserrat",
            fontWeight: "bold",
          }}
        >
          <p>we`re not just a restaurant. We`re a cultural experience</p>
        </Typography>

        <Typography
          sx={{
            fontFamily: "Raleway",
          }}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            laborum perferendis accusantium natus repellendus cumque laboriosam!
            Deserunt natus ab similique!
          </p>
        </Typography>

        <button
          type="submit"
          style={{
            padding: ".5em 2.5em",
            borderRadius: "3em",
            background: "#f1ae0e",
            border: "none",
            fontFamily: "Raleway",
            fontWeight: "bold",
            marginBottom: ".5em",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#e8c164";
            e.currentTarget.style.color = "#000";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#f1ae0e";
            e.currentTarget.style.color = "#000";
          }}
        >
          READ MORE
        </button>
      </Box>
    </Container>
  );
}

export default AboutSection02;
