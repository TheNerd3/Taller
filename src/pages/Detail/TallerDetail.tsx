import { useParams , useNavigate} from "react-router-dom";
import { Box, Stack } from "@mui/material";
import AdminSidebarNav from "../../components/admincomponents/Dashboard/Navbaradmin";
import AdminSidebar from "../../components/admincomponents/Dashboard/Panel";
import TallerDetail from "../../components/admincomponents/Talleres/DetailTaller"; 

const mockTalleres = [
  {
    nombre: "Pintura experimental",
    descripcion: "Exploramos diferentes técnicas pictóricas con materiales diversos.",
    docente: "María Pérez",
    auxiliar: "Carlos Gómez",
    diasYHorarios: [
      { dia: "Lunes", desde: "17:00", hasta: "18:30" },
      { dia: "Miércoles", desde: "15:00", hasta: "16:30" },
    ],
    cuposMaximos: 15,
    alumnos: [
      {
        nombre: "Valentina Ríos",
        avatar: "https://i.pravatar.cc/150?img=12",
        edad: 8,
      },
      {
        nombre: "Lucía Méndez",
        avatar: "https://i.pravatar.cc/150?img=32",
        edad: 9,
      },
    ],
  },
  {
    nombre: "Cerámica creativa",
    descripcion: "Aprendemos a moldear, decorar y hornear piezas de cerámica únicas.",
    docente: "Carlos Gómez",
    auxiliar: "",
    diasYHorarios: [
      { dia: "Martes", desde: "10:00", hasta: "11:30" },
    ],
    cuposMaximos: 12,
    alumnos: [
      {
        nombre: "Sofía Gómez",
        avatar: "https://i.pravatar.cc/150?img=20",
        edad: 10,
      },
    ],
  },
];

export default function TallerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const taller = mockTalleres.find((t) => t.nombre === decodeURIComponent(id || ""));

  if (!taller) {
    return <p>Taller no encontrado</p>;
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
        activeIndex={5} 
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
            <TallerDetail taller={taller} />
          </Box>

          <Box flexShrink={0} width={{ xs: "100%", md: 350 }}>
            <AdminSidebar />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
