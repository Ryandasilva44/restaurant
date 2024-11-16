import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function CircleText({ percentage, label, color }) {
  return (
    <Box
      sx={{
        width: 180,
        height: 180,
        borderRadius: "50%",
        background: color || "#99e54d",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
         alignItems: "center",
        color: "#000",
         textAlign: "center",
        padding: 1,
      }}
    >
      {" "}
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", fontSize: "3em", fontFamily: "Montserrat" }}
      >
        {percentage}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontWeight: "700", fontSize: "1.4em", fontFamily: "Raleway" }}
      >
        {label}
      </Typography>
    </Box>
  
    
  );
 
}

// Definindo o PropTypes
CircleText.propTypes = {
  percentage: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
};

// Definindo valores padrão para as propriedades
CircleText.defaultProps = {
  color: "#99e54d",
};

export default CircleText;
