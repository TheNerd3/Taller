// components/AddTeacherModal.tsx
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
  Select,
  InputLabel,
  FormControl,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@mui/material";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

interface AddTeacherModalProps {
  open: boolean;
  onClose: () => void;
  talleres: string[];
}

const AddTeacherModal = ({ open, onClose, talleres }: AddTeacherModalProps) => {
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
            boxShadow: 6,
            overflow: "hidden",
          }}
        >
          {/* Header */}
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
              <PersonAddAlt1RoundedIcon sx={{ fontSize: 30 }} />
              <Box>
                <Typography variant="h5" fontWeight={700}>Nuevo Docente</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Registrar un nuevo profesor en el sistema
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Formulario */}
          <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
            <Box display="flex" gap={2}>
              <TextField label="DNI" fullWidth variant="outlined"
                InputProps={{ startAdornment: <BadgeRoundedIcon sx={{ mr: 1, color: "text.secondary" }} /> }}
              />
              <TextField label="Edad" type="number" fullWidth variant="outlined"
                InputProps={{ startAdornment: <CalendarMonthRoundedIcon sx={{ mr: 1, color: "text.secondary" }} /> }}
              />
            </Box>

            <Box display="flex" gap={2}>
              <TextField label="Nombre" fullWidth variant="outlined"
                InputProps={{ startAdornment: <Groups2RoundedIcon sx={{ mr: 1, color: "text.secondary" }} /> }}
              />
              <TextField label="Apellido" fullWidth variant="outlined"
                InputProps={{ startAdornment: <Groups2RoundedIcon sx={{ mr: 1, color: "text.secondary" }} /> }}
              />
            </Box>

            <TextField
              label="Teléfono de contacto"
              fullWidth
              variant="outlined"
              InputProps={{ startAdornment: <SchoolRoundedIcon sx={{ mr: 1, color: "text.secondary" }} /> }}
            />

            <TextField
              label="Años de experiencia"
              type="number"
              fullWidth
              variant="outlined"
              InputProps={{ startAdornment: <SchoolRoundedIcon sx={{ mr: 1, color: "text.secondary" }} /> }}
            />

            <FormControl fullWidth>
              <InputLabel>Talleres asignados</InputLabel>
              <Select
                multiple
                defaultValue={[]}
                input={<OutlinedInput label="Talleres asignados" />}
                renderValue={(selected) => (selected as string[]).join(', ')}
              >
                {talleres.map((taller) => (
                  <MenuItem key={taller} value={taller}>
                    <Checkbox checked={false} />
                    <ListItemText primary={taller} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Especialidad principal (opcional)"
              fullWidth
              variant="outlined"
            />

            {/* Acciones */}
            <Box display="flex" gap={2} mt={2}>
              <Button
                variant="outlined"
                onClick={onClose}
                fullWidth
                sx={{
                  py: 1.5,
                  borderRadius: 3,
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
                  py: 1.5,
                  borderRadius: 3,
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
                Guardar Docente
              </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddTeacherModal;
