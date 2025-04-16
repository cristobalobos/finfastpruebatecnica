using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Personas.Data
{
    public class PersonasDbContext : DbContext
    {
        public PersonasDbContext(DbContextOptions<PersonasDbContext> options) : base(options)
        {
        }

        // 🔗 Tables (DbSets)
        public DbSet<Persona> Persona { get; set; }
        public DbSet<Sexo> Sexo { get; set; }
        public DbSet<Region> Region { get; set; }
        public DbSet<Ciudad> Ciudad { get; set; }
        public DbSet<Comuna> Comuna { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            // 👇 Mapea todos los DateTime y DateTime? como datetime (en lugar de datetime2)
            foreach (var entity in modelBuilder.Model.GetEntityTypes())
            {
                var properties = entity.ClrType.GetProperties()
                    .Where(p => p.PropertyType == typeof(DateTime) || p.PropertyType == typeof(DateTime?));

                foreach (var property in properties)
                {
                    modelBuilder.Entity(entity.Name).Property(property.Name).HasColumnType("datetime");
                }
            }

            // ✅ Set primary keys for each entity
            modelBuilder.Entity<Persona>().HasKey(p => p.Id);
            modelBuilder.Entity<Sexo>().HasKey(s => s.Codigo);
            modelBuilder.Entity<Region>().HasKey(r => r.Codigo);
            modelBuilder.Entity<Ciudad>().HasKey(c => c.Codigo);  // ← required by EF Core
            modelBuilder.Entity<Comuna>().HasKey(c => c.Codigo);



            // 🧭 Optional: add additional configuration for relationships if needed
            // Example: If Comuna has a navigation property to Ciudad:
            modelBuilder.Entity<Comuna>()
       .HasOne(c => c.Ciudad)                 // navigation property
       .WithMany(c => c.Comunas)              // collection navigation in Ciudad
       .HasForeignKey(c => c.CiudadCodigo)    // actual FK column in table
       .OnDelete(DeleteBehavior.Restrict);    // optional: avoids cascade delete issues

            base.OnModelCreating(modelBuilder);
        }
    }
}