import React, { useEffect } from 'react';
import { GOOGLE_MAPS_KEY } from '../key';
import { useMap, GoogleMap, OverlayView, useClusterer } from '../../../src';
import { CustomMarker } from '../components/CustomMarker';
import { Cluster } from '../components/Cluster';
import { cities } from '../data/cities';

const clustererOptions = {
    getId: (city) => String(city.id),
    getPosition: (city) => city.position,
};

export const Clustering = () => {
    const map = useMap(GOOGLE_MAPS_KEY, { pooling: true });
    const { clusters, items } = useClusterer(map, cities, clustererOptions);
    useEffect(() => {
        if (!map) return;
        const bounds = cities.reduce(
            (bounds, item) => bounds.extend(item.position),
            new google.maps.LatLngBounds()
        );
        map.fitBounds(bounds);
    }, [map]);
    return (
        <GoogleMap zoom={2} map={map}>
            {items.map(
                ({ item, position, isVisible, isClustered }) =>
                    isVisible &&
                    !isClustered && (
                        <OverlayView
                            paneName="floatPane"
                            position={position}
                            key={item.id}
                        >
                            <CustomMarker />
                        </OverlayView>
                    )
            )}
            {clusters.map(
                ({ position, ids, isVisible }, idx) =>
                    isVisible && (
                        <OverlayView
                            paneName="floatPane"
                            position={position}
                            key={idx}
                        >
                            <Cluster>{ids.length}</Cluster>
                        </OverlayView>
                    )
            )}
        </GoogleMap>
    );
};
