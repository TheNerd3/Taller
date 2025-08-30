// components/AddStudentModal.jsx
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
} from "@mui/material";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

interface AddStudentModalProps {
    open: boolean;
    onClose: () => void;
    talleres: string[];
}

const AddStudentModal = ({ open, onClose, talleres }: AddStudentModalProps) => {
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
                        width: { xs: "95%", sm: 480, md: 520 },
                        bgcolor: "background.paper",
                        p: 0,
                        borderRadius: 3,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        border: "1px solid",
                        borderColor: "divider",
                        overflow: "hidden",
                    }}
                >
                    {/* Header */}
                    <Box
                        sx={{
                            background: "linear-gradient(135deg, #009688 0%, #00695C 100%)", // verde-teal a verde oscuro
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
                            <Box
                                sx={{
                                    p: 1.5,
                                    borderRadius: 2,
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <PersonAddAlt1RoundedIcon sx={{ fontSize: 28 }} />
                            </Box>
                            <Box>
                                <Typography variant="h5" fontWeight={700} sx={{ mb: 0.5 }}>
                                    Nuevo Alumno
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                    Registra un nuevo estudiante en el sistema
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Form */}
                    <Box sx={{ p: 3 }}>
                        <Box display="flex" flexDirection="column" gap={2.5}>
                            <Box display="flex" gap={2}>
                                <TextField
                                    label="DNI"
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#667eea",
                                                }
                                            }
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <BadgeRoundedIcon sx={{ mr: 1, color: "text.secondary" }} />
                                        )
                                    }}
                                />
                                <TextField
                                    label="Edad"
                                    type="number"
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#667eea",
                                                }
                                            }
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <CalendarMonthRoundedIcon sx={{ mr: 1, color: "text.secondary" }} />
                                        )
                                    }}
                                />
                            </Box>

                            <Box display="flex" gap={2}>
                                <TextField
                                    label="Nombre"
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#667eea",
                                                }
                                            }
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <Groups2RoundedIcon sx={{ mr: 1, color: "text.secondary" }} />
                                        )
                                    }}
                                />
                                <TextField
                                    label="Apellido"
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#667eea",
                                                }
                                            }
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <Groups2RoundedIcon sx={{ mr: 1, color: "text.secondary" }} />
                                        )
                                    }}
                                />
                            </Box>

                            <Box display="flex" gap={2}>
                                <TextField
                                    label="Teléfono de mamá"
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#667eea",
                                                }
                                            }
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <PhoneIphoneRoundedIcon sx={{ mr: 1, color: "text.secondary" }} />
                                        )
                                    }}
                                />
                                <TextField
                                    label="Teléfono de papá"
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#667eea",
                                                }
                                            }
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <PhoneIphoneRoundedIcon sx={{ mr: 1, color: "text.secondary" }} />
                                        )
                                    }}
                                />
                            </Box>

                            <TextField
                                label="Taller"
                                select
                                fullWidth
                                variant="outlined"
                                defaultValue={talleres[0] || ""}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: 2,
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#667eea",
                                            }
                                        }
                                    }
                                }}
                            >
                                {talleres.map((t, i) => (
                                    <MenuItem key={i} value={t}>
                                        {t}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>

                        {/* Action Buttons */}
                        <Box display="flex" gap={2} mt={4}>
                            <Button
                                variant="outlined"
                                onClick={onClose}
                                fullWidth
                                sx={{
                                    py: 1.5,
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
                                    py: 1.5,
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
                                Guardar Alumno
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};

export default AddStudentModal;