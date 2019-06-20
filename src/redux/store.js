import { init } from '@rematch/core';
import session from './models/session';

const store = init({
    models: {
        session
    }
});

export default store;