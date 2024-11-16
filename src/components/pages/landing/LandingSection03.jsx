import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function LandingSection03() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const imgUrl = "/assets/img04landingsection03.jpg";
  const imgUrl01 = "assets/img05landingsection03.jpg";

  return (
    <Container>
      <Container
        sx={{
          display: { xs: "column", sm: "flex" },
          gap: { sm: "1em" },
        }}
      >
        <Box
        data-aos="zoom-in"
          sx={{
            marginBottom: "1em",
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
            borderRadius: "3em",
            backgroundPosition: "center",
            width: { xs: "100%", sm: "50%" },
            height: "35em",
          }}
        ></Box>
        <Box
          sx={{
            marginBottom: "1em",

            borderRadius: "3em",
            fontWeight: "bold",
            color: "#000",
            background: "#99e54d",
            fontFamily: "Montserrat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "none",
            width: { xs: "100%", sm: "50%" },
            height: "35em",
          }}
        >
          <Box
            sx={{
              fontSize: { xs: "1em", sm: "1.2em" },
            }}
          >
            <p>OUR RESTAURANT</p>
          </Box>
          <Box
            sx={{
              width: { xs: "7em", sm: "10em" },
              fontSize: { xs: "2em" },
              textAlign: "center",
            }}
          >
            <p>A culinary adventure for all the senses</p>
          </Box>

          <button
            type="submit"
            style={{
              fontWeight: "bold",
              padding: ".8em 2.5em",
              background: "#000",
              color: "#fff",
              borderRadius: "3em",
              border: "none",
              cursor: "pointer",
              transition: "background .7s ease, color .7s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#000";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#000";
              e.currentTarget.style.color = "#fff";
            }}
          >
            READ MORE
          </button>
        </Box>
      </Container>
      <Container
        sx={{
          display: { xs: "column", sm: "flex" },
          gap: { sm: "1em" },
        }}
      >
        <Box
          sx={{
            marginBottom: "1em",
            borderRadius: "3em",
            fontWeight: "bold",
            color: "#000",
            background: "#dcdcdc",
            fontFamily: "Montserrat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "none",
            width: { xs: "100%", sm: "50%" },
            height: "35em",
          }}
        >
          <Box
            sx={{
              fontSize: { xs: "1em", sm: "1.2em" },
            }}
          >
            <p>OUR RESTAURANT</p>
          </Box>
          <Box
            sx={{
              width: { xs: "6em", sm: "10em" },
              fontSize: { xs: "2em" },
              textAlign: "center",
            }}
          >
            <p>The magic of the Kitchen</p>
          </Box>

          <button
            type="submit"
            style={{
              fontWeight: "bold",
              padding: ".8em 2.5em",
              background: "#99e54d",
              color: "#fff",
              borderRadius: "3em",
              border: "none",
              cursor: "pointer",
              transition: "background .7s ease, color .7s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#000";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#99e54d";
              e.currentTarget.style.color = "#000";
            }}
          >
            READ MORE
          </button>
        </Box>

        <Box
        data-aos="zoom-in"
          sx={{
            backgroundImage: `url(${imgUrl01})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
            borderRadius: "3em",
            backgroundPosition: "center",
            width: { xs: "100%", sm: "50%" },
            height: "35em",
          }}
        ></Box>
      </Container>
    </Container>
  );
}

export default LandingSection03;
