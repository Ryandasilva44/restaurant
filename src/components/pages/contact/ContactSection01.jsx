import { Box, Typography } from "@mui/material";

function ContactSection01() {
  return (
    <Box
      sx={{
        marginTop: "5rem",
        background: "#f1ae0e",
        width: "100%",
        padding: "1.5rem",
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
          borderRadius: "2em",
          background: "#f1f1f1",
        }}
      >
        <Typography
          fontFamily="Montserrat"
          fontWeight="bold"
          marginBottom="1.5em"
          sx={{
            fontSize: { xs: "1em", sm: "2.5em" },
            textAlign: "center"
          }}
        >
          Keep up to date with us
        </Typography>

        <Box
          sx={{
            display: { xs: "column", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
            gap: ".5rem",
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
              outline: "none",
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

export default ContactSection01;
