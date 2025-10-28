const opcionesSelects = {
    tipoTecho: [
        { label: 'Teja/Asfalto', value: 'teja', recargo: 0.05 },
        { label: 'Zinc/Planchas', value: 'zinc', recargo: 0.02 },
        { label: 'Hormigón', value: 'hormigon', recargo: 0.07 }
    ],
    region: [
        { label: 'RM', value: 'rm', baseEnvio: 5000 },
        { label: 'Norte', value: 'norte', baseEnvio: 9000 },
        { label: 'Sur', value: 'sur', baseEnvio: 10000 },
        { label: 'Austral', value: 'austral', baseEnvio: 15000 }
    ],
    complejidad: [
        { label: 'Baja', value: 'baja', recargo: 0 },
        { label: 'Media', value: 'media', recargo: 0.08 },
        { label: 'Alta', value: 'alta', recargo: 0.15 }
    ],
    subsidio: [
        { label: 'Sin subsidio', value: 'sin', descuento: 0 },
        { label: 'Residencial', value: 'residencial', descuento: 0.08 },
        { label: 'Pyme', value: 'pyme', descuento: 0.05 }
    ],
    metodoEnvio: [
        { label: 'Estándar', value: 'estandar', multiplicador: 1.00 },
        { label: 'Exprés', value: 'expres', multiplicador: 1.20 }
    ],
    garantia: [
        { label: '12 meses', value: '12m', recargo: 0.02 },
        { label: '24 meses', value: '24m', recargo: 0.04 },
        { label: '36 meses', value: '36m', recargo: 0.06 }
    ],
    planPago: [
        { label: 'Contado', value: 'contado', tasa: 0, cuotas: 1 },
        { label: '6 cuotas', value: '6', tasa: 0.012, cuotas: 6 },
        { label: '12 cuotas', value: '12', tasa: 0.011, cuotas: 12 },
        { label: '24 cuotas', value: '24', tasa: 0.01, cuotas: 24 }
    ],
    tipoPie: [
        { label: 'Porcentaje', value: 'porcentaje' },
        { label: 'Monto fijo', value: 'monto' }
    ]
};
export default opcionesSelects;