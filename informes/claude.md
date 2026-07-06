# Informe de Claude (📋 Informe Técnico de Perfil Profesional — Gianfranco)

## 1. 🧑💻 Resumen Profesional / Bio
Estudiante de **Ingeniería Informática** en la Universidad Ricardo Palma (URP, código 202310518), con perfil técnico orientado al desarrollo **Fullstack** con inclinación hacia el backend. Trabaja simultáneamente en múltiples proyectos de software reales —académicos y semi-profesionales— asumiendo rol de implementador/desarrollador principal en su módulo.

Destaca por su capacidad de traducir requerimientos informales (de clientes, supervisores o profesores) en especificaciones técnicas estructuradas: documentación OpenAPI 3.x, casos de uso, matrices de trazabilidad y contratos de API. Adopta metodologías modernas como **Spec-Driven Development** y mantiene un workflow de productividad con tres agentes (él mismo + Claude + coding agent con acceso directo al codebase).

Tiene sensibilidad por el diseño visual, interés en la seguridad de aplicaciones web y experiencia trabajando con stacks como PERN, MERN y Firebase.

---

## 2. 🛠️ Tech Stack

### Lenguajes de Programación
| Lenguaje | Evidencia registrada |
|---|---|
| JavaScript (ES6+) | DUXCalc, Mezzanine (Node/Express/React) |
| TypeScript | Kanbix (React + Vite + TS) |
| Python | Laboratorios de simulación, ejercicios OOP, FastAPI |
| C# | AppDesktopMecanica (Windows Forms, async/await) |
| SQL / PL/SQL | Laboratorios Oracle 21c (BD2 IF0705) |

### Frameworks y Librerías
| Tecnología | Contexto de uso |
|---|---|
| React (v19) | DUXCalc, Mezzanine, Kanbix |
| Vite | Kanbix (bundler) |
| Express.js | Mezzanine Restobar (API REST, 7 endpoints), DUXCalc server |
| Node.js | Runtime base de DUXCalc (server.mjs, puerto 3001) y Mezzanine |
| FastAPI | Kanbix (backend Python) |
| Nodemailer | DUXCalc (RecuperarContraseña, SMTP Gmail) |
| express-validator | Mezzanine (validación de inputs en API) |
| SimPy | Curso de Simulación IF0701 (simulación discreta en Python) |

### Bases de Datos
| Base de Datos | Contexto de uso |
|---|---|
| MongoDB Atlas | Kanbix (cloud) |
| MongoDB local | Laboratorios IF0705 (mongosh, CRUD, indexes) |
| PostgreSQL | Mezzanine Restobar (stack PERN) |
| Firebase / Firestore | DUXCalc (autenticación, datos de nómina) |
| Oracle 21c (PDB) | Laboratorios IF0705 (SQL*Plus, TCL, usuarios, privilegios) |

### Herramientas y Entornos
| Herramienta | Contexto de uso |
|---|---|
| Git | Control de versiones en todos los proyectos |
| Vercel | Despliegue frontend (mencionado en stack) |
| Railway | Despliegue backend (mencionado en stack) |
| Supabase | Mencionado como herramienta en stack activo |
| SQL Developer | Laboratorios Oracle |
| mongosh | Laboratorios MongoDB (Labs 08, 09, 11) |
| ProModel | Curso Simulación IF0701 (proyecto El Perro Fast Food) |
| Arena | Curso Simulación (mencionado junto a ProModel) |
| Mermaid.js | Diagramas BPMN (HTML embebido, paleta Bizagi) |
| Cloudflare Turnstile | DUXCalc (integración anti-bot en login) |
| Google Analytics 4 | Mezzanine (integración en dashboard CRM) |
| Concurrently | DUXCalc (arranque simultáneo frontend + backend) |

---

## 3. 📁 Proyectos Registrados

### 🗂️ Kanbix
- **Tipo:** Proyecto de equipo académico (Taller de Proyectos III)  
- **Stack:** React + TypeScript + Vite · FastAPI · MongoDB Atlas  
- **Descripción:** Aplicación web de gestión de proyectos basada en tablero Kanban. Desarrollado bajo metodología **Spec-Driven Development**. Gianfranco es responsable del módulo **Kanban Board & Tasks**.  
- **Estado registrado:** Documentación estructurada en Markdown en curso (pendientes: RNF, casos de uso, matriz de trazabilidad, quality scenarios, contratos API en OpenAPI 3.x).

### 💼 SACSDCC / DUXCalc
- **Tipo:** Proyecto de equipo académico / semi-profesional  
- **Stack:** React 19 · Node.js · Express · Firebase / Firestore  
- **Descripción:** Sistema de cálculo de nómina para **Dux Contact Center**. Gianfranco implementó la sincronización de datos salariales entre tres vistas UI (R5) vía `salarioCalculoService.js`, el flujo de recuperación de contraseña (Nodemailer + Gmail), y el feature "Recuérdame" en el login.  
- **Seguridad aplicada:** `crypto.randomInt()`, rate limiting, CORS, prevención de enumeración de usuarios, Cloudflare Turnstile.  
- **Documentación producida:** CUS11, CUS18, requerimientos funcionales, plantilla maestra Markdown, documento memoria Word.

