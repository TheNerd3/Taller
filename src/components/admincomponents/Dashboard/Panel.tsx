import {
    Box,
    Typography,
    Divider,
    IconButton,
    Badge,
    Card,
    CardContent,
    Button,
} from "@mui/material";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import Calendar from "./Calendar";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import Comprobantes from "../Vouchers/vouchers";
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                bgcolor: "#F8F6F4",
                borderRadius: 4,
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                width: "100%",
            }}
        >
            {/* 🔔 Campanita */}
            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
                <IconButton>
                    <Badge variant="dot" color="error">
                        <NotificationsNoneRoundedIcon />
                    </Badge>
                </IconButton>
            </Box>


            {/* 👥 Estadísticas generales */}
            <Box sx={{ width: "100%", mb: 3 }}>
                <Typography fontSize={14} fontWeight={600} mb={2} sx={{ color: "#000" }}>
                    Información general
                </Typography>

                <Box display="flex" alignItems="center" mb={1}>
                    <GroupsRoundedIcon sx={{ mr: 1, fontSize: 20, color: "#00695C" }} />
                    <Typography fontSize={14} sx={{ color: "#00695C" }}>
                        Alumnos totales:
                    </Typography>
                    <Typography fontWeight={700} sx={{ color: "#000", ml: 0.5 }}>
                        128
                    </Typography>
                </Box>

                <Box display="flex" alignItems="center">
                    <SchoolRoundedIcon sx={{ mr: 1, fontSize: 20, color: "#00695C" }} />
                    <Typography fontSize={14} sx={{ color: "#00695C" }}>
                        Docentes activos:
                    </Typography>
                    <Typography fontWeight={700} sx={{ color: "#000", ml: 0.5 }}>
                        18
                    </Typography>
                </Box>
            </Box>
            <Divider sx={{ width: "100%", mb: 3 }} />

            {/* 💸 Card de Comprobantes */}
            <Card
                sx={{
                    bgcolor: "#fff",
                    width: "100%",
                    mb: 3,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                    borderRadius: 3,
                }}
            >
                <CardContent>
                    <Box display="flex" alignItems="center" mb={1}>
                        <ReceiptLongRoundedIcon sx={{ mr: 1, color: "#00695C" }} />
                        <Typography fontWeight={600} color="#000">
                            Comprobantes
                        </Typography>
                    </Box>

                    <Typography fontSize={32} fontWeight={900} color="#000">
                        42
                    </Typography>
                    <Typography fontSize={13} color="text.secondary" mb={2}>
                        Este mes se recibieron 42 comprobantes de pago
                    </Typography>

                    <Box textAlign="right">
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                bgcolor: "#00695C",
                                textTransform: "none",
                                borderRadius: 2,
                                fontWeight: "bold",
                                color: "#fff",
                                borderColor: "#ccc",
                                "&:hover": {
                                    bgcolor: "#fff",
                                    color: "#00695C",
                                    borderColor: "#00695C",
                                },
                            }}
                            onClick={() => {
                                navigate("/admin/comprobantes");
                            }}
                        >
                            Ver comprobantes
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            <Divider sx={{ width: "100%", mb: 3 }} />

            {/* 📅 Próximos eventos */}
            <Box sx={{ width: "100%", mb: 3 }}>
                <Calendar />
            </Box>
            <Divider sx={{ width: "100%", mb: 3 }} />

            {/* 💰 Total recaudado */}
            <Card
                sx={{
                    bgcolor: "#00695C",
                    width: "100%",
                    mb: 3,
                    boxShadow: "none",
                    borderRadius: 3,
                }}
            >
                <CardContent>
                    <Box display="flex" alignItems="center" mb={1}>
                        <AttachMoneyRoundedIcon sx={{ mr: 1, color: "#fff" }} />
                        <Typography fontWeight={600} color="#fff">
                            Recaudado en junio
                        </Typography>
                    </Box>
                    <Typography fontSize={24} fontWeight={900} color="#fff">
                        $132.500
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AdminSidebar;
