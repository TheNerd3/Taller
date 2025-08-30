import { Box, Container, Typography } from "@mui/material";

const galeriaData = [
    {
        titulo: "Talleres",
        imagenes: [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
            "https://images.unsplash.com/photo-1581090700227-1e8a0c38ec5d",
            "https://images.unsplash.com/photo-1601041421610-3f6a9a0a6d39",
            "https://images.unsplash.com/photo-1515169067865-5387ec356754",
            "https://images.unsplash.com/photo-1527259211243-8d8adf3f9d9b",
            "https://images.unsplash.com/photo-1615398431525-3e6a1f3c878c",
        ],
    },
    {
        titulo: "Eventos Especiales",
        imagenes: [
            "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
            "https://images.unsplash.com/photo-1534531688091-a458330f2366",
            "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33",
            "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
        ],
    },
    {
        titulo: "Obras de Alumn@s",
        imagenes: [
            "https://images.unsplash.com/photo-1563201181-c47eeb4b5318",
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
            "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b",
            "https://images.unsplash.com/photo-1621609771401-07d5d9b3efb7",
        ],
    },
];

const GaleriaSliderHorizontal = () => {
    return (
        <Box sx={{ backgroundColor: "rgba(224, 242, 241, 0.3)", py: 8 }}>
            <Container maxWidth="lg">
                {galeriaData.map((seccion, i) => (
                    <Box key={i} sx={{ mb: 10 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                mb: 4,
                                textAlign: "center",
                                color: "#00A78E",
                                fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                            }}
                        >
                            {seccion.titulo}
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                overflowX: "auto",
                                gap: 3,
                                px: 1,
                                py: 1,
                                height: 220,
                                scrollSnapType: "x mandatory",
                                "&::-webkit-scrollbar": {
                                    height: 6,
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    backgroundColor: "#00A78E",
                                    borderRadius: 10,
                                },
                            }}
                        >
                            {seccion.imagenes.map((img, index) => (
                                <Box
                                    key={index}
                                    component="img"
                                    src={`${img}?auto=format&fit=crop&w=800&q=80`}
                                    alt=""
                                    loading="lazy"
                                    sx={{
                                        flex: "0 0 auto",
                                        width: { xs: 240, sm: 280, md: 300 },
                                        height: 200,
                                        objectFit: "cover",
                                        borderRadius: 3,
                                        scrollSnapAlign: "start",
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                        cursor: "pointer",
                                        "&:hover": {
                                            transform: "scale(1.03)",
                                            boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                                        },
                                    }}
                                />
                            ))}
                        </Box>

                        <Box sx={{ textAlign: "center", mt: 2 }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                                    color: "#a67a68",
                                }}
                            >
                                ← Deslizá para ver más →
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Container>
        </Box>
    );
};

export default GaleriaSliderHorizontal;
