import { useState, useEffect } from 'react';
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

const getMapsApiSource = (apiKey: string, libraries?: string[]): string =>
    `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${initiCallbackName}${
        libraries && libraries.length ? `&libraries=${libraries.join(',')}` : ''
    }`;

const createMapsApiScript = (
    apiKey: string,
    libraries?: string[]
): HTMLScriptElement => {
    const script = document.createElement('script');
    script.src = getMapsApiSource(apiKey, libraries);
    script.async = true;
    script.defer = true;
    return script;
};

const loadMapsApi = (apiKey: string, libraries?: string[]): Promise<void> =>
    new Promise((resolve) => {
        if (isMapsApiLoaded) return resolve();
        initCallbacks.push(resolve);
        if (!isMapsApiLoading) {
            isMapsApiLoading = true;
            const script = createMapsApiScript(apiKey, libraries);
            document.body.appendChild(script);
        }
    });

export const useLoadMapsApi = (
    apiKey: string,
    libraries: string[] = []
): boolean => {
    const [isLoaded, setIsLoaded] = useState(isMapsApiLoaded);
    const isMounted = useIsMounted();
    useEffect(() => {
        if (isMapsApiLoaded) return;
        loadMapsApi(apiKey, libraries).then(() => {
            if (!isMounted()) return;
            setIsLoaded(true);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiKey, isMounted, JSON.stringify(libraries)]);
    return isLoaded;
};
