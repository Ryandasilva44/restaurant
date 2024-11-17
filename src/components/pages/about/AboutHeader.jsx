import { Box, Container } from "@mui/material";


function AboutHeader() {


  const imgUrl = "/assets/img01about.jpg";
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
        border: "solid #fff",
        borderRadius: "3em",
        background: "#f2f2f2",
        padding: "1em",
        width: "90%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "start" },
          alignItems: { xs: "center", sm: "start" },
          flexDirection: "column",
          marginTop: "5em",
        }}
      >
        <p style={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
          OUR MISSION
        </p>
        <p
          style={{
            fontSize: "3em",
            fontWeight: "bold",
          }}
        >
          About Us
        </p>
        <p
          style={{
            fontFamily: "Raleway",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quam odio ex eligendi. Vitae non exercitationem amet minus minima
          officia asperiores illum dolorum, odio expedita delectus, assumenda
          error! Nemo, ipsam?
        </p>

        <button
          type="submit"
          style={{
            marginTop: "2em",
            marginBottom: "2em",
            width: "10em",
            padding: ".8em 2em",
            borderRadius: "3em",
            background: "#f1ae0e",
            border: "none",
            fontFamily: "Raleway",
            fontWeight: "500",
            transtion: "background .7s, color .7s ease",
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

      <Box 
      data-aos="zoom-in"
        sx={{
          backgroundImage: `url(${imgUrl})`,
          borderRadius: "3em",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          width: "100%",
          height: "30em",
          padding: "5em",
        }}
      ></Box>
    </Container>
  );
}

export default AboutHeader;
