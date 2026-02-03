# TodoApp

TodoApp es una aplicación de gestión de tareas desarrollada bajo el stack MERN (MongoDB, Express, React y Node.js)

El proyecto implementa una arquitectura RESTful para permitir operaciones CRUD (Crear, Leer, Actualizar, Eliminar) completas, con una interfaz de usuario moderna y responsiva.

El proyecto ha evolucionado para incluir un **sistema completo de autenticación y autorización**, permitiendo que cada usuario tenga su propio espacio privado de trabajo, asegurando que las notas sean personales e inaccesibles para otros.

## Demo en Vivo

Puedes probar la aplicación funcionando aquí:  
**[https://mern-task-manager-swart.vercel.app/](https://mern-task-manager-swart.vercel.app/)**

## Credenciales de Prueba (Demo)

Si quieres probar la app rápidamente sin registrarte, puedes usar:

- `Email: demo@test.com`
- `Contraseña: 1234Qwer`

> **Nota importante sobre el rendimiento (Cold Start):**
> El backend de esta aplicación está desplegado en el plan gratuito de **Render**. Por este motivo, el servidor entra en modo de suspensión tras 15 minutos de inactividad.
> **Si al intentar iniciar sesión o registrarte notas una demora de 40-50 segundos, es normal:** el servidor se está "despertando". Una vez activo, la aplicación funcionará a velocidad normal.

### Seguridad y Autenticación (Nuevo)

- **Registro e Inicio de Sesión:** Sistema seguro con validación de credenciales.
- **Protección JWT:** Uso de JSON Web Tokens para mantener la sesión del usuario.
- **Rutas Protegidas:** El dashboard y las operaciones CRUD son inaccesibles sin iniciar sesión.
- **Privacidad de Datos:** Cada nota se vincula al ID del usuario creador. Un usuario solo puede leer, editar o borrar sus propias notas.
- **Manejo de Sesión:** Cierre de sesión automático y persistencia de token.

### Gestión de Tareas

- **CRUD Completo:** Crear, Leer, Actualizar y Eliminar notas.
- **Landing Page:** Página de bienvenida para usuarios no autenticados.
- **Estado Visual:** Indicadores de notas "Importantes".
- **Feedback:** Notificaciones Toast para confirmar acciones (éxito/error).

## Tecnologías Utilizadas

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Base de Datos:** MongoDB & Mongoose
- **Seguridad:**
- `bcryptjs` (Encriptación de contraseñas)
- `jsonwebtoken` (Generación de tokens)
- `cors` (Gestión de orígenes cruzados)

### Frontend

- **Librería:** React (Vite)
- **Estilos:** Tailwind CSS & DaisyUI
- **Enrutamiento:** React Router DOM (Manejo de rutas públicas y privadas)
- **Estado Global:** React Context API (AuthContext)
- **Cliente HTTP:** Axios (con interceptores para manejo de tokens)
- **Notificaciones:** React Toastify
- **Iconos:** Lucide React

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
