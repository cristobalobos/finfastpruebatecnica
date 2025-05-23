import React, { Component } from "react";

export class PersonasList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            personas: [],
            loading: false,

        }
    }

    componentDidMount() {
        this.populatePersonasData();
    }

    async populatePersonasData() {
        console.log("📡 Fetching personas from API...");
        fetch("api/Personas/GetAll")
            .then((response) => response.json())
            .then((data) => {
                console.log("✅ Personas loaded:", data);
                this.setState({ personas: data, loading: false });
            })
            .catch((error) => {
                console.error("❌ Error fetching personas:", error);
                this.setState({ loading: false });
            });
    }

    deletePersona = async (id) => {
        const confirm = window.confirm("¿Estás seguro de que deseas eliminar esta persona?");
        if (!confirm) return;

        try {
            const response = await fetch(`/api/Personas/DeletePersona/${id}`, {
                method: "DELETE"
            });

            if (response.ok) {
                alert("✔️ Persona eliminada exitosamente");
                this.loadPersonas(); // Vuelve a cargar la lista
            } else {
                alert("❌ No se pudo eliminar la persona.");
            }
        } catch (error) {
            console.error("🚨 Error al eliminar persona:", error);
            alert("❌ Error de conexión.");
        }
    };


    editPersona = (id) => {
        this.props.history.push(`/edit/${id}`);
    };

    loadPersonas = async () => {
        const response = await fetch("/api/Personas/GetAll");
        const data = await response.json();
        this.setState({ personas: data });
    };

    renderPersonasTable(personas) {
        return (
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Nombres</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Email</th>
                            <th style={{ minWidth: '130px' }}>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personas.map((p) => (
                            <tr key={p.id}>
                                <td>{p.nombres}</td>
                                <td>{p.apellidoPaterno}</td>
                                <td>{p.apellidoMaterno}</td>
                                <td>{p.email}</td>
                                <td className="text-nowrap">
                                    <button
                                        className="btn btn-sm btn-primary mr-2"
                                        onClick={() => this.editPersona(p.id)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => this.deletePersona(p.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {

        const { loading, personas } = this.state;

        return (
            <div>
                <h1>Personas</h1>
                <p>Listado de personas registradas.</p>
                {loading ? (
                    <p><em>Loading...</em></p>
                ) : (
                    this.renderPersonasTable(personas)
                )}
            </div>
        );
    }
}
