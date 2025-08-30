import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [tab, setTab] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Hand+Pre:wght@400..700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(255, 255, 255, 0.57)",
        backdropFilter: "blur(15px)",
        borderRadius: "0 0 20px 20px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, sm: 4 },
          py: 1.5,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* LOGO + TÍTULO */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: { xs: 1, md: 0 },
            cursor: "pointer",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
           <Box
            component="img"
            src="/YEMITO.png"
            alt="Logo"
            sx={{
              width: { xs: 38, sm: 48 },
              height: { xs: 38, sm: 48 },
              mr: 1,
              objectFit: "contain",
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Edu NSW ACT Hand Pre', cursive",
              fontWeight: "bold",
              color: "#00A78E",
              fontSize: { xs: "1.6rem", sm: "2rem" },
              userSelect: "none",
            }}
          >
            Taller de Arte
          </Typography>
        </Box>

        {/* MENÚ TABS */}
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons={isMobile ? "auto" : false}
          sx={{
            "& .MuiTabs-indicator": {
              height: "3px",
              borderRadius: "5px",
              backgroundColor: "#28bfa4",
              transition: "all 0.3s",
            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: "bold",
              fontFamily: "'Edu NSW ACT Hand Pre', cursive",
              color: "#000",
              px: { xs: 1, sm: 2 },
              fontSize: { xs: "1rem", sm: "1.1rem" },
              borderRadius: "999px",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#e0f2f1",
                color: "#00A78E",
              },
            },
          }}
        >
          <Tab label="Inicio" href="#inicio" />
          <Tab label="Fotos" href="#pictures" />
          <Tab label="Sobre nosotros" href="#sobre-nosotros" />
          <Tab label="Talleres" href="#talleres" />
          <Tab label="Ingresá" href="#ingresa" />

        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
