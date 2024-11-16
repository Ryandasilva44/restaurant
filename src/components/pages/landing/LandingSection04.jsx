import { Container, Box } from "@mui/material";

function LandingSection04() {
  const imgUrl = "/assets/img06landingsection04.jpeg";
  const imgUrl01 = "/assets/img07landingsection04.jpeg";
  const imgUrl02 = "/assets/img08landingsection04.jpeg";
  const imgUrl03 = "/assets/img09landingsection04.jpeg";
  return (
    <Container>
      <Box
        sx={{
          marginTop: "1.5em",
          marginBottom: "1.5em",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          color: "#fff",
          letterSpacing: ".15em",
          fontSize: { xs: "1.5em", sm: "3em" },
          textAlign: "center",
        }}
      >
        <p>Check Our Blog</p>
      </Box>

      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
        }}
      >
        {/* primeiro card */}
        <Box
          sx={{
            marginBottom: "1em",
            border: ".1em solid #fff",
            borderRadius: "3em",
            background: "#f2f2f2",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: {xs: "110%", sm: "25em"},
            padding: "2em",
          }}
        >
          <Box
            sx={{
              marginBottom: ".5em",
              borderRadius: "3em",
              backgroundImage: `url(${imgUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              objectFit: "cover",
              width: "100%",
              height: "15em",
            }}
          ></Box>
          <Box
            sx={{
              margin: "2em 0",
            }}
          >
            <p style={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
              POST 6 HEADLINE
            </p>
            <p style={{ fontFamily: "Raleway" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, illum?
            </p>

            <button
              type="submit"
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                padding: "1em 2.5em",
                background: "#99e54d",
                color: "#000",
                borderRadius: "3em",
                border: "none",
                cursor: "pointer",
                transition: "background .3s ease, color .3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#f1ae0e";
                e.currentTarget.style.color = "#fff";
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

        {/* segundo card */}

        <Box
          sx={{
            marginBottom: "1em",
            border: ".1em solid #fff",
            borderRadius: "3em",
            background: "#f2f2f2",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: {xs: "110%", sm: "25em"},
            padding: "2em",
          }}
        >
          <Box
            sx={{
              marginBottom: ".5em",
              borderRadius: "3em",
              backgroundImage: `url(${imgUrl01})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              objectFit: "cover",
              width: "100%",
              height: "15em",
            }}
          ></Box>
          <Box
            sx={{
              margin: "2em 0",
            }}
          >
            <p style={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
              POST 5 HEADLINE
            </p>
            <p style={{ fontFamily: "Raleway" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, illum?
            </p>

            <button
              type="submit"
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                padding: "1em 2.5em",
                background: "#99e54d",
                color: "#000",
                borderRadius: "3em",
                border: "none",
                cursor: "pointer",
                transition: "background .3s ease, color .3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#f1ae0e";
                e.currentTarget.style.color = "#fff";
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
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
        }}
      >
        {/* terceiro card */}

        <Box
          sx={{
            marginBottom: "1em",
            border: ".1em solid #fff",
            borderRadius: "3em",
            background: "#f2f2f2",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: {xs: "110%", sm: "25em"},
            padding: "2em",
          }}
        >
          <Box
            sx={{
              marginBottom: ".5em",
              borderRadius: "3em",
              backgroundImage: `url(${imgUrl02})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              objectFit: "cover",
              width: "100%",
              height: "15em",
            }}
          ></Box>
          <Box
            sx={{
              margin: "2em 0",
            }}
          >
            <p style={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
              POST 4 HEADLINE
            </p>
            <p style={{ fontFamily: "Raleway" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, illum?
            </p>

            <button
              type="submit"
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                padding: "1em 2.5em",
                background: "#99e54d",
                color: "#000",
                borderRadius: "3em",
                border: "none",
                cursor: "pointer",
                transition: "background .3s ease, color .3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#f1ae0e";
                e.currentTarget.style.color = "#fff";
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

        {/* quarto card */}

        <Box
          sx={{
            marginBottom: "1em",
            border: ".1em solid #fff",
            borderRadius: "3em",
            background: "#f2f2f2",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: {xs: "110%", sm: "25em"},
            padding: "2em",
          }}
        >
          <Box
            sx={{
              marginBottom: ".5em",
              borderRadius: "3em",
              backgroundImage: `url(${imgUrl03})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              objectFit: "cover",
              width:  "100%",
              height: "15em",
            }}
          ></Box>
          <Box
            sx={{
              margin: "2em 0",
            }}
          >
            <p style={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
              POST 3 HEADLINE
            </p>

            <p style={{ fontFamily: "Raleway" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, illum?
            </p>

            <button
              type="submit"
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                padding: "1em 2.5em",
                background: "#99e54d",
                color: "#000",
                borderRadius: "3em",
                border: "none",
                cursor: "pointer",
                transition: "background .3s ease, color .3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#f1ae0e";
                e.currentTarget.style.color = "#fff";
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
      </Container>
    </Container>
  );
}

export default LandingSection04;
