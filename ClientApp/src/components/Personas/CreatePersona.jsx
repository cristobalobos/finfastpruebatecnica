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
            comunas: [],
            regionesLoading: true,
        };
    }

    componentDidMount() {
        this.fetchRegiones();
        // Simulación de fetchs reales
        this.setState({
            ciudades: [{ codigo: 1, nombre: "Ciudad 1" }],
            comunas: [{ codigo: 1, nombre: "Comuna 1" }]
        });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    fetchRegiones = async () => {
        fetch("/api/Ubicacion/GetAllRegiones")
            .then(response => response.json())
            .then(data => {
                this.setState({ regiones: data, regionesLoading: false });
            })
            .catch(error => {
                console.error("❌ Error al cargar regiones:", error);
                this.setState({ regionesLoading: false });
            });
    };

    handleRegionChange = (e) => {
        const regionCodigo = e.target.value;

        this.setState({
            regionCodigo
        });

        console.log("🌍 Región seleccionada:", regionCodigo);
    };


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
            regionCodigo: parseInt(this.state.regionCodigo),
            /*ciudadCodigo: parseInt(this.state.ciudadCodigo),
            comunaCodigo: parseInt(this.state.comunaCodigo),*/
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
            this.props.history.push("/personas"); // 🔁 Redireccionar al listado

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
                        <div className="form-row">
                            <div className="col-md-9 mb-2">
                                <input type="number" className="form-control" name="runCuerpo" placeholder="11111111" value={this.state.runCuerpo} onChange={this.handleChange} required />
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" name="runDigito" placeholder="1" value={this.state.runDigito} onChange={this.handleChange} maxLength={1} required />
                            </div>
                        </div>
                    </div>

                    {/* Nombre */}
                    <div className="form-group">
                        <label>Nombre:</label>
                        <div className="form-row">
                            <div className="col-md-4 mb-2">
                                <input type="text" className="form-control" name="nombres" placeholder="Nombres" value={this.state.nombres} onChange={this.handleChange} required />
                            </div>
                            <div className="col-md-4 mb-2">
                                <input type="text" className="form-control" name="apellidoPaterno" placeholder="Apellido paterno" value={this.state.apellidoPaterno} onChange={this.handleChange} required />
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" name="apellidoMaterno" placeholder="Apellido materno" value={this.state.apellidoMaterno} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" name="email" placeholder="correo@correo.cl" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    {/* Sexo */}
                    <div className="form-group">
                        <label>Sexo:</label>
                        <div className="form-check form-check-inline ml-2">
                            <input className="form-check-input" type="radio" name="sexoCodigo" value="2" checked={this.state.sexoCodigo === "2"} onChange={this.handleChange} />
                            <label className="form-check-label">Femenino</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="sexoCodigo" value="1" checked={this.state.sexoCodigo === "1"} onChange={this.handleChange} />
                            <label className="form-check-label">Masculino</label>
                        </div>
                    </div>

                    {/* Fecha nacimiento */}
                    <div className="form-group">
                        <label>Fecha nacimiento:</label>
                        <input type="date" className="form-control" name="fechaNacimiento" value={this.state.fechaNacimiento} onChange={this.handleChange} />
                    </div>

                    {/* Región / Ciudad / Comuna */}
                    <div className="form-row">

                        {/* Región */}
                        <div className="form-group">
                            <label>Región:</label>
                            <select
                                name="regionCodigo"
                                className="form-control"
                                value={this.state.regionCodigo}
                                onChange={this.handleRegionChange}
                                disabled={this.state.regionesLoading} // opcional: desactiva el combo mientras carga
                            >
                                {this.state.regionesLoading ? (
                                    <option>Cargando regiones...</option>
                                ) : (
                                    <>
                                        <option value="">Seleccione</option>
                                        {this.state.regiones.map(r => (
                                            <option key={r.codigo} value={r.codigo}>
                                                {r.nombre}
                                            </option>
                                        ))}
                                    </>
                                )}
                            </select>
                        </div>

                        <div className="form-group col-md-4">
                            <label>Ciudad:</label>
                            <select name="ciudadCodigo" className="form-control" onChange={this.handleChange}>
                                <option value="">Seleccione</option>
                                {this.state.ciudades.map(c => (
                                    <option key={c.codigo} value={c.codigo}>{c.nombre}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Comuna:</label>
                            <select name="comunaCodigo" className="form-control" onChange={this.handleChange}>
                                <option value="">Seleccione</option>
                                {this.state.comunas.map(c => (
                                    <option key={c.codigo} value={c.codigo}>{c.nombre}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Dirección y Teléfono */}
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label>Dirección:</label>
                            <input type="text" className="form-control" name="direccion" placeholder="Dirección" value={this.state.direccion} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Teléfono:</label>
                            <input type="tel" className="form-control" name="telefono" placeholder="+56999999999" value={this.state.telefono} onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* Observaciones */}
                    <div className="form-group">
                        <label>Observaciones:</label>
                        <textarea className="form-control" name="observaciones" placeholder="Observaciones" value={this.state.observaciones} onChange={this.handleChange}></textarea>
                    </div>

                    {/* Botones */}
                    <div className="form-group d-flex justify-content-between">
                        <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>Volver</button>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>

        );
    }
}
