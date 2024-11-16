import { Container, Box } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function LandingSection01() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const imgUrl = "/assets/img-ladingSection01.jpg";
  const imgUrl01 = "/assets/img01-ladingSection01.jpg";
  const imgUrl02 = "/assets/imag02-landingheader01.jpeg";
  const imgUrl03 = "/assets/imag03-landingheader01.jpeg";

  return (
    <Container sx={{}}>
      {/* primeiro card */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          marginTop: "1.5em",
          marginBottom: "2em",
          fontSize: { xs: "1.5em", sm: "3em" },
          color: "#fff",
          letterSpacing: ".25em",
        }}
      >
        <p>View Our Menu</p>
      </Box>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5em",
          alignItems: "center",
        }}
      >
        {/* primeiro card */}
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "center",
            gap: "1.5em",
            width: "100%",
          }}
        >
          <Box 
          data-aos="fade-down"
            sx={{
              marginBottom: "1em",
              width: { xs: "100%", sm: "50%" },
              height: { xs: "30em", sm: "25%" },
              borderRadius: "2em",
              padding: "1em",
              textAlign: "center",
              background: "#fff",
              boxShadow: "0 .3em .4em rgba(0, 0, 0, 0.1)",
              minHeight: "20em",
            }}
          >
            <img
              src={imgUrl}
              alt="imagem de uma pizza"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "18em",
                borderRadius: "1.5em",
              }}
            />
            <Box
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                margin: "2em 0",
              }}
            >
              <p>HOT PIZZA</p>
              <button type="submit" className="button">
                READ MORE
              </button>
            </Box>
          </Box>

          {/* segundo card */}
          <Box 
            data-aos="fade-down"
            sx={{
              width: { xs: "100%", sm: "50%" },
              height: "25%",
              borderRadius: "2em",
              padding: "1em",
              textAlign: "center",
              background: "#fff",
              boxShadow: "0 .3em .4em rgba(0, 0, 0, 0.1)",
              minHeight: "20em",
            }}
          >
            <img
              src={imgUrl01}
              alt="imagem de uma salada"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "18em",
                borderRadius: "1.5em",
              }}
            />
            <Box
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                margin: "2em 0",
              }}
            >
              <p>SALADS</p>
              <button type="submit" className="button">
                READ MORE
              </button>
            </Box>
          </Box>
        </Box>

        {/* terceiro card */}

        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "center",
            gap: "1.5em",
            width: "100%",
          }}
        >
          <Box
          data-aos="fade-up"
            sx={{
              marginBottom: "1em",
              width: { xs: "100%", sm: "50%" },
              height: "25%",
              borderRadius: "2em",
              padding: "1em",
              textAlign: "center",
              background: "#fff",
              boxShadow: "0 .3em .4em rgba(0, 0, 0, 0.1)",
              minHeight: "20em",
            }}
          >
            <img
              src={imgUrl02}
              alt="imagem de um dessert"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "18em",
                borderRadius: "1.5em",
              }}
            />
            <Box
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                margin: "2em 0",
              }}
            >
              <p>DESSERT</p>
              <button type="submit" className="button">
                READ MORE
              </button>
            </Box>
          </Box>

          {/* quarto card */}

          <Box
            data-aos="fade-up"
            sx={{
              width: { xs: "100%", sm: "50%" },
              height: "25%",
              borderRadius: "2em",
              padding: "1em",
              textAlign: "center",
              background: "#fff",
              boxShadow: "0 .3em .4em rgba(0, 0, 0, 0.1)",
              minHeight: "20em",
            }}
          >
            <img
              src={imgUrl03}
              alt="imagem de um drink"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "18em",
                borderRadius: "1.5em",
              }}
            />
            <Box
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                margin: "2em 0",
              }}
            >
              <p>DESSERT</p>
              <button type="submit" className="button">
                READ MORE
              </button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}

export default LandingSection01;
