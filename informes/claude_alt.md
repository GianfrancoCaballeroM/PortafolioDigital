# Informe de Claude (Cuenta Alternativa)

## 1. Resumen Profesional / Bio
Estudiante de 7mo semestre de Ingeniería Informática en la Universidad Ricardo Palma (URP), con perfil **Fullstack orientado a Backend**, experiencia real en proyectos propios y para clientes externos, y un enfoque de trabajo que combina rol de **Tech Lead / Arquitecto de decisiones** con el uso de agentes de IA como implementadores (OpenCode/Antigravity). Apasionado por la **ciberseguridad** como meta de carrera a largo plazo, con interés en exposición internacional. Actualmente construyendo experiencia formal a través de proyectos académicos complejos (SDD, Clean Architecture, APIs REST) y productos reales desplegados en producción.

---

## 2. Tech Stack

### Lenguajes de Programación
| Lenguaje | Evidencia |
|---|---|
| **JavaScript** | Proyectos PERN, DUXCalc, NeuroScan, componentes React |
| **TypeScript** | Mencionado en stack de proyectos Fullstack |
| **Python** | Proyecto de IA (FastAPI + ML sobre dataset SNP), ejercicios OOP universitarios, Kanbix backend |
| **C#** | Design patterns académicos (Singleton, IExport + WinForms) |
| **PHP** | Mencionado en Taller I (Laravel) |

### Frameworks y Librerías
| Categoría | Tecnologías |
|---|---|
| **Frontend** | React, Vite, Tailwind CSS, Framer Motion |
| **Backend** | FastAPI (Python), Express.js (Node), Laravel (PHP) |
| **Librerías UI** | recharts (bar/line/area charts), react-helmet-async |
| **Documentos** | pptxgenjs |

### Bases de Datos
| Base de Datos | Contexto |
|---|---|
| **MongoDB** | Kanbix (con Beanie ODM + Clean Architecture) |
| **PostgreSQL** | Mezzanine PERN (vía Supabase) |
| **Firebase Firestore** | DUXCalc (client SDK) |

### Herramientas y Entornos
| Herramienta | Contexto |
|---|---|
| **Git / GitHub** | Control de versiones en todos los proyectos |
| **Postman** | Testing de APIs (inferido por trabajo en contratos API) |
| **Google Colab** | Pipeline de ML para proyecto IA (dataset SNP) |
| **Supabase** | BaaS para Mezzanine y NeuroScan ID |
| **Cloudinary** | Gestión de imágenes en Mezzanine (CRUD de categorías) |
| **Nodemailer / Gmail SMTP** | Módulo de recuperación de contraseñas en DUXCalc |
| **ProModel 2018** | Simulación de eventos discretos (curso universitario) |
| **Railway / Vercel** | Deploy de backend Express y frontend React |

---

## 3. Proyectos Documentados

### 🟦 Mezzanine Restobar — Plataforma PERN
**Problema:** Digitalizar la presencia y operación de un restaurante criollo en Lima (~15 empleados).
**Stack:** PostgreSQL (Supabase) · Express.js (Railway) · React/Vite (Vercel)
**Rol:** Tech Lead con OpenCode como implementador y Claude como reviewer.
**Highlights técnicos:** SEO completo (robots.txt, sitemap, react-helmet-async, Google Search Console), CRUD de categorías con Cloudinary, columna "Gasto Estimado", Business Model Canvas page, plan de CRM, schema con 9 tablas, documentación técnica (SEO_REPORT.md, PROJECT_REPORT.md, CRM_IMPLEMENTATION_PLAN.md, LEGAL_COMPLIANCE.md). Corrección de bugs de CSS, carousel overflow y variables.

### 🟧 Kanbix — Sistema Kanban/SCRUM
**Problema:** Herramienta de gestión de proyectos con metodología Kanban/SCRUM para equipos universitarios.
**Stack:** FastAPI · MongoDB · Beanie · React/Vite · Tailwind CSS · Clean Architecture
**Equipo:** 6 personas (Rodrigo Chacón, Piero Villón, Gianfranco — módulos Tablero Kanban & Tareas, + 3 más).
**Highlights técnicos:** 84 requisitos funcionales, 22 especificaciones CUS (prefijos AU/PE/TK/PA/AN/RD), matriz de trazabilidad en Excel, contratos API (estándar `/api/v1`, errores 422, tablas B&W), documentación SDD completa.

