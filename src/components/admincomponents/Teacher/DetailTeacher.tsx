import {
  Box,
  Typography,
  Avatar,
  Chip,
  Stack,
  IconButton,
  Fade,
  useTheme,
  alpha,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useState } from "react";

interface Taller {
  nombre: string;
  horario: string;
  alumnos: number;
}

interface Docente {
  nombre: string;
  apellido: string;
  telefono: string;
  talleres: Taller[];
  avatar: string;
  dni: string;
}

export default function TeacherDetail({
  docente,
  onBack,
}: {
  docente: Docente;
  onBack?: () => void;
}) {
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDocente, setEditedDocente] = useState<Docente>(docente);

  const currentDocente = isEditing ? editedDocente : docente;

  return (
    <Fade in timeout={600}>
      <Box sx={{ maxWidth: 700, mx: "auto" }}>
        <Box sx={{ mb: 2 }}>
          <Button
            onClick={onBack || (() => window.history.back())}
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
            Volver al panel
          </Button>
        </Box>

        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: `1px solid ${alpha(theme.palette.grey[300], 0.3)}`,
          }}
        >
          <Box
            sx={{
              background: "#009688",
              p: 2,
              color: "white",
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            <Avatar
              src={currentDocente.avatar}
              sx={{
                width: 60,
                height: 60,
                border: "3px solid rgba(255,255,255,0.2)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight={700}>
                {currentDocente.nombre} {currentDocente.apellido}
              </Typography>
              <Typography variant="body2">
                DNI: {currentDocente.dni}
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <PhoneRoundedIcon fontSize="small" /> {currentDocente.telefono}
              </Typography>
            </Box>

            {!isEditing ? (
              <IconButton
                onClick={() => setIsEditing(true)}
                sx={{
                  bgcolor: "rgba(255,255,255,0.15)",
                  color: "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.25)" },
                }}
              >
                <EditRoundedIcon />
              </IconButton>
            ) : (
              <Stack direction="row" spacing={1}>
                <IconButton
                  onClick={() => {
                    setIsEditing(false);
                  }}
                  sx={{
                    bgcolor: "rgba(76, 175, 80, 0.9)",
                    color: "white",
                    "&:hover": { bgcolor: "rgba(76, 175, 80, 1)" },
                  }}
                >
                  <SaveRoundedIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setIsEditing(false);
                    setEditedDocente(docente);
                  }}
                  sx={{
                    bgcolor: "rgba(244, 67, 54, 0.9)",
                    color: "white",
                    "&:hover": { bgcolor: "rgba(244, 67, 54, 1)" },
                  }}
                >
                  <CancelRoundedIcon />
                </IconButton>
              </Stack>
            )}
          </Box>

          <Box sx={{ p: 3 }}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              color="text.primary"
              sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
            >
              <GroupsRoundedIcon color="primary" fontSize="small" />
              Talleres Asignados
            </Typography>

            <Stack spacing={2}>
              {currentDocente.talleres.map((taller, i) => (
                <Card key={i} sx={{ bgcolor: "#f9f9f9" }}>
                  <CardContent>
                    <Typography fontWeight={600}>{taller.nombre}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Horario: {taller.horario}
                    </Typography>
                    <Chip
                      label={`${taller.alumnos} alumno${taller.alumnos !== 1 ? "s" : ""}`}
                      size="small"
                      sx={{ mt: 1 }}
                    />
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
