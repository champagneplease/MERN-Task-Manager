# TodoApp

TodoApp es una aplicación de gestión de tareas desarrollada bajo el stack MERN (MongoDB, Express, React y Node.js)

El proyecto implementa una arquitectura RESTful para permitir operaciones CRUD (Crear, Leer, Actualizar, Eliminar) completas, con una interfaz de usuario moderna y responsiva.

## Tecnologías Utilizadas

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Base de Datos:** MongoDB
- **ODM:** Mongoose
- **Utilidades:** dotenv (gestión de variables de entorno), CORS (seguridad).

### Frontend

- **Librería:** React
- **Estilos:** Tailwind CSS
- **Enrutamiento:** React Router
- **Cliente HTTP:** Axios
- **Notificaciones:** React Toastify
- **Manejo de Fechas:** date-fns

## Instalación y Configuración

Siga los siguientes pasos para ejecutar el entorno de desarrollo localmente.

### 1. Clonar el repositorio

```bash
git clone https://github.com/champagneplease/MERN-Task-Manager
cd todoapp

```

### 2. Configuración del Backend

Navegue al directorio del servidor, instale las dependencias y configure las variables de entorno.

```bash
cd backend
npm install

```

Cree un archivo `.env` en la raíz del directorio `backend` con la siguiente configuración:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/todoapp

```

> **Nota:** Si utiliza MongoDB Atlas, reemplace `MONGO_URI` con su cadena de conexión remota.

Ejecute el servidor en modo desarrollo:

```bash
npm run dev

```

### 3. Configuración del Frontend

En una nueva terminal, navegue al directorio del cliente e instale las dependencias.

```bash
cd frontend
npm install

```

Ejecute la aplicación cliente:

```bash
npm run dev

```
## Funcionalidades Actuales

- Gestión completa de tareas (Creación, Edición, Eliminación, Listado).
- Ordenamiento cronológico de elementos.
- Sistema de notificaciones para feedback al usuario.
- Interfaz de usuario estilizada con Tailwind CSS.