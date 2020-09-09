import React, { Component } from "react";
import { render } from "react-dom";
import img from "./79.jpg";
// import img from './avatar.png';
import "./assets/sass/main.scss";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello world !!!",
      pokemons: [],
    };
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=5`).then((res) => {
      const pokemons = res.data.results;
      return pokemons;
    }).then((pokemons) => {
      pokemons.map((pokemon) =>
        axios.get(pokemon.url).then((res) => {
          const poke = res.data;
          let artwork = "official-artwork";
          const img = poke.sprites.other[artwork].front_default;
          const pokeId = poke.id
          pokemon.img = img;
          pokemon.id = pokeId;
          this.setState({ pokemons })
        })
      )}
    );
  }

  handleDisplayPokemon() {
    if (document.querySelector('.ul').style.display === 'none') {
      console.log('hidden');
      console.log(true);
      document.querySelector('.ul').style.display = 'none'
      document.querySelector('.load').innerHTML = "Charger les pokemons";
    }
    
    document.querySelector('.load').innerHTML = "Masquer les pokemons";
    document.querySelector('.ul').style.display = 'flex'
  }

  // Comportement
  handleMessage() {
    if (this.state.message === "Hello world !!!") {
      return this.setState({ message: "Bonjour le monde !" });
    }

    return this.setState({ message: "Hello world !!!" });
  }

  render() {
    let { message, pokemons } = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <img src={img} className="portrait" />
        <div className="flex">
          <button onClick={this.handleMessage.bind(this)}>
            Changer de message
          </button>
          <button onClick={this.handleDisplayPokemon.bind(this)} className="load">
            Charger des pokemons
          </button>
        </div>
        <ul className="ul">
          {pokemons.map((pokemon) => (
            <li key={pokemon.id} className="card">
              <p className="text-center">
                id : {pokemon.id}
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </p>
              <p>url : {pokemon.url}</p>
              <div className="image">
                <img src={pokemon.img} className="pokemon-image" />
              </div>
            </li>
          ))}
           
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
