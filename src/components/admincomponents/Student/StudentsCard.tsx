import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import AddStudentModal from "./AddStudent";
import { useNavigate } from "react-router-dom";


const alumnos = [
  {
    nombre: "Valentina Ríos",
    dni: "45.678.901",
    edad: 8,
    telefonoMama: "11 2345-6789",
    telefonoPapa: "11 9876-5432",
    taller: "Pintura experimental",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    nombre: "Sofía Gómez",
    dni: "40.123.456",
    edad: 10,
    telefonoMama: "11 1234-5678",
    telefonoPapa: "11 8765-4321",
    taller: "Cerámica creativa",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
  {
    nombre: "Lucía Méndez",
    dni: "42.789.321",
    edad: 9,
    telefonoMama: "11 1111-2222",
    telefonoPapa: "11 3333-4444",
    taller: "Pintura experimental",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
];

const talleres = [...new Set(alumnos.map((a) => a.taller))];

const StudentsCards = () => {
  const navigate = useNavigate();
  const [tallerSeleccionado, setTallerSeleccionado] = useState("Todos");
  const [openModal, setOpenModal] = useState(false); // Estado para el modal

  const alumnosFiltrados =
    tallerSeleccionado === "Todos"
      ? alumnos
      : alumnos.filter((a) => a.taller === tallerSeleccionado);

  const handleAddStudent = () => {

    setOpenModal(true);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ color: "#000" }} fontWeight={600} mb={3}>
        Panel de Alumnos
      </Typography>

      {/* Filtros de taller */}
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
          onClick={handleAddStudent}
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
          + Agregar alumno
        </Button>
      </Stack>

      {/* Tarjetas de alumnos */}
      <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center">
        {alumnosFiltrados.map((alumno, i) => (
          <Card
            key={i}
            sx={{
              width: 280,
              borderRadius: 4,
              boxShadow: 3,
              textAlign: "center",
              bgcolor: "#fffdfc",
            }}
          >
            <CardContent>
              <Box position="relative">
                <Avatar
                  src={alumno.avatar}
                  sx={{ width: 72, height: 72, mx: "auto", mb: 1 }}
                />
                <Chip
                  label={alumno.taller}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bgcolor: "#00695C",
                    color: "white",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                />
              </Box>
              <Typography variant="h6" fontWeight={700}>
                {alumno.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                DNI: {alumno.dni}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                Edad: {alumno.edad} años
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                flexWrap="wrap"
                mb={2}
              >
                <Chip
                  label={`Mamá: ${alumno.telefonoMama}`}
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: "0.7rem" }}
                />
                <Chip
                  label={`Papá: ${alumno.telefonoPapa}`}
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: "0.7rem" }}
                />
              </Stack>
              <Button
                variant="contained"
                onClick={() => navigate(`/admin/student/${alumno.dni}`)}
                fullWidth
                sx={{
                  mt: 1,
                  bgcolor: "#00695C",
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: 4,
                }}
              >
                Ver ficha
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
      <AddStudentModal open={openModal} onClose={() => setOpenModal(false)} talleres={talleres} />

    </Box>
  );
};

export default StudentsCards;
