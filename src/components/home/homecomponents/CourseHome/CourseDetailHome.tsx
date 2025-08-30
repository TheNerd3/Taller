import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
  Chip,
  Grid,
  Divider,
  Paper,
  Stack,
} from "@mui/material";
import {
  CalendarToday,
  AccessTime,
  People,
  School,
  PhotoLibrary,
  LocationOn,
  AttachMoney
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import GalleryModalHome from "./GaleryModalHome";
// import TalleresSugeridos from "./TalleresSugeridos";

// Datos de ejemplo - en una app real vendrían de props, router params o API
const cursoDetalle = {
  id: 1,
  titulo: "Pintura Experimental",
  descripcion: "Jugá con texturas, formas y materiales poco convencionales en este taller que te llevará a explorar nuevas dimensiones del arte.",
  descripcionLarga: "Este taller está diseñado para artistas que buscan romper con las técnicas tradicionales y explorar nuevos horizontes creativos. Trabajaremos con materiales no convencionales, texturas innovadoras y técnicas experimentales que te permitirán desarrollar tu propio estilo único. Aprenderás a combinar diferentes medios, crear efectos visuales sorprendentes y expresar tu creatividad sin límites.",
  imagen: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
  galeria: [
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513359574857-b9de6d3b8889?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=800&q=80"
  ],
  inicio: "10 de julio",
  cupo: 12,
  docente: "Laura Gómez",
  precio: "$15.000",
  duracion: "8 semanas",
  modalidad: "Presencial",
  ubicacion: "Atelier Arte Vivo - Sala Norte",
  horarios: "Martes y Jueves 18:00 - 20:00",
  materiales: "Incluidos en el precio del curso",
  nivel: "Principiante a Intermedio",
  programa: [
    "Técnicas de texturizado experimental",
    "Trabajo con materiales mixtos",
    "Creación de efectos visuales únicos",
    "Desarrollo del estilo personal",
    "Composición no tradicional",
    "Finalización y presentación de obras"
  ]
};

const CursoDetailPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Hand+Pre:wght@400..700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleOpenModal = (index = 0) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header con imagen principal */}
      <Card sx={{ 
        borderRadius: 4, 
        overflow: 'hidden', 
        mb: 4,
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
      }}>
        <Box sx={{ position: 'relative', height: { xs: 300, md: 400 } }}>
          <CardMedia
            component="img"
            height="100%"
            image={cursoDetalle.imagen}
            alt={cursoDetalle.titulo}
            sx={{ objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(0,105,92,0.8) 0%, rgba(0,167,142,0.6) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ textAlign: 'center', color: 'white', px: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                  fontWeight: 'bold',
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                {cursoDetalle.titulo}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                  opacity: 0.9,
                  maxWidth: 600,
                  margin: '0 auto',
                  fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}
              >
                {cursoDetalle.descripcion}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>

      <Grid container spacing={4}>
        {/* Información principal */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, borderRadius: 3, mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                fontWeight: 'bold',
                color: '#00695C',
                mb: 3
              }}
            >
              Sobre este taller
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                lineHeight: 1.8,
                color: 'text.primary',
                mb: 4,
                fontSize: '1.1rem'
              }}
            >
              {cursoDetalle.descripcionLarga}
            </Typography>

            {/* Programa del curso */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                  fontWeight: 'bold',
                  color: '#00695C',
                  mb: 2
                }}
              >
                ¿Qué vas a aprender?
              </Typography>
              <Grid container spacing={1}>
                {cursoDetalle.programa.map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: '#00A78E',
                          mr: 2,
                          flexShrink: 0
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                          color: 'text.primary'
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Galería de fotos */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhotoLibrary sx={{ color: '#00A78E', mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                    fontWeight: 'bold',
                    color: '#00695C'
                  }}
                >
                  Galería del taller
                </Typography>
              </Box>
              
              <Grid container spacing={2}>
                {cursoDetalle.galeria.slice(0, 6).map((imagen, index) => (
                  <Grid item xs={4} sm={2} key={index}>
                    <Card 
                      sx={{ 
                        cursor: 'pointer', 
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                        }
                      }}
                      onClick={() => handleOpenModal(index)}
                    >
                      <CardMedia
                        component="img"
                        height="80"
                        image={imagen}
                        alt={`Galería ${index + 1}`}
                        sx={{ objectFit: 'cover' }}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
              
              {cursoDetalle.galeria.length > 6 && (
                <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    color: '#00A78E',
                    borderColor: '#00A78E',
                    fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                    '&:hover': {
                      backgroundColor: '#00A78E20'
                    }
                  }}
                  onClick={() => handleOpenModal(0)}
                >
                  Ver todas las fotos ({cursoDetalle.galeria.length})
                </Button>
              )}
            </Box>
          </Paper>
        </Grid>

        {/* Sidebar con información del curso */}
        <Grid  xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3, position: 'sticky', top: 20 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                fontWeight: 'bold',
                color: '#00695C',
                mb: 3,
                textAlign: 'center'
              }}
            >
              Información del curso
            </Typography>

            <Stack spacing={2.5}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AttachMoney sx={{ color: '#00A78E' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive" }}>
                    Precio
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive", fontWeight: 'bold', color: '#00A78E' }}>
                    {cursoDetalle.precio}
                  </Typography>
                </Box>
              </Box>

              <Divider />

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CalendarToday sx={{ color: '#00A78E' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive" }}>
                    Fecha de inicio
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive", fontWeight: 'bold' }}>
                    {cursoDetalle.inicio}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AccessTime sx={{ color: '#00A78E' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive" }}>
                    Duración
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive", fontWeight: 'bold' }}>
                    {cursoDetalle.duracion}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <People sx={{ color: '#00A78E' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive" }}>
                    Cupo disponible
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive", fontWeight: 'bold' }}>
                    {cursoDetalle.cupo} personas
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <School sx={{ color: '#00A78E' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive" }}>
                    Docente
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive", fontWeight: 'bold' }}>
                    {cursoDetalle.docente}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOn sx={{ color: '#00A78E' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive" }}>
                    Ubicación
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive", fontWeight: 'bold' }}>
                    {cursoDetalle.ubicacion}
                  </Typography>
                </Box>
              </Box>
            </Stack>

            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  bgcolor: '#00A78E',
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                  '&:hover': {
                    bgcolor: '#00695C',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                  }
                }}
              >
                Inscribirme Ahora
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                fullWidth
                sx={{
                  color: '#00A78E',
                  borderColor: '#00A78E',
                  fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                  '&:hover': {
                    backgroundColor: '#00A78E20'
                  }
                }}
              >
                Consultar por WhatsApp
              </Button>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Stack direction="row" spacing={1} justifyContent="center">
                <Chip 
                  label={cursoDetalle.modalidad} 
                  sx={{ 
                    bgcolor: '#00A78E', 
                    color: 'white',
                    fontFamily: "'Edu NSW ACT Hand Pre', cursive"
                  }} 
                />
                <Chip 
                  label={cursoDetalle.nivel} 
                  sx={{ 
                    bgcolor: '#00695C', 
                    color: 'white',
                    fontFamily: "'Edu NSW ACT Hand Pre', cursive"
                  }} 
                />
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Talleres sugeridos */}
      <TalleresSugeridos cursoActual={cursoDetalle} />

      {/* Modal de galería */}
      <GalleryModalHome
        open={modalOpen}
        onClose={handleCloseModal}
        images={cursoDetalle.galeria}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />
    </Container>
  );
};

export default CursoDetailPage;