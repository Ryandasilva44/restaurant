import { Box, Typography } from "@mui/material";

function AboutSection04() {
  return (
    <Box
      sx={{
        background: "#99e54d",
        textAlign: "center",
        paddingY: "5em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          border: ".1em solid #fff",
          width: "90%",
          padding: "2.5em",
          borderRadius: "3em",
          background: "#f1f1f1",
        }}
      >
        <Typography
          fontFamily="Montserrat"
          fontWeight="bold"
          marginBottom="1.5em"
          sx={{
            fontSize: { xs: "1.5em", sm: "2.5em" },
          }}
        >
          Keep up to date with us
        </Typography>

        <Box
          sx={{
            display: { xs: "column", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter a valid eamil address"
            required
            style={{
              borderRadius: "3em",
              width: "90%",
              padding: ".5em",
              border: "none",
              marginBottom: ".5em",
              outline: "none"
            
            }}
          />

          <Box sx={{}}>
            <button
              type="submit"
              style={{
                width: "90%",
                padding: ".5em 2em",
                borderRadius: "3em",
                background: "#99e54d",
                border: "none",
                fontFamily: "Raleway",
                fontWeight: "500",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#b4db8c";
                e.currentTarget.style.color = "#000";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#99e54d";
                e.currentTarget.style.color = "#000";
              }}
            >
              SUBIMIT
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutSection04;
