import { Box, Typography } from "@mui/material";

function AboutSection01() {
  return (
    <Box
      sx={{
        marginTop: "3em",
        background: "#f1ae0e",
        padding: "1.5em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          border: ".2em solid #fff",
          padding: { xs: "2em 11em", sm: "1em 20em" },
          borderRadius: "3em",
          background: "#fff",
          display: "grid",
          justifyContent: "center",
          width: { xs: "25%", sm: "75%" },
          height: "20em",
          overflow: "hidden",
          wordWrap: "break-word",
        }}
      >
        <Typography
          sx={{
            marginBottom: ".25em",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "1em", sm: "2.5em" },
            width: "25em",

            "@media (orientation: landscape)": {
              fontSize: "1.5em",
            },
          }}
        >
          We make a small, intimate,
          <br /> and inviting space for an <br /> unforgettable meal
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: ".6em",
            fontFamily: "Raleway",
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Totam
          assumenda nesciunt deserunt voluptate quia neque at amet, <br />{" "}
          sapiente repellendus eum minus iste, repellat, quod ad iusto delectus
        </Typography>

        <Box
          sx={{
            marginTop: ".55em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            type="submit"
            style={{
              fontFamily: "Raleway",
              fontWeight: "bold",
              padding: ".5em 2.5em",
              borderRadius: "3em",
              background: "#99e54d",
              border: "none",
              marginBottom: "1em",
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
            READ MORE
          </button>
        </Box>
      </Box>
    </Box>
  );
}
export default AboutSection01;
