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
│   ├── Services/          → Interfaces y lógica de servicios
│   └── PersonasDbContext.cs
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

- ✅ Obtener todas las personas (`GET /api/Personas/GetPersonas`)
- ✅ Obtener persona por ID (`GET /api/Personas/GetPersonaById/{id}`)
- ✅ Agregar persona (`POST /api/Personas/AddPersona`)
- ✅ Editar persona (`PUT /api/Personas/UpdatePersona/{id}`)
- ✅ Eliminar persona (`DELETE /api/Personas/DeletePersona/{id}`)

Todos los métodos funcionan actualmente con conexión a **base de datos real** mediante **Entity Framework Core**.

---

## 🧪 Modo de prueba con mocks

Cada método del servicio mantiene comentada una alternativa con mocks para pruebas locales, como por ejemplo:

```csharp
// ✅ Using Entity Framework (real database)
return _context.Persona.ToList();

// 🧪 Using mock data (for testing purposes)
// return PersonaMock.Personas.ToList();
```

Esto permite cambiar fácilmente entre desarrollo con datos reales y pruebas locales sin necesidad de conexión a SQL Server.

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
- Se dejó una carpeta exclusiva llamada `Personas` que agrupa modelos, servicios e interfaces relacionados. Esta estructura facilita la **escalabilidad**, permitiendo que en el futuro se agreguen más entidades (como `Región`, `Sexo`, `Ciudad`, etc.) de forma ordenada y mantenible.
- El uso de **interfaces** e **inyección de dependencias** en `Startup.cs` permite desacoplar el backend, facilitando el testeo y cambios en la fuente de datos.
- En la consola del backend se muestran logs simples como confirmación de inserción, actualización y eliminación, para seguimiento del flujo de operaciones.

---

## 🧪 Probar con Postman

Base URL:

```
https://localhost:5001/api/Personas
```

Ejemplo de insert:

```json
{
  "runCuerpo": 12345678,
  "runDigito": "9",
  "nombres": "Ada",
  "apellidoPaterno": "Lovelace",
  "apellidoMaterno": "",
  "email": "ada@correo.cl",
  "sexoCodigo": 2,
  "fechaNacimiento": "1815-12-10",
  "regionCodigo": 1,
  "ciudadCodigo": 1,
  "comunaCodigo": 1,
  "direccion": "Calle Imaginaria 123",
  "telefono": 123456789,
  "observaciones": "Primera programadora"
}
```

---

## 🔄 Próximos pasos

- Finalizar integración del frontend con todos los endpoints activos.
- Implementar validaciones de datos (e.g., RUT, email, fechas).
- Mostrar feedback visual en frontend ante errores o confirmaciones.
- Documentar endpoints con Swagger.

---

## 🧑‍💻 Autor

**Cristóbal Lobos**  
Desarrollador Fullstack  
GitHub: [@cristobalobos](https://github.com/cristobalobos)
