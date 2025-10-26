import React, { useState } from 'react';
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Card, Form } from 'react-bootstrap';


function CalculadoraIntegral({ opcionesSelects }) {
    const [valores, setValores] = useState({
        panelPotencia: '',
        panelCantidad: '',
        inversorPrecio: '',
        bateriaPrecio: '',
        bateriaCantidad: '',
        estructuraPrecio: '',
        instalacionPrecio: '',
        pesoEnvio: '',
        valorPie: ''
    });
    const [errores, setErrores] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValores({ ...valores, [name]: value });
        
        if (!esNoNegativo(value) && value !== '') {
            setErrores({ ...errores, [name]: 'No puede ser negativo' });
        } else {
            setErrores({ ...errores, [name]: undefined });
        }
    };

    function esNoNegativo(valor) {
        return Number(valor) >= 0;
    }

    // Función para reiniciar el formulario
    const handleReiniciar = () => {
        setValores({
            panelPotencia: '',
            panelCantidad: '',
            inversorPrecio: '',
            bateriaPrecio: '',
            bateriaCantidad: '',
            estructuraPrecio: '',
            instalacionPrecio: '',
            pesoEnvio: '',
            valorPie: '',
            tipoTecho: '',
            region: '',
            complejidad: '',
            subsidio: '',
            metodoEnvio: '',
            garantia: '',
            planPago: '',
            tipoPie: ''
        });
        setErrores({});
    };
    
    const potenciaEstim = (Number(valores.panelPotencia) * Number(valores.panelCantidad)) / 1000 || 0;
    
    const panelesIncluidos = valores.panelPotencia && valores.panelCantidad && valores.panelPrecio && Number(valores.panelPrecio) > 0;
    const panelesSubtotal = panelesIncluidos ? Number(valores.panelPrecio) * Number(valores.panelCantidad) : 0;
    const bateriasSubtotal = valores.bateriaPrecio && valores.bateriaCantidad ? Number(valores.bateriaPrecio) * Number(valores.bateriaCantidad) : 0;
    const subtotalEquipos = (panelesIncluidos ? panelesSubtotal : 0)
        + (valores.inversorPrecio ? Number(valores.inversorPrecio) : 0)
        + bateriasSubtotal
        + (valores.estructuraPrecio ? Number(valores.estructuraPrecio) : 0);
    const subtotalSinPanel = (valores.inversorPrecio ? Number(valores.inversorPrecio) : 0)
        + bateriasSubtotal
        + (valores.estructuraPrecio ? Number(valores.estructuraPrecio) : 0);

    const recargoTecho = valores.tipoTecho
        ? (opcionesSelects.tipoTecho.find(opt => opt.value === valores.tipoTecho)?.recargo || 0)
        : 0;
    const montoRecargoTecho = ((panelesIncluidos ? subtotalEquipos : subtotalSinPanel) * recargoTecho);

    const recargoComplejidad = valores.complejidad
        ? (opcionesSelects.complejidad.find(opt => opt.value === valores.complejidad)?.recargo || 0)
        : 0;
    const instalacionBase = valores.instalacionPrecio ? Number(valores.instalacionPrecio) : 0;
    const instalacionFinal = instalacionBase + (instalacionBase * recargoComplejidad);

    const subsidioPct = valores.subsidio
        ? (opcionesSelects.subsidio.find(opt => opt.value === valores.subsidio)?.descuento || 0)
        : 0;
    const montoSubsidio = ((panelesIncluidos ? subtotalEquipos : subtotalSinPanel) + montoRecargoTecho) * subsidioPct;

    const baseIVA = ((panelesIncluidos ? subtotalEquipos : subtotalSinPanel) + montoRecargoTecho - montoSubsidio + instalacionFinal);
    const montoIVA = baseIVA * 0.19;

    const baseEnvio = valores.region
        ? (opcionesSelects.region.find(opt => opt.value === valores.region)?.baseEnvio || 0)
        : 0;
    const pesoEnvio = valores.pesoEnvio ? Number(valores.pesoEnvio) : 0;
    const envioBase = baseEnvio + pesoEnvio * 700;
    const multiplicadorEnvio = valores.metodoEnvio
        ? (opcionesSelects.metodoEnvio.find(opt => opt.value === valores.metodoEnvio)?.multiplicador || 1)
        : 1;
    const montoEnvio = envioBase * multiplicadorEnvio;

    const recargoGarantia = valores.garantia
        ? (opcionesSelects.garantia.find(opt => opt.value === valores.garantia)?.recargo || 0)
        : 0;
    const montoGarantia = ((panelesIncluidos ? subtotalEquipos : subtotalSinPanel) + montoRecargoTecho) * recargoGarantia;

    const totalAntesFinanciar = ((panelesIncluidos ? subtotalEquipos : subtotalSinPanel) + montoRecargoTecho - montoSubsidio)
        + instalacionFinal + montoIVA + montoEnvio + montoGarantia;

    let pie = 0;
    if (valores.tipoPie === 'porcentaje' && valores.valorPie) {
        pie = totalAntesFinanciar * (Number(valores.valorPie) / 100);
    } else if (valores.tipoPie === 'monto' && valores.valorPie) {
        pie = Number(valores.valorPie);
    }

    if (pie > totalAntesFinanciar) pie = totalAntesFinanciar;

    const montoFinanciar = totalAntesFinanciar - pie;

    const plan = opcionesSelects.planPago.find(opt => opt.value === valores.planPago);
    const tasaMensual = plan ? plan.tasa : 0;
    const nCuotas = plan ? plan.cuotas : 1;
    const interesTotal = montoFinanciar * tasaMensual * nCuotas;

    const cuota = nCuotas > 1 ? (montoFinanciar + interesTotal) / nCuotas : montoFinanciar;

    return (
        <Container id="calculadora-integral">
            <Row className="justify-content-center">
                <h1>DEMO calculadora</h1>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={6} className="mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>Formulario</Card.Title>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Potencia del panel (W)</Form.Label>
                                            <Form.Control type="number" min="0" placeholder="Ej: 450" name="panelPotencia" value={valores.panelPotencia} onChange={handleChange} />
                                            {errores.panelPotencia && <div style={{color:'red', fontSize:'0.9em'}}>{errores.panelPotencia}</div>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Cantidad de paneles</Form.Label>
                                            <Form.Control type="number" min="0" placeholder="Ej: 6" name="panelCantidad" value={valores.panelCantidad} onChange={handleChange} />
                                            {errores.panelCantidad && <div style={{color:'red', fontSize:'0.9em'}}>{errores.panelCantidad}</div>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Inversor (precio)</Form.Label>
                                            <Form.Control type="number" min="0" placeholder="Ej: 350000" name="inversorPrecio" value={valores.inversorPrecio} onChange={handleChange} />
                                            {errores.inversorPrecio && <div style={{color:'red', fontSize:'0.9em'}}>{errores.inversorPrecio}</div>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Batería (precio unidad)</Form.Label>
                                            <Form.Control type="number" min="0" placeholder="Ej: 180000" name="bateriaPrecio" value={valores.bateriaPrecio} onChange={handleChange} />
                                            {errores.bateriaPrecio && <div style={{color:'red', fontSize:'0.9em'}}>{errores.bateriaPrecio}</div>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Cantidad baterias</Form.Label>
                                            <Form.Control type="number" min="0" placeholder="Ej: 2" name="bateriaCantidad" value={valores.bateriaCantidad} onChange={handleChange} />
                                            {errores.bateriaCantidad && <div style={{color:'red', fontSize:'0.9em'}}>{errores.bateriaCantidad}</div>}
                                            {potenciaEstim > 7 && (!valores.bateriaCantidad || Number(valores.bateriaCantidad) === 0) && (
                                                <div style={{color: 'orange', fontWeight: 'bold', fontSize: '0.85em'}}>
                                                    Recomendado considerar almacenamiento para estabilidad del sistema
                                                </div>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Estruct./cableado</Form.Label>
                                            <Form.Control type="number" min="0" placeholder="Ej: 120000" name="estructuraPrecio" value={valores.estructuraPrecio} onChange={handleChange} />
                                            {errores.estructuraPrecio && <div style={{color:'red', fontSize:'0.9em'}}>{errores.estructuraPrecio}</div>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Instalación base</Form.Label>
                                            <Form.Control type="number" min="0" placeholder="Ej: 150000" name="instalacionPrecio" value={valores.instalacionPrecio} onChange={handleChange} />
                                            {errores.instalacionPrecio && <div style={{color:'red', fontSize:'0.9em'}}>{errores.instalacionPrecio}</div>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Peso envio (kg)</Form.Label>
                                            <Form.Control type="number" min="0" placeholder="Ej: 350" name="pesoEnvio" value={valores.pesoEnvio} onChange={handleChange} />
                                            {errores.pesoEnvio && <div style={{color:'red', fontSize:'0.9em'}}>{errores.pesoEnvio}</div>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Tipo de techo</Form.Label>
                                            <Form.Select name="tipoTecho" value={valores.tipoTecho || ''} onChange={handleChange}>
                                                <option value="">Seleccione tipo de techo</option>
                                                {opcionesSelects.tipoTecho.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label} ({opt.recargo * 100}%)</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Región</Form.Label>
                                            <Form.Select name="region" value={valores.region || ''} onChange={handleChange}>
                                                <option value="">Seleccione región</option>
                                                {opcionesSelects.region.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label} (${opt.baseEnvio.toLocaleString()})</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Complejidad instalación</Form.Label>
                                            <Form.Select name="complejidad" value={valores.complejidad || ''} onChange={handleChange}>
                                                <option value="">Seleccione complejidad</option>
                                                {opcionesSelects.complejidad.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label} ({opt.recargo * 100}%)</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Subsidio</Form.Label>
                                            <Form.Select name="subsidio" value={valores.subsidio || ''} onChange={handleChange}>
                                                <option value="">Seleccione subsidio</option>
                                                {opcionesSelects.subsidio.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label} ({opt.descuento * 100}%)</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Método de envío</Form.Label>
                                            <Form.Select name="metodoEnvio" value={valores.metodoEnvio || ''} onChange={handleChange}>
                                                <option value="">Seleccione método</option>
                                                {opcionesSelects.metodoEnvio.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label} (x{opt.multiplicador})</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Garantía</Form.Label>
                                            <Form.Select name="garantia" value={valores.garantia || ''} onChange={handleChange}>
                                                <option value="">Seleccione garantía</option>
                                                {opcionesSelects.garantia.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label} ({opt.recargo * 100}%)</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Plan de pago</Form.Label>
                                            <Form.Select name="planPago" value={valores.planPago || ''} onChange={handleChange}>
                                                <option value="">Seleccione plan</option>
                                                {opcionesSelects.planPago.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label} ({opt.cuotas} cuotas, tasa {opt.tasa * 100}%)</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Tipo de pie</Form.Label>
                                            <Form.Select name="tipoPie" value={valores.tipoPie || ''} onChange={handleChange}>
                                                <option value="">Seleccione tipo de pie</option>
                                                {opcionesSelects.tipoPie.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} lg={6}>
                                        <Form.Group className="mb-2" md={6}>
                                            <Form.Label className="fw-bold">Valor de pie</Form.Label>
                                            <Form.Control type="number" min="0" name="valorPie" value={valores.valorPie} onChange={handleChange} />
                                            {errores.valorPie && <div style={{color:'red', fontSize:'0.9em'}}>{errores.valorPie}</div>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} lg={6} className="mb-2"><span className="text-muted" style={{ fontSize: '0.9em' }}>Si es porcentaje, 10 = 10%.</span></Col>
                                </Row>
                                <Row>
                                    <Col xs={12} lg={6}><button type="button" className="btn btn-outline-secondary" onClick={handleReiniciar}>Reiniciar</button></Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} className="mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>Resumen</Card.Title>
                            <table className="table table-striped table-bordered">
                                <tbody>
                                    <tr><th>Subtotal equipos</th><td>$ {panelesIncluidos ? subtotalEquipos.toLocaleString() : subtotalSinPanel.toLocaleString()}</td></tr>
                                    <tr><th>Recargo techo</th><td>$ {montoRecargoTecho.toLocaleString()}</td></tr>
                                    <tr><th>Subsidio</th><td>$ {montoSubsidio.toLocaleString()}</td></tr>
                                    <tr><th>Instalación final</th><td>$ {instalacionFinal.toLocaleString()}</td></tr>
                                    <tr><th>IVA 19%</th><td>$ {montoIVA.toLocaleString()}</td></tr>
                                    <tr><th>Envío</th><td>$ {montoEnvio.toLocaleString()}</td></tr>
                                    <tr><th>Garantía</th><td>$ {montoGarantia.toLocaleString()}</td></tr>
                                    <tr><th>Total antes de financiar</th><td>$ {totalAntesFinanciar.toLocaleString()}</td></tr>
                                    <tr><th>Pie</th><td>$ {pie.toLocaleString()}</td></tr>
                                    <tr><th>Interés total</th><td>$ {interesTotal.toLocaleString()}</td></tr>
                                    <tr><th>Cuota</th><td>$ {cuota.toLocaleString()}</td></tr>
                                    <tr className="table-primary fw-bold"><th>Total final</th><td>$ —</td></tr>
                                </tbody>
                            </table>
                            <div className="text-muted mt-2" style={{ fontSize: '0.9em' }}>Valores referenciales para el prototipo</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CalculadoraIntegral;