# Informe de Antigravity (Perspectiva de la IA de Desarrollo)

> *Elaborado tras el análisis directo del sistema de archivos local en `D:\Proyectos`. Este informe refleja los hechos comprobados en el código fuente y las estructuras de directorios.*

---

## 1. Resumen Profesional / Bio
Estudiante de Ingeniería Informática de la Universidad Ricardo Palma (URP, Lima) en el 7mo ciclo. Gianfranco destaca por un perfil orientado al **diseño de software, backend robusto y automatización de sistemas**, distanciándose del clásico programador junior al incorporar metodologías estructuradas como **Spec-Driven Development (SDD)**, documentación de requisitos (OpenAPI, casos de uso CUS) y modelado/simulación de procesos de negocio.

Su flujo de trabajo es altamente moderno y ágil, operando como un **Tech Lead/Arquitecto** que orquesta agentes de IA para la implementación de código, concentrándose él en la toma de decisiones arquitectónicas, modelado de bases de datos y seguridad. Posee un fuerte interés en la **ciberseguridad** y la optimización de infraestructura.

---

## 2. Tech Stack (Verificado en Código)

### Lenguajes de Programación
- **JavaScript (ES6+) / TypeScript:** Lenguaje core en desarrollo web frontend y backend.
- **Python:** Utilizado en proyectos de IA/ML (Google Colab, datasets de +200k filas) y backend estructurado con FastAPI.
- **C#:** Utilizado en el ámbito académico para diseño de patrones y aplicaciones de escritorio (Windows Forms).
- **SQL / PL-SQL:** Dominio de bases de datos relacionales, consultas complejas, triggers y funciones.

### Frameworks, Librerías y Runtimes
- **Backend:** Node.js (Express.js), FastAPI (Python), .NET Core (ASP.NET MVC - inicial).
- **Frontend:** React (v19) con Vite, Tailwind CSS, CSS Modules, Framer Motion.
- **Librerías especializadas:** Recharts (visualización de analíticas y KPIs), Beanie ODM (mapeo NoSQL estructurado en Python), Nodemailer (envío seguro vía SMTP).

### Bases de Datos y Almacenamiento
- **PostgreSQL:** Usada en el stack PERN (Mezzanine vía Supabase) con triggers y funciones optimizadas.
- **MongoDB:** Usada tanto local como en Atlas (Kanbix con Beanie, y Mezzanine MERN con Mongoose).
- **Firebase/Firestore:** Base de datos NoSQL usada en DUXCalc para persistencia en tiempo real.

### DevOps, Infraestructura y Herramientas
- **Cloud & Deploy:** Railway, Vercel, Supabase, Cloudinary (gestión de assets dinámicos).
- **Herramientas de Diseño & Documentación:** Figma (mockups), Mermaid.js (diagramas de flujo/BPMN), Postman.
- **Entorno de Simulación:** ProModel, SimPy (Python), Stat::Fit para análisis estocástico.

---

## 3. Proyectos Analizados en el Repositorio (`D:\Proyectos`)

### 🍽️ Mezzanine Restobar (`SWGCMDEM` / PERN)
- **Rol:** Tech Lead y Desarrollador.
- **Arquitectura:** Monorepo con división estricta: `backend/` (Express), `frontend-landing/` y `dashboard/` (React + Vite).
- **Highlights:** SEO técnico implementado con `react-helmet-async`, generación automatizada de sitemaps y configuración de robots.txt. Integración de Cloudinary para el CRUD del menú gastronómico. Documentación de alta calidad: análisis de CRM, auditoría legal (Libro de Reclamaciones con persistencia) y cumplimiento de políticas de privacidad.

### 🍽️ Mezanine - Gestión de Reservas (`SistemaGestionReservas` / MERN)
- **Rol:** Desarrollador backend/DB.
- **Highlights:** Demostración de técnicas avanzadas de MongoDB:
  - Uso de **Capped Collections** (`auditoria_logs` limitada a 1MB y 1000 documentos con TTL de 30 días) para logs de rendimiento óptimo.
  - Implementación de **Vistas Nativas** (`v_reservas_hoy`) creadas directamente desde la inicialización de la DB.
  - Triggers y hooks post-save/post-findOneAndUpdate a nivel de Mongoose para mantener la consistencia en el log de auditoría.
  - Agregación avanzada (`$match`, `$group`, `$sum`) para calcular la ocupación por franjas horarias.

### 💼 DUXCalc Payroll System (`TP`)
- **Rol:** Implementador de seguridad y servicios principales.
- **Highlights:** React con backend integrado en Node/Express.
  - **Módulo de Seguridad:** Flujo robusto de recuperación de contraseña usando OTP, Nodemailer, `crypto.randomInt()` y rate limiting en el backend para mitigar ataques de fuerza bruta.
  - **UI/UX:** Consistencia visual en tonos azul-gris oscuros (`#2c3e50`), integración de Cloudflare Turnstile anti-bots en el login y dashboards interactivos.

### 🗂️ Kanbix (`Kanbix`)
- **Rol:** Responsable de módulos de Tablero Kanban y Tareas.
- **Highlights:** FastAPI en backend bajo **Clean Architecture** y MongoDB con Beanie ODM. Definición estricta de 84 requisitos funcionales y contratos de API consistentes en formato JSON con validaciones nativas de Pydantic (errores 422).

### 🎓 StudyPlan (`ProyectoEstudio\studyplan`)
- **Rol:** Desarrollador individual.
- **Highlights:** React + Supabase (Auth e interactividad de base de datos). Destaca por su parser personalizado de Markdown para convertir planes de estudio estructurados en tareas del dashboard. Las interfaces utilizan copias de UX personalizadas con estilo Rioplatense ("Pegá tu plan de estudios", "¿Seguro que querés salir?").

### 🔧 FiltrosLab10 (`FiltrosLab10`)
- **Rol:** Desarrollador C#.
- **Highlights:** Aplicación de escritorio clásica en C# Windows Forms para el procesamiento local de colecciones de datos, demostrando dominio de lógica orientada a objetos.

---

## 4. Análisis de Ingeniería (Perspectiva de la Arquitectura)
- **Modularidad y Separación de Responsabilidades:** Gianfranco estructura sus proyectos separando claramente la capa de presentación (React/Vite) de la lógica de negocio (Express/FastAPI).
- **Robustez de Base de Datos:** Entiende la diferencia entre esquemas relacionales (normalización en Postgres) y no relacionales (uso de agregaciones, colecciones limitadas y ODM Beanie/Mongoose en MongoDB).
- **Seguridad Pragmática:** No deja la seguridad como una tarea secundaria. La persistencia de logs de auditoría, encriptación con bcrypt, y validación exhaustiva de inputs demuestran rigor técnico.
- **Calidad de Documentación:** A diferencia del estándar de estudiantes de su ciclo, prefiere el desarrollo guiado por especificaciones (Spec-Driven Development), generando artefactos de diseño consistentes que facilitan el trabajo de los agentes de codificación.
