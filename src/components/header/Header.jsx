import { Container, Box } from "@mui/material";
import CircleText from "../circle/CircleText"; //Importa o componente CircleText
import NewRestaurantBox from "../textTitulo/NewRestauranteBox";
function Header() {
  // Definindo a URL da imagem em uma constante

  const imageUrl = "./assets/Food.jpeg";

  return (
    <Container maxWidth={false} sx={{ padding: 1 }}>
      <Box
        sx={{
          height: { xs: "45em", sm: "40em" },
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
          flexDirection: "column",
          color: "#fff",
          backgroundBlendMode: "darken",
          padding: 2,
          gap: 2,
        }}
      >
        <Box sx={{
          display: "flex",
          justifyContent: {xs: "center", sm: "start"}
        }}>
          <CircleText percentage="40%" label="BUSINESS LUNCH" color="#99e54d" />
        </Box>

        <Box>
          <NewRestaurantBox />
        </Box>
      </Box>
    </Container>
    
  );
}

export default Header;
