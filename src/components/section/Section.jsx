import { Box, Container } from "@mui/material";

function Section() {
  const imageUrl = "/assets/food-04.jpg";
  return (
    <Container
      sx={{
        color: "#fff",
        display: { xs: "column", sm: "flex" },
        textAlign: {xs: "center", sm: "start"}
      }}
    >
      <Box
        sx={{
          marginTop: { xs: "2em", sm: "20em" },
        }}
      >
        <Box
          sx={{
            fontSize: {xs: "1.5em", sm: "3em"},
            fontWeight: "700",
            fontFamily: "Montserrat",
          }}
        >
          <p>$27</p>
        </Box>

        <Box
          sx={{
            fontWeight: "700",
            fontFamily: "Raleway",
          }}
        >
          <p>BEEF WITH GINGER</p>
        </Box>

        <Box
        
        >
          <Box
            sx={{
              fontWeight: "400",
              fontSize: "1.1em",
            }}
          >
            <p>
              Article evident arrived express highest men did boy. Mistress
              sensible entirely am so. Quick can manor smart money hopes worth
              too. Comfort produce husband boy her had hearing. Law others
              theirs passed but wishes. You day real less till dear read.
              Considered use dispatched melancholy sympathize discretion led. Oh
              feel if up to till like.
            </p>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
          borderRadius: "3em",
          width: { xs: "100%", sm: "100em" },
          height: { xs: "30em", sm: "40em" },
          marginBottom: "2em",
        }}
      ></Box>
    </Container>
  );
}

export default Section;
