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
│   └── PersonasController.cs
│
├── Data/
│   ├── Entities/          → Modelos (Personas, Sexo, Ciudad, etc.)
│   ├── Mock/              → Datos simulados para pruebas locales
│   └── Services/          → Interfaces y lógica de servicios
│       ├── IPersonaService.cs
│       └── PersonaService.cs
│
├── ClientApp/             → Frontend en React
│   ├── components/
│   └── pages/
│
├── appsettings.json       → Configuración del string de conexión
├── Startup.cs             → Configuración de servicios e inyección de dependencias
├── Program.cs             → Main entrypoint
```

---

## 📦 Paquetes Instalados (EF Core 3.1)

Se utilizaron los siguientes paquetes compatibles con .NET Core 3.1:

- `Microsoft.EntityFrameworkCore`
- `Microsoft.EntityFrameworkCore.SqlServer`
- `Microsoft.EntityFrameworkCore.Tools`
- `Microsoft.EntityFrameworkCore.Design`
- `Microsoft.EntityFrameworkCore.Proxies`
- `Microsoft.Extensions.Configuration.Json`
- `Microsoft.Extensions.Configuration.FileExtensions`

---

## 🚀 Funcionalidades Implementadas

- ✅ Obtener todas las personas (`GET /api/Personas/GetAll`)
- ✅ Agregar persona (`POST /api/Personas/AddPersona`)
- ✅ Editar persona (`PUT /api/Personas/UpdatePersona/{id}`)
- ✅ Eliminar persona (`DELETE /api/Personas/DeletePersona/{id}`)

Actualmente, todos los métodos están funcionando con **datos mockeados (mocks)** para facilitar el desarrollo del frontend antes de integrar la base de datos real.

---

## 🛠️ Pasos para ejecutar

### Backend

```bash
dotnet restore
dotnet run
```

### Frontend

```bash
cd ClientApp
npm install
npm start
```

---

## 📋 Consideraciones de Diseño

- Las entidades mantienen sus nombres en español para coincidir directamente con la estructura de la base de datos SQL entregada.
- El código fuente está escrito completamente en inglés (excepto las entidades), para mantener buenas prácticas internacionales de desarrollo.
- La estructura del proyecto se inspiró en un proyecto anterior llamado `Trips`, adaptado a las nuevas necesidades y escalabilidad.

---

## 🔄 Próximos pasos

- Reemplazar los datos mockeados por acceso real a la base de datos usando EF Core.
- Implementar validaciones de datos (e.g., RUT, fecha de nacimiento, email).
- Agregar feedback visual en el frontend ante errores y confirmaciones de operaciones.
- Mejorar estilos y experiencia del usuario.

---

## 🧑‍💻 Autor

**Cristóbal Lobos**  
Desarrollador Fullstack  
GitHub: [@cristobalobos](https://github.com/cristobalobos)
