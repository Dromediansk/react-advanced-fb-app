import React from 'react'
import { ThemeConsumer } from '../../../blocks/ThemeContext';
import { connect } from "react-redux";

function Pokemons({ fetchPokemons, loading, pokemons }) {
    return (
        <ThemeConsumer>
            {theme => {
                return (
                    <section className="content pokemons">
                        <h1>Pokemons</h1>

                        <div>
                            <button onClick={fetchPokemons} disabled={loading}>Fetch more</button>
                            <div>
                                {pokemons.map((pokemon, index) => {
                                    return <div key={index}>{`${index}. ${pokemon.name} ${pokemon.weight} hectograms`}</div>
                                })}
                            </div>
                            {loading && <div>loading...</div>}
                        </div>
                    </section>
                )
            }}
        </ThemeConsumer>
    )
}

const mapState = state => ({
    loading: state.loading.effects.pokemons.fetchPokemons,
    pokemons: state.pokemons.results
})

const mapDispatch = dispatch => ({
    fetchPokemons: () => dispatch.pokemons.fetchPokemons()
});

export default connect(
    mapState,
    mapDispatch
)(Pokemons);
