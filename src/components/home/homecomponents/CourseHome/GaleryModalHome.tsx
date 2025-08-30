import {
  Modal,
  Box,
  IconButton,
  Typography,
  Fade,
  Backdrop
} from "@mui/material";
import {
  Close,
  ArrowBack,
  ArrowForward,
  ZoomIn,
  ZoomOut
} from "@mui/icons-material";
import { useState, useEffect } from "react";

const GalleryModalHome = ({ open, onClose, images, currentIndex, setCurrentIndex }: any) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reset zoom and position when image changes
  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev: any) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev: any) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.5, 0.5));
  };

  const handleMouseDown = (e: any) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: any) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: any) => {
    if (!open) return;

    switch (e.key) {
      case 'ArrowLeft':
        handlePrev();
        break;
      case 'ArrowRight':
        handleNext();
        break;
      case 'Escape':
        onClose();
        break;
      case '+':
      case '=':
        handleZoomIn();
        break;
      case '-':
        handleZoomOut();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  if (!images || images.length === 0) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        sx: { bgcolor: 'rgba(0,0,0,0.9)' }
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            outline: 'none'
          }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Header con controles */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 80,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 3,
              zIndex: 10
            }}
          >
            {/* Contador */}
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                fontWeight: 'bold'
              }}
            >
              {currentIndex + 1} de {images.length}
            </Typography>

            {/* Controles de zoom */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                onClick={handleZoomOut}
                disabled={zoom <= 0.5}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.2)'
                  },
                  '&:disabled': {
                    color: 'rgba(255,255,255,0.3)'
                  }
                }}
              >
                <ZoomOut />
              </IconButton>

              <Typography
                sx={{
                  color: 'white',
                  alignSelf: 'center',
                  minWidth: 60,
                  textAlign: 'center',
                  fontFamily: "'Edu NSW ACT Hand Pre', cursive"
                }}
              >
                {Math.round(zoom * 100)}%
              </Typography>

              <IconButton
                onClick={handleZoomIn}
                disabled={zoom >= 3}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.2)'
                  },
                  '&:disabled': {
                    color: 'rgba(255,255,255,0.3)'
                  }
                }}
              >
                <ZoomIn />
              </IconButton>
            </Box>

            {/* Botón cerrar */}
            <IconButton
              onClick={onClose}
              sx={{
                bgcolor: 'rgba(255,255,255,0.1)',
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.2)'
                }
              }}
            >
              <Close />
            </IconButton>
          </Box>

          {/* Imagen principal */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <img
              src={images[currentIndex]}
              alt={`Galería ${currentIndex + 1}`}
              style={{
                maxWidth: zoom > 1 ? 'none' : '90%',
                maxHeight: zoom > 1 ? 'none' : '90%',
                objectFit: 'contain',
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                transition: isDragging ? 'none' : 'transform 0.3s ease',
                userSelect: 'none',
                pointerEvents: zoom > 1 ? 'auto' : 'none'
              }}
              onMouseDown={handleMouseDown}
              draggable={false}
            />
          </Box>

          {/* Botón anterior */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(0,0,0,0.6)',
              color: 'white',
              width: 56,
              height: 56,
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.8)',
                transform: 'translateY(-50%) scale(1.1)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <ArrowBack sx={{ fontSize: 28 }} />
          </IconButton>

          {/* Botón siguiente */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(0,0,0,0.6)',
              color: 'white',
              width: 56,
              height: 56,
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.8)',
                transform: 'translateY(-50%) scale(1.1)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <ArrowForward sx={{ fontSize: 28 }} />
          </IconButton>

          {/* Thumbnails en la parte inferior */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 120,
              background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: 3
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                overflowX: 'auto',
                maxWidth: '100%',
                py: 2,
                '&::-webkit-scrollbar': {
                  height: 6,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: 3
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  borderRadius: 3
                }
              }}
            >
              {images.map((img: any, index: any) => (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setCurrentIndex(index)}
                  sx={{
                    width: 60,
                    height: 60,
                    objectFit: 'cover',
                    borderRadius: 1,
                    cursor: 'pointer',
                    border: currentIndex === index ? '3px solid #00A78E' : '3px solid transparent',
                    opacity: currentIndex === index ? 1 : 0.6,
                    transition: 'all 0.3s ease',
                    flexShrink: 0,
                    '&:hover': {
                      opacity: 1,
                      transform: 'scale(1.1)'
                    }
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Instrucciones de teclado */}
          <Box
            sx={{
              position: 'absolute',
              top: 100,
              right: 20,
              bgcolor: 'rgba(0,0,0,0.7)',
              borderRadius: 2,
              p: 2,
              maxWidth: 200
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: 'white',
                fontFamily: "'Edu NSW ACT Hand Pre', cursive",
                display: 'block',
                mb: 1,
                fontWeight: 'bold'
              }}
            >
              Atajos de teclado:
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', display: 'block' }}>
              ← → Navegar
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', display: 'block' }}>
              + - Zoom
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', display: 'block' }}>
              ESC Cerrar
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default GalleryModalHome;