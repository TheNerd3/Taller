import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
  Chip,
  Divider,
} from "@mui/material";
import {
  CalendarToday,
  AccessTime,
  People,
  School,
} from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";

const cursos = [
  {
    titulo: "Pintura Experimental",
    descripcion: "Jugá con texturas, formas y materiales poco convencionales.",
    imagen: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
    inicio: "10 de julio",
    cupo: 12,
    docente: "Laura Gómez",
    precio: "$15.000",
    duracion: "8 semanas",
    modalidad: "Presencial"
  },
  {
    titulo: "Retrato al Óleo",
    descripcion: "Aprendé proporciones, mezcla de colores y técnica de veladura.",
    imagen: "https://images.unsplash.com/photo-1513359574857-b9de6d3b8889?auto=format&fit=crop&w=800&q=80",
    inicio: "15 de julio",
    cupo: 8,
    docente: "Martín Pérez",
    precio: "$18.000",
    duracion: "10 semanas",
    modalidad: "Presencial"
  },
  {
    titulo: "Retrato",
    descripcion: "Aprendé proporciones, mezcla de colores y técnica de veladura.",
    imagen: "https://images.unsplash.com/photo-1513359574857-b9de6d3b8889?auto=format&fit=crop&w=800&q=80",
    inicio: "15 de julio",
    cupo: 8,
    docente: "Martín Pérez",
    precio: "$18.000",
    duracion: "10 semanas",
    modalidad: "Presencial"
  },
  {
    titulo: "Manualidades Creativas",
    descripcion: "Explorá técnicas de reciclaje y creación con materiales cotidianos.",
    imagen: "https://images.unsplash.com/photo-1513359574857-b9de6d3b8889?auto=format&fit=crop&w=800&q=80",
    inicio: "15 de julio",
    cupo: 8,
    docente: "Martín Pérez",
    precio: "$18.000",
    duracion: "10 semanas",
    modalidad: "Presencial"
  },
  {
    titulo: "Pintura Experimental",
    descripcion: "Jugá con texturas, formas y materiales poco convencionales.",
    imagen: "https://images.unsplash.com/photo-1513359574857-b9de6d3b8889?auto=format&fit=crop&w=800&q=80",
    inicio: "15 de julio",
    cupo: 8,
    docente: "Martín Pérez",
    precio: "$18.000",
    duracion: "10 semanas",
    modalidad: "Presencial"
  },
  {
    titulo: "Cerámica Japonesa",
    descripcion: "Explorá el wabi-sabi y técnicas contemporáneas de alfarería.",
    imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
    inicio: "20 de julio",
    cupo: 10,
    docente: "Ana Kimura",
    precio: "$20.000",
    duracion: "12 semanas",
    modalidad: "Presencial"
  }
];


const CursosSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Hand+Pre:wght@400..700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return (
    <Container maxWidth="xl" sx={{ mt: { xs: 6, md: 10 }, px: { xs: 2, sm: 3 } }}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 4, md: 6 },
          color: "#00695C",
          fontWeight: 600,
          textAlign: "center",
          fontSize: { xs: '1.8rem', sm: '2.125rem', md: '2.5rem' },
          fontFamily: "'Edu NSW ACT Hand Pre', cursive"

        }}
      >
        Nuestros Cursos
      </Typography>

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: { xs: 2, sm: 3, md: 4 },
          py: 3,
          px: 2,
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": {
            height: 8,
            backgroundColor: "#f1f1f1",
            borderRadius: 4
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#00A78E",
            borderRadius: 4,
           
          }
        }}
      >
        {cursos.map((curso, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: hoveredCard === index
                ? { xs: 380, sm: 450, md: 500 }
                : { xs: 280, sm: 320, md: 350 },
              flex: "0 0 auto",
              scrollSnapAlign: "start",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: hoveredCard === index ? 10 : 1,
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Card
              sx={{
                width: "100%",
                height: 420,
                borderRadius: 3,
                boxShadow: hoveredCard === index
                  ? "0 20px 40px rgba(0,0,0,0.15)"
                  : "0 4px 12px rgba(0,0,0,0.1)",
                bgcolor: "#fff8f5",
                display: "flex",
                flexDirection: hoveredCard === index ? "row" : "column",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                overflow: "hidden",
                border: hoveredCard === index ? "2px solid #00A78E" : "2px solid transparent",
              }}
            >
              <Box sx={{
                position: "relative",
                overflow: "hidden",
                width: hoveredCard === index ? "40%" : "100%",
                minWidth: hoveredCard === index ? 200 : "auto",
              }}>
                <CardMedia
                  component="img"
                  height={hoveredCard === index ? "420" : "180"}
                  image={curso.imagen}
                  alt={curso.titulo}
                  sx={{
                    transition: "all 0.4s ease",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                {hoveredCard === index && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Chip
                      label={curso.modalidad}
                      size="small"
                      sx={{
                        bgcolor: "#00A78E",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    />
                    <Chip
                      label={curso.precio}
                      size="small"
                      sx={{
                        bgcolor: "#00A78E",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    />
                  </Box>
                )}
              </Box>

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  p: { xs: 2, sm: 3 },
                  width: hoveredCard === index ? "60%" : "100%",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                      fontWeight: "bold",
                      color: "#00A78E",
                      mb: 1.5,
                      fontSize: { xs: '1.1rem', sm: '1.25rem' }
                    }}
                  >
                    {curso.titulo}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                      mb: 2,
                      lineHeight: 1.6,
                      fontSize: { xs: '0.875rem', sm: '0.95rem' }
                    }}
                  >
                    {curso.descripcion}
                  </Typography>
                </Box>

                {/* Información adicional que aparece en hover */}
                {hoveredCard === index && (
                  <Box
                    sx={{
                      animation: "slideInRight 0.3s ease-in-out",
                      "@keyframes slideInRight": {
                        from: {
                          opacity: 0,
                          transform: "translateX(20px)"
                        },
                        to: {
                          opacity: 1,
                          transform: "translateX(0)"
                        }
                      }
                    }}
                  >
                    <Divider sx={{ my: 2, bgcolor: "#00695C" }} />

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CalendarToday sx={{ fontSize: 18, color: "#00A78E" }} />
                        <Typography variant="body2" sx={{
                          fontWeight: "bold", fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                          color: "#00A78E"
                        }}>
                          Inicio:
                        </Typography>
                        <Typography variant="body2" color="text.primary" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive" }}>
                          {curso.inicio}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <AccessTime sx={{ fontSize: 18, color: "#00A78E" }} />
                        <Typography variant="body2" sx={{
                          fontWeight: "bold", color: "#00A78E", fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                        }}>
                          Duración:
                        </Typography>
                        <Typography variant="body2" color="text.primary" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive" }}>
                          {curso.duracion}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <People sx={{ fontSize: 18, color: "#00A78E" }} />
                        <Typography variant="body2" sx={{
                          fontWeight: "bold", color: "#00A78E", fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                        }}>
                          Cupo:
                        </Typography>
                        <Typography variant="body2" color="text.primary" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive" }}>
                          {curso.cupo} personas
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <School sx={{ fontSize: 18, color: "#00A78E" }} />
                        <Typography variant="body2" sx={{
                          fontWeight: "bold", color: "#00A78E", fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                        }}>
                          Docente:
                        </Typography>
                        <Typography variant="body2" color="text.primary" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive" }}>
                          {curso.docente}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ my: 2, bgcolor: "#00A78E" }} />
                  </Box>
                )}

                <Box textAlign="center" sx={{ mt: hoveredCard === index ? 1 : "auto" }}>
                  <Button
                    variant="contained"
                    size={hoveredCard === index ? "medium" : "small"}
                    sx={{
                      bgcolor:"#00A78E",
                      color: "white",
                      textTransform: "none",
                      borderRadius: 999,
                      px: hoveredCard === index ? 4 : 3,
                      py: hoveredCard === index ? 1.2 : 0.8,
                      fontSize: hoveredCard === index ? "1rem" : "0.875rem",
                      fontWeight: "bold",
                      transition: "all 0.3s ease",
                      fontFamily: "'Edu NSW ACT Hand Pre', cursive",

                      "&:hover": {
                        bgcolor: "#00695C",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
                      },
                    }}
                  >
                    {hoveredCard === index ? "Inscribirme Ahora" : "Ver más"}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Indicador de scroll */}
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Typography variant="body2" color="text.secondary" sx={{
          fontFamily: "'Edu NSW ACT Hand Pre', cursive"
        }}>
          ← Deslizá para ver más cursos →
        </Typography>
      </Box>
    </Container>
  );
};

export default CursosSection;