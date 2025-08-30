import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import CursosSection from "../components/home/homecomponents/CourseHome/CourseCards";
import Navbar from "../components/home/navbarhome/Navbarhome";
import '../App.css';
import {
    Box,
    Container,
    Typography,
    Button,
} from "@mui/material";
import TeacherSection from "../components/home/homecomponents/Teachers/TeachersHome";
import GaleriaPorSecciones from "../components/home/homecomponents/Pictures";

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Hand+Pre:wght@400..700&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundImage: "url('/Fondo4K.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundAttachment: "fixed",
                bgcolor: "#fff5f0",
            }}
        >
            {/* NAVBAR */}
            <Navbar />

            {/* SECCIÓN: SLOGAN PRINCIPAL */}
            <Box
                id="inicio"
                sx={{
                    py: { xs: 6, sm: 8, md: 10 },
                    px: { xs: 2, sm: 3 },
                    textAlign: "center",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                        color: "#00695C",
                        mb: 2,
                        fontSize: {
                            xs: "2.5rem",
                            sm: "3.5rem",
                            md: "4rem",
                            lg: "4.5rem",
                        },
                        lineHeight: 1.2,
                    }}
                >
                    El arte vive en vos
                </Typography>
                <Container maxWidth="md">
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "'Edu NSW ACT Hand Pre', cursive",

                            color: "#3E2723",
                            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                            lineHeight: 1.5,
                            px: { xs: 1, sm: 2 },
                        }}
                    >
                        Un espacio para crear, explorar y expresarte con libertad. Talleres abiertos a todas las edades y niveles.
                    </Typography>
                </Container>
            </Box>
            {/* SECCIÓN: FOTOS */}
            <Box id="pictures" >
                <GaleriaPorSecciones />
            </Box>
            {/* SECCIÓN: SOBRE NOSOTROS */}
            <Box
                id="sobre-nosotros"
                sx={{
                    py: { xs: 4, sm: 4, md: 4 },
                    px: { xs: 2, sm: 3 },
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            color: "#00695C",
                            fontWeight: 600,
                            mb: 3,
                            fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                            fontSize: { xs: "1.8rem", sm: "2.125rem", md: "2.5rem" },
                        }}
                    >
                        Sobre Nosotros
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                            textAlign: "center",
                            color: "#3E2723",
                            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                            lineHeight: 1.5,
                            px: { xs: 1, sm: 2 },
                        }}
                    >
                        Somos un equipo de artistas y docentes apasionades por compartir el arte con la comunidad.
                        En nuestro taller conviven la pintura, la cerámica, el dibujo, el diseño y la libertad creativa.
                    </Typography>

                </Container>
                <TeacherSection />
            </Box>


            <Box id="talleres" >
                <CursosSection />
            </Box>

            {/* SECCIÓN: INGRESA */}
            <Box
                id="ingresa"
                sx={{
                    py: { xs: 6, sm: 8, md: 10 },
                    px: { xs: 2, sm: 3 },
                    backgroundColor: "rgba(224, 242, 241, 0.37)",
                }}
            >
                <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            color: "#00695C",
                            fontWeight: 600,
                            mb: 3,
                            fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                            fontSize: { xs: "1.8rem", sm: "2.125rem", md: "2.5rem" },
                        }}
                    >
                        ¿Sos parte del taller?
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                            textAlign: "center",
                            color: "#3E2723",
                            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                            lineHeight: 1.5,
                            px: { xs: 1, sm: 2 },
                        }}
                    >
                        Ingresá con tu cuenta para ver horarios, materiales, y noticias exclusivas.
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/auth")}
                        sx={{
                            bgcolor: "#009688",
                            "&:hover": { bgcolor: "#00796B" },
                            color: "white",
                            textTransform: "none",
                            borderRadius: 999,
                            px: { xs: 3, sm: 4 },
                            py: { xs: 1, sm: 1.5 },
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            fontFamily: "'Edu NSW ACT Hand Pre', cursive",

                        }}
                    >
                        Ingresar
                    </Button>
                </Container>
            </Box>
        </Box>
    );
}

export default Home;
