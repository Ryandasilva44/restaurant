import { Container, Box, Typography } from "@mui/material";
import CircleText from "../../circle/CircleText";

function LandingSection06() {
  const imgUrl = "/assets/img10landingsection06.jpg";
  const imgCart = "/assets/icone-carta.png";
  const imgSearch = "/assets/icone-search.png";
  const imgCell = "/assets/icone-cell.png";

  return (
    <Container
      sx={{
        display: {xs: "column", sm: "flex"},
        flexDirection: {xs: "column", sm: "row"},
        flexWrap: "wrap",
        gap: "2em",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* primeira coluna */}
      <Box
        sx={{
          marginBottom: { xs: "1em", sm: "1em" },
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: { xs: "100%", sm: "45%" },
          height: "32em",
          borderRadius: "3em",
        }}
      ></Box>

      {/* segunda coluna */}
      <Box
        sx={{
          marginBottom: "1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "7em",
          width: { xs: "100%", sm: "45%" },
          height: "32em",
          borderRadius: "3em",
          color: "#fff",
          background: "#292827",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mt={1} mb={2}>
          OUR RESTAURANT
        </Typography>
        <Typography variant="h4" fontWeight="bold" mt={1} mb={4}>
          A new way to experience food
        </Typography>
        <button
          type="submit"
          style={{
            fontSize: ".7em",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            padding: "1em 1.5em",
            background: "#99e54d",
            color: "#000",
            borderRadius: "3em",
            border: "none",
            cursor: "pointer",
            transition: "background .3s ease, color .3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#dcdcdc";
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
  

      {/* terceira coluna com "BUSINESS LUNCH" e texto descritivo */}
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "2em",
          "@media (orientation: landscape)": {
            flexDirection: "row",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "45%" },
            height: "32em",
            background: "#99e54d",
            borderRadius: "2em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1em",
            marginBottom: ".5em",
          }}
        >
          <CircleText percentage="40%" label="BUSINESS LUNCH" color="#dcdcdc" />
          <Box sx={{ textAlign: "start", padding: "1em" }}>
            <Typography variant="h6" fontWeight="bold" color="#fff">
              SAMPLE HEADLINE
            </Typography>
            <Typography
              variant="h1"
              fontWeight="bold"
              color="#fff"
              sx={{ margin: ".1em 0", fontSize: "1em" }}
            >
              Where every ingredient tells a story
            </Typography>
            <Box textAlign="center" mt={2}>
              <button
                type="submit"
                style={{
                  fontSize: ".8em",
                  padding: ".8em 2.5em",
                  background: "#000",
                  color: "#fff",
                  borderRadius: "3em",
                  border: "none",
                  cursor: "pointer",
                  transition: "background .7s ease, color .7s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "#000";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#000";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                READ MORE
              </button>
            </Box>
          </Box>
        </Box>

        {/* quarta coluna com informações de contato */}
        <Box
          sx={{
            borderRadius: "3em",
            padding: "5em 1em",
            width: { xs: "100%", sm: "45%" },
            height: "32em",
            background: "#0e1c2a",
          }}
        >
          {[
            {
              img: imgCart,
              label: "CHAT TO US",
              text: "Our friendly team is here to help",
              link: "mailto:ryandeveloper@hotmail.com",
              linkText: "ryandeveloper@hotmail.com",
            },
            {
              img: imgSearch,
              label: "OFFICE",
              text: "Come say hello at our office HQ",
              link: "https://www.google.com/maps/search/?api=1&query=121+Rock+Street,+21+Avenue,+Brooklin,+NY+92103,+Estados+Unidos",
              linkText: "121 Rock Street, 21 Avenue",
            },
            {
              img: imgCell,
              label: "PHONE",
              text: "Mon-Fri from 8am to 5pm",
              link: "https://wa.me/5583987687872",
              linkText: "+55(83)98768-7872",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{ display: "flex", gap: "1em", marginBottom: "1.5em" }}
            >
              <Box
                sx={{
                  padding: "1.8em",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "6em",
                  height: "6em",
                  borderRadius: "50%",
                  background: "#99e54d",
                }}
              >
                <img src={item.img} alt={item.label} style={{ width: "2em" }} />
              </Box>
              <Box
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "Montserrat",
                }}
              >
                <Typography variant="body2">{item.label}</Typography>
                <Typography variant="body2">{item.text}</Typography>
                <a href={item.link} style={{ fontSize: ".6em", color: "#fff" }}>
                  {item.linkText}
                </a>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Container>
  );
}

export default LandingSection06;
