import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Stack,
  InputAdornment,
  Paper,
  Chip,
  Fade,
  Zoom,
  Card,
  CardContent,
  Divider,
  Avatar,
  Tooltip,
  Container,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  DragIndicator as DragIcon,
  TextFields as TextIcon,
  RadioButtonChecked as OptionsIcon,
  DateRange as DateIcon,
  Save as SaveIcon,
  Visibility as PreviewIcon,
  AutoAwesome as SparkleIcon,
  Remove as RemoveIcon,
} from "@mui/icons-material";

type FieldType = "texto" | "opciones" | "fecha";

interface Field {
  id: string;
  pregunta: string;
  tipo: FieldType;
  opciones?: string[];
  opcionesDinamicas?: {
    activo: boolean;
    reglas: DateRule[];
  };
}

interface DateRule {
  id: string;
  condicion: 'antes' | 'despues' | 'entre' | 'dia-semana' | 'mes' | 'año';
  fechaInicio?: string;
  fechaFin?: string;
  valor?: string | number;
  opciones: string[];
}

const ModernFormBuilder = () => {
  const [formFields, setFormFields] = useState<Field[]>([]);
  const [formTitle, setFormTitle] = useState("Mi Formulario Personalizado");

  const fieldTypeConfig = {
    texto: { 
      icon: <TextIcon />, 
      label: "Texto corto", 
      color: "#1976d2",
      bgColor: "#e3f2fd"
    },
   
    opciones: { 
      icon: <OptionsIcon />, 
      label: "Opción múltiple", 
      color: "#7b1fa2",
      bgColor: "#f3e5f5"
    },
    fecha: { 
      icon: <DateIcon />, 
      label: "Fecha", 
      color: "#f57c00",
      bgColor: "#fff3e0"
    }
  };

  const addField = () => {
    setFormFields([
      ...formFields,
      {
        id: crypto.randomUUID(),
        pregunta: "",
        tipo: "texto",
        opciones: [],
        opcionesDinamicas: {
          activo: false,
          reglas: []
        }
      },
    ]);
  };

  const updateField = (id: string, key: keyof Field, value: any) => {
    setFormFields((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              [key]: value,
              ...(key === "tipo" && value !== "opciones" ? { opciones: [] } : {}),
            }
          : f
      )
    );
  };

  const updateOption = (id: string, index: number, value: string) => {
    setFormFields((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              opciones: f.opciones?.map((opt, i) => (i === index ? value : opt)) || [],
            }
          : f
      )
    );
  };

  const addOption = (id: string) => {
    setFormFields((prev) =>
      prev.map((f) =>
        f.id === id
          ? { ...f, opciones: [...(f.opciones || []), ""] }
          : f
      )
    );
  };

  const removeOption = (id: string, index: number) => {
    setFormFields((prev) =>
      prev.map((f) =>
        f.id === id
          ? { ...f, opciones: f.opciones?.filter((_, i) => i !== index) || [] }
          : f
      )
    );
  };

  const removeField = (id: string) => {
    setFormFields((prev) => prev.filter((f) => f.id !== id));
  };

  const handleGuardar = () => {
    console.log("Formulario guardado:", { title: formTitle, fields: formFields });
  };

  const renderFieldPreview = (field: Field) => {
    switch (field.tipo) {
      case "texto":
        return (
          <TextField
            fullWidth
            placeholder="Respuesta de texto corto..."
            variant="outlined"
            size="small"
            disabled
            sx={{ bgcolor: '#f8f9fa' }}
          />
        );
      
      case "opciones":
        return (
          <RadioGroup>
            {(field.opciones || []).map((opt, i) => (
              <FormControlLabel
                key={i}
                value={i}
                control={<Radio size="small" disabled />}
                label={opt || `Opción ${i + 1}`}
                sx={{ color: 'text.secondary' }}
              />
            ))}
          </RadioGroup>
        );
      case "fecha":
        return (
          <TextField
            type="date"
            fullWidth
            variant="outlined"
            size="small"
            disabled
            sx={{ bgcolor: '#f8f9fa' }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: '#ffffffa9',
      py: 1
    }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Fade in timeout={800}>
          <Paper 
            elevation={0}
            sx={{ 
              p: 4, 
              mb: 4, 
              borderRadius: 4,
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2} mb={3}>
              <Avatar 
                sx={{ 
                  bgcolor: 'primary.main',
                  background: 'linear-gradient(135deg,  #009688 0%, #00695C 100%)',
                  width: 56,
                  height: 56
                }}
              >
                <SparkleIcon />
              </Avatar>
              <Box>
                <Typography variant="h4" fontWeight={700} color="#009688">
                  Constructor de Formularios
                </Typography>
               
              </Box>
            </Stack>
            
            <TextField
              fullWidth
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              variant="standard"
              sx={{
                '& .MuiInput-input': {
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'text.primary'
                }
              }}
              placeholder="Título del formulario"
            />
          </Paper>
        </Fade>

        {/* Form Fields */}
        <Stack spacing={3}>
          {formFields.map((field, idx) => (
            <Zoom key={field.id} in timeout={300} style={{ transitionDelay: `${idx * 100}ms` }}>
              <Card 
                elevation={0}
                sx={{ 
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Field Header */}
                  <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                    <Tooltip title="Arrastrar para reordenar">
                      <IconButton size="small" sx={{ color: 'text.secondary', cursor: 'grab' }}>
                        <DragIcon />
                      </IconButton>
                    </Tooltip>
                    
                    <Chip 
                      label={`#${idx + 1}`} 
                      size="small" 
                      sx={{ 
                        bgcolor: fieldTypeConfig[field.tipo].bgColor,
                        color: fieldTypeConfig[field.tipo].color,
                        fontWeight: 600
                      }} 
                    />
                    
                    <TextField
                      fullWidth
                      value={field.pregunta}
                      onChange={(e) => updateField(field.id, "pregunta", e.target.value)}
                      placeholder="Escribe tu pregunta aquí..."
                      variant="standard"
                      sx={{
                        '& .MuiInput-input': {
                          fontSize: '1.1rem',
                          fontWeight: 500
                        }
                      }}
                    />
                    
                    <FormControl size="small" sx={{ minWidth: 160 }}>
                      <Select
                        value={field.tipo}
                        onChange={(e) => updateField(field.id, "tipo", e.target.value as FieldType)}
                        sx={{ borderRadius: 2 }}
                      >
                        {Object.entries(fieldTypeConfig).map(([type, config]) => (
                          <MenuItem key={type} value={type}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                              {React.cloneElement(config.icon, { 
                                sx: { fontSize: 18, color: config.color } 
                              })}
                              <span>{config.label}</span>
                            </Stack>
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    
                    <Tooltip title="Eliminar pregunta">
                      <IconButton 
                        onClick={() => removeField(field.id)}
                        sx={{ 
                          color: 'error.main',
                          '&:hover': { bgcolor: 'error.lighter' }
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Stack>

                  <Divider sx={{ my: 2 }} />

                  {/* Field Preview */}
                  <Box mb={2}>
                    <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                      <Avatar 
                        sx={{ 
                          width: 24, 
                          height: 24, 
                          bgcolor: fieldTypeConfig[field.tipo].color 
                        }}
                      >
                        {React.cloneElement(fieldTypeConfig[field.tipo].icon, { 
                          sx: { fontSize: 14 } 
                        })}
                      </Avatar>
                      <Typography variant="body2" fontWeight={500} color="text.secondary">
                        Vista previa:
                      </Typography>
                    </Stack>
                    
                    {renderFieldPreview(field)}
                  </Box>

                  {/* Options Management */}
                  {field.tipo === "opciones" && (
                    <Paper 
                      variant="outlined" 
                      sx={{ 
                        p: 2, 
                        bgcolor: 'grey.50',
                        borderRadius: 2,
                        borderStyle: 'dashed'
                      }}
                    >
                      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="subtitle2" fontWeight={600} color="text.primary">
                          Opciones de respuesta
                        </Typography>
                        <Button
                          size="small"
                          startIcon={<AddIcon />}
                          onClick={() => addOption(field.id)}
                          sx={{ 
                            borderRadius: 3,
                            textTransform: 'none',
                            fontWeight: 600
                          }}
                        >
                          Agregar opción
                        </Button>
                      </Stack>
                      
                      <Stack spacing={1.5}>
                        {(field.opciones || []).map((opt, i) => (
                          <TextField
                            key={i}
                            fullWidth
                            size="small"
                            value={opt}
                            onChange={(e) => updateOption(field.id, i, e.target.value)}
                            placeholder={`Opción ${i + 1}`}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Typography variant="body2" color="primary.main" fontWeight={600}>
                                    {i + 1}.
                                  </Typography>
                                </InputAdornment>
                              ),
                              endAdornment: (field.opciones?.length || 0) > 1 && (
                                <InputAdornment position="end">
                                  <IconButton 
                                    size="small" 
                                    onClick={() => removeOption(field.id, i)}
                                    sx={{ color: 'error.main' }}
                                  >
                                    <RemoveIcon fontSize="small" />
                                  </IconButton>
                                </InputAdornment>
                              )
                            }}
                            sx={{ 
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 2
                              }
                            }}
                          />
                        ))}
                      </Stack>
                    </Paper>
                  )}
                </CardContent>
              </Card>
            </Zoom>
          ))}

          {/* Add Field Button */}
          <Fade in timeout={500}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                border: '2px dashed rgba(255,255,255,0.4)',
                background: '#009687ff',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onClick={addField}
            >
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)' }}>
                  <AddIcon sx={{ color: 'white' }} />
                </Avatar>
                <Typography variant="h6" fontWeight={600} color="white">
                  Agregar nueva pregunta
                </Typography>
              </Stack>
            </Paper>
          </Fade>
        </Stack>

        {/* Action Buttons */}
        <Fade in timeout={800}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={4}>
            <Button
              variant="contained"
              size="large"
              startIcon={<SaveIcon />}
              onClick={handleGuardar}
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: 3,
                background: 'linear-gradient(135deg,  #009688 0%, #00695C 100%)',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                
              }}
            >
              Guardar Formulario
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<PreviewIcon />}
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: 3,
                borderColor: '#009688',
                color: '#009688',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
              
              }}
            >
              Vista Previa
            </Button>
          </Stack>
        </Fade>
      </Container>
    </Box>
  );
};

export default ModernFormBuilder;