import { Box } from "@mui/material";

function LandingSection05() {
  return (
    <Box
      sx={{
        padding: "2em",
        background: "#99e54d",
        marginBottom: "1em",
        textAlign: "center"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          color: "#000",
         
          
        }}
      >
        <p style={{fontSize: "2em"}}>Keep up to date with us</p>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "2em",
          width: "100%",
          maxWidth: "40em",
          margin: "0 auto"
        }}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your Name"
          style={{
            borderRadius: "3em",
            padding: "1em 2em 1em 2em",
            fontFamily: "Raleway",
            fontSize: "1em",
            outline: "none",
            border: "none",
             width: "30em"
           
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter a valid email address"
          style={{
            outline: "none",
            border: "none",
            borderRadius: "3em",
            padding: "1em 2em 1em 2em",
            fontFamily: "Raleway",
            fontSize: "1em",
            width: "25em"
          }}
        />

        <button
          type="submit"
          style={{
            padding: ".8em 2em",
            borderRadius: "3em",
            background: "#dcdcdc",
            border: "none",
            color: "#000",
            transition: "background .7s color .7s ease"
          }}

          onMouseOver={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.color = "#000";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#dcdcdc";
            e.currentTarget.style.color = "#000";
          }}





        >
          SUBMIT
        </button>
      </Box>
    </Box>
  );
}

export default LandingSection05;
