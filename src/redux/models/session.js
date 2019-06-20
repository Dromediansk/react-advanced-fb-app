const session = {
    state: {
        user: null
    },
    reducers: {
        // function for setting user to state
        setUser(state, payload) {
            return {
                user: payload
            }
        }
    },
    effects: {
        async facebookLogin(payload) {
            this.setUser(payload);
        }
    }
}

export default session;