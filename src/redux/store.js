import { init } from '@rematch/core';
import session from './models/session';
import createRematchPersist, { getPersistor } from '@rematch/persist';
import httpClient from '../services/http';

const initData = {
    models: {
        session
    },
    plugins: [
        createRematchPersist({
            whitelist: ["session"],
            version: 1,
        }),
    ]
}

if (process.env.NODE_ENV === 'development') {
    const Reactotron = require('../config/reactotron').default;
    initData.redux = {
        enhancers: [Reactotron.createEnhancer()]
    }
}

// initialization of store to the app
const store = init(initData);

const persistor = getPersistor();

httpClient.interceptors.request.use(config => {
    // const state = store.getState()
    // if (
    //     state.session.user &&
    //     state.session.user.accessToken
    // ) {
    //     config.headers.Authorization = `Bearer ${
    //         state.session.user.accessToken}`
    // }

    return config;
});

export { persistor, store };