// src/App.tsx
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Admin from "./pages/Administration";
import StudentDetailPage from "./pages/Detail/StudentDetail";
import TeacherDetailPage from "./pages/Detail/TeacherDetail";
import TallerDetailPage from "./pages/Detail/TallerDetail";
import ComprobantesPage from "./pages/Comprobantes/Comprobante";
import TalleresCards from "./components/admincomponents/Talleres/Cards";
import StudentsCards from "./components/admincomponents/Student/StudentsCard";
import TeachersCards from "./components/admincomponents/Teacher/TeacherCard";
import CustomFormBuilder from "./components/admincomponents/Forms/EditForm";

import Protected from "./components/Protected";

export default function App() {
  const location = useLocation();
  dayjs.locale('es');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TransitionGroup>
        <Routes location={location}>
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />

          {/* Rutas protegidas para ADMIN */}
          <Route
            path="/admin"
            element={
              <Protected roles={["admin"]}>
                <Admin />
              </Protected>
            }
          />
          <Route
            path="/admin/student"
            element={
              <Protected roles={["admin"]}>
                <StudentsCards />
              </Protected>
            }
          />
          <Route
            path="/admin/teacher"
            element={
              <Protected roles={["admin"]}>
                <TeachersCards />
              </Protected>
            }
          />
          <Route
            path="/admin/taller"
            element={
              <Protected roles={["admin"]}>
                <TalleresCards />
              </Protected>
            }
          />
          <Route
            path="/admin/forms"
            element={
              <Protected roles={["admin"]}>
                <CustomFormBuilder />
              </Protected>
            }
          />
          <Route
            path="/admin/student/:id"
            element={
              <Protected roles={["admin"]}>
                <StudentDetailPage />
              </Protected>
            }
          />
          <Route
            path="/admin/teacher/:id"
            element={
              <Protected roles={["admin"]}>
                <TeacherDetailPage />
              </Protected>
            }
          />
          <Route
            path="/admin/taller/:id"
            element={
              <Protected roles={["admin"]}>
                <TallerDetailPage />
              </Protected>
            }
          />
          <Route
            path="/admin/comprobantes"
            element={
              <Protected roles={["admin"]}>
                <ComprobantesPage />
              </Protected>
            }
          />

          {/* Ruta de "no autorizado" */}
          <Route
            path="/unauthorized"
            element={
              <div style={{ padding: 20 }}>
                <h2>🚫 Acceso no autorizado</h2>
                <p>No tienes permiso para ver esta página.</p>
              </div>
            }
          />

          {/* Captura cualquier otra ruta */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </TransitionGroup>
    </LocalizationProvider>
  );
}
