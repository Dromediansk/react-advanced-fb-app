const initState = {
    user: null
}

const session = {
    state: initState,

    reducers: {
        // function for setting user to state
        setUser(state, payload) {
            return {
                user: payload
            }
        },
        closeSession() {
            return initState;
        }
    },

    effects: {
        async facebookLogin(payload) {
            this.setUser(payload);
        },

        async logout() {
            this.closeSession();
        }
    }
}

export default session;