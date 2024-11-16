import { useState } from "react";
import { Drawer, List, ListItem, Box } from "@mui/material";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "left" }}
        >
          Minha Logo
        </Typography>

        {/* LInks visíveis em telas menores */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "1.5em" }}>
          {/* navegando para a pagina home */}
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button className="navbar-button" color="inherit">
              Home
            </Button>
          </Link>

          {/* navegando para a pagina landing */}
          <Link
            to="/landing-header"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button className="navbar-button" color="inherit">
              Landing
            </Button>
          </Link>

          {/* navegando para a página about */}
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button className="navbar-button" color="inherit">
              About
            </Button>
          </Link>

          {/* navegação para a página team */}
          <Link
            to="/team"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button className="navbar-button" color="inherit">
              Team
            </Button>
          </Link>

          {/* navegação para a página de menu */}

          <Link
            to="/menu"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button className="navbar-button" color="inherit">
              Menu
            </Button>
          </Link>

          {/* navegção para a página de contact */}

          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button className="navbar-button" color="inherit">
              Contact
            </Button>
          </Link>
        </Box>

        {/* Botão do menu hamburguer visível apenas em telas menores */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={handleMenuToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer para o menu lateral */}
      <Drawer anchor="right" open={isMenuOpen} onClose={handleMenuToggle}>
        <Box sx={{ width: 250, padding: "1em" }}>
          <List>
            <ListItem button onClick={handleMenuToggle}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Button color="inherit">Home</Button>
              </Link>
            </ListItem>
            <ListItem button onClick={handleMenuToggle}>
              <Link
                to="/landing-header"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit">Landing</Button>
              </Link>
            </ListItem>
            <ListItem button onClick={handleMenuToggle}>
              <Button color="inherit">About</Button>
            </ListItem>
            <ListItem button onClick={handleMenuToggle}>
              <Button color="inherit">Team</Button>
            </ListItem>
            <ListItem button onClick={handleMenuToggle}>
              <Button color="inherit">Menu</Button>
            </ListItem>
            <ListItem button onClick={handleMenuToggle}>
              <Button color="inherit">Contact</Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
