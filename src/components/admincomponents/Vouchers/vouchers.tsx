import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    IconButton,
    Collapse,
    Divider,
    InputAdornment,
    Tooltip,
    Alert,
    Container,
    Stack
} from '@mui/material';
import {
    Add as AddIcon,
    Search as SearchIcon,
    FilterList as FilterIcon,
    Visibility as VisibilityIcon,
    Download as DownloadIcon,
    Receipt as ReceiptIcon,
    Person as PersonIcon,
    Business as BusinessIcon,
    CalendarToday as CalendarIcon,
    AttachMoney as MoneyIcon,
    Delete as DeleteIcon
} from '@mui/icons-material';

const Comprobantes = () => {
    const [comprobantes, setComprobantes] = useState([
        {
            id: 1,
            numero: 'A001-00000123',
            tipo: 'Factura A',
            fecha: '2024-06-15',
            cliente: 'Empresa XYZ S.A.',
            cuit: '20-12345678-9',
            subtotal: 10000,
            iva: 2100,
            total: 12100,
            estado: 'Pagado'
        },
        {
            id: 2,
            numero: 'B001-00000456',
            tipo: 'Factura B',
            fecha: '2024-06-20',
            cliente: 'Juan Pérez',
            cuit: '23-87654321-4',
            subtotal: 5500,
            iva: 1155,
            total: 6655,
            estado: 'Pendiente'
        },
        {
            id: 3,
            numero: 'A001-00000789',
            tipo: 'Nota de Crédito',
            fecha: '2024-06-25',
            cliente: 'Comercial ABC',
            cuit: '30-11223344-5',
            subtotal: -2000,
            iva: -420,
            total: -2420,
            estado: 'Procesado'
        }
    ]);

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [filtroEstado, setFiltroEstado] = useState('Todos');
    const [busqueda, setBusqueda] = useState('');
    const [nuevoComprobante, setNuevoComprobante] = useState({
        tipo: 'Factura A',
        cliente: '',
        cuit: '',
        conceptos: [{ descripcion: '', cantidad: 1, precio: '' }]
    });

    interface Concepto {
        descripcion: string;
        cantidad: number | string;
        precio: number | string;
    }

    interface NuevoComprobante {
        tipo: string;
        cliente: string;
        cuit: string;
        conceptos: Concepto[];
    }

    interface Comprobante {
        id: number;
        numero: string;
        tipo: string;
        fecha: string;
        cliente: string;
        cuit: string;
        subtotal: number;
        iva: number;
        total: number;
        estado: string;
        conceptos?: Concepto[];
    }

    const calcularIVA = (subtotal: number, tipo: string): number => {
        if (tipo === 'Factura A' || tipo === 'Nota de Crédito') {
            return subtotal * 0.21;
        }
        return 0;
    };

    const calcularTotal = (subtotal: number, iva: number): number => {
        return subtotal + iva;
    };

    const generarNumero = (tipo: string): string => {
        const prefijo = tipo === 'Factura A' ? 'A001' : tipo === 'Factura B' ? 'B001' : 'C001';
        const ultimoNumero = comprobantes
            .filter(c => c.numero.startsWith(prefijo))
            .length + 1;
        return `${prefijo}-${String(ultimoNumero).padStart(8, '0')}`;
    };

    const agregarConcepto = () => {
        setNuevoComprobante(prev => ({
            ...prev,
            conceptos: [...prev.conceptos, { descripcion: '', cantidad: 1, precio: '' }]
        }));
    };

    interface ActualizarConceptoFn {
        (index: number, campo: keyof Concepto, valor: string | number): void;
    }

    const actualizarConcepto: ActualizarConceptoFn = (index, campo, valor) => {
        setNuevoComprobante(prev => ({
            ...prev,
            conceptos: prev.conceptos.map((concepto, i) =>
                i === index ? { ...concepto, [campo]: valor } : concepto
            )
        }));
    };

    interface EliminarConceptoFn {
        (index: number): void;
    }

    const eliminarConcepto: EliminarConceptoFn = (index) => {
        if (nuevoComprobante.conceptos.length > 1) {
            setNuevoComprobante(prev => ({
                ...prev,
                conceptos: prev.conceptos.filter((_, i) => i !== index)
            }));
        }
    };

    const calcularSubtotal = () => {
        return nuevoComprobante.conceptos.reduce((total, concepto) => {
            const cantidad = parseFloat(concepto.cantidad.toString()) || 0;
            const precio = parseFloat(concepto.precio.toString()) || 0;
            return total + (cantidad * precio);
        }, 0);
    };

    const generarComprobante = () => {
        const subtotal = calcularSubtotal();
        const iva = calcularIVA(subtotal, nuevoComprobante.tipo);
        const total = calcularTotal(subtotal, iva);

        const comprobante = {
            id: comprobantes.length + 1,
            numero: generarNumero(nuevoComprobante.tipo),
            tipo: nuevoComprobante.tipo,
            fecha: new Date().toISOString().split('T')[0],
            cliente: nuevoComprobante.cliente,
            cuit: nuevoComprobante.cuit,
            subtotal,
            iva,
            total,
            estado: 'Pendiente',
            conceptos: nuevoComprobante.conceptos
        };

        setComprobantes(prev => [...prev, comprobante]);
        setNuevoComprobante({
            tipo: 'Factura A',
            cliente: '',
            cuit: '',
            conceptos: [{ descripcion: '', cantidad: 1, precio: '' }]
        });
        setMostrarFormulario(false);
    };

    const comprobantesFiltrados = comprobantes.filter(comprobante => {
        const coincideBusqueda = comprobante.cliente.toLowerCase().includes(busqueda.toLowerCase()) ||
            comprobante.numero.toLowerCase().includes(busqueda.toLowerCase());
        const coincideEstado = filtroEstado === 'Todos' || comprobante.estado === filtroEstado;
        return coincideBusqueda && coincideEstado;
    });

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'Pagado': return 'success';
            case 'Pendiente': return 'warning';
            case 'Procesado': return 'info';
            default: return 'default';
        }
    };

    const formatearMonto = (monto: number) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
        }).format(monto);
    };

    const formatearFecha = (fecha: string) => {
        return new Date(fecha).toLocaleDateString('es-AR');
    };

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            {/* Header */}
            <Card elevation={3} sx={{ mb: 3 }}>
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
                        <Box>
                            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                                Gestión de Comprobantes
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                Administra y genera tus comprobantes 
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<AddIcon />}
                            onClick={() => setMostrarFormulario(!mostrarFormulario)}
                            sx={{
                                background: '#009688',
                                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                            }}
                        >
                            Nuevo Comprobante
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            {/* Formulario de nuevo comprobante */}
            <Collapse in={mostrarFormulario}>
                <Card elevation={3} sx={{ mb: 3, borderLeft: '4px solid #2196F3' }}>
                    <CardHeader
                        title="Generar Nuevo Comprobante"
                        titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                    />
                    <CardContent>
                        {/* Datos principales */}
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} mb={3}>
                            <FormControl sx={{ minWidth: 200 }}>
                                <InputLabel>Tipo de Comprobante</InputLabel>
                                <Select
                                    value={nuevoComprobante.tipo}
                                    label="Tipo de Comprobante"
                                    onChange={(e) => setNuevoComprobante(prev => ({ ...prev, tipo: e.target.value }))}
                                >
                                    <MenuItem value="Factura A">Factura A</MenuItem>
                                    <MenuItem value="Factura B">Factura B</MenuItem>
                                    <MenuItem value="Nota de Crédito">Nota de Crédito</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                fullWidth
                                label="Cliente"
                                value={nuevoComprobante.cliente}
                                onChange={(e) => setNuevoComprobante(prev => ({ ...prev, cliente: e.target.value }))}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField
                                fullWidth
                                label="CUIT"
                                value={nuevoComprobante.cuit}
                                onChange={(e) => setNuevoComprobante(prev => ({ ...prev, cuit: e.target.value }))}
                                placeholder="XX-XXXXXXXX-X"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BusinessIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Stack>

                        {/* Conceptos */}
                        <Box mb={4}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                <Typography variant="h6" fontWeight="bold">
                                    Conceptos
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="success"
                                    startIcon={<AddIcon />}
                                    onClick={agregarConcepto}
                                >
                                    Agregar Concepto
                                </Button>
                            </Box>

                            <Stack spacing={2}>
                                {nuevoComprobante.conceptos.map((concepto, index) => (
                                    <Card key={index} variant="outlined" sx={{ p: 2 }}>
                                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center">
                                            <TextField
                                                fullWidth
                                                label="Descripción"
                                                value={concepto.descripcion}
                                                onChange={(e) => actualizarConcepto(index, 'descripcion', e.target.value)}
                                                placeholder="Descripción del producto/servicio"
                                                sx={{ flex: 2 }}
                                            />

                                            <TextField
                                                label="Cantidad"
                                                type="number"
                                                value={concepto.cantidad}
                                                onChange={(e) => actualizarConcepto(index, 'cantidad', e.target.value)}
                                                inputProps={{ min: 1 }}
                                                sx={{ minWidth: 100 }}
                                            />

                                            <TextField
                                                label="Precio"
                                                type="number"
                                                value={concepto.precio}
                                                onChange={(e) => actualizarConcepto(index, 'precio', e.target.value)}
                                                inputProps={{ step: 0.01 }}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">$</InputAdornment>
                                                    ),
                                                }}
                                                sx={{ minWidth: 120 }}
                                            />

                                            <Box display="flex" flexDirection="column" alignItems="center" minWidth={120}>
                                                <Typography variant="body2" color="text.secondary">
                                                    Subtotal
                                                </Typography>
                                                <Typography variant="body2" fontWeight="bold">
                                                    {formatearMonto((parseFloat(concepto.cantidad.toString()) || 0) * (parseFloat(concepto.precio.toString()) || 0))}
                                                </Typography>
                                            </Box>

                                            {nuevoComprobante.conceptos.length > 1 && (
                                                <IconButton
                                                    onClick={() => eliminarConcepto(index)}
                                                    color="error"
                                                    size="small"
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            )}
                                        </Stack>
                                    </Card>
                                ))}
                            </Stack>
                        </Box>

                        {/* Resumen */}
                        <Alert severity="info" sx={{ mb: 3 }}>
                            <Stack direction="row" spacing={4} justifyContent="center" textAlign="center">
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Subtotal
                                    </Typography>
                                    <Typography variant="h6" fontWeight="bold">
                                        {formatearMonto(calcularSubtotal())}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        IVA (21%)
                                    </Typography>
                                    <Typography variant="h6" fontWeight="bold">
                                        {formatearMonto(calcularIVA(calcularSubtotal(), nuevoComprobante.tipo))}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Total
                                    </Typography>
                                    <Typography variant="h5" fontWeight="bold" color="primary">
                                        {formatearMonto(calcularTotal(calcularSubtotal(), calcularIVA(calcularSubtotal(), nuevoComprobante.tipo)))}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Alert>

                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                fullWidth
                                onClick={generarComprobante}
                                disabled={!nuevoComprobante.cliente || !nuevoComprobante.cuit || calcularSubtotal() === 0}
                            >
                                Generar Comprobante
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => setMostrarFormulario(false)}
                                sx={{ minWidth: 120 }}
                            >
                                Cancelar
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Collapse>

            {/* Filtros y búsqueda */}
            <Card elevation={3} sx={{ mb: 3 }}>
                <CardContent>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center">
                        <TextField
                            fullWidth
                            placeholder="Buscar por cliente o número de comprobante..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <FormControl sx={{ minWidth: 200 }}>
                            <InputLabel>Filtrar por estado</InputLabel>
                            <Select
                                value={filtroEstado}
                                label="Filtrar por estado"
                                onChange={(e) => setFiltroEstado(e.target.value)}
                                startAdornment={<FilterIcon sx={{ mr: 1 }} />}
                            >
                                <MenuItem value="Todos">Todos los estados</MenuItem>
                                <MenuItem value="Pendiente">Pendiente</MenuItem>
                                <MenuItem value="Pagado">Pagado</MenuItem>
                                <MenuItem value="Procesado">Procesado</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </CardContent>
            </Card>

            {/* Lista de comprobantes */}
            <Card elevation={3}>
                <CardHeader
                    title="Comprobantes Generados"
                    subheader={`${comprobantesFiltrados.length} comprobantes encontrados`}
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <CardContent sx={{ p: 0 }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                                    <TableCell>
                                        <Box display="flex" alignItems="center">
                                            <ReceiptIcon sx={{ mr: 1 }} />
                                            Comprobante
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box display="flex" alignItems="center">
                                            <PersonIcon sx={{ mr: 1 }} />
                                            Cliente
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box display="flex" alignItems="center">
                                            <CalendarIcon sx={{ mr: 1 }} />
                                            Fecha
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box display="flex" alignItems="center">
                                            <MoneyIcon sx={{ mr: 1 }} />
                                            Total
                                        </Box>
                                    </TableCell>
                                    <TableCell>Estado</TableCell>
                                    <TableCell align="right">Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {comprobantesFiltrados.map((comprobante) => (
                                    <TableRow key={comprobante.id} hover>
                                        <TableCell>
                                            <Box>
                                                <Typography variant="body2" fontWeight="bold">
                                                    {comprobante.numero}
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary">
                                                    {comprobante.tipo}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box>
                                                <Typography variant="body2" fontWeight="medium">
                                                    {comprobante.cliente}
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary">
                                                    {comprobante.cuit}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body2">
                                                {formatearFecha(comprobante.fecha)}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body2" fontWeight="bold">
                                                {formatearMonto(comprobante.total)}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Chip
                                                label={comprobante.estado}
                                                color={getEstadoColor(comprobante.estado)}
                                                size="small"
                                                variant="filled"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <Stack direction="row" spacing={1} justifyContent="flex-end">
                                                <Tooltip title="Ver detalles">
                                                    <IconButton color="primary" size="small">
                                                        <VisibilityIcon />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Descargar PDF">
                                                    <IconButton color="success" size="small">
                                                        <DownloadIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {comprobantesFiltrados.length === 0 && (
                        <Box textAlign="center" py={6}>
                            <ReceiptIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
                            <Typography variant="h6" color="text.secondary" gutterBottom>
                                No se encontraron comprobantes
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Intenta ajustar tus filtros de búsqueda o genera tu primer comprobante.
                            </Typography>
                        </Box>
                    )}
                </CardContent>
            </Card>
        </Container>
    );
};

export default Comprobantes;