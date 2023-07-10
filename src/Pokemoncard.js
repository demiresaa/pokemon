import React, { Component } from "react";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/ca5a7886c10753144e6fae3b69d45a4d42a449b4/sprites/pokemon";

class Pokemoncard extends Component {
  render() {
    let imgSrc = `${POKE_API}/${this.props.id}.png`;

    return (
      <div className=" Pokecard">
        <h1 className="PokecardTitle">{this.props.name}</h1>
        <div className="PokecardImage">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="PokemoncardData"> Type :{this.props.type}</div>
        <div className="PokemoncardData">Exp :{this.props.exp}</div>
      </div>
    );
  }
}
export default Pokemoncard;
