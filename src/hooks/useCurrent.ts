import { useRef, useEffect } from 'react';

export const useCurrent = <T>(value: T) => {
    const ref = useRef(value);
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref;
};
