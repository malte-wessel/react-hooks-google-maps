import { useMemo, useState, useCallback, useEffect } from 'react';
import KDBush from 'kdbush';

import { defaultClustererStrategy } from '../util/defaultClustererStrategy';
import { Cluster, Clusterable, UseClustererOptions } from '../types';
import { useGoogleMapsEvent } from './useGoogleMapsEvent';
import { useCurrent } from './useCurrent';

export interface UseClustererState<T> {
    clusters: Cluster[];
    clusterables: Clusterable<T>[];
}

export const useClusterer = <T>(
    map: google.maps.Map | null,
    items: T[],
    options: UseClustererOptions<T>
) => {
    const [state, setState] = useState<UseClustererState<T>>({
        clusters: [],
        clusterables: [],
    });
    const optionsRef = useCurrent(options);
    const tree = useMemo(() => {
        const { getPosition } = optionsRef.current;
        return new KDBush<T>(
            items,
            (item) => getPosition(item).lng,
            (item) => getPosition(item).lat
        );
    }, [items, optionsRef]);

    // Runs clustering algorithm and updates state
    const update = useCallback(() => {
        if (!map) return;
        const {
            getId,
            getPosition,
            strategy = defaultClustererStrategy,
        } = optionsRef.current;
        const result = strategy(map, tree, getId, getPosition);
        setState({
            clusters: result.clusters,
            clusterables: result.items,
        });
    }, [map, tree, optionsRef]);

    useEffect(() => {
        update();
    }, [update]);

    // update when map zoom changed
    const handleMapChange = useCallback(() => update(), [update]);
    useGoogleMapsEvent(map, 'zoom_changed', handleMapChange);
    useGoogleMapsEvent(map, 'idle', handleMapChange);

    return {
        items: state.clusterables,
        clusters: state.clusters,
    };
};
