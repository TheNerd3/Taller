import {
  Box,
  Typography,
  Stack,
  Chip,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddTallerModal from "../Talleres/AddTaller"; 
import AddStudentModal from "../Student/AddStudent";
import AddTeacherModal from "../Teacher/AddTeachers";

const categories = ["Todos", "Pagos", "Talleres", "Inscripciones", "Profesores", "Staff", "Otros"];

const items = [
  {
    title: "Alumnos sin pagar",
    category: "Pagos",
    chip: "Pagos",
    color: "#F9D8D6",
    description: "Alumnos con cuotas pendientes",
    amount: 12,
    path: "/admin/alumnos",
  },
  {
    title: "Talleres",
    category: "Talleres",
    chip: "Actividades",
    color: "#FDE5B4",
    description: "Talleres activos este mes",
    amount: 6,
    showButton: true,
    buttonText: "Agregar taller",
    path: "/admin/talleres",
  },
  {
    title: "Inscripción a alumnos",
    category: "Inscripciones",
    chip: "Formulario",
    color: "#C6F2E2",
    description: "Desde aquí podés inscribir a un nuevo alumno",
    showButton: true,
    buttonText: "Inscribir",
    path: "/admin/inscripciones",
  },
  {
    title: "Auxiliares",
    category: "Staff",
    chip: "Staff",
    color: "#D7F7FC",
    description: "Total de auxiliares activos",
    amount: 3,
    path: "/admin/auxiliares",
  },
  {
    title: "Sumar profe",
    category: "Profesores",
    chip: "Equipo",
    color: "#FCD6F8",
    description: "Agregar un nuevo profesor o tallerista al equipo",
    showButton: true,
    buttonText: "Sumar al equipo",
    path: "/admin/profesores",
  },
  {
    title: "Otros",
    category: "Otros",
    chip: "General",
    color: "#E8D7FA",
    description: "Consultas, mensajes o registros externos",
    amount: 5,
    path: "/admin/otros",
  },
];

const AdminCoursesSection = () => {
  const [selected, setSelected] = useState("Todos");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<null | "taller" | "inscripcion" | "profe">(null);
  const navigate = useNavigate();

  return (
    <Box width="100%">
      <Typography variant="h4" sx={{ color: "#000" }} fontWeight={600} mb={3}>
        Panel de Administración
      </Typography>

      <Stack direction="row" spacing={2} mb={3} flexWrap="wrap">
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            onClick={() => setSelected(cat)}
            sx={{
              bgcolor: selected === cat ? "#00695C" : "#f0f0f0",
              color: selected === cat ? "white" : "#000",
              fontWeight: 500,
              px: 2,
              borderRadius: "12px",
              cursor: "pointer",
            }}
          />
        ))}
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {items
          .filter((c) => selected === "Todos" || c.category === selected)
          .map((c, i) => (
            <Box
              key={i}
              onClick={() => navigate(c.path)}
              sx={{
                flex: "1 1 260px",
                minWidth: 240,
                maxWidth: 320,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Card
                sx={{
                  bgcolor: c.color,
                  borderRadius: 3,
                  p: 2,
                  height: "100%",
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {c.title}
                  </Typography>

                  {c.amount !== undefined && (
                    <Typography
                      variant="h3"
                      fontWeight={900}
                      color="black"
                      sx={{ mb: 0.5 }}
                    >
                      {c.amount}
                    </Typography>
                  )}

                  <Typography variant="body2" color="text.secondary">
                    {c.description}
                  </Typography>
                </CardContent>

                {c.showButton && (
                  <Box textAlign="right" px={2} pb={2}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        bgcolor:"#00695C",
                        color: "#fff",
                        textTransform: "none",
                        borderRadius: 2,
                        fontWeight: "bold",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (c.buttonText === "Agregar taller") {
                          setModalType("taller");
                          setModalOpen(true);
                        } else if (c.buttonText === "Inscribir") {
                          setModalType("inscripcion");
                          setModalOpen(true);
                        } else if (c.buttonText === "Sumar al equipo") {
                          setModalType("profe");
                          setModalOpen(true);
                        } else {
                          navigate(c.path);
                        }
                      }}
                    >
                      {c.buttonText}
                    </Button>
                  </Box>
                )}
              </Card>
            </Box>
          ))}
      </Box>

      {/* Aquí van tus modales */}
      {modalType === "taller" && (
        <AddTallerModal open={modalOpen} onClose={() => setModalOpen(false)} docentes={[]} />
      )}
      {modalType === "inscripcion" && (
        <AddStudentModal open={modalOpen} onClose={() => setModalOpen(false)} talleres={[]} />
      )}
      {modalType === "profe" && (
        <AddTeacherModal open={modalOpen} onClose={() => setModalOpen(false)} talleres={[]} />
      )}
    </Box>
  );
};

export default AdminCoursesSection;
