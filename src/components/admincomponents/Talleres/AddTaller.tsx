import {
  Modal,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  IconButton,
  Fade,
  Backdrop,
  InputAdornment,
  Select,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/LibraryAddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

interface AddTallerModalProps {
  open: boolean;
  onClose: () => void;
  docentes: string[];
}

const DIAS_SEMANA = [
  "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
];

const AddTallerModal = ({ open, onClose, docentes }: AddTallerModalProps) => {
  const [diasSeleccionados, setDiasSeleccionados] = useState<string[]>([]);

  const handleDiasChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDiasSeleccionados(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 300,
        sx: { backdropFilter: 'blur(4px)' }
      }}
    >
      <Fade in={open} timeout={300}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: "95%", sm: 520 },
            bgcolor: "background.paper",
            borderRadius: 3,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            border: "1px solid",
            borderColor: "divider",
            overflow: "hidden",
            maxHeight: "90vh",       
            overflowY: "auto",         
          }}
        >
          {/* Encabezado */}
          <Box
            sx={{
              background: "linear-gradient(135deg, #009688 0%, #00695C 100%)",
              p: 3,
              color: "white",
              position: "relative",
            }}
          >
            <IconButton
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "white",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" }
              }}
            >
              <CloseRoundedIcon />
            </IconButton>

            <Box display="flex" alignItems="center" gap={2}>
              <PersonAddAlt1RoundedIcon sx={{ fontSize: 32 }} />
              <Box>
                <Typography variant="h5" fontWeight={700}>
                  Nuevo Taller
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Completa los campos para registrar un nuevo taller
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Formulario */}
          <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label="Nombre del Taller" fullWidth />
            <TextField label="Descripción" fullWidth multiline minRows={2} />

            <TextField
              label="Horas Totales"
              type="number"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">hs</InputAdornment>,
              }}
            />

            <Box display="flex" gap={2}>
              <TextField
                label="Hora Inicio"
                type="time"
                fullWidth
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <AccessTimeRoundedIcon sx={{ mr: 1, color: "text.secondary" }} />
                  )
                }}
              />
              <TextField
                label="Hora Fin"
                type="time"
                fullWidth
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <AccessTimeRoundedIcon sx={{ mr: 1, color: "text.secondary" }} />
                  )
                }}
              />
            </Box>

            <Select
              multiple
              fullWidth
              displayEmpty
              value={diasSeleccionados}
              onChange={handleDiasChange}
              input={<OutlinedInput />}
              renderValue={(selected) => selected.length === 0 ? "Seleccionar días" : selected.join(', ')}
            >
              {DIAS_SEMANA.map((dia) => (
                <MenuItem key={dia} value={dia}>
                  <Checkbox checked={diasSeleccionados.indexOf(dia) > -1} />
                  <ListItemText primary={dia} />
                </MenuItem>
              ))}
            </Select>

            <TextField label="Cupos Totales" type="number" fullWidth />

            <TextField
              label="Docente Asignado"
              select
              fullWidth
              defaultValue=""
            >
              <MenuItem value="">Ninguno</MenuItem>
              {docentes.map((docente, i) => (
                <MenuItem key={i} value={docente}>
                  {docente}
                </MenuItem>
              ))}
            </TextField>

            <Box display="flex" gap={2}>
              <TextField
                label="Fecha de Inicio"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Fecha de Fin"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            {/* Botones */}
            <Box display="flex" gap={2} mt={1}>
              <Button
                variant="outlined"
                onClick={onClose}
                fullWidth
                sx={{
                  py: 1.3,
                  borderRadius: 4,
                  textTransform: "none",
                  fontWeight: 600,
                  borderColor: "#009688",
                  color: "#009688",
                  "&:hover": {
                    bgcolor: "#009688",
                    color: "white",
                  }
                }}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                fullWidth
                startIcon={<SaveRoundedIcon />}
                sx={{
                  py: 1.3,
                  borderRadius: 4,
                  textTransform: "none",
                  fontWeight: 600,
                  bgcolor: "#009688",
                  color: "white",
                  "&:hover": {
                    bgcolor: "#fff",
                    color: "#009688",
                    borderColor: "#009688",
                    border: "2px solid",
                  }
                }}
              >
                Guardar Taller
              </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddTallerModal;
