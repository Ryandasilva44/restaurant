import { Container, Box, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MenuSection02() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const imgUrl = "/assets/imgmenusection02.jpeg";
  return (
    <Container
      sx={{
        marginTop: "3em",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          fontSize: { xs: "1em", sm: "3em" },
          color: "#fff",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          marginBottom: "2em",
        }}
      >
        Hot Dishes
      </Box>

      <Box 
      data-aos="fade-left"
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        <Box>
          <Typography fontFamily="Montserrat" fontWeight="bold" color="#f2f2f2">
            SESAME CHICKEN $12
          </Typography>
          <p
            style={{
              fontFamily: "Raleway",
              color: "#f2f2f2",
            }}
          >
            Chinese eggplant, sweet chili soy glaze, green onion, pineapple,
            ginger
          </p>

          <Typography fontFamily="Montserrat" fontWeight="bold" color="#f2f2f2">
            Chicken Wings $18
          </Typography>

          <p
            style={{
              fontFamily: "Raleway",
              color: "#f2f2f2",
            }}
          >
            Thai basil, chili, peanuts, green papaya, cilantro
          </p>

          <Typography fontFamily="Montserrat" fontWeight="bold" color="#f2f2f2">
            Ribeye Bites Roasted $22
          </Typography>
          <p
            style={{
              fontFamily: "Raleway",
              color: "#f2f2f2",
            }}
          >
            Shishito Peppers, Jalapeño Crème
          </p>

          <Typography fontFamily="Montserrat" fontWeight="bold" color="#f2f2f2">
            Blackened Fish Sandwich $23
          </Typography>

          <p
            style={{
              fontFamily: "Raleway",
              color: "#f2f2f2",
            }}
          >
            Crunchy cabbage, wild baby arugula, tomato, house made tartar sauce,
            on a brioche bun
          </p>

          <Typography fontFamily="Montserrat" fontWeight="bold" color="#f2f2f2">
            Siji Chun Four Seasons $9
          </Typography>

          <p
            style={{
              fontFamily: "Raleway",
              color: "#f2f2f2",
            }}
          >
            Intense floral aroma and delicate fruity taste without any
            bitterness or dryness
          </p>

          <Typography fontFamily="Montserrat" fontWeight="bold" color="#f2f2f2">
            Black Pepper Chili Chicken $12
          </Typography>

          <p
            style={{
              fontFamily: "Raleway",
              color: "#f2f2f2",
            }}
          >
            Pepper, onion, bamboo shoot, celery
          </p>
        </Box>

        <Box
        data-aos="fade-right"
          sx={{
            marginBottom: "1em",
            borderRadius: "2.5em",
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
            width: { xs: "100%", sm: "50%" },
            height: "30rem",
          }}
        ></Box>
      </Box>
    </Container>
  );
}

export default MenuSection02;
