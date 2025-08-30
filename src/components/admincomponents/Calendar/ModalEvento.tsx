import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";

interface ModalEventoProps {
  open: boolean;
  tipo: "evento" | "taller";
  onClose: () => void;
  newEvent: any;
  setNewEvent: (event: any) => void;
  onSubmit: (event: any) => void;
}

const ModalEvento: React.FC<ModalEventoProps> = ({
  open,
  onClose,
  tipo,
  newEvent,
  setNewEvent,
  onSubmit,
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);

  const handleEmojiSelect = (emoji: any) => {
    setNewEvent({ ...newEvent, icono: emoji.native });
    setShowEmojiPicker(false);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography fontWeight={700} fontSize={20} color="#00695C">
          Añadir {tipo === "evento" ? "evento" : "taller"}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            fullWidth
            label={`Título del ${tipo}`}
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            variant="outlined"
          />
          <Box display="flex" gap={2}>
            <DatePicker
              label="Desde"
              value={newEvent.start}
              onChange={(date) => setNewEvent({ ...newEvent, start: date })}
            />
            <DatePicker
              label="Hasta"
              value={newEvent.end}
              onChange={(date) => setNewEvent({ ...newEvent, end: date })}
            />
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              sx={{ bgcolor: "#f5f5f5", borderRadius: 2 }}
            >
              <EmojiEmotionsRoundedIcon sx={{ color: "#00695C" }} />
            </IconButton>
            {newEvent.icono && (
              <Typography fontSize={24}>{newEvent.icono}</Typography>
            )}
          </Box>
          {showEmojiPicker && (
            <Box mt={-1.5}>
              <Picker data={data} onEmojiSelect={handleEmojiSelect} locale="es" theme="light" />
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button variant="outlined" onClick={onClose} sx={{ textTransform: "none", color: "#00695C", fontWeight: 600, borderColor: "#00695C" }}>
          Cancelar
        </Button>
        <Button
          onClick={() => onSubmit(newEvent)}
          variant="contained"
          sx={{ textTransform: "none", bgcolor: "#00695C", color: "#fff", fontWeight: 600 }}
        >
          Agregar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalEvento;
