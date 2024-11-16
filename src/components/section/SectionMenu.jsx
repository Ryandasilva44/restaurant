import { Grid2, Box, Typography } from "@mui/material";
import "../../../styles/button/SectionMenu.scss";

function SectionMenu() {
  const items = [
    {
      id: 1,
      image: "/assets/food-09.jpg",
      text: "HOT PIZZA",
    },
    { id: 2, image: "/assets/food-10.jpg", text: "SALADS" },

    { id: 3, image: "/assets/food-12.jpeg", text: "DRINKS" },
    {id: 4, image: "/assets/food-15.jpg", text: "LEGUMES"}
  ];

  return (
    <Box sx={{ textAlign: "center", p: 2 }}>
      {/* Texto que aparece apenas uma vez */}
      <Typography
        variant="h6"
        component="div"
        sx={{
          mb: 1,
          color: "#fff",
          fontSize: { xs: "1em", sm: "3em", fontWeight: "bold" },
          fontFamily: "Montserrat",
          marginTop: "1.5em",
        }}
      >
        VIEW MENU
      </Typography>
      <Grid2 container spacing={2} justifyContent="center">
        {items.map((item) => (
          <Grid2 item key={item.id} xs={12} sm={6}>
            <Box
              sx={{
                textAlign: "center",
                color: "#fff",
                fontFamily: "Montserrat",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.text}
                sx={{
                  marginTop: "5em",
                  width: { xs: "100%"},
                  height: "auto",
                  borderRadius: "5em",
                   maxHeight: 300,
                  objectFit: "cover",
                  boxShadow: 3,
                  mb: 1,
                }}
              />
              <Typography variant="h6" component="div">
                {item.text}
              </Typography>
              <button className="button">READ MORE</button>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default SectionMenu;
