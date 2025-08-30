import {
  Box,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  HomeRounded,
  GroupsRounded,
  SchoolRounded,
  ReceiptLongRounded,
  EventNoteRounded,
  PaletteRounded,
  SettingsRounded,
  InsertDriveFileRounded,
} from "@mui/icons-material";

const navItems = [
  { icon: <HomeRounded />, tooltip: "Inicio" },
  { icon: <GroupsRounded />, tooltip: "Alumnos" },
  { icon: <SchoolRounded />, tooltip: "Docentes" },
  { icon: <ReceiptLongRounded />, tooltip: "Comprobantes" },
  { icon: <EventNoteRounded />, tooltip: "Calendario" },
  { icon: <PaletteRounded />, tooltip: "Talleres" },
  { icon: <SettingsRounded />, tooltip: "Configuración" },
  { icon: <InsertDriveFileRounded />, tooltip: "Formularios" },
];

interface AdminSidebarNavProps {
  activeIndex?: number;
  setActiveIndex?: (index: number) => void;
  onNavChange?: (route: string) => void;
}

const AdminSidebarNav = ({ 
  activeIndex = 0, 
  setActiveIndex, 
  onNavChange 
}: AdminSidebarNavProps) => {
  
  const handleNavClick = (index: number) => {
    // Si existe setActiveIndex, lo usamos (para la página principal)
    if (setActiveIndex) {
      setActiveIndex(index);
    }
    
    // Si existe onNavChange, navegamos a diferentes rutas
    if (onNavChange) {
      const routes = [
        "/admin",           // Inicio
        "/admin",           // Alumnos - vuelve a admin con activeIndex 1
        "/admin",           // Docentes - vuelve a admin con activeIndex 2
        "/admin",           // Comprobantes - vuelve a admin con activeIndex 3
        "/admin",           // Calendario - vuelve a admin con activeIndex 4
        "/admin",           // Talleres - vuelve a admin con activeIndex 5
        "/admin",           // Configuración - vuelve a admin con activeIndex 6
      ];
      onNavChange(routes[index]);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          left: 20,
          top: 20,
          bottom: 20,
          width: 64,
          bgcolor: "#FDF6F2",
          borderRadius: 6,
          py: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          zIndex: 1000,
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          {navItems.map((item, index) => (
            <Tooltip key={index} title={item.tooltip} placement="right">
              <IconButton
                onClick={() => handleNavClick(index)}
                sx={{
                  bgcolor: activeIndex === index ? "#00695C" : "#fff",
                  color: activeIndex === index ? "#fff" : "#00695C",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  boxShadow:
                    activeIndex === index
                      ? "0 2px 6px rgba(0,0,0,0.2)"
                      : "none",
                  transition: "all 0.3s ease",
                  position: "relative",
                  "&:hover": {
                    bgcolor: activeIndex === index ? "#00695C" : "#f0f0f0",
                  }
                }}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>

        <Avatar
          src="https://i.pravatar.cc/100?img=5"
          sx={{
            width: 40,
            height: 40,
            mb: 1,
            border: "2px solid #fff",
          }}
        />
      </Box>
    </>
  );
};

export default AdminSidebarNav;