import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

function MenuMain() {
  return (
    <Box>
      <Box
        sx={{
          background: "#99e54d",
          padding: "3em",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            padding: "2.5em",
            borderRadius: "2em",
            background: "#fff",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "1.5em", sm: "3em" },
                fontFamily: "Montserrat",
                fontWeight: "bold",
                marginBottom: "1em",
              }}
            >
              Flavour so good you`ll try to eat with your eyes
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PhoneIcon
              sx={{
                color: "#f1ae0e",
                fontSize: { xs: "1.5em", sm: "3em" },
              }}
            />

            <Typography
              variant="body1"
              sx={{
                color: "#131313",
                fontSize: { xs: "1em", sm: "2em" },
                fontWeight: "bold",
                transition: "color .5s ease",
                cursor: "pointer",
                "&:hover": {
                  color: "#99e54d",
                },
              }}
            >
              +1 (234) 567-8910
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MenuMain;
