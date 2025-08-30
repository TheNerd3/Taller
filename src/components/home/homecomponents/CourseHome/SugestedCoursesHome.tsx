import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    Grid,
    Chip,
    IconButton
} from "@mui/material";
import {
    AccessTime,
    AttachMoney,
    Favorite,
    FavoriteBorder,
    Share,
    Visibility
} from "@mui/icons-material";
import { useState } from "react";

// Datos de talleres - en una app real vendría de una API
const todosLosTalleres = [
    {
        id: 2,
        titulo: "Retrato al Óleo",
        descripcion: "Aprendé proporciones, mezcla de colores y técnica de veladura para crear retratos realistas con profundidad.",
        imagen: "https://images.unsplash.com/photo-1513359574857-b9de6d3b8889?auto=format&fit=crop&w=800&q=80",
        precio: "$18.000",
        duracion: "10 semanas",
        categoria: "pintura",
        nivel: "Intermedio",
        docente: "Martín Pérez",
        modalidad: "Presencial",
        rating: 4.8,
        estudiantes: 45
    },
    {
        id: 3,
        titulo: "Cerámica Japonesa",
        descripcion: "Explorá el wabi-sabi y técnicas contemporáneas de alfarería inspiradas en la tradición japonesa.",
        imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
        precio: "$20.000",
        duracion: "12 semanas",
        categoria: "ceramica",
        nivel: "Principiante",
        docente: "Ana Kimura",
        modalidad: "Presencial",
        rating: 4.9,
        estudiantes: 32
    },
    {
        id: 4,
        titulo: "Acuarela Abstracta",
        descripcion: "Descubrí la fluidez y expresividad de la acuarela moderna con técnicas contemporáneas.",
        imagen: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80",
        precio: "$16.000",
        duracion: "6 semanas",
        categoria: "pintura",
        nivel: "Principiante",
        docente: "Sofia Martínez",
        modalidad: "Presencial",
        rating: 4.7,
        estudiantes: 28
    },
    {
        id: 5,
        titulo: "Escultura en Madera",
        descripcion: "Trabajá con herramientas tradicionales y técnicas modernas para crear esculturas únicas.",
        imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80",
        precio: "$22.000",
        duracion: "14 semanas",
        categoria: "escultura",
        nivel: "Intermedio",
        docente: "Roberto Silva",
        modalidad: "Presencial",
        rating: 4.6,
        estudiantes: 18
    },
    {
        id: 6,
        titulo: "Arte Digital Experimental",
        descripcion: "Combiná tecnología y creatividad para explorar nuevas formas de expresión artística digital.",
        imagen: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=800&q=80",
        precio: "$19.000",
        duracion: "8 semanas",
        categoria: "digital",
        nivel: "Intermedio",
        docente: "Lucas Fernández",
        modalidad: "Online",
        rating: 4.5,
        estudiantes: 67
    }
];

