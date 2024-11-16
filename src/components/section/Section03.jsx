import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Section03() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const imageUrl = "/assets/food-13.jpg";
  return (
    <Container
      sx={{
        display: { xs: "column", sm: "flex" },
        gap: { sm: "5em" },
        justifyContent: { sm: "center" },
        textAlign: { xs: "center" },
        marginTop: { xs: "1.5em", sm: "10em" },
        fontSize: { xs: "1.5em", sm: "1em" },
        color: "#fff",
        fontWeight: "bold",
        fontFamily: "Montserrat",
      }}
    >
      <Container
        sx={{
          textAlign: { sm: "start" },
          marginTop: { sm: "5em" },
        }}
      >
        {" "}
        <Box
          sx={{
            fontSize: { sm: "2em" },
          }}
        >
          <p>$14</p>
        </Box>
        <Box
          sx={{
            color: "#fff",
            fontSize: { xs: ".8em", sm: "1.2em" },
            fontWeight: "bold",
            textAlign: { xs: "center", sm: "start" },
          }}
        >
          <p>SALAD WITH CHICKEN</p>
        </Box>
        <Box 
        data-aos="zoom-in"
          sx={{
            fontSize: { xs: ".7em", sm: "1em" },
            color: "#fff",
            fontFamily: "Raleway",
          }}
        >
          <p>
            Article evident arrived express highest men did boy. Mistress
            sensible entirely am so. Quick can manor smart money hopes worth
            too. Comfort produce husband boy her had hearing. Law others theirs
            passed but wishes. You day real less till dear read. Considered use
            dispatched melancholy sympathize discretion led. Oh feel if up to
            till like.
          </p>
        </Box>
      </Container>

      <Box
      data-aos="zoom-out-up"
        sx={{
          marginBottom: "2em",
          borderRadius: "3em",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
          width: { xs: "100%", sm: "100em" },
          height: "25em",
        }}
      ></Box>
    </Container>
  );
}

export default Section03;
