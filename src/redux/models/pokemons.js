import axios from 'axios';

const LIMIT = 20;

const initState = {
    results: [],
    pagination: {
        limit: LIMIT,
        offset: 0
    }
}

const pokemons = {
    state: initState,

    reducers: {
        appendPokemons(state, payload) {
            return {
                results: [...state.results, ...payload],
                pagination: {
                    ...state.pagination,
                    offset: state.pagination.offset + state.pagination.limit
                }
            }
        }
    },

    effects: {
        async fetchPokemons(_, rootState) {

            const { limit, offset } = rootState.pokemons.pagination

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

            const promises = response.data.results.map(pokemon => {
                return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            });

            const promisesResolved = await Promise.all(promises)

            const pokemonWithDetails = promisesResolved.map(promiseResolved => promiseResolved.data)

            this.appendPokemons(pokemonWithDetails);
        }
    }
}

export default pokemons;