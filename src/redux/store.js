import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist"
import { createLogger } from "redux-logger"
import rpm from "redux-promise-middleware"
// import storage from "redux-persist/lib/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './reducers'

// redux persist config start
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ["auth", "userData"]
}

const persistedReducer = persistReducer(persistConfig, reducers)

// redux-logger middleware
const logger = createLogger();
const middlewares = applyMiddleware(rpm, logger)

export let store = createStore(persistedReducer, middlewares)
export let persistor = persistStore(store)