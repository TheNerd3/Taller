import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { es } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ModalEvento from "./ModalEvento";
import dayjs from "dayjs";

const locales = { es };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: es }),
  getDay,
  locales,
});

const CalendarTalleres = () => {
  const now = new Date();
  const currentMonth = format(now, "MMMM", { locale: es });
  const currentYear = now.getFullYear();

  const [events, setEvents] = useState([
    {
      title: "🎂 Cumpleaños de Valentina",
      start: new Date(currentYear, now.getMonth(), 10),
      end: new Date(currentYear, now.getMonth(), 10),
    },
    {
      title: "🧑‍🎨 Taller de pintura",
      start: new Date(currentYear, now.getMonth(), 15, 17),
      end: new Date(currentYear, now.getMonth(), 15, 18, 30),
    },
    {
      title: "🎉 Evento: Muestra anual",
      start: new Date(currentYear, now.getMonth(), 22, 18),
      end: new Date(currentYear, now.getMonth(), 22, 20),
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"evento">("evento");
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: dayjs(),
    end: dayjs(),
    icono: "",
  });

  const handleAddButtonClick = (tipo: "evento") => {
    setModalType(tipo);
    setNewEvent({ title: "", start: dayjs(), end: dayjs(), icono: "" });
    setModalOpen(true);
  };

  const handleSelectSlot = (slotInfo: any) => {
    setNewEvent({ title: "", start: slotInfo.start, end: slotInfo.end, icono: "" });
    setModalOpen(true);
  };

  return (
    <>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Eventos
      </Typography>
      <Box
        sx={{
          bgcolor: "#fff",
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
          maxWidth: 1000,
          mx: "auto",
          mb: 5,
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" fontWeight={600}>
            {`${currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)} ${currentYear}`}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              onClick={() => handleAddButtonClick("evento")}
              sx={{ textTransform: "none", fontWeight: 600, borderRadius: 2, borderColor: "#00695C", color: "#00695C" }}
            >
              Añadir evento
            </Button>
          </Stack>
        </Stack>

        <Paper elevation={0}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSelectSlot}
            style={{ height: 500 }}
            messages={{
              today: "Hoy",
              previous: "Anterior",
              next: "Siguiente",
              month: "Mes",
              week: "Semana",
              day: "Día",
              agenda: "Agenda",
              date: "Fecha",
              time: "Hora",
              event: "Evento",
              noEventsInRange: "No hay eventos en este rango",
            }}
          />
        </Paper>

        <ModalEvento
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          tipo={modalType}
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          onSubmit={(nuevo) => {
            setEvents((prev) => [
              ...prev,
              {
                ...nuevo,
                start: nuevo.start.toDate ? nuevo.start.toDate() : nuevo.start,
                end: nuevo.end.toDate ? nuevo.end.toDate() : nuevo.end,
                title: `${nuevo.icono ? nuevo.icono + " " : ""}${nuevo.title}`,
              },
            ]);
            setModalOpen(false);
            setNewEvent({ title: "", start: dayjs(now), end: dayjs(now), icono: "" });
          }}
        />
      </Box>
    </>
  );
};

export default CalendarTalleres;
