# Prueba Técnica - Mantenedor de Personas 👤

Este proyecto implementa un mantenedor de personas utilizando tecnologías como **.NET Core 3.1**, **Entity Framework Core** y **React** con un enfoque en buenas prácticas de diseño, estructura y escalabilidad.

---

## 🧩 Objetivo del Proyecto

- Crear una aplicación fullstack que permita gestionar un CRUD completo de personas.
- Conectar con una base de datos SQL Server predefinida, modelada mediante script SQL entregado.
- Usar EF Core como ORM para manipulación de datos y React para la capa de presentación.

---

## ⚙️ Tecnologías Utilizadas

- Backend: ASP.NET Core 3.1
- ORM: Entity Framework Core (v3.1.x)
- Base de datos: SQL Server
- Frontend: React.js (con JavaScript)
- CSS: Bootstrap 4

---

## 🧱 Estructura del Proyecto

```
FinfastPruebaTecnica/
│
├── Controllers/           → API Controllers (.NET)
│   ├── PersonasController.cs
│   └── UbicacionController.cs
│
├── Data/
│   ├── Entities/          → Modelos (Persona, Sexo, Región, Ciudad, Comuna)
│   ├── Mock/              → Datos simulados para pruebas locales
│   ├── Services/          → Interfaces y lógica de servicios
│   └── PersonasDbContext.cs
│
├── ClientApp/             → Frontend en React
│   ├── components/
│   └── pages/
│       ├── CreatePersona.jsx
│       ├── UpdatePersona.jsx
│       └── PersonasList.jsx
│
├── appsettings.json       → Configuración del string de conexión
├── Startup.cs             → Configuración de servicios e inyección de dependencias
├── Program.cs             → Main entrypoint
```

---

## 📦 Paquetes Instalados (EF Core 3.1)

- `Microsoft.EntityFrameworkCore`
- `Microsoft.EntityFrameworkCore.SqlServer`
- `Microsoft.EntityFrameworkCore.Tools`
- `Microsoft.EntityFrameworkCore.Design`
- `Microsoft.EntityFrameworkCore.Proxies`
- `Microsoft.Extensions.Configuration.Json`
- `Microsoft.Extensions.Configuration.FileExtensions`

---

## 🚀 Funcionalidades Implementadas

### Personas (`/api/Personas`)

- ✅ Obtener todas las personas (`GET /GetPersonas`)
- ✅ Obtener persona por ID (`GET /GetPersonaById/{id}`)
- ✅ Agregar persona (`POST /AddPersona`)
- ✅ Editar persona (`PUT /UpdatePersona/{id}`)
- ✅ Eliminar persona (`DELETE /DeletePersona/{id}`)

### Ubicación (`/api/Ubicacion`)

- ✅ Listar regiones (`GET /GetAllRegiones`)
- ✅ Listar ciudades por región (`GET /GetCiudadesByRegion/{regionCodigo}`)
- ✅ Listar comunas por región y ciudad (`GET /GetComunasByRegionAndCiudad/{regionCodigo}/{ciudadCodigo}`)

---

## 🧪 Modo de prueba con mocks

Cada método del servicio tiene una alternativa comentada para pruebas con datos simulados (mock):

```csharp
// ✅ Using Entity Framework (real database)
return _context.Persona.ToList();

// 🧪 Using mock data
// return PersonaMock.Personas.ToList();
```

---

## 📋 Consideraciones de Diseño

- 🗂 **Estructura modular y escalable**: Se estructuró el backend separando responsabilidades por carpeta (`Entities`, `Services`, `Mock`) dentro del namespace `Personas`, lo que facilita escalar el proyecto a nuevas entidades manteniendo una organización limpia y mantenible.

- 🧩 **Nombres en español en entidades**: Las clases y propiedades del modelo (`Persona`, `Sexo`, `Región`, etc.) fueron mantenidas en español para coincidir directamente con los nombres de las tablas de la base de datos entregada, facilitando la trazabilidad y comprensión del modelo de dominio.

- 🧪 **Compatibilidad con mocks**: Se incluyeron versiones comentadas en los servicios para trabajar con datos simulados (`Mock`) durante la etapa inicial, permitiendo desarrollar el frontend sin necesidad de depender del estado de la base de datos.

- 🧩 **Desacoplamiento mediante interfaces**: Se implementaron interfaces (`IPersonaService`, etc.) para abstraer la lógica de negocio, lo que facilita la inyección de dependencias en `Startup.cs`, mejora la testabilidad y permite cambiar fácilmente la fuente de datos si fuera necesario.

- 📝 **Mensajes de consola como trazabilidad ligera**: Cada operación en el backend emite un mensaje en la consola que indica si la acción fue exitosa o fallida (`Persona added`, `Persona deleted`, etc.). Esto permitió depurar de forma ágil durante el desarrollo.

- ♻️ **Validaciones a nivel de modelo**: Se utilizó `System.ComponentModel.DataAnnotations` en las entidades para validar campos obligatorios como `RUT`, `email`, `fecha de nacimiento`, etc. Esto asegura que el backend mantenga integridad sin depender exclusivamente del frontend.

- 📡 **Carga dinámica de datos relacionales**: Los campos `Región`, `Ciudad` y `Comuna` en el formulario de personas fueron implementados con dependencias dinámicas, es decir, el contenido de cada combo se actualiza en tiempo real según la selección del anterior. Esto mejora la usabilidad y evita errores de selección inválida.

- 🔄 **Redirección automática tras operaciones**: Al agregar o actualizar una persona, el usuario es redirigido automáticamente al listado general (`/personas`) como confirmación implícita de éxito y para asegurar consistencia visual inmediata.

- 🧠 **Reutilización de formularios**: Se refactorizó la vista de formulario (`PersonaForm.jsx`) para ser utilizada tanto en el flujo de creación como en el de edición, reduciendo duplicación de código, errores y facilitando el mantenimiento futuro.

- 🎨 **Estilo visual consistente**: Se personalizó la UI utilizando Bootstrap 4 y una paleta de colores inspirada en el sitio oficial de FinFast, mejorando la presentación sin comprometer la funcionalidad.

---

## 🛠️ Pasos para ejecutar

### Backend

```bash
dotnet restore
dotnet run
```

---

## 🧑‍💻 Autor

**Cristóbal Lobos**  
Desarrollador Fullstack  
GitHub: [@cristobalobos](https://github.com/cristobalobos)
