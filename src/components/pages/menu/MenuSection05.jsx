import { Container, Box, Typography } from "@mui/material";


function MenuSection05() {
 

  const imgUrl = "/assets/img01menusection05.jpg";
  return (
    <Container sx={{ marginTop: "1.5em" }}>
      <Box
        sx={{
          fontSize: { xs: "1.5em", sm: "3em" },
          fontFamily: "Montserrat",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#f2f2f2",
          marginBottom: "1.5em",
        }}
      >
        Tea
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        <Box>
          <Typography
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            lineHeight="2.5em"
          >
            Ti Quan Yin $4
          </Typography>
          <p style={{ fontFamily: "Raleway", color: "#fff" }}>
            Intense aroma, depth and fruitiness- ranked as one of the most
            famous teas in China
          </p>

          <Typography
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            lineHeight="2.5em"
          >
            Sencha $5
          </Typography>
          <p style={{ fontFamily: "Raleway", color: "#fff" }}>
            Shiny needlelike tea leaves that yield a slighty grassy, clean
            refreshing brew, the most popular tea in Japan
          </p>

          <Typography
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            lineHeight="2.5em"
          >
            Gunpowder $6
          </Typography>
          <p style={{ fontFamily: "Raleway", color: "#fff" }}>
            Green pellets of rolled tea leaves that produces a pleasant smokey
            flavor
          </p>

          <Typography
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            lineHeight="2.5em"
          >
            Zhenghe Bai Mudan White Peony $4
          </Typography>
          <p style={{ fontFamily: "Raleway", color: "#fff" }}>
            Fresh bamboo aroma, lightly sweet flavor with notes of melon and
            grape
          </p>

          <Typography
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            lineHeight="2.5em"
          >
            Hong Tao $4
          </Typography>
          <p style={{ fontFamily: "Raleway", color: "#fff" }}>
            Peachy flavor, goes well with dessert
          </p>

          <Typography
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            lineHeight="2.5em"
          >
            Jin Xuan $5
          </Typography>
          <p style={{ fontFamily: "Raleway", color: "#fff" }}>
            Creamy smooth texture, incredible milk aroma and taste with a
            naturally sweet flavor. Goes well with spicy foods
          </p>
        </Box>
        <Box
        data-aos="flip-right"
          sx={{
            borderRadius: "2.5em",
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
            width: { xs: "100%", sm: "75%" },
            height: "35em",
            marginBottom: "1.5em",
          }}
        ></Box>
      </Box>
    </Container>
  );
}

export default MenuSection05;
