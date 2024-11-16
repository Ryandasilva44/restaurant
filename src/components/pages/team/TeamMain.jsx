import { Container, Box, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TeamMain() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const imgUrl = "/assets/img01team.jpg";
  return (
    <Container
      sx={{
        marginBottom: "1.5em",
        marginTop: "5em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "3em",
          border: ".1rem solid #fff",
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          width: "100%",
          padding: { xs: "1.5em", sm: "3em" },
          background: "#f1f1f1",
        }}
      >
        <Box>
          <Typography
            style={{
              marginTop: "1.5em",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              color: "#121212",
            }}
          >
            <Box
              sx={{
                textAlign: { xs: "center", sm: "start" },
                fontSize: { xs: "1em", sm: "1.5em" },
              }}
            >
              OUR MISSION
            </Box>
          </Typography>

          <Typography
            style={{
              fontFamily: "Montserrat",
              fontWeight: "bold",
            }}
          >
            <Box
              sx={{
                textAlign: { xs: "center", sm: "start" },
                fontSize: { xs: "1.5em", sm: "3em" },
              }}
            >
              Chef`s tem
            </Box>
          </Typography>

          <Typography
            style={{
              fontSize: "1em",
              fontFamily: "Raleway",
              color: "#131313",
            }}
          >
            <Box
              sx={{
                textAlign: { xs: "center", sm: "start" },
                marginBottom: "1.5em",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              veritatis adipisci assumenda praesentium! Quasi ad quae adipisci
              tempora dolorum repudiandae eos neque. Praesentium laudantium est
              veniam cupiditate sunt laboriosam assumenda mollitia asperiores
              officia, in reiciendis ea alias, eaque dolorum temporibus,
              voluptas consectetur! Excepturi corporis enim quis! Debitis
              impedit voluptatem fugiat?
            </Box>
          </Typography>

          <Box
            sx={{
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            <button
              type="submit"
              style={{
                marginTop: "2em",
                marginBottom: "2em",
                width: "10em",
                padding: ".8em 2em",
                borderRadius: "3em",
                background: "#f1ae0e",
                border: "none",
                fontFamily: "Raleway",
                fontWeight: "500",
                transtion: "background .7s, color .7s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#e8c164";
                e.currentTarget.style.color = "#000";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#f1ae0e";
                e.currentTarget.style.color = "#000";
              }}
            >
              READ MORE
            </button>
          </Box>
        </Box>
        {/* imagem no backgroundImage */}
        <Box
        data-aos="fade-down-right"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "3em",
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            minWidth: { xs: "15%", sm: "50%" },
            height: { xs: "15.5em", sm: "25em" },
          }}
        ></Box>
      </Box>
    </Container>
  );
}

export default TeamMain;
