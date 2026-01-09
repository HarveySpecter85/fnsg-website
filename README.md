# FNSG Website - First National Staffing Group

Este repositorio contiene el código fuente del sitio web corporativo de **First National Staffing Group (FNSG)**. Es una aplicación web moderna de alto rendimiento diseñada para presentar la propuesta de valor de la compañía: "Deploy Talent at the Speed of Demand".

El proyecto utiliza las últimas tecnologías del ecosistema React, incluyendo **Next.js 16** y **React 19**, posicionándose en la vanguardia del desarrollo web.

## 🚀 Tecnologías y Stack

El proyecto está construido sobre un stack tecnológico robusto y moderno:

### Core
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router) - Utilizando las últimas características de Server Components y Server Actions.
- **UI Library**: [React 19](https://react.dev/) - Aprovechando las nuevas APIs de concurrencia y hooks.
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) - Tipado estático para mayor seguridad y mantenibilidad.

### Estilado y Animaciones
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Motor de estilos utility-first de última generación.
- **Animaciones**: 
  - [GSAP](https://gsap.com/) - Para animaciones complejas y secuenciales.
  - [Lenis](https://github.com/studio-freight/lenis) - Para un scroll suave (smooth scrolling) de alto rendimiento.
- **Iconos**: [Lucide React](https://lucide.dev/) - Iconografía consistente y moderna.
- **Visualización de Datos**: [Recharts](https://recharts.org/) - Gráficos interactivos para dashboards y métricas.

### Backend y Datos
- **Base de Datos & Auth**: [Supabase](https://supabase.com/) - Backend-as-a-Service para persistencia de datos y autenticación.
  - Integración mediante `@supabase/ssr` para manejo de cookies y sesiones en el servidor.
- **Validación**: [Zod](https://zod.dev/) - Validación de esquemas y tipos en tiempo de ejecución.
- **Formularios**: [React Hook Form](https://react-hook-form.com/) - Manejo eficiente de estados de formularios.

### Inteligencia Artificial
- **IA**: Google Vertex AI & Generative AI SDK - Integración preparada para las capacidades del "Intelligence Engine".

## 📂 Estructura del Proyecto

La estructura de carpetas sigue las convenciones del App Router de Next.js:

```
/
├── app/                        # Directorio principal de la aplicación (App Router)
│   ├── actions/                # Server Actions para mutaciones de datos
│   ├── api/                    # Route Handlers (API Endpoints)
│   ├── components/             # Componentes de UI reutilizables
│   │   ├── anim/               # Componentes de animación (FadeIn, TextReveal)
│   │   ├── intelligence-engine/ # Widgets de datos e IA
│   │   └── ui/                 # Componentes base de interfaz
│   ├── company/                # Páginas de información corporativa
│   ├── industries/             # Páginas específicas por industria
│   ├── solutions/              # Páginas de servicios y soluciones
│   ├── actions.ts              # Lógica principal de Server Actions (Auditorías, Contacto)
│   ├── layout.tsx              # Layout raíz (Fuentes, Providers, Header/Footer)
│   └── page.tsx                # Página de inicio (Home)
├── public/                     # Archivos estáticos
├── utils/                      # Utilidades y config de librerías
│   └── supabase/               # Configuración del cliente Supabase
└── lib/                        # Librerías compartidas
```

## ✨ Características Clave

### 1. FNSG OS™ Intelligence Engine
El sitio no es solo informativo; simula un sistema operativo de inteligencia laboral.
- **Widgets en Tiempo Real**: Visualización de métricas de rendimiento y estado del sistema.
- **KPI Dashboard**: Gráficos interactivos que demuestran la velocidad de despliegue y cumplimiento.

### 2. Auditoría de Fuerza Laboral (Workforce Audit)
Funcionalidad interactiva que permite a los usuarios potenciales calcular el ROI y evaluar sus necesidades de personal.
- Los datos se capturan mediante formularios validados.
- Se procesan vía **Server Actions** (`app/actions.ts`).
- Se almacenan directamente en la tabla `workforce_audits` de Supabase.

### 3. Experiencia de Usuario Inmersiva
- **Scroll Suave**: Implementado globalmente con Lenis para una navegación premium.
- **Diseño Responsivo**: Adaptado perfectamente a móviles y escritorio.
- **Feedback Visual**: Estados de carga, animaciones de entrada y micro-interacciones.

### 4. Risk Shield & Compliance
Secciones dedicadas que destacan la cobertura de responsabilidad civil y certificaciones (MSPA, ACA, E-Verify), elementos críticos para la propuesta de valor.

## 🛠️ Configuración y Desarrollo

### Prerrequisitos
- Node.js (versión 20 o superior recomendada debido a Next.js 16).
- npm, yarn, pnpm o bun.

### Pasos para iniciar

1.  **Clonar el repositorio**:
    ```bash
    git clone <url-del-repo>
    cd fnsg-website-1
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    # o
    bun install
    ```

3.  **Configurar Variables de Entorno**:
    El proyecto requiere conexión con Supabase. Actualmente, la configuración del cliente se encuentra en `utils/supabase/server.ts`. Asegúrese de que las credenciales (`supabaseUrl`, `supabaseKey`) sean correctas para el entorno de desarrollo.

4.  **Ejecutar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 📦 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Hot Reload.
- `npm run build`: Compila la aplicación para producción.
- `npm run start`: Inicia el servidor de producción (requiere build previo).
- `npm run lint`: Ejecuta el linter (ESLint) para verificar la calidad del código.

## 🚢 Despliegue

La aplicación está optimizada para ser desplegada en **Vercel**, la plataforma de los creadores de Next.js.
1. Haz push de tus cambios a GitHub.
2. Importa el proyecto en Vercel.
3. Configura las variables de entorno si es necesario (si se migran fuera de los archivos).
4. Vercel detectará automáticamente Next.js y construirá el proyecto.

---
© 2025 First National Staffing Group. Todos los derechos reservados.
