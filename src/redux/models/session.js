import { THEMES } from '../../resources/strings';

const initState = {
    user: null,
    theme: THEMES.DEFAULT
}

const session = {
    state: initState,

    reducers: {
        // function for setting user to state
        setUser(state, payload) {
            return {
                ...state,
                user: payload
            }
        },

        setTheme(state, theme) {
            return {
                ...state,
                theme
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
        },

        // effect
        async changeTheme(themeName) {
            // reducer
            this.setTheme(themeName)
        }
    }
}

export default session;