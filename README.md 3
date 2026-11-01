CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    rol VARCHAR(20) CHECK (rol IN ('cliente', 'profesional')) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE profesionales (
    id INT PRIMARY KEY REFERENCES usuarios(id) ON DELETE CASCADE,
    especialidad VARCHAR(50) NOT NULL,
    documento_identidad VARCHAR(50) UNIQUE NOT NULL,
    verificado BOOLEAN DEFAULT FALSE,
    mision_prestador TEXT,
    recomendaciones INT DEFAULT 0
);

CREATE TABLE solicitudes_servicio (
    id SERIAL PRIMARY KEY,
    cliente_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    categoria VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL,
    url_evidencia VARCHAR(255),
    direccion_texto VARCHAR(255) NOT NULL,
    estado VARCHAR(20) CHECK (estado IN ('abierta', 'en_progreso', 'completada')) DEFAULT 'abierta',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cotizaciones (
    id SERIAL PRIMARY KEY,
    solicitud_id INT REFERENCES solicitudes_servicio(id) ON DELETE CASCADE,
    profesional_id INT REFERENCES profesionales(id) ON DELETE CASCADE,
    precio_propuesto NUMERIC(10, 2) NOT NULL,
    tiempo_estimado_llegada VARCHAR(50) NOT NULL,
    comision_plataforma NUMERIC(10, 2) GENERATED ALWAYS AS (precio_propuesto * 0.10) STORED,
    estado VARCHAR(20) CHECK (estado IN ('pendiente', 'aceptada', 'rechazada')) DEFAULT 'pendiente'
);

CREATE TABLE servicios_activos (
    id SERIAL PRIMARY KEY,
    solicitud_id INT REFERENCES solicitudes_servicio(id) ON DELETE CASCADE,
    cotizacion_aceptada_id INT REFERENCES cotizaciones(id) ON DELETE CASCADE,
    cliente_latitud NUMERIC(10, 8),
    cliente_longitud NUMERIC(11, 8),
    profesional_latitud NUMERIC(10, 8),
    profesional_longitud NUMERIC(11, 8),
    estado_seguimiento VARCHAR(40) DEFAULT 'pago_confirmado_en_custodia',
    fecha_completado TIMESTAMP
);

CREATE INDEX idx_servicios_profesional ON cotizaciones(profesional_id, estado);