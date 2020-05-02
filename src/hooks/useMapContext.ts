import { MapContext } from '../context';
import { useContext } from 'react';
export const useMapContext = () => {
    const map = useContext(MapContext);
    if (!map) {
        throw new Error('`useMap` must be used within a `MapContext.Provider`');
    }
    return map;
};
