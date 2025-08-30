// components/ProfileCardsTeachers.jsx
import {
    Box,
    Card,
    CardContent,
    Avatar,
    Typography,
    Chip,
    Button,
    Stack,
    Tooltip,
    Divider,
} from "@mui/material";
import { useState } from "react";
import AddTeacherModal from "./AddTeachers";
import { useNavigate } from "react-router-dom";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

// Lista de docentes
const docentes = [
    {
        nombre: "María",
        apellido: "Pérez",
        telefono: "11 2345-6789",
        talleres: [
            { nombre: "Pintura experimental", horario: "Lunes de 17:00 a 18:30", alumnos: 8 },
            { nombre: "Dibujo creativo", horario: "Miércoles de 15:00 a 16:30", alumnos: 12 },
        ],
        avatar: "https://i.pravatar.cc/150?img=35",
        dni: "12345678",
    },
    {
        nombre: "Carlos",
        apellido: "Gómez",
        telefono: "11 1234-5678",
        talleres: [
            { nombre: "Cerámica creativa", horario: "Martes de 10:00 a 11:30", alumnos: 10 },
        ],
        avatar: "https://i.pravatar.cc/150?img=48",
        dni: "87654321",
    },
];

// Extraer talleres únicos para filtros
const talleres = [
    ...new Set(docentes.flatMap((d) => d.talleres.map((t) => t.nombre)))
];

const TeachersCards = () => {
    const navigate = useNavigate();
    const [tallerSeleccionado, setTallerSeleccionado] = useState("Todos");
    const [openModal, setOpenModal] = useState(false);

    const docentesFiltrados =
        tallerSeleccionado === "Todos"
            ? docentes
            : docentes.filter((d) =>
                d.talleres.some((t) => t.nombre === tallerSeleccionado)
            );

    return (
        <Box>
            <Typography variant="h4" sx={{ color: "#000" }} fontWeight={600} mb={3}>
                Panel de Docentes
            </Typography>

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
                {talleres.map((taller) => (
                    <Chip
                        key={taller}
                        label={taller}
                        clickable
                        onClick={() => setTallerSeleccionado(taller)}
                        sx={{
                            bgcolor: tallerSeleccionado === taller ? "#00695C" : "#f0f0f0",
                            color: tallerSeleccionado === taller ? "white" : "#000",
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
                    + Agregar Docente
                </Button>
            </Stack>

            <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center">
                {docentesFiltrados.map((docente, i) => (
                    <Card
                        key={i}
                        sx={{
                            width: 320,
                            borderRadius: 4,
                            boxShadow: 4,
                            textAlign: "left",
                            bgcolor: "#fff",
                            p: 2,
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                            <Avatar
                                src={docente.avatar}
                                sx={{ width: 60, height: 60 }}
                            />
                            <Box>
                                <Typography variant="h6" fontWeight={700}>
                                    {docente.nombre} {docente.apellido}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    display="flex"
                                    alignItems="center"
                                    gap={0.5}
                                >
                                    <LocalPhoneRoundedIcon fontSize="small" /> {docente.telefono}
                                </Typography>
                            </Box>
                        </Stack>

                        <Divider sx={{ mb: 1 }} />

                        <Typography
                            variant="body2"
                            fontWeight={600}
                            color="text.secondary"
                            display="flex"
                            alignItems="center"
                            mb={1}
                            gap={1}
                        >
                            <GroupsRoundedIcon fontSize="small" /> Talleres asignados
                        </Typography>

                        <Stack spacing={0.8} mb={2}>
                            {docente.talleres.map((t, idx) => (
                                <Tooltip
                                    key={idx}
                                    title={`Da ${t.nombre} ${t.horario} • ${t.alumnos} alumnos`}
                                    placement="top"
                                >
                                    <Chip
                                        icon={<InfoRoundedIcon fontSize="small" />}
                                        label={`Da ${t.nombre} ${t.horario} • ${t.alumnos} alumnos`}
                                        size="small"
                                        sx={{
                                            fontSize: "0.8rem",
                                            px: 1.2,
                                            bgcolor: "#e0f2f1",
                                            fontWeight: 500,
                                        }}
                                    />
                                </Tooltip>
                            ))}
                        </Stack>

                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => navigate(`/admin/teacher/${docente.dni}`)}
                            sx={{
                                bgcolor: "#00695C",
                                textTransform: "none",
                                fontWeight: 600,
                                borderRadius: 2,
                            }}
                        >
                            Ver ficha
                        </Button>
                    </Card>
                ))}
            </Box>

            <AddTeacherModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                talleres={talleres}
            />
        </Box>
    );
};

export default TeachersCards;
