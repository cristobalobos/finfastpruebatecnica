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
                direccion: '',
                telefono: '',
                observaciones: ''
            },
            loading: true
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`/api/Personas/GetPersonaById/${id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ persona: data, loading: false });
            })
            .catch(error => {
                console.error("❌ Error fetching persona:", error);
            });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            persona: {
                ...prevState.persona,
                [name]: value
            }
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { persona } = this.state;

        fetch(`/api/Personas/UpdatePersona/${persona.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(persona)
        })
            .then(response => {
                if (response.ok) {
                    alert("✅ Persona updated successfully");
                    this.props.history.push("/personas");
                } else {
                    alert("⚠️ Error updating persona");
                }
            })
            .catch(error => console.error("❌ Error:", error));
    }

    render() {
        const { persona, loading } = this.state;

        if (loading) return <p>Loading...</p>;

        return (
            <div>
                <h2>Edit Persona</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nombres</label>
                        <input type="text" name="nombres" className="form-control" value={persona.nombres} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Apellido Paterno</label>
                        <input type="text" name="apellidoPaterno" className="form-control" value={persona.apellidoPaterno} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Apellido Materno</label>
                        <input type="text" name="apellidoMaterno" className="form-control" value={persona.apellidoMaterno} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" value={persona.email} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Dirección</label>
                        <input type="text" name="direccion" className="form-control" value={persona.direccion} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        );
    }
}


