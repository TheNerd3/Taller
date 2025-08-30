import {
    Box,
    Card,
    CardContent,
    Typography,
    Chip,
    Button,
    Stack,
    Divider,
} from "@mui/material";
import { useState } from "react";
import AddTallerModal from "./AddTaller";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { useNavigate } from "react-router-dom";

// Datos de ejemplo
const talleresData = [
    {
        nombre: "Pintura experimental",
        docente: "María Pérez",
        auxiliar: true,
        fechaInicio: "2025-07-10",
        fechaFin: "2025-12-15",
        cantidadAlumnos: 14,
    },
    {
        nombre: "Cerámica creativa",
        docente: "Carlos Gómez",
        auxiliar: false,
        fechaInicio: "2025-08-01",
        fechaFin: "2025-11-30",
        cantidadAlumnos: 10,
    },
    {
        nombre: "Dibujo avanzado",
        docente: "María Pérez",
        auxiliar: true,
        fechaInicio: "2025-09-05",
        fechaFin: "2025-12-10",
        cantidadAlumnos: 12,
    },
];

// Extraer nombres únicos para filtros
const nombresUnicos = [
    ...new Set(talleresData.map((t) => t.nombre)),
];

const TalleresCards = () => {
    const [openModal, setOpenModal] = useState(false);
    const [tallerSeleccionado, setTallerSeleccionado] = useState("Todos");
    const navigate = useNavigate();
    const talleresFiltrados =
        tallerSeleccionado === "Todos"
            ? talleresData
            : talleresData.filter((t) => t.nombre === tallerSeleccionado);

    return (
        <Box>
            <Typography variant="h4" fontWeight={600} mb={3}>
                Panel de Talleres
            </Typography>

            {/* Filtros con chips */}
            <Stack
                direction="row"
                spacing={2}
                mb={3}
                flexWrap="wrap"
                justifyContent="center"
            >
                <Chip
                    label="Todos"
                    clickable
                    onClick={() => setTallerSeleccionado("Todos")}
                    sx={{
                        bgcolor: tallerSeleccionado === "Todos" ? "#00695C" : "#f0f0f0",
                        color: tallerSeleccionado === "Todos" ? "white" : "#000",
                        fontWeight: 500,
                        px: 2,
                        borderRadius: "12px",
                        cursor: "pointer",
                    }}
                />
                {nombresUnicos.map((nombre) => (
                    <Chip
                        key={nombre}
                        label={nombre}
                        clickable
                        onClick={() => setTallerSeleccionado(nombre)}
                        sx={{
                            bgcolor: tallerSeleccionado === nombre ? "#00695C" : "#f0f0f0",
                            color: tallerSeleccionado === nombre ? "white" : "#000",
                            fontWeight: 500,
                            px: 2,
                            borderRadius: "12px",
                            cursor: "pointer",
                        }}
                    />
                ))}
                <Button
                    variant="contained"
                    onClick={() => setOpenModal(true)}
                    sx={{
                        ml: 2,
                        bgcolor: "#fff",
                        border: "2px solid #00695C",
                        color: "#00695C",
                        textTransform: "none",
                        fontWeight: 600,
                        height: 34,
                        borderRadius: "12px",
                        "&:hover": {
                            bgcolor: "#00695C",
                            color: "#fff",
                            border: "2px solid #fff",
                        },
                    }}
                >
                    + Agregar taller
                </Button>
            </Stack>

            {/* Tarjetas */}
            <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center">
                {talleresFiltrados.map((taller, i) => (
                    <Card
                        key={i}
                        sx={{
                            width: 320,
                            borderRadius: 4,
                            boxShadow: 3,
                            bgcolor: "#fff",
                            px: 2,
                            py: 2,
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="h6"
                                fontWeight={700}
                                color="primary"
                                gutterBottom
                            >
                                🎨 {taller.nombre}
                            </Typography>

                            <Stack spacing={1.2}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <PersonRoundedIcon sx={{ color: "#555", fontSize: 20 }} />
                                    <Typography fontSize={14}>
                                        <strong>Docente:</strong> {taller.docente}
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={1}>
                                    <GroupRoundedIcon sx={{ color: "#555", fontSize: 20 }} />
                                    <Typography fontSize={14}>
                                        <strong>Auxiliar:</strong> {taller.auxiliar ? "Sí" : "No"}
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={1}>
                                    <CalendarMonthRoundedIcon sx={{ color: "#555", fontSize: 20 }} />
                                    <Typography fontSize={14}>
                                        <strong>Inicio:</strong>{" "}
                                        {new Date(taller.fechaInicio).toLocaleDateString("es-AR")}
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={1}>
                                    <EventAvailableRoundedIcon sx={{ color: "#555", fontSize: 20 }} />
                                    <Typography fontSize={14}>
                                        <strong>Fin:</strong>{" "}
                                        {new Date(taller.fechaFin).toLocaleDateString("es-AR")}
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={1}>
                                    <PeopleAltRoundedIcon sx={{ color: "#555", fontSize: 20 }} />
                                    <Typography fontSize={14}>
                                        <strong>Alumnos:</strong> {taller.cantidadAlumnos}
                                    </Typography>
                                </Box>
                            </Stack>

                            <Divider sx={{ my: 2 }} />

                            <Button
                                variant="outlined"
                                fullWidth
                                onClick={() => {
                                    navigate(`/admin/taller/${encodeURIComponent(taller.nombre)}`);
                                }}
                                sx={{
                                    textTransform: "none",
                                    borderRadius: 2,
                                    fontWeight: 600,
                                    borderColor: "#00695C",
                                    color: "#00695C",
                                    "&:hover": {
                                        bgcolor: "#00695C",
                                        color: "white",
                                    },
                                }}
                            >
                                Ver detalles
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            <AddTallerModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                docentes={[...new Set(talleresData.map((t) => t.docente))]}
            />
        </Box>
    );
};

export default TalleresCards;
