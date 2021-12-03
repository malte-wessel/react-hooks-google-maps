import { useMemo, useEffect } from 'react';
import { useLoadMapsApi } from './useLoadMapsApi';

const pool: google.maps.Map[] = [];

const getInstance = (options?: google.maps.MapOptions, pooling?: boolean) => {
    if (typeof document === 'undefined') {
        return null;
    }
    if (pooling) {
        const map = pool.pop();
        if (map) {
            map.setOptions(options || {});
            return map;
        }
    }
    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    return new google.maps.Map(container, options);
};

const allocateInstance = (map: google.maps.Map) => {
    pool.push(map);
};

export interface UseMapOptions extends google.maps.MapOptions {
    pooling?: boolean;
    libraries?: string[];
}

export const useMap = (apiKey: string, options: UseMapOptions = {}) => {
    const { pooling, libraries, ...googleMapOptions } = options;
    const isReady = useLoadMapsApi(apiKey, libraries);
    const map = useMemo(() => {
        if (!isReady) return null;
        return getInstance(googleMapOptions, pooling);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReady]);

    useEffect(() => {
        if (!map || !pooling) return;
        return () => allocateInstance(map);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map]);

    return map;
};
