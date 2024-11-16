import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

function LandingSection02() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1em",
        background: "#1a1a1a",
        padding: "2em",
        marginBottom: "5em",
      }}
    >
      <Box
        sx={{
          fontSize: { xs: "1.4em", sm: "3em" },
          fontFamily: "Raleway",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        <p>Keep up to date with us</p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".5em",
         
          }}
        >
          <PhoneIcon
            sx={{
              color: "#99e54d",
              fontSize: { xs: "1.5em", sm: "1.4em" },
            }}
          />

          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontSize: { xs: "1em" },
              fontWeight: "bold",
              transition: "color .5s ease",
              cursor: "pointer",
              "&:hover": {
                color: "#99e54d",
              },
            }}
          >
            +1 (234) 567-890
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingSection02;
