import { Container, Box, Typography } from "@mui/material";
import CircleText from "../../circle/CircleText";

function AboutSection05() {
  const imgCart = "/assets/icone-carta.png";
  const imgSearch = "/assets/icone-search.png";
  const imgCell = "/assets/icone-cell.png";
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1.5em",
      }}
    >
      <Box
        sx={{
          background: "#dcdcdc",
          borderRadius: "2.5em",
          marginTop: "3em",
          border: ".1em solid #fff",
          width: "90%",
          padding: "1em",
          display: { xs: "column", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          gap: "10em",
        }}
      >
        <Box
          sx={{
            textAlign: { xs: "center", sm: "start" },
          }}
        >
          <CircleText percentage="40%" label="BUSINESS LUNCH" color="#99e54d" />

          <Typography
            sx={{
              margin: "1em 0",
              fontSize: { xs: "1.5em", sm: "3em" },
              fontFamily: "Montserrat",
              fontWeight: "bold",
              color: "#f2f2f2",
            }}
          >
            Our Contact
          </Typography>
          <button
            type="submit"
            style={{
              padding: ".6em 2.5em",
              borderRadius: "3em",
              background: "#f1ae0e",
              border: "none",
              fontFamily: "Raleway",
              fontWeight: "bold",
              marginBottom: "3em",
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
        <Box>
          <Box
            sx={{
              display: { xs: "column", sm: "flex" },
              gap: "1em",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                border: ".5em",
                width: "4em",
                height: "4em",
                borderRadius: "50%",
                background: "#99e54d",
              }}
            >
              <img
                src={imgCart}
                alt="icone e uma carta"
                style={{ width: "2em" }}
              />
            </Box>
            {/* icone de email */}
            <Box
              sx={{
                marginTop: "1em",
                marginBottom: "2em",
                color: "#fff",
                fontWeight: "bold",
                fontFamily: "Montserrat",
              }}
            >
              <p>CHART TO US</p>
              <p>Ours friendly team is here to help</p>
              <Box
                sx={{
                  fontSize: { xs: ".8em", sm: "1.125rem" },
                }}
              >
                <a href="mailto:ryandeveloper@hotmail.com">
                  ryandeveloper@hotmail.com
                </a>
              </Box>
            </Box>
          </Box>
          {/* icone de pesquisa */}

          <Box
            sx={{
              display: { xs: "column", sm: "flex" },
              gap: "1em",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: ".5em",
                width: "4em",
                height: "4em",
                borderRadius: "50%",
                background: "#99e54d",
              }}
            >
              <img
                src={imgSearch}
                alt="iconde de pesquisa"
                style={{ width: "2em" }}
              />
            </Box>
            <Box
              sx={{
                marginTop: "1em",
                marginBottom: "1.5em",
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
              display: { xs: "column", sm: "flex" },
              gap: "1em",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: ".5em",
                width: "4em",
                height: "4em",
                borderRadius: "50%",
                background: "#99e54d",
              }}
            >
              <img
                src={imgCell}
                alt="iconde de um celular"
                style={{ width: "2em" }}
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
        </Box>
      </Box>
    </Container>
  );
}

export default AboutSection05;
