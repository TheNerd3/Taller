"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Link,
  Fade,
  Slide,
  Zoom,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function AuthComponent() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 400);
  };

   useEffect(() => {
      const link = document.createElement("link");
      link.href = "https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Hand+Pre:wght@400..700&display=swap";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: { xs: "100%", md: "900px" },
          height: "600px",
          boxShadow: 5,
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "white",
          position: "relative",
        }}
      >
        {/* Panel Izquierdo - Welcome Back (Login) / Formulario (Register) */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            ...(isLogin && {
              backgroundImage: "url('/Fondoyemito.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }),
            transition: "all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
          }}
        >
          {/* Welcome Back - Solo en Login */}
          {isLogin && (
            <Fade in={!isTransitioning} timeout={500}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 4,
                  color: "white",
                }}
              >
                <Slide
                  direction="right"
                  in={!isTransitioning}
                  timeout={600}
                >
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    
                    sx={{ color: "#000" }}
                  >
                    Welcome Back!
                  </Typography>
                </Slide>
                
                <Slide
                  direction="right"
                  in={!isTransitioning}
                  timeout={700}
                >
                  <Typography
                    variant="body1"
                    textAlign="center"
                    mb={4}
                    sx={{ color: "#000" }}
                  >
                    To keep connected with us please <br />
                    login with your personal info
                  </Typography>
                </Slide>

                <Zoom in={!isTransitioning} timeout={800}>
                  <Button
                    variant="outlined"
                    onClick={handleToggle}
                    disabled={isTransitioning}
                    sx={{
                      borderColor: "#000",
                      color: "#000",
                      bgcolor: "#fff",
                      px: 4,
                      py: 1,
                      borderRadius: "50px",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#00A78E",
                        borderColor: "#00A78E",
                        color: "#fff",
                        transform: "scale(1.05)",
                      },
                      "&:disabled": {
                        opacity: 0.7,
                      },
                    }}
                  >
                    SIGN UP
                  </Button>
                </Zoom>
              </Box>
            </Fade>
          )}

          {/* Formulario Create Account - Solo en Register */}
          {!isLogin && (
            <Fade in={!isTransitioning} timeout={500}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  px: { xs: 3, sm: 6 },
                }}
              >
                <Box sx={{ width: "100%", maxWidth: 400 }}>
                  <Slide
                    direction="left"
                    in={!isTransitioning}
                    timeout={600}
                  >
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      color="#00A78E"
                      textAlign="center"
                      gutterBottom
                    >
                      Create Account
                    </Typography>
                  </Slide>

                  <Box component="form" noValidate>
                    <Fade in={!isTransitioning} timeout={{ enter: 800, exit: 300 }}>
                      <Box
                        sx={{
                          transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
                          transition: "transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)",
                        }}
                      >
                        <TextField
                          label="Name"
                          fullWidth
                          margin="normal"
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": { 
                              borderRadius: "30px",
                              transition: "all 0.3s ease-in-out",
                              "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 12px rgba(0, 167, 142, 0.15)",
                              },
                              "&:focus-within": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 12px rgba(0, 167, 142, 0.25)",
                              },
                            },
                            "& .MuiInputLabel-root": {
                              transition: "all 0.3s ease-in-out",
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <PersonIcon sx={{ color: "#00A78E", mr: 1 }} />
                            ),
                          }}
                        />
                      </Box>
                    </Fade>

                    <Fade in={!isTransitioning} timeout={{ enter: 900, exit: 300 }}>
                      <Box
                        sx={{
                          transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
                          transition: "transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1) 0.1s",
                        }}
                      >
                        <TextField
                          label="Email"
                          fullWidth
                          margin="normal"
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": { 
                              borderRadius: "30px",
                              transition: "all 0.3s ease-in-out",
                              "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 12px rgba(0, 167, 142, 0.15)",
                              },
                              "&:focus-within": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 12px rgba(0, 167, 142, 0.25)",
                              },
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <EmailIcon sx={{ color: "#00A78E", mr: 1 }} />
                            ),
                          }}
                        />
                      </Box>
                    </Fade>

                    <Fade in={!isTransitioning} timeout={{ enter: 1000, exit: 300 }}>
                      <Box
                        sx={{
                          transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
                          transition: "transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1) 0.2s",
                        }}
                      >
                        <TextField
                          label="Password"
                          type={showPassword ? "text" : "password"}
                          fullWidth
                          margin="normal"
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": { 
                              borderRadius: "30px",
                              transition: "all 0.3s ease-in-out",
                              "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 12px rgba(0, 167, 142, 0.15)",
                              },
                              "&:focus-within": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 12px rgba(0, 167, 142, 0.25)",
                              },
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                sx={{ cursor: "pointer" }}
                              >
                                <Box
                                  onClick={() => setShowPassword((show) => !show)}
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mr: 1,
                                    transition: "transform 0.2s ease-in-out",
                                    "&:hover": {
                                      transform: "scale(1.1)",
                                    },
                                  }}
                                >
                                  {showPassword ? (
                                    <VisibilityOff sx={{ color: "#00A78E" }} />
                                  ) : (
                                    <Visibility sx={{ color: "#00A78E" }} />
                                  )}
                                </Box>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Fade>

                    <Fade in={!isTransitioning} timeout={{ enter: 1100, exit: 300 }}>
                      <Box
                        sx={{
                          transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
                          transition: "transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1) 0.3s",
                        }}
                      >
                        <Button
                          fullWidth
                          variant="contained"
                          sx={{
                            mt: 3,
                            bgcolor: "#00A78E",
                            borderRadius: "50px",
                            textTransform: "none",
                            py: 1.5,
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                            transition: "all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)",
                            boxShadow: "0 4px 15px rgba(0, 167, 142, 0.3)",
                            "&:hover": { 
                              bgcolor: "#239e8e",
                              transform: "translateY(-3px) scale(1.02)",
                              boxShadow: "0 8px 25px rgba(0, 167, 142, 0.4)",
                            },
                            "&:active": {
                              transform: "translateY(-1px) scale(0.98)",
                            },
                          }}
                        >
                          SIGN UP
                        </Button>
                      </Box>
                    </Fade>
                  </Box>
                </Box>
              </Box>
            </Fade>
          )}
        </Box>

        {/* Panel Derecho - Formulario Sign In (Login) / Hello Friend (Register) */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            ...(!isLogin && {
              backgroundImage: "url('/Fondoyemito.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }),
            transition: "all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
          }}
        >
          {/* Formulario Sign In - Solo en Login */}
          {isLogin && (
            <Fade in={!isTransitioning} timeout={500}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: 6,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    maxWidth: 400,
                    mx: "auto",
                    width: "100%",
                  }}
                >
                  <Slide
                    direction="left"
                    in={!isTransitioning}
                    timeout={600}
                  >
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      color="#28bfa4"
                      textAlign="center"
                      gutterBottom
                    >
                      Sign In La Yema
                    </Typography>
                  </Slide>

                  <Box component="form" noValidate>
                    <Fade in={!isTransitioning} timeout={{ enter: 800, exit: 300 }}>
                      <Box
                        sx={{
                          transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
                          transition: "transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)",
                        }}
                      >
                        <TextField
                          label="Email"
                          fullWidth
                          margin="normal"
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": { 
                              borderRadius: "30px",
                              transition: "all 0.3s ease-in-out",
                              "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 12px rgba(40, 191, 164, 0.15)",
                              },
                              "&:focus-within": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 12px rgba(40, 191, 164, 0.25)",
                              },
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <EmailIcon sx={{ color: "#00A78E", mr: 1 }} />
                            ),
                          }}
                        />
                      </Box>
                    </Fade>

                    <Fade in={!isTransitioning} timeout={{ enter: 900, exit: 300 }}>
                      <Box
                        sx={{
                          transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
                          transition: "transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1) 0.1s",
                        }}
                      >
                        <TextField
                          label="Password"
                          type={showPassword ? "text" : "password"}
                          fullWidth
                          margin="normal"
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": { 
                              borderRadius: "30px",
                              transition: "all 0.3s ease-in-out",
                              "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 12px rgba(40, 191, 164, 0.15)",
                              },
                              "&:focus-within": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 12px rgba(40, 191, 164, 0.25)",
                              },
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                sx={{ cursor: "pointer" }}
                              >
                                <Box
                                  onClick={() => setShowPassword((show) => !show)}
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mr: 1,
                                    transition: "transform 0.2s ease-in-out",
                                    "&:hover": {
                                      transform: "scale(1.1)",
                                    },
                                  }}
                                >
                                  {showPassword ? (
                                    <VisibilityOff sx={{ color: "#00A78E" }} />
                                  ) : (
                                    <Visibility sx={{ color: "#00A78E" }} />
                                  )}
                                </Box>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Fade>

                    <Fade in={!isTransitioning} timeout={{ enter: 1000, exit: 300 }}>
                      <Box
                        sx={{
                          transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
                          transition: "transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1) 0.2s",
                        }}
                      >
                        <Link
                          href="#"
                          underline="hover"
                          sx={{ 
                            display: "block", 
                            textAlign: "right", 
                            mb: 2,
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                              color: "#00A78E",
                              transform: "translateX(-5px)",
                            },
                          }}
                        >
                          Forgot your password?
                        </Link>
                      </Box>
                    </Fade>

                    <Fade in={!isTransitioning} timeout={{ enter: 1100, exit: 300 }}>
                      <Box
                        sx={{
                          transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
                          transition: "transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1) 0.3s",
                        }}
                      >
                        <Button
                          fullWidth
                          variant="contained"
                          sx={{
                            mt: 2,
                            bgcolor: "#28bfa4",
                            borderRadius: "50px",
                            textTransform: "none",
                            py: 1.5,
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                            transition: "all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)",
                            boxShadow: "0 4px 15px rgba(40, 191, 164, 0.3)",
                            "&:hover": { 
                              bgcolor: "#239e8e",
                              transform: "translateY(-3px) scale(1.02)",
                              boxShadow: "0 8px 25px rgba(40, 191, 164, 0.4)",
                            },
                            "&:active": {
                              transform: "translateY(-1px) scale(0.98)",
                            },
                          }}
                        >
                          SIGN IN
                        </Button>
                      </Box>
                    </Fade>
                  </Box>
                </Box>
              </Box>
            </Fade>
          )}

          {/* Hello Friend - Solo en Register */}
          {!isLogin && (
            <Fade in={!isTransitioning} timeout={500}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 4,
                  color: "white",
                }}
              >
                <Slide
                  direction="left"
                  in={!isTransitioning}
                  timeout={600}
                >
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: "#000" }}
                  >
                    Hello, Friend!
                  </Typography>
                </Slide>

                <Slide
                  direction="left"
                  in={!isTransitioning}
                  timeout={700}
                >
                  <Typography
                    variant="body1"
                    textAlign="center"
                    mb={4}
                    sx={{ color: "#000" }}
                  >
                    Enter your personal details <br />
                    and start journey with us
                  </Typography>
                </Slide>

                <Zoom in={!isTransitioning} timeout={800}>
                  <Button
                    variant="outlined"
                    onClick={handleToggle}
                    disabled={isTransitioning}
                    sx={{
                      borderColor: "#000",
                      color: "#000",
                      bgcolor: "#fff",
                      px: 4,
                      py: 1,
                      borderRadius: "50px",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#00A78E",
                        borderColor: "#00A78E",
                        color: "#fff",
                        transform: "scale(1.05)",
                      },
                      "&:disabled": {
                        opacity: 0.7,
                      },
                    }}
                  >
                    SIGN IN
                  </Button>
                </Zoom>
              </Box>
            </Fade>
          )}
        </Box>
      </Box>
    </Box>
  );
}