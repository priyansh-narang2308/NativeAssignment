import { useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { persistor } from '../store/store';

export const useAppStatePersistence = () => {
    const appState = useRef(AppState.currentState);

    useEffect(() => {
        const subsc = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
            if (
                appState.current === 'active' &&
                nextAppState.match(/inactive|background/)
            ) {
                console.log('App going to background, flushing state...');
                persistor.flush();
            }

            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === 'active'
            ) {
                console.log('App returned to statte');
            }

            appState.current = nextAppState;
        });

        return () => {
            subsc.remove();
        };
    }, []);
};
