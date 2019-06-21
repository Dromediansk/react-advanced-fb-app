import React from 'react'
import { ThemeConsumer } from '../../../blocks/ThemeContext';
import { connect } from "react-redux";

function Pokemons({ fetchPokemons, loading, pokemons }) {
    return (
        <ThemeConsumer>
            {theme => {
                return (
                    <section className="content pokemons">
                        <div>
                            <button onClick={fetchPokemons}>Fetch more</button>
                            <div>
                                {pokemons.map((pokemon, index) => {
                                    return <div key={index}>{`${index}. ${pokemon.name} ${pokemon.weight} hectograms`}</div>
                                })}
                            </div>
                            {loading && 'loading...'}
                        </div>
                    </section>
                )
            }}
        </ThemeConsumer>
    )
}

const mapState = state => ({
    loading: state.loading.effects.login.submit,
    pokemons: state.pokemons.results
})

const mapDispatch = dispatch => ({
    fetchPokemons: () => dispatch.pokemons.fetchPokemons()
});

export default connect(
    mapState,
    mapDispatch
)(Pokemons);
