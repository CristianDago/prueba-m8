# 📝 Reporte de Implementación del Pipeline de Integración Continua

Este documento resume la implementación de un pipeline de Integración Continua (CI) para la API de gestión de usuarios del proyecto **"TechFlow"**, utilizando **Jenkins** como herramienta principal de automatización.

---

## ✅ Pasos Realizados

### 1. Configuración inicial del repositorio
- Se inicializó un repositorio Git local con los archivos proporcionados (`db.json`, `app.js`, `package.json`, `app.test.js`).
- Se creó un repositorio remoto en GitHub y se configuró correctamente el enlace remoto.
- Se realizó el commit inicial y se subió el proyecto a GitHub.

### 2. Configuración básica de la API
- Se instalaron las dependencias del proyecto con `npm install`.
- Se creó el archivo `.gitignore`.
- Se actualizó el `package.json` para incluir el script de inicio (`npm start`).
- Se ajustó el archivo `app.js` para que el servidor se montara correctamente.
- Se validó el funcionamiento de la API con `npm start`, accediendo a los endpoints `/users` y `/users/:id` desde Postman, confirmando el correcto manejo de los datos y errores.

### 3. Automatización básica con Jenkins
- Se creó un pipeline en Jenkins llamado `techflow-api-pipeline`.
- El pipeline fue configurado para clonar automáticamente el repositorio desde GitHub mediante un `Jenkinsfile`.
- El `Jenkinsfile` incluye las siguientes etapas:
  - **Checkout**: Obtención del código fuente.
  - **Install Dependencies**: Instalación de paquetes.
  - **Start API Validation**: Arranque del servidor y validación mediante una petición `curl`.

### 4. Ejecución de pruebas automatizadas
- Se integró una etapa `Run Tests` en el `Jenkinsfile` para ejecutar las pruebas unitarias con `npm test`.
- El pipeline fue diseñado para fallar si alguna prueba no pasa, lo que asegura una validación temprana del código.

---

## 🐞 Problema Encontrado

- Durante la etapa de validación del servidor Express en Jenkins, fue necesario **detener el proceso manualmente** tras la validación con `curl`. Para esto se usó el comando `pkill -f "node app.js"`, que **funciona en este contexto simple**, pero podría ser frágil en entornos más complejos o con múltiples procesos de Node corriendo simultáneamente.
  > ⚠️ Se recomienda, a futuro, explorar otras formas más controladas de iniciar y detener el servidor, como usar `pm2`, `nodemon` con flags, o manejo por scripts.

---

## 📌 Conclusiones

Se ha implementado exitosamente un pipeline básico de CI con Jenkins que automatiza:
- La obtención del código desde GitHub.
- La instalación de dependencias.
- La ejecución de pruebas unitarias.
- La validación del estado funcional de la API.

Esto permite detectar errores de manera temprana y contribuye a mantener la estabilidad del proyecto.

---

## 🔄 Imágenes

- En la carpeta "documents" se encuentra los estados realizados por Jenkins al realizar cada uno de los procesos. 
