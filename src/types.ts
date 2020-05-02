export type PaneName =
    | 'mapPane'
    | 'overlayLayer'
    | 'markerLayer'
    | 'overlayMouseTarget'
    | 'floatPane';

export interface Cluster {
    ids: string[];
    position: google.maps.LatLngLiteral;
    bounds: google.maps.LatLngBoundsLiteral;
}

export interface Clusterable<T> {
    isVisible: boolean;
    position: google.maps.LatLngLiteral;
    item: T;
}

export interface ClusterStrategyResult<T> {
    clusters: Cluster[];
    items: Clusterable<T>[];
}

export type ClusterStrategy<T> = (
    map: google.maps.Map,
    tree: KDBush<T>,
    getId: (item: T) => string,
    getPosition: (item: T) => google.maps.LatLngLiteral
) => ClusterStrategyResult<T>;

export interface UseClustererOptions<T> {
    getId: (item: T) => string;
    getPosition: (item: T) => google.maps.LatLngLiteral;
    strategy?: ClusterStrategy<T>;
}
