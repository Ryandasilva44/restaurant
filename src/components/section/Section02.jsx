import { Container, Box } from "@mui/material";

function Section02() {
  const imageUrl = "/assets/food-08.jpeg";
  return (
    <Container
      sx={{
        display: { xs: "column", sm: "flex" },
        textAlign: { xs: "center", sm: "start" },
        gap: { sm: "5em" },
      }}
    >
      <Box
        data-aos="fade-right"
        sx={{
          marginTop: "10em",
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "3em",
          objectFit: "cover",
          width: { xs: "100%", sm: "50rem" },
          height: "35em",
        }}
      ></Box>
      <Box
        sx={{
          marginTop: { xs: "2.5em", sm: "28em" },
          color: "#fff",
        }}
      >
        <Box
          sx={{
            fontSize: { xs: "1.5em", sm: "3em" },
            fontWeight: "bold",
            fontFamily: "Montserrat",
          }}
        >
          <p>$4</p>
        </Box>
        <Box
          sx={{
            fontSize: { xs: "1em", sm: "1.5em" },
            fontWeight: "bold",
            fontFamily: "Raleway",
          }}
        >
          <p>Croissant with topping</p>
        </Box>

        <Box
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "1em", sm: "1.125em" },
            fontWeight: "500",
          }}
        >
          <p>
            Article evident arrived express highest men did boy. Mistress
            sensible entirely am so. Quick can manor smart money hopes worth
            too.
          </p>
        </Box>
      </Box>
    </Container>
  );
}
export default Section02;
