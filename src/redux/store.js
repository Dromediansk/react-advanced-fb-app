import { init } from '@rematch/core';
import session from './models/session';
import createRematchPersist, { getPersistor } from '@rematch/persist';

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

const store = init(initData);

const persistor = getPersistor();

export { persistor, store };