import React, { Component } from 'react';

export class UpdatePersona extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persona: {
                id: '',
                nombres: '',
                apellidoPaterno: '',
                apellidoMaterno: '',
                runCuerpo: '',
                runDigito: '',
                email: '',
                sexoCodigo: '',
                fechaNacimiento: '',
                regionCodigo: '',
                ciudadCodigo: '',
                comunaCodigo: '',
                direccion: '',
                telefono: '',
                observaciones: ''
            },
            regiones: [],
            ciudades: [],
            comunas: [],
            loading: true,
            comunasLoading: false
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        Promise.all([
            fetch("/api/Ubicacion/GetAllRegiones").then(res => res.json()),
            fetch(`/api/Personas/GetPersonaById/${id}`).then(res => res.json())
        ])
            .then(([regiones, persona]) => {
                this.setState({
                    regiones,
                    persona,
                    loading: false
                }, () => {
                    this.fetchCiudadesByRegion(persona.regionCodigo);
                    this.fetchComunas(persona.regionCodigo, persona.ciudadCodigo);
                });
            })
            .catch(error => {
                console.error("❌ Error loading data:", error);
            });
    }

    fetchCiudadesByRegion = async (regionCodigo) => {
        const res = await fetch(`/api/Ubicacion/GetCiudadesByRegion/${regionCodigo}`);
        const data = await res.json();
        this.setState({ ciudades: data });
    };

    fetchComunas = async (regionCodigo, ciudadCodigo) => {
        this.setState({ comunasLoading: true });
        const res = await fetch(`/api/Ubicacion/GetComunasByRegionAndCiudad/${regionCodigo}/${ciudadCodigo}`);
        const data = await res.json();
        this.setState({ comunas: data, comunasLoading: false });
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            persona: {
                ...prevState.persona,
                [name]: value
            }
        }));
    }

    handleRegionChange = (e) => {
        const regionCodigo = e.target.value;
        this.setState(prevState => ({
            persona: {
                ...prevState.persona,
                regionCodigo,
                ciudadCodigo: '',
                comunaCodigo: ''
            },
            ciudades: [],
            comunas: []
        }), () => {
            this.fetchCiudadesByRegion(regionCodigo);
        });
    };

    handleCiudadChange = (e) => {
        const ciudadCodigo = e.target.value;
        this.setState(prevState => ({
            persona: {
                ...prevState.persona,
                ciudadCodigo,
                comunaCodigo: ''
            },
            comunas: []
        }), () => {
            this.fetchComunas(this.state.persona.regionCodigo, ciudadCodigo);
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { persona } = this.state;

        const payload = {
            ...persona,
            regionCodigo: persona.regionCodigo ? parseInt(persona.regionCodigo) : null,
            ciudadCodigo: persona.ciudadCodigo ? parseInt(persona.ciudadCodigo) : null,
            comunaCodigo: persona.comunaCodigo ? parseInt(persona.comunaCodigo) : null
        };

        fetch(`/api/Personas/UpdatePersona/${persona.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (response.ok) {
                    alert("✅ Persona actualizada exitosamente");
                    this.props.history.push("/personas");
                } else {
                    alert("⚠️ Error al actualizar persona");
                }
            })
            .catch(error => console.error("❌ Error:", error));
    };


    render() {
        const { persona, regiones, ciudades, comunas, loading, comunasLoading } = this.state;

        if (loading) return <p>Cargando datos...</p>;

        return (
            <div className="container mt-4">
                <h2 className="mb-4">Editar Persona</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Nombres</label>
                            <input type="text" name="nombres" className="form-control" value={persona.nombres} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Apellido Paterno</label>
                            <input type="text" name="apellidoPaterno" className="form-control" value={persona.apellidoPaterno} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Apellido Materno</label>
                            <input type="text" name="apellidoMaterno" className="form-control" value={persona.apellidoMaterno} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" value={persona.email} onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-md-4">
                            <label>Región</label>
                            <select className="form-control" name="regionCodigo" value={persona.regionCodigo} onChange={this.handleRegionChange}>
                                <option value="">Seleccione</option>
                                {regiones.map(r => (
                                    <option key={r.codigo} value={r.codigo}>{r.nombre}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group col-md-4">
                            <label>Ciudad</label>
                            <select className="form-control" name="ciudadCodigo" value={persona.ciudadCodigo} onChange={this.handleCiudadChange}>
                                <option value="">Seleccione</option>
                                {ciudades.map(c => (
                                    <option key={c.codigo} value={c.codigo}>{c.nombre}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group col-md-4">
                            <label>Comuna</label>
                            <select className="form-control" name="comunaCodigo" value={persona.comunaCodigo} onChange={this.handleChange} disabled={comunasLoading}>
                                {comunasLoading ? (
                                    <option>Cargando comunas...</option>
                                ) : (
                                    <>
                                        <option value="">Seleccione</option>
                                        {comunas.map(c => (
                                            <option key={c.codigo} value={c.codigo}>{c.nombre}</option>
                                        ))}
                                    </>
                                )}
                            </select>
                        </div>

                        <div className="form-group col-12">
                            <label>Dirección</label>
                            <input type="text" name="direccion" className="form-control" value={persona.direccion} onChange={this.handleChange} />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Actualizar</button>
                </form>
            </div>
        );
    }
}
