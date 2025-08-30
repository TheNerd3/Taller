import {
  Box,
  Typography,
  Avatar,
  Chip,
  Stack,
  Card,
  CardContent,
  Divider,
  Tooltip,
  useTheme,
  Button,
} from "@mui/material";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { alpha } from "@mui/material/styles";

interface Alumno {
  nombre: string;
  avatar: string;
  edad: number;
}

interface Taller {
  nombre: string;
  descripcion: string;
  docente: string;
  auxiliar?: string;
  diasYHorarios: { dia: string; desde: string; hasta: string }[];
  cuposMaximos: number;
  alumnos: Alumno[];
}

const TallerDetail = ({ taller }: { taller: Taller }) => {
  const theme = useTheme();
  const cuposOcupados = taller.alumnos.length;

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", mb: 5 }}>
      {/* Botón Volver */}
      <Box sx={{ mb: 2 }}>
        <Button
          onClick={handleBackClick}
          startIcon={<ArrowBackRoundedIcon />}
          sx={{
            color: theme.palette.text.secondary,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
            px: 1,
            "&:hover": {
              bgcolor: alpha(theme.palette.primary.main, 0.04),
              color: theme.palette.primary.main,
            },
          }}
        >
          Volver atrás
        </Button>
      </Box>

      {/* Card principal */}
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 3,
          boxShadow: 4,
          p: 3,
        }}
      >
        {/* Encabezado */}
        <Box mb={3}>
          <Typography variant="h5" fontWeight={700} sx={{color:"#00695C"}} mb={0.5}>
            {taller.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {taller.descripcion}
          </Typography>
        </Box>

        {/* Info principal */}
        <Stack direction="row" flexWrap="wrap" gap={2} mb={2}>
          <Chip
            icon={<GroupsRoundedIcon />}
            label={`Docente: ${taller.docente}`}
            color="default"
          />
          <Chip
            icon={<GroupsRoundedIcon />}
            label={
              taller.auxiliar
                ? `Auxiliar: ${taller.auxiliar}`
                : "Sin auxiliar asignado"
            }
            color={taller.auxiliar ? "success" : "warning"}
          />
          <Chip
            icon={<InfoRoundedIcon />}
            label={`Cupos: ${cuposOcupados}/${taller.cuposMaximos}`}
            color={cuposOcupados >= taller.cuposMaximos ? "error" : "info"}
          />
        </Stack>

        {/* Horarios */}
        <Box mb={2}>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            color="text.primary"
            mb={1}
          >
            Días y Horarios
          </Typography>
          <Stack direction="row" gap={1} flexWrap="wrap">
            {taller.diasYHorarios.map((h, i) => (
              <Chip
                key={i}
                icon={<EventNoteRoundedIcon />}
                label={`${h.dia}: ${h.desde} - ${h.hasta}`}
                sx={{
                  bgcolor: theme.palette.grey[100],
                  fontWeight: 500,
                  fontSize: "0.8rem",
                }}
              />
            ))}
          </Stack>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Lista de alumnos */}
        <Typography
          variant="subtitle2"
          fontWeight={600}
          color="text.primary"
          mb={1.5}
        >
          Alumnos Inscritos ({cuposOcupados})
        </Typography>

        <Stack direction="row" gap={2} flexWrap="wrap">
          {taller.alumnos.map((alumno, i) => (
            <Card
              key={i}
              sx={{
                width: 200,
                textAlign: "center",
                borderRadius: 2,
                p: 2,
                bgcolor: "#fdfdfd",
                boxShadow: 1,
              }}
            >
              <Avatar
                src={alumno.avatar}
                sx={{ width: 56, height: 56, mx: "auto", mb: 1 }}
              />
              <Typography fontWeight={600} fontSize={14}>
                {alumno.nombre}
              </Typography>
              <Typography fontSize={12} color="text.secondary">
                {alumno.edad} años
              </Typography>
              <Chip
                label="Alumno"
                size="small"
                icon={<PersonRoundedIcon fontSize="small" />}
                sx={{ mt: 1, fontSize: "0.75rem" }}
              />
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default TallerDetail;
