---
description: Cómo solucionar problemas de Vercel cuando no se actualizan los cambios (Troubleshooting)
---

# Diagnóstico de Vercel Trabado

Si los cambios que se solicitan en Vercel no se visualizan aunque los comandos indiquen éxito, sigue estrictamente esta rutina de documentación:

## 1. Validar la Compilación Local 
A menudo, Vercel frena internamente un pase a producción sin un error ruidoso en la interfaz si encuentra un error de `lint` (como sintaxis de cadenas mal escritas en base64 de logos, falta de comillas) o errores de TypeScript.
Antes de suponer errores de conexión:
```bash
npm run lint
npx tsc --noEmit
```
**Acción:** Arregla de inmediato los archivos si la consola local marca errores, especialmente en archivos `.ts` o `.tsx`. Solo avanzar cuando `npm run lint` marque cero errores.

## 2. Validar Estado de Autenticación CLI
Si al ejecutar `vercel --prod` en consola arroja el error:
> `Error: The specified token is not valid.`
El token está caducado y no se puede forzar el puente local sin interactuar.

**Solución Alternativa Automatizada (Bypass Seguro):**
Para evitar pasos manuales del usuario, utiliza el siguiente flujo interactivo si el usuario aprueba realizarlo autómaticamente:
```bash
git config user.email # Obtener su correo (si aplica)
vercel login
```
> **Nota de Automatización:** Si Vercel CLI frena en la terminal por ser interactivo pero genera un enlace como `https://vercel.com/oauth/device?user_code=...`, utiliza la herramienta para abrir el navegador directamente y pedirle al usuario que le dé "Verify" con 1 clic:
```bash
start https://vercel.com/oauth/device?user_code=xxxx
```

## 3. Comprobar Despliegue Force en Consola
Una vez logueada la CLI de forma local, puedes aplastar cualquier restricción temporal de Vercel o bloqueos de Github Webhooks ejecutando:
// turbo
```bash
vercel --prod --yes
```

## 4. Controlar GitHub Origins Diferentes
Si el usuario creó este proyecto desde **v0.dev**, este generó un repositorio original en una cuenta conectada (por ejemplo, `taniasardella-2511/v0-uflo-otc-2026`). Si tú o el usuario están clonando esos archivos y subiéndolos con `git add .` a un **sub-repositorio nuevo** (como `taniasardella-UFLO/UFLO_UHOTC`), Vercel ignorará tus subidas a Github porque Vercel de nacimiento sigue mirando el repositorio secreto de v0 inicial. En este caso forzar despliegues directos con Vercel CLI (Paso 3) es la mejor salida temporal.
