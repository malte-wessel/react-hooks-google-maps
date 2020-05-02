import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGoogleMapsEvent = <T extends (...args: any[]) => void>(
    map: google.maps.Map | null,
    eventName: string,
    handler?: T
): void => {
    useEffect(() => {
        if (!map || !handler) return;
        const listener = google.maps.event.addListener(map, eventName, handler);
        return (): void => google.maps.event.removeListener(listener);
    }, [map, handler, eventName]);
};
