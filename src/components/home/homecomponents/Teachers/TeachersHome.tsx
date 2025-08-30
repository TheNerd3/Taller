import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Container,
} from "@mui/material";
import { useState } from "react";

const profes = [
  {
    nombre: "Laura Gómez",
    especialidad: "Pintura Experimental",
    foto: "/images/profesores/laura.png",
    bio: "Explora lo intuitivo con materiales no convencionales.",
  },
  {
    nombre: "Martín Pérez",
    especialidad: "Retrato al Óleo",
    foto: "/images/profesores/martin.png",
    bio: "Técnica clásica, veladuras y proporción realista.",
  },
  {
    nombre: "Ana Kimura",
    especialidad: "Cerámica Japonesa",
    foto: "/images/profesores/ana.png",
    bio: "Filosofía wabi-sabi y diseño orgánico funcional.",
  },
  {
    nombre: "Elena Rivas",
    especialidad: "Collage Contemporáneo",
    foto: "/images/profesores/elena.png",
    bio: "Fusiona imágenes, texturas y mensajes sociales.",
  },
  {
    nombre: "Diego Ferraro",
    especialidad: "Escultura Textil",
    foto: "/images/profesores/diego.png",
    bio: "Volumen y forma con fibras naturales y recicladas.",
  },
];

const TeacherSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Box sx={{ marginTop: 8 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            color: "#00695C",
            fontWeight: 500,
            fontSize: { xs: "1.4rem", md: "2rem" },
            mb: 6,
            fontFamily: "'Edu NSW ACT Hand Pre', cursive",
          }}
        >
          Conocé a Nuestr@s Profesor@s
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center", 
            overflowX: "auto",
            gap: 3,
            px: 2,
            height: 430, 
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": {
              height: 6,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#00695C",
              borderRadius: 10,
            },
          }}
        >
          {profes.map((p, i) => (
            <Box
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              sx={{
                flex: "0 0 auto",
                width: { xs: 240, sm: 280, md: 300 },
                scrollSnapAlign: "start",
                transition: "transform 0.4s ease",
                transform:
                  hovered === i ? "translateY(-8px) scale(1.02)" : "none",
              }}
            >
              <Card
                sx={{
                  height: 300,
                  borderRadius: 5,
                  px: 3,
                  py: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow:
                    hovered === i
                      ? "0 10px 30px rgba(0,0,0,0.2)"
                      : "0 4px 14px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease-in-out",
                  background: "#fff",
                  border: hovered === i ? "2px solid #00695C" : "1px solid #eee",
                }}
              >
                <Avatar
                  src={p.foto}
                  alt={p.nombre}
                  sx={{
                    width: 90,
                    height: 90,
                    mb: 2,
                    border: "3px solid #00695C",
                  }}
                />
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                      mb: 1,
                      fontSize: "1.15rem",
                      color: "#00695C",
                    }}
                  >
                    {p.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: "#6d4c41",
                      fontSize: "0.95rem",
                    }}
                  >
                    {p.especialidad}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#555",
                      fontSize: "0.875rem",
                      mb: 2,
                    }}
                  >
                    {p.bio}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#00695C",
                    textTransform: "none",
                    fontWeight: "bold",
                    borderRadius: 999,
                    px: 4,
                    fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                    "&:hover": {
                      bgcolor: "#00695C",
                    },
                  }}
                >
                  Ver perfil →
                </Button>
              </Card>
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography
            variant="body2"
            sx={{ color: "#a67a68", fontFamily: "'Edu NSW ACT Hand Pre', cursive" }}
          >
            ← Deslizá para conocer más docentes →
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TeacherSection;
