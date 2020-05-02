import { useMemo } from 'react';
import { useLoadMapsApi } from './useLoadMapsApi';

export const useMap = (apiKey: string, options?: google.maps.MapOptions) => {
    const isReady = useLoadMapsApi(apiKey);
    const container = useMemo(() => {
        if (typeof document === 'undefined') return null;
        const container = document.createElement('div');
        container.style.width = '100%';
        container.style.height = '100%';
        return container;
    }, []);
    const map = useMemo(() => {
        if (!isReady || !container) return null;
        return new google.maps.Map(container, options);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReady]);
    return map;
};
