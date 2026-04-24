---
title: "Gina Bienestar - Integración de Sistemas"
description: "Arquitectura de integración para plataforma educativa: configuración DNS, pasarelas de pago (PayPal), agendamiento y automatización SMTP."
techStack: ["API Integration", "DNS / DevOps", "SMTP", "PayPal API"]
liveUrl: "https://ginabienestar.com"
isPrivateRepo: true
order: 3
---

## Visión General de la Infraestructura

Para esta plataforma de venta de cursos, el requerimiento no fue construir un sistema desde cero, sino actuar como integrador de sistemas (Systems Integrator). El objetivo fue orquestar múltiples servicios de terceros (SaaS) en un flujo de trabajo unificado y seguro para el usuario final.

### Implementaciones Clave

1. **Gestión de Infraestructura (DevOps Básico):** Migración y configuración de registros DNS para la transferencia sin tiempo de inactividad (downtime) desde `ginabienestar.learnworlds.com` hacia un dominio de nivel superior (TLD) propio.
2. **Integración Segura de Pagos:** Conexión de la API de PayPal Business, asegurando que las credenciales (API Keys) y el flujo de transacciones para la compra de cursos operen bajo protocolos de seguridad estándar.
3. **Automatización de Flujos de Trabajo:** - Integración nativa de la API de Calendly (modal/embed) para el agendamiento de consultorías sincronizadas.
   - Configuración de enrutamiento SMTP para garantizar que los correos transaccionales (confirmaciones de compra) se disparen de manera automatizada y segura desde un servidor de correo empresarial, evitando los filtros de SPAM.