import { Container, Box, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MenuSection04() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const imgUrl = "/assets/img02menusection04.jpeg";
  return (
    <Container
      sx={{
        marginTop: "2em",
      }}
    >
      <Box
        sx={{
          fontFamily: "Montserrat",
          fontSize: { xs: "1.2em", sm: "3em" },
          fontWeight: "bold",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2em",
        }}
      >
        Dessert
      </Box>

      <Box
        sx={{
          display: { xs: "column", sm: "flex" },
          justifyContent: "center",
          alignItems: "cefnter",
          gap: "2em",
        }}
      >
        <Box 
        data-aos="fade-left"
          sx={{
            borderRadius: "2.5em",
            background: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            width: { xs: "100%", sm: "50%" },
            height: "28em",
          }}
        ></Box>

        <Box data-aos="fade-right">
          <Typography
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            lineHeight="2.5em"
          >
            Dessert platter $12
          </Typography>
          <p style={{ fontFamily: "Raleway", color: "#fff" }}>
            Chef’s selection of sweets. Serves 2
          </p>

          <Typography
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            lineHeight="2.5em"
          >
            Fruit Plate $14
          </Typography>
          <p style={{ fontFamily: "Raleway", color: "#fff" }}>
            Seasonal selections of fruits, shaved coconut, vanilla drizzle, mint
          </p>

          <Typography
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            lineHeight="2.5em"
          >
            Fried Banana $9
          </Typography>
          <p style={{ fontFamily: "Raleway", color: "#fff" }}>
            Panko crusted with caramel sauce, banana brulee, caramel popcorn
          </p>

          <Typography
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            lineHeight="2.5em"
          >
            Sorbet $7
          </Typography>
          <p style={{ fontFamily: "Raleway", color: "#fff" }}>
            Watermelon, passion fruit, strawberry, mango, orange
          </p>

          <Typography
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            lineHeight="2.5em"
          >
            Thai Donut $8
          </Typography>
          <p style={{ fontFamily: "Raleway", color: "#fff" }}>
            Fried donut dipped with sweet condense milk & peanut
          </p>

          <Typography
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            lineHeight="2.5em"
          >
            Banana spring rolls $7
          </Typography>
          <p style={{ fontFamily: "Raleway", color: "#fff" }}>
            Honey glaze, vanilla drizzle, coconut-pineapple ice cream
          </p>
        </Box>
      </Box>
    </Container>
  );
}

export default MenuSection04;
