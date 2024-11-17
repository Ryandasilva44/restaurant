import { Container, Box } from "@mui/material";


function Section01() {
  // 

  const imageUrl = "/assets/food-05.jpg";
  const imageUrl1 = "/assets/food-06.jpg";
  const imageURL2 = "/assets/food-07.jpg";
  return (
    <Container
      sx={{
        display: { xs: "column", sm: "flex" },
        justifyContent: { sm: "center" },
        gap: { sm: "2em" },
        marginTop: { xs: "7em", sm: "5em" },
      }}
    >
      <Box
        data-aos="flip-left"
        sx={{
          backgroundImage: `url(${imageUrl})`,
          borderRadius: "3em",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
          marginBottom: { xs: "1.5em" },
          width: { xs: "100%", sm: "30em" },
          height: "25em",
        }}
      ></Box>

      <Box
      data-aos="flip-left"
        sx={{
          backgroundImage: `url(${imageUrl1})`,
          borderRadius: "3em",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
          marginBottom: { xs: "1.5em" },
          width: { xs: "100%", sm: "30em" },
          height: "25em",
        }}
      ></Box>
      <Box 
      data-aos="zoom-in"
        sx={{
          backgroundImage: `url(${imageURL2})`,
          borderRadius: "3em",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
          marginBottom: { sm: "1.5em" },
          width: { xs: "100%", sm: "30em" },
          height: "25em",
        }}
      ></Box>
    </Container>
  );
}

export default Section01;
