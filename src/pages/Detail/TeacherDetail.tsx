import { useParams, useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import AdminSidebarNav from "../../components/admincomponents/Dashboard/Navbaradmin";
import AdminSidebar from "../../components/admincomponents/Dashboard/Panel";
import DetailTeachers from "../../components/admincomponents/Teacher/DetailTeacher";

const mockTeachers = [
    {
        dni: "12345678",
        nombre: "María",
        apellido: "Pérez",
        telefono: "11 2345-6789",
        talleres: [
            { nombre: "Pintura experimental", horario: "Lunes de 17:00 a 18:30", alumnos: 8 },
            { nombre: "Dibujo creativo", horario: "Miércoles de 15:00 a 16:30", alumnos: 12 },
        ],
        avatar: "https://i.pravatar.cc/150?img=35",
    },
    {
        dni: "87654321",
        nombre: "María",
        apellido: "Pérez",
        telefono: "11 2345-6789",
        talleres: [
            { nombre: "Pintura experimental", horario: "Lunes de 17:00 a 18:30", alumnos: 8 },
            { nombre: "Dibujo creativo", horario: "Miércoles de 15:00 a 16:30", alumnos: 12 },
        ],
        avatar: "https://i.pravatar.cc/150?img=35",
    },
];

export default function TeacherDetailPage() {
    const { id } = useParams();
    const docente = mockTeachers.find((d) => d.dni === id);

    const navigate = useNavigate();
    if (!docente) {
        return <p>Docente no encontrado</p>;
    }

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
            <AdminSidebarNav
                activeIndex={2}
                onNavChange={() => navigate('/admin')}
            />
            <Box
                sx={{
                    minHeight: "100vh",
                    pl: { xs: 4, md: 14 },
                    pr: 4,
                    pt: 4,
                }}
            >
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={4}
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Box flex={1}>
                        <DetailTeachers docente={docente} />
                    </Box>

                    <Box flexShrink={0} width={{ xs: "100%", md: 350 }}>
                        <AdminSidebar />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}
