## Descripción

Este proyecto es una aplicación **fullstack** que consta de dos partes principales: una **API backend** y una **interfaz frontend**. El objetivo es gestionar un **carrito de compras** con productos, permitiendo a los usuarios:

1. **Ver la lista de productos disponibles**.
2. **Agregar productos al carrito**.
3. **Visualizar los productos dentro del carrito**.
4. **Crear nuevos productos**.
5. **Encontrar la mejor combinación de productos** que maximice el valor total sin exceder un presupuesto determinado.

### Funcionalidades principales:

1. **Gestión de productos**: 
   - La API devuelve una lista estática de productos, cada uno con un identificador único, un nombre y un precio.
   - Los usuarios pueden **crear nuevos productos** mediante una solicitud a la API.
   
2. **Agregar productos al carrito**: Los usuarios pueden agregar productos al carrito. El carrito se guarda en memoria mientras dure la sesión.

3. **Ver el carrito**: Los usuarios pueden ver los productos actualmente agregados al carrito.

4. **Optimización del carrito**: Se implementa una función que, dado un presupuesto máximo, encuentra la combinación de productos cuya suma de precios sea la mayor posible sin exceder dicho presupuesto.

### Tecnologías utilizadas:

- **Backend**: Node.js con Express (para manejar las peticiones RESTful de productos y carrito).
- **Frontend**: React (para mostrar la lista de productos, agregar productos al carrito, crear productos, visualizar el carrito y gestionar las interacciones).
- **Estilos**: CSS básico.

## Instalación

### Prerrequisitos

Antes de instalar el backend, asegúrate de tener **Node.js** (versión 14 o superior) instalado en tu computadora. Si no tienes Node.js, sigue estos pasos para instalarlo:

1. Ve al sitio oficial de Node.js: [https://nodejs.org/](https://nodejs.org/).
2. Descarga el instalador correspondiente a tu sistema operativo.
3. Sigue las instrucciones del instalador.

Para verificar que Node.js se ha instalado correctamente, abre una terminal o línea de comandos y ejecuta:

```bash
node -v

```

## Clonar el Repositorio

Para clonar el repositorio, sigue estos pasos:

### 1. Clonar el Repositorio

Abre una terminal y ejecuta el siguiente comando para clonar el repositorio:

```bash
git clone https://github.com/erich1989/tienda-online.git

```
## Instalación y configuración del Backend (Node.js)

### 1. Accede a la carpeta backend:

Abre tu terminal y navega hasta la carpeta backend con el siguiente comando:

```bash
cd backend

```

### 2. Instala las dependencias de Node.js:

Una vez dentro de la carpeta backend, ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```
### 3. Crea el archivo .env:

Después de instalar las dependencias, crea un archivo **.env** en la raíz de la carpeta backend para configurar el puerto en el que se ejecutará el servidor. Usa el siguiente comando:

```bash
echo "PORT=5001" > .env

```

### 4. Inicia el servidor:

Finalmente, inicia el servidor de desarrollo con el siguiente comando:

```bash
npm run dev

```

Esto ejecutará el servidor en el puerto especificado en el archivo .env (en este caso, el puerto 5001).


## Instalación y configuración del frontend (React)

### 1. Accede a la carpeta frontend:

Abre tu terminal y navega hasta la carpeta **frontend** con el siguiente comando:

```bash
cd backend

```
### 2. Instala las dependencias de Node.js:

Una vez dentro de la carpeta frontend, ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

### 3. Crea el archivo .env:

React utiliza variables de entorno para configurar aspectos como la URL del backend o claves de API. Crea un archivo **.env** en la raíz de la carpeta frontend con el siguiente comando:

```bash
echo "REACT_APP_BACKEND_URL=http://localhost:5001/api/v1" > .env
```

### 4. Inicia la aplicación de React:

Una vez configurado el entorno, inicia la aplicación con el siguiente comando:

```bash
npm start
```

Esto abrirá la aplicación en tu navegador, generalmente en http://localhost:3000.

## ¡Listo! 🎉

Con estos pasos, has configurado correctamente tanto el backend como el frontend de la aplicación. Ahora puedes ejecutar la aplicación en tu entorno local:

**1. Backend:** Asegúrate de que el servidor esté en ejecución con **npm run dev** en la carpeta backend.

**2. Frontend:** Inicia la aplicación de React con **npm start** en la carpeta frontend.

Una vez que ambos servidores estén en funcionamiento, puedes acceder a la aplicación desde tu navegador en:

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend:** [http://localhost:5001](http://localhost:5001) (o el puerto que hayas configurado).