### 🟥 DUXCalc — Sistema de Planilla para Call Center
**Problema:** Gestión de nóminas, dinámicas y bonos para asesores de DUX Contact Center.
**Stack:** React · Firebase Firestore (client SDK) · Firebase Admin SDK (Auth) · Node.js/Express (servidor RPA)
**Highlights técnicos:** GestionarEmpleados (campo contacto emergencia, renombrado asesor, selector de campañas), módulo GestionarCampanas, GestionInformacion con control de acceso por rol, módulo de recuperación de contraseñas (Nodemailer, rate limiting, protección fuerza bruta con `intentosFallidos`, bcrypt para OTP, `crypto.randomInt`, stepper 3 pasos, validación de contraseña en tiempo real). UI en dark blue-gray (`#2c3e50`). Compañero de equipo: Diego Silva Garcia.

### 🟩 NeuroScan ID — Landing B2B SaaS
**Problema:** Landing page para producto de análisis biométrico psicoemocional (proyecto del hermano de Gianfranco, respaldado por IBM).
**Stack:** React · Vite · Tailwind CSS · Supabase · Framer Motion · Vercel
**Highlights técnicos:** Documento de requisitos v1.3 (RF-01–RF-17).

### 🟪 Proyecto IA — Dataset SNP Pensiones Perú
**Problema:** Análisis predictivo sobre +200K registros de pensiones peruanas (SNP).
**Stack:** Python · Google Colab · FastAPI · React
**Modelos:** Gradient Boosting / Negative Binomial GLM (regresión sobre `nro_aportes`) · MLP o SVM-RBF (clasificación sobre `aportante` / `monto_aportes`). Restricción: sin regresión lineal/logística como modelo final.

### 🟫 Proyecto "Impostor" (Mención breve)
Juego multijugador desarrollado con Lovable + Supabase. Documentado en CV como proyecto personal.

---

## 4. Inferencias Tecnológicas
Basado en todo lo anterior, es altamente probable que manejes o estés aprendiendo activamente:
- **Patrones y Arquitectura:** REST API design (versionado `/api/v1`, status codes, errores 422/404/401), Clean Architecture (FastAPI + Beanie), MVC (Express, Laravel), Repository Pattern / Service Layer.
- **Seguridad y Auth:** JWT, bcrypt, hashing de contraseñas, OTP, Rate limiting, protección brute force, RBAC (DUXCalc).
- **DevOps / Despliegue:** CI/CD básico (Railway, Vercel, Supabase).
- **Metodologías:** SCRUM / Kanban, SDD (Software Design Document), APA 7ma edición (documentación académica).
- **Machine Learning (en progreso):** Gradient Boosting, SVM-RBF, MLP, GLM Binomial Negativa, pipelines con Pandas/Scikit-learn.

---

## 5. Soft Skills / Enfoque de Ingeniería
- **🧠 Arquitecto antes que implementador:** Tomas decisiones de diseño de alto nivel y usas IAs como implementadores rápidos.
- **📐 Orientado a documentación formal:** Generas CUS, matrices de trazabilidad, SDD y contratos de API.
- **🔍 Atención al detalle técnico:** Enfoque en bugs CSS específicos, transacciones Firebase y validación de tipos.
- **🚀 Mentalidad de producto real:** Proyectos reales/académicos con entregables utilizables y clientes reales.
- **🔐 Inclinación a la seguridad:** Integración proactiva de criptografía, rate-limiting y seguridad por roles.
- **⚡ Alta velocidad de aprendizaje:** Capacidad de alternar entre múltiples lenguajes y stacks en periodos cortos.

---

## 6. Badges para tu GitHub README
```markdown
<!-- LENGUAJES -->
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)

<!-- FRONTEND -->
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

<!-- BACKEND -->
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)

<!-- BASES DE DATOS -->
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

<!-- HERRAMIENTAS -->
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)
![Google Colab](https://img.shields.io/badge/Google_Colab-F9AB00?style=for-the-badge&logo=googlecolab&logoColor=black)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

<!-- INTERESES -->
![Cybersecurity](https://img.shields.io/badge/Cybersecurity-2C3E50?style=for-the-badge&logo=hackthebox&logoColor=white)
![Machine Learning](https://img.shields.io/badge/Machine_Learning-FF6F00?style=for-the-badge&logo=scikitlearn&logoColor=white)
```
