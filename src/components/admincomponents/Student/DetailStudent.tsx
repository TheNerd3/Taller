import {
  Box,
  Typography,
  Avatar,
  Chip,
  Stack,
  IconButton,
  Button,
  Card,
  CardContent,
  Fade,
  useTheme,
  alpha,
  Divider,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useState } from "react";

interface Alumno {
  nombre: string;
  apellido: string;
  dni: string;
  edad: number;
  telefonoMama: string;
  telefonoPapa: string;
  taller: string;
  avatar: string;
  cumple: string;
}

const TALLERES_DISPONIBLES = [
  "Fútbol",
  "Básquet",
  "Volley",
  "Natación",
  "Tenis",
  "Hockey",
  "Gimnasia Artística",
  "Atletismo",
  "Handball",
  "Rugby"
];

const StudentDetail = ({ alumno, onBack }: { alumno: Alumno; onBack?: () => void }) => {
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [editedAlumno, setEditedAlumno] = useState<Alumno>(alumno);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedAlumno(alumno);
  };

  const handleSaveClick = () => {
    // Aquí podrías hacer la llamada a la API para guardar los cambios
    console.log("Guardando cambios:", editedAlumno);
    setIsEditing(false);
    // En un caso real, actualizarías el alumno en el estado padre
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedAlumno(alumno);
  };

  const handleInputChange = (field: keyof Alumno, value: string | number) => {
    setEditedAlumno(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      // Fallback si no se proporciona onBack
      window.history.back();
    }
  };

  const currentAlumno = isEditing ? editedAlumno : alumno;

  return (
    <Fade in timeout={600}>
      <Box sx={{ maxWidth: 700, mx: "auto" }}>
        {/* Botón de volver fuera de la card */}
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
              }
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
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: `1px solid ${alpha(theme.palette.grey[300], 0.3)}`,
          }}
        >
          {/* Header con gradiente sutil */}
          <Box
            sx={{
              background: "#009688",
              p: 2,
              color: "white",
            }}
          >
            <Box display="flex" alignItems="flex-start" gap={2}>
              <Avatar
                src={currentAlumno.avatar}
                sx={{
                  width: 60,
                  height: 60,
                  border: "3px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                  flexShrink: 0
                }}
              />

              <Box sx={{ flex: 1, minWidth: 0 }}>
                {!isEditing ? (
                  <>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 0.2 }}>
                      {currentAlumno.nombre} {currentAlumno.apellido}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <BadgeRoundedIcon sx={{ fontSize: 15 }} />
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        DNI: {currentAlumno.dni}
                      </Typography>
                    </Box>
                    <Chip
                      icon={<GroupsRoundedIcon />}
                      label={currentAlumno.taller}
                      sx={{
                        bgcolor: "rgba(255,255,255,0.2)",
                        color: "white",
                        fontWeight: 600,
                        backdropFilter: "blur(10px)",
                        fontSize: "0.85rem",
                        height: 24,
                      }}
                    />
                  </>
                ) : (
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    {/* Fila 1: Nombre y Apellido */}
                    <Box sx={{ display: "flex", gap: 1.5 }}>
                      <TextField
                        value={editedAlumno.nombre}
                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                        placeholder="Nombre"
                        variant="outlined"
                        size="small"
                        sx={{
                          flex: 1,
                          '& .MuiOutlinedInput-root': {
                            bgcolor: 'rgba(255,255,255,0.95)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            borderRadius: 1.5,
                            height: 36,
                            '& fieldset': {
                              borderColor: 'rgba(255,255,255,0.4)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255,255,255,0.7)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'rgba(255,255,255,0.9)',
                            }
                          }
                        }}
                      />
                      <TextField
                        value={editedAlumno.apellido}
                        onChange={(e) => handleInputChange('apellido', e.target.value)}
                        placeholder="Apellido"
                        variant="outlined"
                        size="small"
                        sx={{
                          flex: 1,
                          '& .MuiOutlinedInput-root': {
                            bgcolor: 'rgba(255,255,255,0.95)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            borderRadius: 1.5,
                            height: 36,
                            '& fieldset': {
                              borderColor: 'rgba(255,255,255,0.4)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255,255,255,0.7)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'rgba(255,255,255,0.9)',
                            }
                          }
                        }}
                      />
                    </Box>

                    {/* Fila 2: DNI y Taller */}
                    <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                      <TextField
                        value={editedAlumno.dni}
                        onChange={(e) => handleInputChange('dni', e.target.value)}
                        placeholder="DNI"
                        variant="outlined"
                        size="small"
                        sx={{
                          width: 140,
                          '& .MuiOutlinedInput-root': {
                            bgcolor: 'rgba(255,255,255,0.9)',
                            fontSize: '0.9rem',
                            borderRadius: 1.5,
                            height: 32,
                            '& fieldset': {
                              borderColor: 'rgba(255,255,255,0.4)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255,255,255,0.7)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'rgba(255,255,255,0.9)',
                            }
                          }
                        }}
                      />

                      <FormControl variant="outlined" size="small" sx={{ minWidth: 160 }}>
                        <Select
                          value={editedAlumno.taller}
                          onChange={(e) => handleInputChange('taller', e.target.value)}
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.9)',
                            fontSize: "0.85rem",
                            borderRadius: 1.5,
                            height: 32,
                            '& fieldset': {
                              borderColor: 'rgba(255,255,255,0.4)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255,255,255,0.7)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'rgba(255,255,255,0.9)',
                            }
                          }}
                        >
                          {TALLERES_DISPONIBLES.map((taller) => (
                            <MenuItem key={taller} value={taller}>
                              {taller}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                )}
              </Box>

              {/* Botones de acción siempre visibles */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-end' }}>
                {!isEditing ? (
                  <IconButton
                    onClick={handleEditClick}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.15)",
                      color: "white",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.25)" },
                      width: 40,
                      height: 40
                    }}
                  >
                    <EditRoundedIcon />
                  </IconButton>
                ) : (
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      onClick={handleSaveClick}
                      sx={{
                        bgcolor: "rgba(76, 175, 80, 0.9)",
                        color: "white",
                        "&:hover": { bgcolor: "rgba(76, 175, 80, 1)" },
                        width: 40,
                        height: 40
                      }}
                    >
                      <SaveRoundedIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleCancelClick}
                      sx={{
                        bgcolor: "rgba(244, 67, 54, 0.9)",
                        color: "white",
                        "&:hover": { bgcolor: "rgba(244, 67, 54, 1)" },
                        width: 40,
                        height: 40
                      }}
                    >
                      <CancelRoundedIcon />
                    </IconButton>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          {/* Contenido principal */}
          <Box sx={{ p: 2 }}>
            {/* Información Personal */}
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="text.primary"
                sx={{ mb: 1.2, display: "flex", alignItems: "center", gap: 1 }}
              >
                <PersonRoundedIcon sx={{ color: "#009688", fontSize: 18 }} />
                Información Personal
              </Typography>

              <Card
                sx={{
                  bgcolor: alpha(theme.palette.primary.main, 0.02),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  borderRadius: 2,
                  boxShadow: "none",
                }}
              >
                <CardContent sx={{ p: 1.2 }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 2,
                      }}
                    >
                      <CakeRoundedIcon sx={{ color: "#009688", fontSize: 20 }} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      {!isEditing ? (
                        <>
                          <Typography variant="caption" color="text.secondary">
                            Edad
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            {currentAlumno.edad} años
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            DNI: {currentAlumno.dni}
                          </Typography>
                          <br />
                          <Typography variant="caption" color="text.secondary">
                            Cumpleaños: {currentAlumno.cumple && new Date(currentAlumno.cumple).toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" })}
                          </Typography>
                        </>
                      ) : (
                        <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
                          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                            <Box>
                              <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5, display: "block" }}>
                                Edad
                              </Typography>
                              <TextField
                                type="number"
                                value={editedAlumno.edad}
                                onChange={(e) => handleInputChange('edad', parseInt(e.target.value) || 0)}
                                variant="outlined"
                                size="small"
                                sx={{
                                  width: 80,
                                  '& .MuiOutlinedInput-root': {
                                    bgcolor: 'white',
                                    '& fieldset': {
                                      borderColor: alpha(theme.palette.primary.main, 0.3),
                                    },
                                    '&:hover fieldset': {
                                      borderColor: theme.palette.primary.main,
                                    }
                                  }
                                }}
                              />
                            </Box>
                            <Box>
                              <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5, display: "block" }}>
                                Fecha de Cumpleaños
                              </Typography>
                              <TextField
                                type="date"
                                value={editedAlumno.cumple}
                                onChange={(e) => handleInputChange('cumple', e.target.value)}
                                variant="outlined"
                                size="small"
                                InputLabelProps={{ shrink: true }}
                                sx={{
                                  width: 180,
                                  '& .MuiOutlinedInput-root': {
                                    bgcolor: 'white',
                                    '& fieldset': {
                                      borderColor: alpha(theme.palette.primary.main, 0.3),
                                    },
                                    '&:hover fieldset': {
                                      borderColor: theme.palette.primary.main,
                                    }
                                  }
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                      )}
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                      <Chip
                        icon={<CheckCircleRoundedIcon sx={{ fontSize: 16 }} />}
                        label="Activo"
                        color="success"
                        variant="outlined"
                        size="small"
                        sx={{ fontSize: "0.75rem", height: 20 }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            {/* Contactos */}
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="text.primary"
                sx={{ mb: 1.2, display: "flex", alignItems: "center", gap: 1 }}
              >
                <PhoneRoundedIcon color="success" sx={{ fontSize: 18 }} />
                Contactos
              </Typography>

              <Stack spacing={1.2}>
                <Card
                  sx={{
                    border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                    borderRadius: 2,
                    boxShadow: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      boxShadow: `0 4px 12px ${alpha(theme.palette.success.main, 0.12)}`,
                      transform: "translateY(-1px)",
                    }
                  }}
                >
                  <CardContent sx={{ p: 1.2 }}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 0.2 }}>
                          Teléfono de Mamá
                        </Typography>
                        {!isEditing ? (
                          <Typography variant="body2" fontWeight={600}>
                            {currentAlumno.telefonoMama}
                          </Typography>
                        ) : (
                          <Box sx={{ mt: 0.5 }}>
                            <TextField
                              value={editedAlumno.telefonoMama}
                              onChange={(e) => handleInputChange('telefonoMama', e.target.value)}
                              variant="outlined"
                              size="small"
                              fullWidth
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  bgcolor: alpha(theme.palette.success.main, 0.02),
                                  '& fieldset': {
                                    borderColor: alpha(theme.palette.success.main, 0.3),
                                  },
                                  '&:hover fieldset': {
                                    borderColor: theme.palette.success.main,
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: theme.palette.success.main,
                                  }
                                }
                              }}
                            />
                          </Box>
                        )}
                      </Box>
                      {!isEditing && (
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<CallRoundedIcon />}
                          sx={{
                            bgcolor: theme.palette.success.main,
                            textTransform: "none",
                            borderRadius: 2,
                            fontSize: "0.85rem",
                            py: 0.3,
                            px: 1,
                            ml: 2,
                          }}
                        >
                          Llamar
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                    borderRadius: 2,
                    boxShadow: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      boxShadow: `0 4px 12px ${alpha(theme.palette.success.main, 0.12)}`,
                      transform: "translateY(-1px)",
                    }
                  }}
                >
                  <CardContent sx={{ p: 1.2 }}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 0.2 }}>
                          Teléfono de Papá
                        </Typography>
                        {!isEditing ? (
                          <Typography variant="body2" fontWeight={600}>
                            {currentAlumno.telefonoPapa}
                          </Typography>
                        ) : (
                          <Box sx={{ mt: 0.5 }}>
                            <TextField
                              value={editedAlumno.telefonoPapa}
                              onChange={(e) => handleInputChange('telefonoPapa', e.target.value)}
                              variant="outlined"
                              size="small"
                              fullWidth
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  bgcolor: alpha(theme.palette.success.main, 0.02),
                                  '& fieldset': {
                                    borderColor: alpha(theme.palette.success.main, 0.3),
                                  },
                                  '&:hover fieldset': {
                                    borderColor: theme.palette.success.main,
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: theme.palette.success.main,
                                  }
                                }
                              }}
                            />
                          </Box>
                        )}
                      </Box>
                      {!isEditing && (
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<CallRoundedIcon />}
                          sx={{
                            bgcolor: theme.palette.success.main,
                            textTransform: "none",
                            borderRadius: 2,
                            fontSize: "0.85rem",
                            py: 0.3,
                            px: 1,
                            ml: 2,
                          }}
                        >
                          Llamar
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Stack>
            </Box>

            <Divider sx={{ my: 1.5 }} />

            {/* Estado de Pagos - NO EDITABLE */}
            <Box>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="text.primary"
                sx={{ mb: 1.2, display: "flex", alignItems: "center", gap: 1 }}
              >
                <PaymentRoundedIcon color="warning" sx={{ fontSize: 18 }} />
                Estado Administrativo
              </Typography>

              <Card
                sx={{
                  bgcolor: alpha(theme.palette.warning.main, 0.05),
                  border: `2px solid ${alpha(theme.palette.warning.main, 0.2)}`,
                  borderRadius: 2,
                  boxShadow: "none",
                }}
              >
                <CardContent sx={{ p: 1.2 }}>
                  <Box display="flex" alignItems="center" justifyContent="between" mb={1}>
                    <Box display="flex" alignItems="center" gap={1.2}>
                      <Box
                        sx={{
                          bgcolor: alpha(theme.palette.warning.main, 0.15),
                          p: 1,
                          borderRadius: 2,
                          color: theme.palette.warning.main,
                        }}
                      >
                        <WarningAmberRoundedIcon sx={{ fontSize: 18 }} />
                      </Box>
                      <Box>
                        <Typography variant="body2" fontWeight={600}>
                          Cuota Mensual
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Vencimiento: 15 de cada mes
                        </Typography>
                      </Box>
                    </Box>
                    <Chip
                      label="Pendiente"
                      color="warning"
                      sx={{ fontWeight: 600, ml: "auto", fontSize: "0.75rem", height: 20 }}
                    />
                  </Box>

                  <Box display="flex" gap={1.2} flexWrap="wrap">
                    <Button
                      variant="contained"
                      startIcon={<PaymentRoundedIcon />}
                      sx={{
                        bgcolor: theme.palette.warning.main,
                        color: "white",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: 2,
                        fontSize: "0.85rem",
                        py: 0.3,
                        px: 1.2,
                        "&:hover": {
                          bgcolor: theme.palette.warning.dark,
                        }
                      }}
                    >
                      Pagar Ahora
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: theme.palette.warning.main,
                        color: theme.palette.warning.main,
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: 2,
                        fontSize: "0.85rem",
                        py: 0.3,
                        px: 1.2,
                      }}
                    >
                      Ver Historial
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default StudentDetail;