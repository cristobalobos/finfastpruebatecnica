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

- Las entidades mantienen sus nombres en español para coincidir directamente con la estructura de la base de datos SQL entregada.
- Se dejó una carpeta exclusiva llamada `Personas` que agrupa modelos, servicios e interfaces relacionados. Esta estructura facilita la **escalabilidad**, permitiendo que en el futuro se agreguen más entidades (como `Región`, `Sexo`, `Ciudad`, etc.) de forma ordenada y mantenible.
- El uso de **interfaces** e **inyección de dependencias** en `Startup.cs` permite desacoplar el backend, facilitando el testeo y cambios en la fuente de datos.
- En la consola del backend se muestran logs simples como confirmación de inserción, actualización y eliminación, para seguimiento del flujo de operaciones.

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
