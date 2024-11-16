import { Box, Typography } from "@mui/material";
function NewRestaurantBox() {
  return (
    <Typography>
      <Box
        sx={{
          textAlign: { xs: "center", sm: "start" },
          display: "flex",
          justifyContent: { xs: "center", sm: "start" },
          alignItems: { xs: "center", sm: "flex-start" },
          marginLeft: "1em",
          marginTop: "1em",
          fontWeight: "bold",
          fontFamily: "Montserrat",
        }}
      >
        <p>NEW RESTAURANT</p>
      </Box>

      <Typography
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "start" },
          fontWeight: "700",
        }}
      >
        <Box
          sx={{
            fontSize: "3em",
          }}
        >
          <p>where every</p>
          <p>ingredient</p>
          <p>tells a stiry</p>
        </Box>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "start" },
        }}
      >
     
      </Box>
    </Typography>
  );
}

export default NewRestaurantBox;
