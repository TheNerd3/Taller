import {
  Box,
  Typography,
  Tooltip,
  Paper,
} from "@mui/material";
import { DateCalendar, PickersDay } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import type { PickersDayProps } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

// 🔔 Lista de eventos del mes
const eventos = [
  { date: dayjs("2025-06-25"), label: "Taller de cerámica" },
  { date: dayjs("2025-06-30"), label: "Vencimiento pagos" },
  { date: dayjs("2025-06-27"), label: "Muestra anual de arte" },
];

// Customiza cada día del calendario
interface Evento {
  date: Dayjs;
  label: string;
}

interface CustomDayProps extends PickersDayProps {
  day: Dayjs;
  outsideCurrentMonth: boolean;
}

function CustomDay(props: CustomDayProps) {
  const { day, outsideCurrentMonth, ...other } = props;
  const evento: Evento | undefined = eventos.find((e) => day.isSame(e.date, "day"));

  return (
    <Tooltip title={evento?.label || ""} arrow placement="top">
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        sx={{
          transition: "0.2s ease",
          borderRadius: 2,
          fontWeight: evento ? 700 : 400,
          ...(evento && {
            bgcolor: "#00695C",
            color: "white",
            "&:hover": {
              bgcolor: "#004d40",
            },
          }),
        }}
      />
    </Tooltip>
  );
}

// Componente principal exportable
const Calendar = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 3, mb: 3, bgcolor: "#fff8f5" }}>
      <Typography fontSize={16} fontWeight={700} mb={2} sx={{ color: "#00695C" }}>
        Calendario de eventos
      </Typography>
      <DateCalendar
        value={dayjs()}
        readOnly
        views={["day"]}
        slots={{ day: CustomDay }}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          "& .MuiPickersCalendarHeader-root": {
            mb: 1,
            color: "#222",
            fontWeight: 600,
          },
          "& .MuiDayCalendar-weekDayLabel": {
            color: "#888",
            fontSize: "0.75rem",
            fontWeight: 500,
          },
          "& .MuiPickersDay-root": {
            fontSize: "0.875rem",
          },
        }}
      />
    </Paper>
  );
};

export default Calendar;
