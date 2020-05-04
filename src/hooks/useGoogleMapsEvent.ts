import { useEffect } from 'react';
import { useCurrent } from './useCurrent';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGoogleMapsEvent = <T extends (...args: any[]) => void>(
    target: object | null,
    eventName: string,
    callback?: T
): void => {
    const callbackRef = useCurrent(callback);
    const hasCallback = !!callback;
    useEffect(() => {
        if (!target || !hasCallback) return;
        const handler = (...args: unknown[]) => {
            if (!callbackRef.current) return;
            callbackRef.current(...args);
        };
        const listener = google.maps.event.addListener(
            target,
            eventName,
            handler
        );
        return () => google.maps.event.removeListener(listener);
    }, [target, eventName, hasCallback, callbackRef]);
};
