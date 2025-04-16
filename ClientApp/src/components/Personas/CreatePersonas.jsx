import React, { Component } from "react";

export class CreatePersona extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombres: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            email: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async handleSubmit(e) {
        e.preventDefault();

        const response = await fetch("api/Personas/AddPersona", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state),
        });

        if (response.ok) {
            alert("Persona creada con éxito");
            this.setState({
                nombres: "",
                apellidoPaterno: "",
                apellidoMaterno: "",
                email: "",
            });
        } else {
            alert("Error al crear persona");
        }
    }

    render() {
        return (
            <div>
                <h2>Crear Persona</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nombres:</label>
                        <input type="text" className="form-control" name="nombres" value={this.state.nombres} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Apellido Paterno:</label>
                        <input type="text" className="form-control" name="apellidoPaterno" value={this.state.apellidoPaterno} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Apellido Materno:</label>
                        <input type="text" className="form-control" name="apellidoMaterno" value={this.state.apellidoMaterno} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        );
    }
}