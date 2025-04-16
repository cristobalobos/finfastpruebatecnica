import React, { Component } from "react";

export class PersonasList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trips: [],
            loading: false
        }
    }

    renderPersonasTable(personas) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>RUT</th>
                        <th>Accionesss</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map(p => (
                        <tr key={p.id}>
                            <td>{p.nombres}</td>
                            <td>{p.apellidoPaterno}</td>
                            <td>{p.apellidoMaterno}</td>
                            <td>{`${p.runCuerpo}-${p.runDigito}`}</td>
                            <td>-</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }


    render() {

        let content = this.state.loading ? (
            <p>
                <p><em>Loading...</em></p>
            </p>
        ) : (
            this.renderPersonasTable(this.state.trips)
        )

        return (
            <div>
                <h1>Personas</h1>
                <p>Listado de todas las personas registradas</p>
                {content}
            </div>
        );
    }
}