### 🍽️ Mezzanine Restobar S.A.C.
- **Tipo:** Proyecto de equipo académico (PERN stack completo)  
- **Stack:** PostgreSQL · Express · React · Node.js  
- **Descripción:** Sistema de gestión para un restobar de comida criolla peruana en Magdalena del Mar, Lima. Incluye CRM completo (tablas `customers`, `campaigns`, `campaign_recipients`), 7 endpoints REST, 3 vistas dashboard en React, lógica LTV, módulo HR ClimaLaboral, integración con Google Analytics 4.  
- **Seguridad/UX aplicada:** express-validator, rate limiting, secure error handler, modal de confirmación, ToastContext.  
- **Deliverables adicionales:** Business Model Canvas (HTML interactivo + SVG esquemático), mockups de slides de presentación, diagnóstico de clima organizacional (PowerPoint 8 slides, paleta terracota).

### 🔧 AppDesktopMecanica
- **Tipo:** Laboratorio académico (IF0705)  
- **Stack:** C# · Windows Forms · MongoDB  
- **Descripción:** Aplicación de escritorio para un taller mecánico con operaciones CRUD completas sobre MongoDB. Gianfranco resolvió errores de compilador relacionados con `async/await` durante la implementación.

### 🔐 NeuroScan ID *(concepto)*
- **Tipo:** Proyecto personal / side project con hermano  
- **Descripción:** Concepto de producto B2B en el área de **ciberseguridad** con enfoque en marketing. No hay stack técnico registrado — mencionado como idea en desarrollo colaborativo con su hermano.

---

## 4. 🔍 Inferencias Tecnológicas
Basado en el stack confirmado (Node.js + Express + MongoDB/PostgreSQL + React + FastAPI), es altamente probable que Gianfranco domine o esté en proceso de dominar los siguientes patrones y conceptos:

- **Diseño de APIs:** REST (confirmado), OpenAPI 3.x (confirmado), versionado de endpoints
- **Autenticación/Autorización:** JWT, manejo de sesiones, OAuth (inferido por flujo Firebase Auth + RecuperarContraseña)
- **Seguridad web:** Rate limiting (confirmado), CORS (confirmado), validación de inputs (confirmado), OWASP top 10 básico
- **Patrones de diseño:** MVC (Express), Singleton/Service pattern (`salarioCalculoService.js` = service layer), Context API (ToastContext)
- **Arquitectura:** Separación frontend/backend, monorepo básico, microservicios ligeros
- **Async / Concurrencia:** async/await en JS y C# (confirmado), Promises, manejo de errores async
- **Documentación técnica:** Spec-Driven Development (confirmado), OpenAPI 3.x (confirmado), casos de uso, diagramas BPMN
- **DevOps básico:** Variables de entorno `.env`, despliegue en Railway/Vercel (confirmado), scripts npm con `concurrently`
- **Modelado de datos:** Diseño de esquemas relacionales (PostgreSQL) y no relacionales (MongoDB), índices (Labs IF0705)
- **Simulación/Modelado:** Discrete Event Simulation (ProModel, SimPy), BPMN, diagramas de flujo

---

## 5. 🧠 Soft Skills / Enfoque de Ingeniería
- **Traducción de requerimientos:** Convierte instrucciones informales de supervisores/profesores en documentación estructurada (CUS, RFs, OpenAPI)
- **Multitarea simultánea:** Trabaja en 4–5 proyectos de forma paralela sin perder contexto técnico específico
- **Sensibilidad por el diseño:** Especifica paletas de color exactas (#hex), layouts y tipografía con criterio propio en cada entregable visual
- **Flujo de trabajo optimizado:** Adoptó un sistema de tres agentes (él + Claude + coding agent) para maximizar velocidad de implementación
- **Comunicación directa / eficiencia:** Prefiere prompts mínimos y respuestas concisas ("prompt cavernícola") — señal de madurez técnica y enfoque en el resultado
- **Documentación como disciplina:** No solo implementa: produce Word, PowerPoints, Markdown, SVGs y diagramas BPMN como entregables reales
- **Resiliencia ante errores:** Resuelve errores de compilador (C# async/await), bugs de Firestore, conflictos de CORS de forma autónoma antes de escalar
- **Visión de producto:** Aporta a decisiones de arquitectura (service layer, seguridad, estructura de rutas) más allá de solo codificar tareas asignadas

---

## 📛 Badges — Bloque listo para copiar en GitHub README

```markdown
<!-- Lenguajes -->
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white)

<!-- Frontend -->
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

<!-- Backend -->
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)

<!-- Bases de Datos -->
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)

<!-- Tools & Deploy -->
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
```

---

> **⚠️ Secciones con datos incompletos para completar manualmente:**
> - Año de inicio en programación / fecha estimada de graduación
> - Redes sociales / contacto (LinkedIn, email profesional)
> - Contribuciones open source (no hay datos registrados)
> - Certificaciones o cursos externos completados (no hay datos registrados)
> - Stack de NeuroScan ID (concepto sin stack técnico definido registrado)
