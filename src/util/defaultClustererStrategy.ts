import { around } from 'geokdbush';
import { Cluster, ClusterStrategyResult, Clusterable } from '../types';
import { xy2d } from './xy2d';

const ZOOM_TABLE: number[] = [
    Infinity,
    5000,
    1000,
    500,
    200,
    100,
    50,
    25,
    20,
    10,
    5,
    2,
    1.1,
    0.5,
    0.2,
    0.1,
    0.05,
    0.025,
    0.02,
    0.01,
    0.005,
    0.001,
];

export const defaultClustererStrategy = <T>(
    map: google.maps.Map,
    tree: KDBush<T>,
    getId: (item: T) => string,
    getPosition: (item: T) => google.maps.LatLngLiteral
): ClusterStrategyResult<T> => {
    const items = tree.points;
    const clusters: Cluster[] = [];
    const clusterables: Clusterable<T>[] = new Array(items.length);

    const bounds = map.getBounds();
    const zoom = map.getZoom();

    if (bounds && zoom) {
        const distance = ZOOM_TABLE[zoom];
        const added: Record<string, true> = {};

        for (let i = 0, il = items.length; i < il; i++) {
            const item = items[i];
            const itemId = getId(item);
            const position = getPosition(item);
            const isVisible = bounds.contains(position);

            // Skip if item already belongs to a cluster
            if (!added[itemId]) {
                const candidates = around(
                    tree,
                    position.lng,
                    position.lat,
                    Infinity,
                    distance
                );

                // candidates will include the item itself, so we check for > 1
                if (candidates.length > 1) {
                    const clusterBounds = new google.maps.LatLngBounds();
                    const clusterIds: string[] = [];

                    for (let j = 0, jl = candidates.length; j < jl; j++) {
                        const candidate = candidates[j];
                        const candidateId = getId(candidate);
                        // Skip if candidate already belongs to a cluster
                        if (added[candidateId]) continue;
                        const candidatePosition = getPosition(candidate);
                        // Extend clusterBounds by the candidates position
                        clusterBounds.extend(candidatePosition);
                        // Add id to cluster
                        clusterIds.push(candidateId);
                    }

                    if (clusterIds.length > 1) {
                        // Mark ids as added to a cluster
                        for (let k = 0, kl = clusterIds.length; k < kl; k++) {
                            added[clusterIds[k]] = true;
                        }
                        const clusterPosition = clusterBounds.getCenter();
                        clusters.push({
                            id: xy2d(
                                clusterPosition.lat(),
                                clusterPosition.lng()
                            ),
                            ids: clusterIds,
                            isVisible: bounds.contains(clusterPosition),
                            position: clusterPosition.toJSON(),
                            bounds: clusterBounds.toJSON(),
                        });
                    }
                }
            }

            // At this point we know if the item will be part of a cluster or not
            clusterables[i] = {
                isVisible,
                isClustered: !!added[itemId],
                position,
                item: item,
            };
        }
    }

    return {
        clusters,
        items: clusterables,
    };
};
