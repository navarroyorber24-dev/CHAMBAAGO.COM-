# CHAMBAAGO.COM

Plataforma web en desarrollo para conectar a personas que necesitan servicios para el hogar con profesionales. El objetivo del producto es facilitar la solicitud de servicios, la comunicación y la gestión de trabajos desde una experiencia sencilla y adaptable a móviles.

> **Estado:** proyecto en desarrollo. Esta documentación describe la estructura y las integraciones detectadas en el código; no significa que todos los flujos estén terminados ni que los pagos o despliegues hayan sido validados en producción.

## Tecnologías detectadas

- **Next.js 16** y **React 19** con App Router.
- **TypeScript**.
- **PostgreSQL** con **Drizzle ORM**.
- **Better Auth** para autenticación con correo y contraseña.
- **Stripe** como integración de pagos (requiere configuración y pruebas).
- **Tailwind CSS 4** y componentes de interfaz.
- **Capacitor 8** para preparar una compilación Android.
- **Railway** para despliegue y alojamiento de la aplicación.

## Estructura principal

```text
.
├── app/
│   ├── api/                 # Rutas API
│   ├── sign-in/             # Pantalla de inicio de sesión
│   ├── sign-up/             # Pantalla de registro
│   ├── layout.tsx           # Layout raíz
│   ├── page.tsx             # Página principal
│   └── globals.css          # Estilos globales
├── components/              # Componentes de interfaz
├── lib/
│   ├── db/                  # Conexión y esquema de base de datos
│   ├── auth.ts              # Configuración de Better Auth
│   ├── auth-client.ts       # Cliente de autenticación
│   └── stripe.ts            # Inicialización de Stripe
├── .github/workflows/       # Automatizaciones de CI
├── package.json
├── pnpm-lock.yaml
└── capacitor.config.ts
```

## Requisitos

- Node.js 24 (la automatización CI usa Node 24).
- pnpm 10.
- PostgreSQL accesible desde el entorno de ejecución.

## Instalación local

1. Clona el repositorio y entra en la carpeta:

   ```bash
   git clone https://github.com/navarroyorber24-dev/CHAMBAAGO.COM-.git
   cd CHAMBAAGO.COM-
   ```

2. Instala las dependencias:

   ```bash
   corepack enable
   corepack prepare pnpm@10 --activate
   pnpm install --frozen-lockfile
   ```

3. Crea un archivo `.env.local` en la raíz y configura las variables necesarias (ver la sección siguiente).
4. Inicia el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

   Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Configura los valores en el gestor de variables de Railway y en `.env.local` para desarrollo. **No subas secretos al repositorio.**

| Variable | Uso |
|---|---|
| `DATABASE_URL` | Cadena de conexión PostgreSQL usada por la capa de base de datos. |
| `BETTER_AUTH_SECRET` | Secreto privado para firmar y proteger sesiones de Better Auth. |
| `BETTER_AUTH_URL` | URL pública/base de la aplicación para autenticación. En local: `http://localhost:3000`. |
| `STRIPE_SECRET_KEY` | Clave secreta de Stripe; necesaria solo para operaciones de servidor que inicialicen Stripe. |
| `NEXT_PUBLIC_APP_URL` | URL pública de la aplicación, si el código o integraciones del despliegue la requieren. |

Usa claves de prueba de Stripe durante desarrollo. Nunca compartas `STRIPE_SECRET_KEY`, `BETTER_AUTH_SECRET` ni credenciales de base de datos.

## Comprobaciones antes de desplegar

La rama `CHAMBAAGO.COM` contiene un workflow de GitHub Actions que instala dependencias con el lockfile, ejecuta TypeScript y genera el build de producción.

Puedes ejecutar localmente:

```bash
pnpm install --frozen-lockfile
pnpm exec tsc --noEmit
pnpm build
```

Un build correcto no demuestra por sí solo que autenticación, base de datos, pagos, GPS, notificaciones o flujos de servicio funcionen en producción. Esos procesos deben probarse con sus credenciales y servicios reales en un entorno seguro.

## Despliegue en Railway

El repositorio incluye `railway.json` con configuración de RAILPACK, instalación con pnpm, compilación Next.js, comando de inicio, reinicio ante fallos y comprobación de salud en `/api/health`.

1. Conecta el repositorio `navarroyorber24-dev/CHAMBAAGO.COM-` a Railway.
2. Selecciona la rama `CHAMBAAGO.COM` y deja Root Directory en la raíz del repositorio.
3. Añade una base PostgreSQL al mismo proyecto Railway.
4. Configura `DATABASE_URL` usando la referencia privada del servicio PostgreSQL; no uses `localhost`.
5. Genera un valor privado y único para `BETTER_AUTH_SECRET`.
6. Configura `BETTER_AUTH_URL` con el dominio público que Railway asigne a la aplicación.
7. Despliega y verifica que `/api/health` responda con estado `ok` y base de datos `connected`.

No reutilices una base de datos de otro proyecto sin comprobar primero la compatibilidad del esquema y respaldar sus datos. No publiques secretos en GitHub.


## Scripts disponibles

| Comando | Descripción |
|---|---|
| `pnpm dev` | Servidor local de desarrollo. |
| `pnpm build` | Build de producción de Next.js. |
| `pnpm start` | Inicia el servidor de producción después del build. |
| `pnpm android:sync` | Construye la web y sincroniza el proyecto Android con Capacitor. |
| `pnpm android:open` | Abre el proyecto Android en Android Studio. |

## Seguridad y buenas prácticas

- Mantén los secretos solo en variables de entorno protegidas.
- No uses datos reales de clientes en pruebas.
- Valida y autoriza cada operación sensible en el servidor.
- Verifica webhooks de pagos antes de actualizar estados de transacciones.
- No marques un pago como recibido solo por una respuesta del navegador.
- Protege los datos personales y limita el acceso por rol.
- Revisa los logs y los checks de CI antes de publicar.

## Licencia

No se ha identificado una licencia de código abierto en la raíz del repositorio. Todos los derechos quedan reservados al titular del proyecto hasta que se publique una licencia explícita.
