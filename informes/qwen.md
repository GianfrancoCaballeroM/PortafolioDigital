# Informe de Qwen

## 1. Resumen Profesional / Bio
Estudiante de Ingeniería Informática en la Universidad Ricardo Palma (URP) con enfoque práctico en desarrollo web Fullstack. Especializado en el stack PERN (PostgreSQL, Express, React, Node.js) con experiencia comprobada en el desarrollo de aplicaciones empresariales completas que incluyen landing pages públicas, dashboards administrativos, sistemas de gestión y módulos de analítica de datos.

Tu perfil se caracteriza por una combinación única de habilidades técnicas de desarrollo con conocimientos en ingeniería de procesos (simulación de sistemas, teoría de colas, análisis de operaciones) y gestión de calidad (normas ISO 9001, 27002, 14001). Eres un desarrollador orientado a la resolución de problemas reales del negocio, con fuerte énfasis en UX/UI, cumplimiento legal y estándares internacionales.

---

## 2. Tech Stack (Confirmado en nuestras conversaciones)
### Lenguajes de Programación
- **JavaScript (ES6+)** - Lenguaje principal para frontend y backend
- **SQL** - Consultas complejas, triggers, funciones en PostgreSQL
- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados, animaciones, responsive design

### Frameworks y Librerías
- **Backend:** Node.js (v24.14.0) - Runtime de JavaScript, Express.js - Framework web para APIs REST, nodemon - Hot reload en desarrollo
- **Frontend:** React - Librería para interfaces de usuario, Vite - Build tool y dev server, Recharts - Visualización de datos y gráficos (BarChart, PieChart), Axios - Cliente HTTP con interceptores
- **Estilos y UI:** Tailwind CSS - Framework CSS utility-first, CSS Modules - Estilos componentizados, Dark/Light Mode - Implementación de temas

### Bases de Datos
- **PostgreSQL** - Base de datos relacional principal
- **DBeaver** - IDE para gestión de bases de datos
- **Scripts SQL avanzados** - Triggers, funciones, índices, seeds

### Autenticación y Seguridad
- **JWT (JSON Web Tokens)** - Autenticación stateless
- **bcryptjs** - Hashing de contraseñas
- **express-validator** - Validación y sanitización de datos
- **Role-Based Access Control (RBAC)** - Sistema de permisos por roles

### Herramientas y Entornos
- **Git / GitHub** - Control de versiones y hosting
- **npm** - Gestor de paquetes
- **Postman** - Testing de APIs (inferido)
- **Cloudinary** - Gestión de imágenes (mencionado para menú de 140+ fotos)
- **Figma** - Diseño de mockups y prototipos

### Simulación y Análisis de Procesos
- **ProModel 2026** - Simulación de sistemas discretos
- **Stat::Fit** - Análisis de bondad de ajuste (Anderson-Darling)
- **Distribuciones estadísticas** - Exponencial, Lognormal, Triangular, Uniforme
- **Teoría de Colas** - Análisis de cuellos de botella, WIP, throughput

---

## 3. Proyectos en los que hemos trabajado

### A. Mezzanine Restobar (SWGCMDEM) - Proyecto Principal ⭐
**Descripción:** Sistema web completo para un restobar que incluye landing page pública para clientes y dashboard administrativo interno.
- **Arquitectura:**
  - Backend: Node.js + Express (puerto 5000)
  - Frontend Landing: React + Vite (página pública)
  - Frontend Dashboard: React + Vite (panel administrativo)
  - Base de Datos: PostgreSQL con múltiples tablas relacionales
- **Problema que resuelve:** Digitalización completa de operaciones de un restaurante, gestión de reservas online con integración WhatsApp, menú digital público con filtros por categoría, control administrativo de RRHH, inventario, clientes, cumplimiento legal (Libro de Reclamaciones, Términos, Privacidad), integración con plataformas de delivery (Rappi).
- **Tecnologías usadas:** Stack PERN completo, JWT + bcryptjs para autenticación, express-validator para validación, Recharts para dashboards con KPIs, Tailwind CSS con modo oscuro/claro, Axios con interceptores para manejo de errores 401.
- **Módulos implementados:**
  - **Landing Page Pública:** Hero section con animaciones CSS, menú digital con filtros, modal de reservas con validación, Libro de Reclamaciones (con persistencia en BD), páginas de Nosotros, Contacto, Términos, Privacidad, integración con Rappi.
  - **Dashboard Administrativo:** Login con JWT, KPIs en tiempo real (reservas, ingresos, platos disponibles), gráficos de reservas (barras + pie chart), CRUD completo de Reservas con paginación, CRUD de Menú con toggle de disponibilidad, gestión de Usuarios con roles.
  - **Módulo RRHH completo:** Empleados (CRUD + validación DNI único), turnos (vista semanal tipo calendario), evaluaciones (star rating 1-5 en 4 criterios), stats con KPIs, reporte integrado (productividad por departamento).
  - **Gestión de Clientes**
- **Características técnicas destacadas:** 12+ endpoints REST para RRHH, triggers SQL para auto-actualizar updated_at, índices para optimización de consultas, sistema de anonimización de datos (cumplimiento LGPD), manejo de errores robusto (duplicados, FK violadas, etc.), seeds con datos de demostración.

