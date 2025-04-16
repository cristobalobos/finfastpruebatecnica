import React, { Component } from "react";

export class CreatePersona extends Component {
    constructor(props) {
        super(props);
        this.state = {
            runCuerpo: "",
            runDigito: "",
            nombres: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            email: "",
            sexoCodigo: "",
            fechaNacimiento: "",
            regionCodigo: "",
            ciudadCodigo: "",
            comunaCodigo: "",
            direccion: "",
            telefono: "",
            observaciones: "",
            // listas para dropdowns
            regiones: [],
            ciudades: [],
            comunas: []
        };
    }

    componentDidMount() {
        // Simulación de fetchs reales
        this.setState({
            regiones: [{ codigo: 1, nombre: "Región 1" }],
            ciudades: [{ codigo: 1, nombre: "Ciudad 1" }],
            comunas: [{ codigo: 1, nombre: "Comuna 1" }]
        });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            runCuerpo: parseInt(this.state.runCuerpo),
            runDigito: this.state.runDigito,
            nombres: this.state.nombres,
            apellidoPaterno: this.state.apellidoPaterno,
            apellidoMaterno: this.state.apellidoMaterno,
            email: this.state.email,
            sexoCodigo: parseInt(this.state.sexoCodigo),
            fechaNacimiento: this.state.fechaNacimiento,
            /*regionCodigo: parseInt(this.state.regionCodigo),
            ciudadCodigo: parseInt(this.state.ciudadCodigo),
            comunaCodigo: parseInt(this.state.comunaCodigo),*/
            regionCodigo: 1,
            ciudadCodigo: 1,
            comunaCodigo: 1,
            direccion: this.state.direccion,
            telefono: parseInt(this.state.telefono),
            observaciones: this.state.observaciones
        };

        const response = await fetch("/api/Personas/AddPersona", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("Persona creada exitosamente");
        } else {
            alert("Error al crear persona");
        }
    }

    render() {
        return (
            <div className="container mt-4">
                <h2>Crear Persona</h2>
                <form onSubmit={this.handleSubmit}>
                    {/* RUN */}
                    <div className="form-group">
                        <label>R.U.N.:</label>
                        <div className="d-flex">
                            <input type="number" className="form-control" name="runCuerpo" placeholder="11111111" value={this.state.runCuerpo} onChange={this.handleChange} required />
                            <input type="text" className="form-control w-25 ml-2" name="runDigito" placeholder="1" value={this.state.runDigito} onChange={this.handleChange} maxLength={1} required />
                        </div>
                    </div>

                    {/* Nombre */}
                    <div className="form-group">
                        <label>Nombre:</label>
                        <div className="d-flex">
                            <input type="text" className="form-control" name="nombres" placeholder="Nombres" value={this.state.nombres} onChange={this.handleChange} required />
                            <input type="text" className="form-control ml-2" name="apellidoPaterno" placeholder="Apellido paterno" value={this.state.apellidoPaterno} onChange={this.handleChange} required />
                            <input type="text" className="form-control ml-2" name="apellidoMaterno" placeholder="Apellido materno" value={this.state.apellidoMaterno} onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" name="email" placeholder="correo@correo.cl" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    {/* Sexo */}
                    <div className="form-group">
                        <label>Sexo:</label><br />
                        <div>
                            <label className="mr-3">
                                <input type="radio" name="sexoCodigo" value="2" checked={this.state.sexoCodigo === "2"} onChange={this.handleChange} /> Femenino
                            </label>
                            <label>
                                <input type="radio" name="sexoCodigo" value="1" checked={this.state.sexoCodigo === "1"} onChange={this.handleChange} /> Masculino
                            </label>
                        </div>
                    </div>

                    {/* Fecha nacimiento */}
                    <div className="form-group">
                        <label>Fecha nacimiento:</label>
                        <input type="date" className="form-control" name="fechaNacimiento" value={this.state.fechaNacimiento} onChange={this.handleChange} />
                    </div>

                    {/* Región / Ciudad / Comuna */}
                    <div className="form-group">
                        <label>Región:</label>
                        <select name="regionCodigo" className="form-control" onChange={this.handleChange}>
                            <option value="">Seleccione</option>
                            {this.state.regiones.map(r => (
                                <option key={r.codigo} value={r.codigo}>{r.nombre}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Ciudad:</label>
                        <select name="ciudadCodigo" className="form-control" onChange={this.handleChange}>
                            <option value="">Seleccione</option>
                            {this.state.ciudades.map(c => (
                                <option key={c.codigo} value={c.codigo}>{c.nombre}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Comuna:</label>
                        <select name="comunaCodigo" className="form-control" onChange={this.handleChange}>
                            <option value="">Seleccione</option>
                            {this.state.comunas.map(c => (
                                <option key={c.codigo} value={c.codigo}>{c.nombre}</option>
                            ))}
                        </select>
                    </div>

                    {/* Dirección y Teléfono */}
                    <div className="form-group">
                        <label>Dirección:</label>
                        <input type="text" className="form-control" name="direccion" placeholder="Dirección" value={this.state.direccion} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Teléfono:</label>
                        <input type="tel" className="form-control" name="telefono" placeholder="+56999999999" value={this.state.telefono} onChange={this.handleChange} />
                    </div>

                    {/* Observaciones */}
                    <div className="form-group">
                        <label>Observaciones:</label>
                        <textarea className="form-control" name="observaciones" placeholder="Observaciones" value={this.state.observaciones} onChange={this.handleChange}></textarea>
                    </div>

                    {/* Botones */}
                    <button type="button" className="btn btn-secondary mr-2" onClick={() => window.history.back()}>Volver</button>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        );
    }
}
