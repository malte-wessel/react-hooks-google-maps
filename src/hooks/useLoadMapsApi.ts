import { useState, useEffect, useRef } from 'react';
import { useIsMounted } from './useIsMounted';

const initiCallbackName = 'googleMapsInitCallback';
const initCallbacks: Function[] = [];
let isMapsApiLoading = false;
let isMapsApiLoaded = false;

if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)[initiCallbackName] = (): void => {
        isMapsApiLoaded = true;
        initCallbacks.forEach((callback) => callback());
    };
}

const getMapsApiSource = (apiKey: string): string =>
    `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${initiCallbackName}`;

const createMapsApiScript = (apiKey: string): HTMLScriptElement => {
    const script = document.createElement('script');
    script.src = getMapsApiSource(apiKey);
    script.async = true;
    script.defer = true;
    return script;
};

const loadMapsApi = (apiKey: string): Promise<void> =>
    new Promise((resolve) => {
        if (isMapsApiLoaded) return resolve();
        initCallbacks.push(resolve);
        if (!isMapsApiLoading) {
            isMapsApiLoading = true;
            const script = createMapsApiScript(apiKey);
            document.body.appendChild(script);
        }
    });

export const useLoadMapsApi = (apiKey: string): boolean => {
    const [isLoaded, setIsLoaded] = useState(isMapsApiLoaded);
    const isMounted = useIsMounted();
    useEffect(() => {
        if (isMapsApiLoaded) return;
        loadMapsApi(apiKey).then(() => {
            if (!isMounted()) return;
            setIsLoaded(true);
        });
    }, [apiKey, isMounted]);
    return isLoaded;
};