### B. MAYLUDE S.A.C. - Sistema Web de Gestión de Proyectos de Construcción
**Descripción:** Plataforma web para digitalizar la gestión de una empresa constructora, incluyendo control de avances, gestión documental y panel administrativo.
- **Problema que resuelve:** Transformación digital de procesos manuales, centralización de información de obras, trazabilidad de proyectos en tiempo real, alertas automáticas de desviaciones, cumplimiento de normas ISO.
- **Tecnologías:** Stack similar (PERN), módulos de gestión documental, cronogramas y control de avances, panel administrativo con KPIs, responsive design para uso en campo.
- **Aspectos de cumplimiento:** ISO 9001:2015 (Gestión de Calidad), ISO/IEC 27002:2022 (Seguridad de Información), ISO 14001 (Gestión Ambiental).

### C. "El Perro Fast Food" - Proyecto de Simulación de Sistemas
**Descripción:** Estudio de simulación para optimizar operaciones de un local de comida rápida durante horas pico.
- **Problema que resuelve:** Identificación de cuellos de botella operativos, análisis de capacidad instalada, optimización de tiempos de ciclo, gestión de Work in Process (WIP).
- **Tecnologías y metodologías:** ProModel 2026 - Simulación discreta, Stat::Fit - Análisis estadístico (pruebas Anderson-Darling), Teoría de Colas - Modelado de λ (llegadas) y μ (servicio).
- **Distribuciones de probabilidad:** Exponencial: E(3.02) y E(3.76) para llegadas, Lognormal para tiempos de servicio con asimetría, Triangular: T(15, 20, 30) para consumo en mesas, Uniforme: U(0.5, 0.2) para toppings.
- **Diagramas técnicos:** Ishikawa (Causa-Efecto) en SVG, Flujo de Colas en SVG.
- **KPIs de simulación:** Throughput (95 entidades en 4 horas), WIP acumulado, tiempo de ciclo promedio, utilización de recursos.
- **Resultados:** Identificación de Cocina_N1_Fritura como cuello de botella principal, análisis de latencia transaccional en caja, propuesta de reingeniería de recursos.

### D. Dashboard de Clima Laboral
**Descripción:** Dashboard para visualizar resultados de encuestas de clima organizacional.
- **Tecnologías:** HTML, CSS, JavaScript puro, gráficos e indicadores, análisis de datos de encuestas, comparación de indicadores de certificación.

---

## 4. Inferencias Tecnológicas
Basado en las tecnologías que dominas, es altamente probable que también manejes o estés aprendiendo:
- **Patrones de Diseño y Arquitectura:** MVC (Model-View-Controller), arquitectura de 3 capas, APIs RESTful, CRUD Operations, Repository Pattern, Middleware Pattern.
- **Conceptos de Backend:** JWT Authentication Flow, Password Hashing, Environment Variables, CORS, Error Handling, Input Validation, Database Migrations, Seeds/Demo Data.
- **Conceptos de Frontend:** Component-Based Architecture (React), State Management (useState, useEffect, Context API), Client-Side Routing, HTTP Interceptors, Responsive Design, Tailwind CSS, Dark/Light Mode, Form Validation.
- **Bases de Datos:** Relational Database Design (Normalización, FKs, índices), SQL Joins, Triggers, Stored Functions (PL/pgSQL), Transaction Management, Query Optimization.
- **DevOps y Deploy:** Git Workflow, Environment Separation, npm Scripts, Static Asset Management (Cloudinary).
- **Seguridad y Compliance:** Role-Based Access Control (RBAC), Data Anonymization (LGPD/ARCO), HTTPS/TLS, Input Sanitization, Audit Logging, Legal Compliance.
- **Ingeniería de Software:** Agile/Scrum, Code Review, Testing, Documentation, Semantic Versioning.
- **Análisis de Negocio:** KPI Definition, Data Visualization, Process Modeling (BPMN), Root Cause Analysis (Ishikawa), Capacity Planning, Quality Standards (ISO).
- **Herramientas Adicionales:** Postman/Insomnia, VS Code, Browser DevTools, Terminal/CLI, Markdown, JSON, Regex.

---

## 5. Soft Skills / Enfoque de Ingeniería
- **Curiosidad Técnica y Aprendizaje Continuo:** Utilizas múltiples herramientas de IA como aceleradores de aprendizaje. Investigas normas internacionales (ISO) y las aplicas a tus proyectos.
- **Orientación a la Calidad:** Implementas características completas (validación, manejo de errores, UX pulida, cumplimiento legal).
- **Pensamiento Sistémico:** Analizas problemas desde múltiples perspectivas. Conectas desarrollo web + simulación de procesos + gestión de calidad.
- **Enfoque Práctico:** Priorizas funcionalidades que resuelven problemas reales del negocio.
- **Capacidad de Análisis:** Descompones problemas complejos usando metodologías estructuradas (Ishikawa, teoría de colas).
- **Atención al Detalle en UX/UI:** Preocupación por consistencia visual e implementaciones suaves (modo oscuro/claro).
- **Gestión de Proyectos Académicos y Adaptabilidad:** Trabaja en equipo, cumple entregables estructurados, cambia de stack cuando es necesario (MERN -> PERN), y aprende nuevas herramientas rápido.
