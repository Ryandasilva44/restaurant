import { Container, Box, Typography } from "@mui/material";

function ContactMain() {
  return (
    <Container
      sx={{
        marginTop: "5em",
      }}
    >
      <Box
        data-aos="fade-left"
        sx={{
          background: "#fff",
          borderRadius: "2.5em",
          border: ".1em solid #fff",
          padding: "1.5em",
        }}
      >
        <Typography
          fontWeight="bold"
          fontFamily="Montserrat"
          color="#131313"
          sx={{
            fontSize: { xs: "1.5em", sm: "3em" },
            textAlign: "center",
          }}
        >
          {" "}
          Contact Us
        </Typography>
        <p
          style={{
            textAlign: "center",
            marginBottom: "5em",
            fontFamily: "Raleway",
          }}
        >
          Article evident arrived express highest men did boy. Mistress sensible
          entirely am so. Quick can manor smart money hopes worth too. Comfort
          produce husband boy her had hearing. Law others theirs passed but
          wishes.{" "}
        </p>
        <Box
          sx={{
            display: { xs: "column", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
            gap: "7em",
          }}
        >
          <Box
            sx={{
              fontFamily: "Montserrat",
            }}
          >
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter a valid email address"
              required
              onFocus={(e) => (e.target.value = "")}
              style={{
                width: "100%",
                borderRadius: "3rem",
                padding: ".5rem 1.2rem",
                background: "#dcdcdc",
                border: "none",
                outline: "none",
                marginBottom: "2.5rem",
              }}
            />
          </Box>

          <Box
            sx={{
              fontFamily: "Montserrat",
            }}
          >
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
              required
              onFocus={(e) => (e.target.value = "")}
              style={{
                width: "100%",
                borderRadius: "3rem",
                padding: ".5rem 1.2rem",
                background: "#dcdcdc",
                border: "none",
                outline: "none",
                marginBottom: "2.5rem",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Montserrat",
          }}
        >
          <label htmlFor="message"></label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            required
            onFocus={(e) => (e.target.value = "")}
            style={{
              width: "40rem",
              borderRadius: "1rem",
              background: "#dcdcdc",
              border: "none",
              padding: ".5rem",
              outline: "none",
            }}
          ></textarea>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          <button
            type="submit"
            style={{
              width: "50%",
              padding: ".5em 2em",
              borderRadius: "3em",
              background: "#99e54d",
              border: "none",
              fontFamily: "Raleway",
              fontWeight: "500",
            }}
            onClick={() => {
              alert("Mensagem enviada com sucesso!");
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
            SUBMIT
          </button>
        </Box>
      </Box>
    </Container>
  );
}

export default ContactMain;
