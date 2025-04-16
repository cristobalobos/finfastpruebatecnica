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

    renderPersonasTable(personas) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Email</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map((p) => (
                        <tr key={p.id}>
                            <td>{p.nombres}</td>
                            <td>{p.apellidoPaterno}</td>
                            <td>{p.apellidoMaterno}</td>
                            <td>{p.email}</td>
                            <div className="form-group">
                                <td>

                                    <button onClick={() => this.onTripUpdate(personas.id)} className="btn btn-success">
                                        Update
                                    </button>

                                </td>
                                <td>
                                    <button onClick={() => this.onTripDelete(personas.id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
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