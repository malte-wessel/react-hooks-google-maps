import { useRef, useCallback, useEffect } from 'react';

export const useIsMounted = () => {
    const mountedRef = useRef<boolean>(false);
    const getIsMounted = useCallback(() => mountedRef.current, []);
    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    });
    return getIsMounted;
};
