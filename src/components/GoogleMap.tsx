import React, { FC, ReactNode, useRef, useEffect, CSSProperties } from 'react';
import { MapContext } from '../context';

import { useGoogleMapsEvent } from '../hooks/useGoogleMapsEvent';

const defaultCenter = { lat: 0, lng: 0 };
const defaultZoom = 8;
const defaultStyle = { width: '100%', height: '100%' };

export interface GoogleMapProps {
    children?: ReactNode;
    style?: CSSProperties;
    map: google.maps.Map | null;
    options?: google.maps.MapOptions;
    center?: google.maps.LatLngLiteral;
    zoom?: number;

    onClick?: (e: google.maps.MouseEvent) => void;
    onDrag?: () => void;
    onDragEnd?: () => void;
    onDragStart?: () => void;
    onMapTypeIdChanged?: () => void;
    onMouseMove?: (e: google.maps.MouseEvent) => void;
    onMouseOut?: (e: google.maps.MouseEvent) => void;
    onMouseOver?: (e: google.maps.MouseEvent) => void;
    onRightClick?: (e: google.maps.MouseEvent) => void;
    onTilesLoaded?: () => void;
    onBoundsChanged?: () => void;
    onCenterChanged?: () => void;
    onHeadingChanged?: () => void;
    onIdle?: () => void;
    onProjectionChanged?: () => void;
    onResize?: () => void;
    onTiltChanged?: () => void;
    onZoomChanged?: () => void;
    onLoad?: (map: google.maps.Map) => void;
}

const GoogleMap: FC<GoogleMapProps> = ({
    children,
    map,
    center = defaultCenter,
    zoom = defaultZoom,
    style = defaultStyle,
    options,
    onClick,
    onDrag,
    onDragEnd,
    onDragStart,
    onMapTypeIdChanged,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onRightClick,
    onTilesLoaded,
    onBoundsChanged,
    onCenterChanged,
    onHeadingChanged,
    onIdle,
    onProjectionChanged,
    onResize,
    onTiltChanged,
    onZoomChanged,
    onLoad,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const { current: root } = ref;
        if (!map || !root) return;
        const container = map.getDiv();
        root.appendChild(container);
        return (): void => {
            root.removeChild(container);
        };
    }, [map]);

    // Update map when options change
    useEffect(() => {
        if (!map || !options) return;
        map.setOptions(options);
    }, [map, options]);

    // Update map when zoom changes
    useEffect(() => {
        if (!map || zoom === undefined) return;
        map.setZoom(zoom);
    }, [map, zoom]);

    // Update map when center changes
    useEffect(() => {
        if (!map || !center) return;
        map.setCenter(center);
    }, [map, center]);

    // Register google maps specific events
    useGoogleMapsEvent(map, 'click', onClick);
    useGoogleMapsEvent(map, 'drag', onDrag);
    useGoogleMapsEvent(map, 'dragend', onDragEnd);
    useGoogleMapsEvent(map, 'dragstart', onDragStart);
    useGoogleMapsEvent(map, 'maptypeid_changed', onMapTypeIdChanged);
    useGoogleMapsEvent(map, 'mousemove', onMouseMove);
    useGoogleMapsEvent(map, 'mouseout', onMouseOut);
    useGoogleMapsEvent(map, 'mouseover', onMouseOver);
    useGoogleMapsEvent(map, 'rightclick', onRightClick);
    useGoogleMapsEvent(map, 'tilesloaded', onTilesLoaded);
    useGoogleMapsEvent(map, 'bounds_changed', onBoundsChanged);
    useGoogleMapsEvent(map, 'center_changed', onCenterChanged);
    useGoogleMapsEvent(map, 'heading_changed', onHeadingChanged);
    useGoogleMapsEvent(map, 'idle', onIdle);
    useGoogleMapsEvent(map, 'projection_changed', onProjectionChanged);
    useGoogleMapsEvent(map, 'resize', onResize);
    useGoogleMapsEvent(map, 'tilt_changed', onTiltChanged);
    useGoogleMapsEvent(map, 'zoom_changed', onZoomChanged);

    // Handle `onLoad` callback
    useEffect(() => {
        if (!map || !onLoad) return;
        onLoad(map);
    }, [map, onLoad]);

    return (
        <div style={style} ref={ref}>
            {map && (
                <MapContext.Provider value={map}>
                    {children}
                </MapContext.Provider>
            )}
        </div>
    );
};

export default GoogleMap;
