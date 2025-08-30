import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdminCoursesSection from "../components/admincomponents/Dashboard/Dashboard";
import AdminSidebar from "../components/admincomponents/Dashboard/Panel";
import AdminSidebarNav from "../components/admincomponents/Dashboard/Navbaradmin";
import ProfileCards from "../components/admincomponents/Student/StudentsCard";
import ProfileCardsTeachers from "../components/admincomponents/Teacher/TeacherCard";
import Comprobantes from "../components/admincomponents/Vouchers/vouchers";
import CalendarTalleres from "../components/admincomponents/Calendar/Calendar";
import TalleresCards from "../components/admincomponents/Talleres/Cards";
import CustomFormBuilder from "../components/admincomponents/Forms/EditForm";

export default function Admin() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const renderMainContent = () => {
    switch (activeIndex) {
      case 0:
        return <AdminCoursesSection />;
      case 1:
        return <ProfileCards />;
      case 2:
        return <ProfileCardsTeachers />;
      case 3:
        return <Comprobantes />;
      case 4:
        return <CalendarTalleres />;
      case 5:
        return <TalleresCards />;
      case 6:
        return <div>Configuración</div>;
      case 7:
        return <CustomFormBuilder />;

      default:
        return <div>Bienvenida al panel</div>;
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/Fondo4K.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
        bgcolor: "#fff5f0",
      }}
    >
      <AdminSidebarNav
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        onNavChange={(ruta) => navigate(ruta)}
      />

      <Box
        sx={{
          minHeight: "100vh",
          pl: { xs: 4, md: 14 },
          pr: 4,
          pt: 4,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box flex={1}>
            {renderMainContent()}
          </Box>
          <Box flexShrink={0} width={{ xs: "100%", md: 350 }}>
            <AdminSidebar />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}