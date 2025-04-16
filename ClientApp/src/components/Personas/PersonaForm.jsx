
import React, { Component } from "react";

class PersonaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persona: {
        runCuerpo: '',
        runDigito: '',
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
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
      regionesLoading: true,
      comunasLoading: false
    };
  }

  componentDidMount() {
    this.fetchRegiones();
  }

  fetchRegiones = async () => {
    try {
      const res = await fetch("/api/Ubicacion/GetAllRegiones");
      const data = await res.json();
      this.setState({ regiones: data, regionesLoading: false });
    } catch (err) {
      console.error("❌ Error al cargar regiones:", err);
    }
  };

  fetchCiudadesByRegion = async (regionCodigo) => {
    try {
      const res = await fetch(`/api/Ubicacion/GetCiudadesByRegion/${regionCodigo}`);
      const data = await res.json();
      this.setState(prev => ({
        ciudades: data,
        comunas: [],
        persona: { ...prev.persona, ciudadCodigo: '', comunaCodigo: '' }
      }));
    } catch (err) {
      console.error("❌ Error al cargar ciudades:", err);
    }
  };

  fetchComunas = async (regionCodigo, ciudadCodigo) => {
    this.setState({ comunasLoading: true });
    try {
      const res = await fetch(`/api/Ubicacion/GetComunasByRegionAndCiudad/${regionCodigo}/${ciudadCodigo}`);
      const data = await res.json();
      this.setState({ comunas: data, comunasLoading: false });
    } catch (err) {
      console.error("❌ Error al cargar comunas:", err);
      this.setState({ comunasLoading: false });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prev => ({
      persona: {
        ...prev.persona,
        [name]: value
      }
    }));
  };

  handleRegionChange = (e) => {
    const regionCodigo = e.target.value;
    this.setState(prev => ({
      persona: { ...prev.persona, regionCodigo, ciudadCodigo: '', comunaCodigo: '' },
      ciudades: [],
      comunas: []
    }), () => {
      this.fetchCiudadesByRegion(regionCodigo);
    });
  };

  handleCiudadChange = (e) => {
    const ciudadCodigo = e.target.value;
    this.setState(prev => ({
      persona: { ...prev.persona, ciudadCodigo, comunaCodigo: '' },
      comunas: []
    }), () => {
      this.fetchComunas(this.state.persona.regionCodigo, ciudadCodigo);
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      runCuerpo,
      runDigito,
      nombres,
      apellidoPaterno,
      apellidoMaterno,
      email,
      sexoCodigo,
      fechaNacimiento,
      regionCodigo,
      ciudadCodigo,
      comunaCodigo,
      direccion,
      telefono,
      observaciones
    } = this.state.persona;

    const parsedData = {
      runCuerpo: parseInt(runCuerpo),
      runDigito,
      nombres,
      apellidoPaterno,
      apellidoMaterno,
      email,
      sexoCodigo: parseInt(sexoCodigo),
      fechaNacimiento,
      regionCodigo: parseInt(regionCodigo),
      ciudadCodigo: parseInt(ciudadCodigo),
      comunaCodigo: parseInt(comunaCodigo),
      direccion,
      telefono: telefono ? parseInt(telefono) : null,
      observaciones
    };

    this.props.onSubmit(parsedData);
  };

  render() {
    const { persona, regiones, ciudades, comunas, regionesLoading, comunasLoading } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>R.U.N.:</label>
          <div className="form-row">
            <div className="col-md-9 mb-2">
              <input type="number" name="runCuerpo" className="form-control" placeholder="11111111" value={persona.runCuerpo} onChange={this.handleChange} required />
            </div>
            <div className="col-md-3">
              <input type="text" name="runDigito" className="form-control" placeholder="1" value={persona.runDigito} onChange={this.handleChange} maxLength={1} required />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Nombres:</label>
          <input type="text" name="nombres" className="form-control" value={persona.nombres} onChange={this.handleChange} required />
        </div>

        <div className="form-group">
          <label>Apellido Paterno:</label>
          <input type="text" name="apellidoPaterno" className="form-control" value={persona.apellidoPaterno} onChange={this.handleChange} required />
        </div>

        <div className="form-group">
          <label>Apellido Materno:</label>
          <input type="text" name="apellidoMaterno" className="form-control" value={persona.apellidoMaterno} onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" className="form-control" value={persona.email} onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label>Sexo:</label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="sexoCodigo" value="2" checked={persona.sexoCodigo === "2"} onChange={this.handleChange} />
            <label className="form-check-label">Femenino</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="sexoCodigo" value="1" checked={persona.sexoCodigo === "1"} onChange={this.handleChange} />
            <label className="form-check-label">Masculino</label>
          </div>
        </div>

        <div className="form-group">
          <label>Fecha Nacimiento:</label>
          <input type="date" name="fechaNacimiento" className="form-control" value={persona.fechaNacimiento} onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label>Región:</label>
          <select name="regionCodigo" className="form-control" value={persona.regionCodigo} onChange={this.handleRegionChange} disabled={regionesLoading}>
            {regionesLoading ? (
              <option>Cargando regiones...</option>
            ) : (
              <>
                <option value="">Seleccione</option>
                {regiones.map(r => (
                  <option key={r.codigo} value={r.codigo}>{r.nombre}</option>
                ))}
              </>
            )}
          </select>
        </div>

        <div className="form-group">
          <label>Ciudad:</label>
          <select name="ciudadCodigo" className="form-control" value={persona.ciudadCodigo} onChange={this.handleCiudadChange}>
            <option value="">Seleccione</option>
            {ciudades.map(c => (
              <option key={c.codigo} value={c.codigo}>{c.nombre}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Comuna:</label>
          <select name="comunaCodigo" className="form-control" value={persona.comunaCodigo} onChange={this.handleChange} disabled={comunasLoading}>
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

        <div className="form-group">
          <label>Dirección:</label>
          <input type="text" name="direccion" className="form-control" value={persona.direccion} onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label>Teléfono:</label>
          <input type="tel" name="telefono" className="form-control" value={persona.telefono} onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label>Observaciones:</label>
          <textarea name="observaciones" className="form-control" value={persona.observaciones} onChange={this.handleChange}></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    );
  }
}

export default PersonaForm;
