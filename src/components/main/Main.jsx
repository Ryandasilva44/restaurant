import { Container, Box } from "@mui/material";

function Main() {
  const imageUrl = "/assets/food-01.jpg";
  const imageUrl2 = "/assets/food-02.jpg";
  const imageUrl3 = "/assets/food-03.jpg";

  return (
    <Container
      sx={{
        marginTop: "2.5em",
        marginBottom: "1.5em",
        display: { xs: "column", sm: "flex" },
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: { sm: "2em" },
      }}
    >
      <Box
        sx={{
          border: ".1em solid #fff",
          marginBottom: { xs: "1.5em" },
          backgroundImage: `url(${imageUrl})`,
          opacity: ".3",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1em",
          objectFit: "cover",
          height: "20em",
          width: { xs: "100%", sm: "30em" },
          transition: "opacity .5s ease",
          "&:hover": {
            opacity: 1,
          }
        }}
      >
        <Box
          sx={{
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            paddingTop: "10.8em",
            fontSize: {xs: "1.5em", sm: "1.4em"},
            fontWeight: "bold",
          }}
        >
          <p>Lasanha de carne</p>
        </Box>
      </Box>

      <Box
        sx={{
          border: ".1em solid #fff",
          marginBottom: { xs: "1.5em" },
          backgroundImage: `url(${imageUrl2})`,
          opacity: ".3",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "1em",
          backgroundPosition: "center",
          objectFit: "cover",
          height: "20em",
          width: { xs: "100%", sm: "30em" },
          transition: "opacity .3s ease",
          "&:hover": {
            opacity: 1,
          }
        }}
      >
        <Box
          sx={{
            color: "#fff",
            display: "flex",
           justifyContent: "center",
           alignItems: "center",
            paddingTop: "11.2em",
            fontSize: {xs: "1.5em", sm: "1.4em"},
            fontWeight: "bold",
          }}
        >
          <p> Israel Dreams</p>
        </Box>
      </Box>

      <Box
        sx={{
          border: ".1em solid #fff",
          marginBottom: { xs: "1.5em" },
          backgroundImage: `url(${imageUrl3})`,
          opacity: ".3",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "1em",
          backgroundPosition: "center",
          objectFit: "cover",
          height: "20em",
          width: { xs: "100%", sm: "30em" },
          transition: "opacity .5s ease",
          "&:hover": {
            opacity: 1,
          }
        }}
      >
        <Box
          sx={{
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "10.8em",
            fontSize: {xs: "1.5em", sm: "1.4em"},
            fontWeight: "bold",
           
          }}
        >
          <p>Moqueca de peixe</p>
        </Box>
      </Box>
    </Container>
  );
}
export default Main;
