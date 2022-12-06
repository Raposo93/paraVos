import { createStore } from 'redux';

export const store = createStore(reducer);

store.suscribe(() => console.log("cambio el estado:", store))
