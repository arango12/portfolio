# Eddie Arango - Professional Engineering Portfolio

A high-performance technical showcase built with **Astro** and **Tailwind CSS**. This project serves as a living proof of concept for modern frontend architecture, emphasizing performance, accessibility, and automated delivery.

[Leer versión en Español](./README.md)

## 🏗️ Architectural Decisions

### 1. Island Architecture (Astro)
I chose **Astro** to leverage its "partial hydration" pattern. Unlike traditional React or Vue SPAs, this site ships **zero JavaScript** to the client by default. Interactive elements are isolated "islands," ensuring an instant Time to Interactive (TTI).

### 2. Scalable Content Management
The portfolio uses **Astro Content Collections**. Projects and success cases are stored as Type-Safe Markdown files. This ensures:
- **Strict Schema Validation:** Using `zod` to enforce data integrity.
- **Maintainability:** Adding a new project is as simple as creating a `.md` file without touching the UI logic.

### 3. Performance & SEO
- **Lighthouse Score:** Optimized to achieve 100/100 across all metrics.
- **Image Optimization:** Automated processing of assets via Astro's built-in image service.

## 🛠️ Tech Stack
- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Netlify with automated CI/CD.

## 🚀 DevOps & Workflow
Every `push` to the `main` branch triggers an automated build in Netlify, executing schema tests before production deployment.

---
*Developed with a focus on engineering excellence.*