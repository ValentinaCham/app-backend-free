# Reservas API  

API para la gestión de reservas de espacios, desarrollada con **Node.js, Express y TypeScript**, con despliegue basado en **Docker Compose**.

## 🚀 Tecnologías utilizadas  
- **Node.js** (versión 18)  
- **Express** con TypeScript  
- **Docker & Docker Compose**  
- **MySQL** (base de datos)  

## 📌 Requisitos previos  
Antes de desplegar la aplicación, asegúrate de que en la máquina donde se ejecutará **los puertos 3000 y 3307 estén libres**, ya que serán utilizados por la API y la base de datos, respectivamente.

## 🔧 Instalación y despliegue con Docker  
Para ejecutar la aplicación utilizando Docker Compose, sigue estos pasos:  

1. Clona este repositorio:  
   ```sh
   git clone https://github.com/usuario/reservas-api.git
   cd reservas-api
   ```
   
2. Construye y ejecuta los contenedores:
  ```sh
  docker-compose up --build -d
  ```

3. La API estará disponible en:
  ```sh
  http://localhost:3000
  ```

## 📂 Estructura del proyecto

  ```
  reservas-api/
  │── src/
  │   ├── controllers/  # Lógica de las rutas
  │   ├── models/       # Modelos de datos
  │   ├── repositories/ # Acceso a la base de datos
  │   ├── routes/       # Definición de endpoints
  │   ├── services/     # Lógica de negocio
  │   ├── index.ts      # Punto de entrada del servidor
  │── docker-compose.yml # Configuración de Docker
  │── Dockerfile        # Imagen de la aplicación
  │── README.md         # Documentación
  ```

## 🏛️ Estructura de la Base de Datos  

La base de datos sigue un modelo relacional con las siguientes tablas:

### 📌 Tabla: `users`  
Almacena la información de los usuarios registrados.  

| Campo     | Tipo         | Descripción                     |
|-----------|-------------|---------------------------------|
| `id`      | `INT`       | Identificador único del usuario |
| `name`    | `VARCHAR`   | Nombre del usuario             |
| `lastname` | `VARCHAR`  | Apellido del usuario           |
| `email`   | `VARCHAR`   | Correo electrónico (único)     |
| `password` | `VARCHAR`  | Contraseña encriptada          |
| `status`  | `INT`       | Estado del usuario (activo/inactivo) |

### 📌 Tabla: `space_types`  
Define los tipos de espacios disponibles para reservación.  

| Campo        | Tipo       | Descripción                      |
|-------------|-----------|----------------------------------|
| `id`        | `INT`     | Identificador único del tipo    |
| `description` | `TEXT`  | Descripción del tipo de espacio |

### 📌 Tabla: `spaces`  
Registra los espacios disponibles para reservaciones.  

| Campo          | Tipo       | Descripción                                |
|---------------|-----------|--------------------------------------------|
| `id`          | `INT`     | Identificador único del espacio            |
| `type`        | `INT`     | Relación con `space_types(id)`             |
| `photo`       | `VARCHAR` | URL de la foto del espacio                 |
| `maxCapacity` | `INT`     | Capacidad máxima de personas               |
| `availability` | `BOOLEAN` | Disponibilidad del espacio (true/false)   |
| `pricePerHour` | `DECIMAL` | Precio por hora de uso del espacio        |

### 📌 Tabla: `reservations`  
Registra las reservaciones de los usuarios en los espacios.  

| Campo         | Tipo        | Descripción                                       |
|--------------|------------|---------------------------------------------------|
| `id`         | `INT`      | Identificador único de la reservación            |
| `idUser`     | `INT`      | Relación con `users(id)`                          |
| `idSpace`    | `INT`      | Relación con `spaces(id)`                         |
| `canceled`   | `BOOLEAN`  | Indica si la reservación fue cancelada           |
| `cliCancel`  | `BOOLEAN`  | Indica si el usuario canceló la reservación      |
| `reasonCancel` | `TEXT`   | Razón de cancelación (opcional)                  |
| `date`       | `DATE`     | Fecha de la reservación                          |
| `startTime`  | `TIME`     | Hora de inicio de la reservación                 |
| `endTime`    | `TIME`     | Hora de finalización de la reservación           |

🔗 **Relaciones entre tablas:**
- `users.id` → `reservations.idUser`
- `spaces.id` → `reservations.idSpace`
- `space_types.id` → `spaces.type`
