import { useParams, useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import AdminSidebarNav from "../../components/admincomponents/Dashboard/Navbaradmin";
import AdminSidebar from "../../components/admincomponents/Dashboard/Panel";
import StudentDetail from "../../components/admincomponents/Student/DetailStudent";

const mockAlumnos = [
  {
    nombre: "Valentina",
    apellido: "Ríos",
    dni: "45.678.901",
    edad: 8,
    telefonoMama: "11 2345-6789",
    telefonoPapa: "11 9876-5432",
    taller: "Pintura experimental",
    avatar: "https://i.pravatar.cc/150?img=12",
    cumple: "2015-05-20",
  },
  {
    nombre: "Sofía",
    apellido: "Gómez",
    dni: "40.123.456",
    edad: 10,
    telefonoMama: "11 1234-5678",
    telefonoPapa: "11 8765-4321",
    taller: "Cerámica creativa",
    avatar: "https://i.pravatar.cc/150?img=20",
    cumple: "2013-08-15",
  },
];

export default function StudentDetailPage() {
  const { id } = useParams(); 
  const alumno = mockAlumnos.find((a) => a.dni === id);

  const navigate = useNavigate();
  if (!alumno) {
    return <p>Alumno no encontrado</p>;
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
        activeIndex={1} 
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
            <StudentDetail alumno={alumno} />
          </Box>

          <Box flexShrink={0} width={{ xs: "100%", md: 350 }}>
            <AdminSidebar />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
