import { Container, Box, Typography } from "@mui/material";
import { useState } from "react";

function AboutSection03() {
  const imgUrl01 = "/assets/img01aboutsection03.jpg";
  const imgUrl02 = "/assets/img02aboutsection03.jpg";
  const imgUrl03 = "/assets/img03aboutsection03.jpg";

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const imageUrls = [imgUrl01, imgUrl02, imgUrl03];

  return (
    <Container
      sx={{
        marginTop: "3em",
        display: { xs: "column", sm: "flex" },
        gap: "1.5em",
      }}
    >
      {imageUrls.map((imgUrl, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: "1em",
            borderRadius: "3em",
            border: ".01em solid #f2f2f2",
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
            width: "100%",
            maxWidth: "100%",
            height: "30em",
            position: "relative",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Typography
            fontSize=".99em"
            fontFamily="Montserrat"
            fontWeight="bold"
            color="#fff"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
              textDecoration: hoveredIndex === index ? "underline" : "none",
              textDecorationColor: hoveredIndex === index ? "red" : "transparent",
              textUnderlineOffset: ".5em",
            }}
          >
            {index === 0 ? "FOOD SOURCING" : index === 1 ? "MENU DEVELOPMENT" : "RESTAURANT"}
          </Typography>
        </Box>
      ))}
    </Container>
  );
}

export default AboutSection03;

