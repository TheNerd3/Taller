import { Box, Stack } from "@mui/material";
import AdminSidebarNav from "../../components/admincomponents/Dashboard/Navbaradmin";
import AdminSidebar from "../../components/admincomponents/Dashboard/Panel";
import Comprobantes from "../../components/admincomponents/Vouchers/vouchers"; 
import { useParams, useNavigate } from "react-router-dom";

export default function ComprobantesPage() {
    const navigate = useNavigate();

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
                activeIndex={3} 
                onNavChange={() => navigate('/admin')}
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
                        <Comprobantes />
                    </Box>

                    <Box flexShrink={0} width={{ xs: "100%", md: 350 }}>
                        <AdminSidebar />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}
