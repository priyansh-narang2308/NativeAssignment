import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export const configurePersistence = (
    key: string, //for storaing
    reducer: any,//persisting reducer
    whitelist?: string[],
    blacklist?: string[]
) => {
    const persistConfig = {
        key,
        storage: AsyncStorage,
        whitelist,
        blacklist,
    };

    return persistReducer(persistConfig, reducer);
};
