import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { PersonasList } from "./components/Personas/PersonasList";
import { CreatePersona } from "./components/Personas/CreatePersona";
import { UpdatePersona } from "./components/Personas/UpdatePersona";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={PersonasList} />
        <Route path="/personas" component={PersonasList} />
        <Route path="/create" component={CreatePersona} />
        <Route path="/edit/:id" component={UpdatePersona} />
      </Layout>
    );
  }
}
