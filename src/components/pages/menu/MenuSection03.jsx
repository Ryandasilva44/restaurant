import { Container, Box, Typography } from "@mui/material";
import CircleText from "../../circle/CircleText";

function MenuSection03() {
  const imgUrl = "/assets/img01menusection03.jpg";
  return (
    <Container
      sx={{
        marginTop: "2.5em",
        marginBottom: "2.5em",
      }}
    >
      <Box
        sx={{
          padding: "3em 2em",
          borderRadius: "3em",
          backgroundImage: `url(${imgUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          display: { xs: "center", sm: "block" },
          justifyContent: { xs: "center", sm: "start" },
        }}
      >
        {/* Conteúdo interno centralizado */}
        <Box>
          {/* Componente CircleText */}

          <CircleText percentage="40%" label="BUSINESS LUNCH" color="#99e54d" />

          {/* Headline */}
          <Typography
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#f2f2f2"
            marginTop="1em"
            fontSize="1em"
            sx={{
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            SAMPLE HEADLINE
          </Typography>

          {/* Subtítulo */}
          <Box
            sx={{
              color: "#fff",
              marginTop: ".5em",
              fontSize: { xs: "1.5em", sm: "3em" },
              fontFamily: "Montserrat",
              fontWeight: "bold",
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            <p>
              Where every <br /> ingredient tells <br /> a story
            </p>
          </Box>

          {/* Botão */}
          <Box
            sx={{ marginTop: "1em", textAlign: { xs: "center", sm: "start" } }}
          >
            <button
              type="button"
              style={{
                fontFamily: "Raleway",
                fontWeight: "500",
                borderRadius: "3em",
                padding: ".5em 1.5em",
                fontSize: "1em",
                color: "#fff",
                backgroundColor: "#f1ae0e",
                border: "none",
                cursor: "pointer",
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
      </Box>
    </Container>
  );
}

export default MenuSection03;