const TalleresSugeridos = ({ cursoActual }: any) => {
    const [favorites, setFavorites] = useState(new Set());

    // Función para determinar talleres relacionados
    const getTalleresRelacionados = (cursoActual: any) => {
        let talleresFiltrados = todosLosTalleres;

        // Si el curso actual es de pintura, mostrar otros de pintura primero
        if (cursoActual.titulo.toLowerCase().includes('pintura')) {
            talleresFiltrados = todosLosTalleres.filter(taller =>
                taller.categoria === 'pintura' || taller.categoria === 'digital'
            );
        }

        // Si no hay suficientes talleres relacionados, agregar otros
        if (talleresFiltrados.length < 3) {
            const otrosTalleres = todosLosTalleres.filter(taller =>
                !talleresFiltrados.includes(taller)
            );
            talleresFiltrados = [...talleresFiltrados, ...otrosTalleres];
        }

        // Retornar solo los primeros 3
        return talleresFiltrados.slice(0, 3);
    };

    const talleresRelacionados = getTalleresRelacionados(cursoActual);

    const toggleFavorite = (tallerId: any) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(tallerId)) {
                newFavorites.delete(tallerId);
            } else {
                newFavorites.add(tallerId);
            }
            return newFavorites;
        });
    };

    const handleShare = (taller: any) => {
        if (navigator.share) {
            navigator.share({
                title: taller.titulo,
                text: taller.descripcion,
                url: window.location.href
            });
        } else {
            // Fallback para navegadores que no soportan Web Share API
            navigator.clipboard.writeText(`${taller.titulo} - ${window.location.href}`);
            // Aquí podrías mostrar un toast de confirmación
        }
    };

    return (
        <Box sx={{ mt: 8 }}>
            <Typography
                variant="h4"
                sx={{
                    fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                    fontWeight: 'bold',
                    color: '#00695C',
                    mb: 2,
                    textAlign: 'center'
                }}
            >
                Talleres que te pueden interesar
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                    color: 'text.secondary',
                    textAlign: 'center',
                    mb: 4,
                    maxWidth: 600,
                    mx: 'auto'
                }}
            >
                Descubrí otros talleres creativos que complementan tu aprendizaje artístico
            </Typography>

            <Grid container spacing={4}>
                {talleresRelacionados.map((taller) => (
                    <Grid item xs={12} sm={6} md={4} key={taller.id}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 3,
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                    transform: 'translateY(-12px)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                                },
                                position: 'relative'
                            }}
                        >
                            {/* Imagen con overlay de acciones */}
                            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                <CardMedia
                                    component="img"
                                    height="220"
                                    image={taller.imagen}
                                    alt={taller.titulo}
                                    sx={{
                                        transition: 'transform 0.4s ease',
                                        '&:hover': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                />

                                {/* Overlay con acciones */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(135deg, transparent 60%, rgba(0,0,0,0.4) 100%)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-end',
                                        p: 2,
                                        '&:hover': {
                                            opacity: 1
                                        }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        <IconButton
                                            size="small"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleFavorite(taller.id);
                                            }}
                                            sx={{
                                                bgcolor: 'rgba(255,255,255,0.9)',
                                                '&:hover': {
                                                    bgcolor: 'white',
                                                    transform: 'scale(1.1)'
                                                }
                                            }}
                                        >
                                            {favorites.has(taller.id) ?
                                                <Favorite sx={{ color: '#e91e63', fontSize: 20 }} /> :
                                                <FavoriteBorder sx={{ fontSize: 20 }} />
                                            }
                                        </IconButton>

                                        <IconButton
                                            size="small"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleShare(taller);
                                            }}
                                            sx={{
                                                bgcolor: 'rgba(255,255,255,0.9)',
                                                '&:hover': {
                                                    bgcolor: 'white',
                                                    transform: 'scale(1.1)'
                                                }
                                            }}
                                        >
                                            <Share sx={{ fontSize: 20 }} />
                                        </IconButton>
                                    </Box>
                                </Box>

                                {/* Badges superiores */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 12,
                                        left: 12,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 1
                                    }}
                                >
                                    <Chip
                                        label={taller.modalidad}
                                        size="small"
                                        sx={{
                                            bgcolor: taller.modalidad === 'Online' ? '#2196f3' : '#00A78E',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '0.75rem'
                                        }}
                                    />
                                    <Chip
                                        label={taller.nivel}
                                        size="small"
                                        sx={{
                                            bgcolor: 'rgba(0,0,0,0.7)',
                                            color: 'white',
                                            fontSize: '0.75rem'
                                        }}
                                    />
                                </Box>
                            </Box>

                            <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                                            fontWeight: 'bold',
                                            color: '#00A78E',
                                            mb: 1,
                                            lineHeight: 1.3
                                        }}
                                    >
                                        {taller.titulo}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                                            mb: 2,
                                            lineHeight: 1.5,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {taller.descripcion}
                                    </Typography>

                                    {/* Información del docente y estadísticas */}
                                    <Box sx={{ mb: 2 }}>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                                                color: 'text.secondary',
                                                mb: 1
                                            }}
                                        >
                                            <strong>Docente:</strong> {taller.docente}
                                        </Typography>

                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                <Typography variant="body2" sx={{ color: '#ffa726', fontWeight: 'bold' }}>
                                                    ★ {taller.rating}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                <Visibility sx={{ fontSize: 16, color: 'text.secondary' }} />
                                                <Typography variant="body2" color="text.secondary">
                                                    {taller.estudiantes}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Información de precio y duración */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <AttachMoney sx={{ fontSize: 20, color: '#00A78E' }} />
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: '#00A78E',
                                                fontWeight: 'bold',
                                                fontFamily: "'Edu NSW ACT Hand Pre', cursive"
                                            }}
                                        >
                                            {taller.precio}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <AccessTime sx={{ fontSize: 16, color: 'text.secondary' }} />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive" }}
                                        >
                                            {taller.duracion}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Botones de acción */}
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            bgcolor: '#00A78E',
                                            flex: 1,
                                            fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                                            fontWeight: 'bold',
                                            textTransform: 'none',
                                            '&:hover': {
                                                bgcolor: '#00695C',
                                                transform: 'translateY(-1px)'
                                            }
                                        }}
                                    >
                                        Ver detalles
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            color: '#00A78E',
                                            borderColor: '#00A78E',
                                            fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                                            textTransform: 'none',
                                            '&:hover': {
                                                backgroundColor: '#00A78E20',
                                                borderColor: '#00A78E'
                                            }
                                        }}
                                    >
                                        Info
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Call to action para ver todos los talleres */}
            <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Button
                    variant="outlined"
                    size="large"
                    sx={{
                        color: '#00A78E',
                        borderColor: '#00A78E',
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                        fontWeight: 'bold',
                        textTransform: 'none',
                        borderRadius: 999,
                        '&:hover': {
                            backgroundColor: '#00A78E',
                            color: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 16px rgba(0,167,142,0.3)'
                        }
                    }}
                >
                    Ver todos los talleres disponibles
                </Button>
            </Box>
        </Box>
    );
};

export default TalleresSugeridos;