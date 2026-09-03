# SiteVox — guía técnica

SiteVox es una aplicación web de planificación de viajes con rutas, lugares, visados y consejos para usuarios de México.

## Stack y decisiones vigentes

- Next.js 15 (App Router), React 19 y TypeScript estricto.
- Tailwind CSS para estilos, con Material UI/Emotion cuando se requieren componentes.
- i18n con `next-i18next` e `i18next`; español como idioma predeterminado e inglés como alternativa.
- MongoDB con Mongoose; modelos y conexión en `lib/`.
- Mapas con Leaflet y React Leaflet, cargados dinámicamente solo en cliente.
- Rutas API bajo `app/**/route.ts`; alias `@/` para imports internos.
- Salida standalone de Next.js y despliegue configurado en Netlify.
- No existen aún archivos `plan.md` en `specs/`; estas decisiones se contrastaron con la configuración y el código actuales.

## Desarrollo y verificación

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

```bash
npm run lint
npm run build
```

## Convenciones

- TypeScript, componentes funcionales y App Router.
- Usar `@/` para imports internos y separar UI (`components/`), dominio/datos (`lib/`) y llamadas cliente (`services/`).
- Mantener la interfaz en español de México; internacionalizar todo texto visible y conservar inglés como alternativa.
- Aplicar Prettier: 2 espacios, comillas simples, punto y coma, coma final ES5 y ancho de 80.
- No incluir secretos: variables de entorno en `.env*`, nunca en código ni repositorio.
- Mantener los cambios simples, dentro de la especificación aprobada y verificables desde la interfaz.

Las reglas de producto viven en .specify/memory/constitution.md y el estado del producto en specs/README.md

## Spec-kit

- Antes de ejecutar el flujo de /speckit-specify, SIEMPRE ejecuta primero el hook before_specify (skill speckit-git-feature) para crear la rama de la feature, y espera su resultado antes de crear la spec.
- Tras completar /speckit-specify, verifica con 'git branch --show-current' que estamos en la rama NNN-nombre-feature y no en master. Si no es así, avísame antes de continuar.
- Al ejecutar /speckit-plan, SIEMPRE Incluye en 'plan.md', como último paso de la fase final, un paso de mantenimiento: "Actualizar AGENTS.md con las decisiones de diseño y convenciones nuevas de esta feature, una lines por decisión, con referencia a la spec (p. ej. '[003] ...' )". No inclusas entradas por incluir, asegúrate siempre de que es información transversal y relevante para que el proyecto pueda aprovechar para futuras features.
