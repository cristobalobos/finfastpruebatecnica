
import React, { Component } from "react";
import PersonaForm from "./PersonaForm";

export class CreatePersona extends Component {
    handleCreate = async (personaData) => {
        const response = await fetch("/api/Personas/AddPersona", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(personaData)
        });

        if (response.ok) {
            alert("✅ Persona creada exitosamente");
            this.props.history.push("/personas");
        } else {
            alert("❌ Error al crear persona");
        }
    };

    render() {
        return (
            <div className="container mt-4">
                <h2 className="mb-4">Crear Persona</h2>
                <PersonaForm onSubmit={this.handleCreate} />
            </div>
        );
    }
}

export default CreatePersona;
