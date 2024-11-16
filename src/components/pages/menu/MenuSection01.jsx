import { Container, Box, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MenuSection01() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const imgUrl = "/assets/img01menusection01.jpg";
  return (
    <Container
      sx={{
        marginTop: "3em",
      }}
    >
      <Typography
        fontFamily="Montserrat"
        fontWeight="bold"
        sx={{
          fontSize: { xs: "1em", sm: "2.5rem" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1.5em",
          color: "#f2f2f2",
        }}
      >
        Small Bites
      </Typography>

      <Box
        sx={{
          display: { xs: "column", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          gap: "3em",
          marginBottom: "1em",
        }}
      >
        <Box
        data-aos="fade-right"
          sx={{
            borderRadius: "3em",
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            width: { xs: "100%", sm: "50%" },
            height: "30rem",
            marginBottom: "2em",
          }}
        ></Box>

        <Box 
        data-aos="fade-left"
          sx={{
            color: "#f2f2f2",
            textAlign: "start",
          }}
        >
          <Typography fontFamily="Montserrat" fontWeight="bold">
            GREEN PAPAYA SALAD $12
          </Typography>
          <p
            style={{
              fontFamily: "Raleway",
            }}
          >
            Shrimp, chili & lime
          </p>

          <Typography fontFamily="Montserrat" fontWeight="bold">
            BLACK PEPPER CALAMARI $14
          </Typography>

          <p
            style={{
              fontFamily: "Raleway",
            }}
          >
            Galangal dressing, roasted rice, thai basil
          </p>

          <Typography fontFamily="Montserrat" fontWeight="bold">
            TUMERIC SPICED CAULIFLOWER $11
          </Typography>

          <p
            style={{
              fontFamily: "Raleway",
            }}
          >
            Sesame tofu dressing, furikake
          </p>

          <Typography fontFamily="Montserrat" fontWeight="bold">
            KINGFISH SASHIMI $15
          </Typography>

          <p
            style={{
              fontFamily: "Raleway",
            }}
          >
            Green nam jim, coconut & thai basil
          </p>

          <Typography fontFamily="Montserrat" fontWeight="bold">
            Caramelised betel leaf $12
          </Typography>

          <p
            style={{
              fontFamily: "Raleway",
            }}
          >
            Pineapple, Chili
          </p>

          <Typography fontFamily="Montserrat" fontWeight="bold">
            Pacific oysters (price per piece) $5
          </Typography>

          <p
            style={{
              fontFamily: "Raleway",
            }}
          >
            Ponzu, sriracha
          </p>

          <Typography fontFamily="Montserrat" fontWeight="bold">
            Thai chicken lettuce cups $13
          </Typography>
          <p
            style={{
              fontFamily: "Raleway",
            }}
          >
            Chilis, thai basil, crispy garlic, fried egg
          </p>
        </Box>
      </Box>
    </Container>
  );
}

export default MenuSection01;
