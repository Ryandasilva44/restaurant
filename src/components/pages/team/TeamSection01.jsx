import { Container, Box } from "@mui/material";
import "bootstrap-icons/font/bootstrap-icons.css";


function TeamSection01() {


  const imgUrl = "/assets/img01teamsection01.jpg";
  const imgUrl01 = "/assets/img02teamsection01.jpg";
  const imgUrl02 = "/assets/img03teamsection01.jpg";
  const imgUrl03 = "/assets/img04teamsection01.jpg";
  return (
    <Container
      sx={{
        marginTop: "4em",
      }}
    >
      {/* cards com duas imagens */}
      <Box
        sx={{
          display: { xs: "column", sm: "flex" },
          gap: "1em",
        }}
      >
        <Box
          sx={{
            borderRadius: "3em",
            border: ".1em solid #fff",
            padding: "3em",
            width: "100%",
            marginBottom: "1em",
            background: "#fff",
          }}
        >
          <Box
          data-aos="zoom-in"
            sx={{
              borderRadius: "3em",
              backgroundImage: `url(${imgUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              objectFit: "cover",
              width: "100%",
              height: { xs: "15em", sm: "25em" },
            }}
          >
            {" "}
          </Box>

          <p
            style={{
              textAlign: "center",
              marginTop: "1.5em",
              fontFamily: "Raleway",
              fontSize: "1.3em",
              fontWeight: "400",
            }}
          >
            Jeffrey Brown
          </p>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Raleway",
              fontSize: "1em",
              fontWeight: "500",
            }}
          >
            Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis
            glavrid from dolor amet iquam lorem bibendum
          </p>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i
              className="bi bi-facebook"
              style={{
                marginRight: "1em",
                color: "#0018a8",
                fontSize: "1.5em",
              }}
            ></i>
            <i
              className="bi bi-twitter"
              style={{
                marginRight: "1em",
                color: "#0018a8",
                fontSize: "1.5em",
              }}
            ></i>
            <i
              className="bi bi-instagram"
              style={{ color: "#0018a8", fontSize: "1.5em" }}
            ></i>
          </Box>
        </Box>
        <Box 
          sx={{
            borderRadius: "3em",
            border: ".1em solid #fff",
            padding: "3em",
            width: "100%",
            marginBottom: "1em",
            background: "#fff",
          }}
        >
          <Box
          data-aos="zoom-in"
            sx={{
              borderRadius: "3em",
              backgroundImage: `url(${imgUrl01})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              objectFit: "cover",
              width: "100%",
              height: { xs: "15em", sm: "25em" },
            }}
          ></Box>

          <p
            style={{
              textAlign: "center",
              marginTop: "1.5em",
              fontFamily: "Raleway",
              fontSize: "1.3em",
              fontWeight: "400",
            }}
          >
            Alex Richmond
          </p>

          <p
            style={{
              textAlign: "center",
              fontFamily: "Raleway",
              fontSize: "1em",
              fontWeight: "500",
            }}
          >
            {" "}
            Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis
            glavrid from dolor amet iquam lorem bibendum
          </p>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i
              className="bi bi-facebook"
              style={{
                marginRight: "1em",
                color: "#0018a8",
                fontSize: "1.5em",
              }}
            ></i>
            <i
              className="bi bi-twitter"
              style={{
                marginRight: "1em",
                color: "#0018a8",
                fontSize: "1.5em",
              }}
            ></i>
            <i
              className="bi bi-instagram"
              style={{ color: "#0018a8", fontSize: "1.5em" }}
            ></i>
          </Box>
        </Box>
      </Box>

      {/* outro card com duas imagens */}

      <Box
        sx={{
          display: { xs: "column", sm: "flex" },
          gap: "1em",
        }}
      >
        <Box
          sx={{
            borderRadius: "3em",
            border: ".1em solid #fff",
            padding: "3em",
            width: "100%",
            marginBottom: "1em",
            background: "#fff",
          }}
        >
          <Box
          data-aos="zoom-in"
            sx={{
              borderRadius: "3em",
              backgroundImage: `url(${imgUrl02})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              objectFit: "cover",
              width: "100%",
              height: { xs: "15em", sm: "25em" },
            }}
          >
            {" "}
          </Box>

          <p
            style={{
              textAlign: "center",
              marginTop: "1.5em",
              fontFamily: "Raleway",
              fontSize: "1.3em",
              fontWeight: "400",
            }}
          >
            Jeffrey Brown
          </p>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Raleway",
              fontSize: "1em",
              fontWeight: "500",
            }}
          >
            Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis
            glavrid from dolor amet iquam lorem bibendum
          </p>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i
              className="bi bi-facebook"
              style={{
                marginRight: "1em",
                color: "#0018a8",
                fontSize: "1.5em",
              }}
            ></i>
            <i
              className="bi bi-twitter"
              style={{
                marginRight: "1em",
                color: "#0018a8",
                fontSize: "1.5em",
              }}
            ></i>
            <i
              className="bi bi-instagram"
              style={{ color: "#0018a8", fontSize: "1.5em" }}
            ></i>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "3em",
            border: ".1em solid #fff",
            padding: "3em",
            width: "100%",
            marginBottom: "1em",
            background: "#fff",
          }}
        >
          <Box
          data-aos="zoom-in"
            sx={{
              borderRadius: "3em",
              backgroundImage: `url(${imgUrl03})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              objectFit: "cover",
              width: "100%",
              height: { xs: "15em", sm: "25em" },
            }}
          ></Box>

          <p
            style={{
              textAlign: "center",
              marginTop: "1.5em",
              fontFamily: "Raleway",
              fontSize: "1.3em",
              fontWeight: "400",
            }}
          >
            Alex Richmond
          </p>

          <p
            style={{
              textAlign: "center",
              fontFamily: "Raleway",
              fontSize: "1em",
              fontWeight: "500",
            }}
          >
            {" "}
            Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis
            glavrid from dolor amet iquam lorem bibendum
          </p>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i
              className="bi bi-facebook"
              style={{
                marginRight: "1em",
                color: "#0018a8",
                fontSize: "1.5em",
              }}
            ></i>
            <i
              className="bi bi-twitter"
              style={{
                marginRight: "1em",
                color: "#0018a8",
                fontSize: "1.5em",
              }}
            ></i>
            <i
              className="bi bi-instagram"
              style={{ color: "#0018a8", fontSize: "1.5em" }}
            ></i>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default TeamSection01;
