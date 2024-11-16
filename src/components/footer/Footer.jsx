import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const imgCart = "/assets/icone-carta.png";
  const imgSearch = "/assets/icone-search.png";
  const imgCell = "/assets/icone-cell.png";
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #000, #1a1a1a)",
      }}
    >
      {/* um icone de uma carta de messagem */}
      <Container
        sx={{
          padding: "5em",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
          data-aos="zoom-in"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: ".5em",
              width: "9em",
              height: "9em",
              borderRadius: "50%",
              background: "#99e54d",
            }}
          >
            <img
              src={imgCart}
              alt="icone e uma carta"
              style={{ width: "5em" }}
            />
          </Box>
          <Box
            sx={{
              marginTop: "1em",
              marginBottom: "3em",
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          >
            <p>CHART TO US</p>
            <p>Ours friendly team is here to help</p>
            <a href="mailto:ryandeveloper@hotmail.com">
              ryandeveloper@hotmail.com
            </a>
          </Box>
        </Box>
        {/* icone de pesquisa */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
           data-aos="zoom-in"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: ".5em",
              width: "9em",
              height: "9em",
              borderRadius: "50%",
              background: "#99e54d",
            }}
          >
            <img
              src={imgSearch}
              alt="iconde de pesquisa"
              style={{ width: "5em" }}
            />
          </Box>
          <Box
            sx={{
              marginTop: "1em",
              marginBottom: "3em",
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          >
            <p>OFFICE</p>
            <p>Come say hello at our office HQ</p>
            <a href="https://www.google.com/maps/search/?api=1&query=121+Rock+Street,+21+Avenue,+Brooklin,+NY+92103,+Estados+Unidos">
              121 Rock Street, 21 Avenue
            </a>
          </Box>
        </Box>

        {/* um iconde de celular */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
           data-aos="zoom-in"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: ".5em",
              width: "9em",
              height: "9em",
              borderRadius: "50%",
              background: "#99e54d",
            }}
          >
            <img
              src={imgCell}
              alt="iconde de um celular"
              style={{ width: "5em" }}
            />
            {/* <Box /> */}
          </Box>
          <Box
            sx={{
              marginTop: "1em",
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          >
            <p>PHONE</p>
            <p>Mon-Fri from 8am to 5am</p>
            <a href="https://wa.me/5583987687872">+55(83)98768-7872</a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default Footer;

// para enviar uma mesagem para email usamos "mailto", e para acessar seu cell "https://wa.me/99999999"
