import { FC, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useMapContext } from '../hooks/useMapContext';
import { useGoogleMapsEvent } from '../hooks/useGoogleMapsEvent';
import { useCurrent } from '../hooks/useCurrent';

export interface InfoWindowProps
    extends Omit<google.maps.InfoWindowOptions, 'content'> {
    /**
     * If true the InfoWindow will be shown on the map
     */
    open?: boolean;
    /**
     * This event is fired when the close button was clicked.
     */
    onCloseClick?: () => void;
    /**
     * This event is fired when the content property changes.
     */
    onContentChanged?: () => void;
    /**
     * This event is fired when the <div> containing the InfoWindow's content is attached to the DOM. You may wish to monitor this event if you are building out your info window content dynamically.
     */
    onDomReady?: () => void;
    /**
     * This event is fired when the position property changes.
     */
    onPositionChanged?: () => void;
    /**
     * This event is fired when the InfoWindow's zIndex changes.
     */
    onZIndexChanged?: () => void;
    /**
     * This event is fired when the marker is attached to the map.
     */
    onLoad?: (marker: google.maps.InfoWindow) => void;
    /**
     * This event is fired when the marker is attached to the map.
     */
    onUnmount?: (marker: google.maps.InfoWindow) => void;
}

const InfoWindow: FC<InfoWindowProps> = (props) => {
    const map = useMapContext();
    const {
        // InfoWindow properties
        disableAutoPan,
        maxWidth,
        pixelOffset,
        position,
        zIndex,
        // InfoWindow events
        onCloseClick,
        onContentChanged,
        onDomReady,
        onPositionChanged,
        onZIndexChanged,
        // Component properties
        open,
        onLoad,
        onUnmount,
        children,
    } = props;

    // Create a container to render the content in
    const container = useMemo(() => document.createElement('div'), []);

    const infoWindow = useMemo(
        () =>
            new google.maps.InfoWindow({
                disableAutoPan,
                maxWidth,
                pixelOffset,
                position,
                zIndex,
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const onLoadRef = useCurrent(onLoad);
    const onUnmountRef = useCurrent(onUnmount);

    useEffect(() => {
        if (!map) return;
        infoWindow.setContent(container);
        return () => {
            infoWindow.close();
        };
    }, [container, infoWindow, map]);

    useEffect(() => {
        if (!map || !onLoadRef.current) return;
        onLoadRef.current(infoWindow);
        return () => {
            if (onUnmountRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                onUnmountRef.current(infoWindow);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map]);

    useEffect(() => {
        if (!map) return;
        if (open) {
            infoWindow.open(map);
        } else {
            infoWindow.close();
        }
    }, [infoWindow, map, open]);

    useGoogleMapsEvent(infoWindow, 'closeclick', onCloseClick);
    useGoogleMapsEvent(infoWindow, 'content_changed', onContentChanged);
    useGoogleMapsEvent(infoWindow, 'domready', onDomReady);
    useGoogleMapsEvent(infoWindow, 'position_changed', onPositionChanged);
    useGoogleMapsEvent(infoWindow, 'zindex_changed', onZIndexChanged);

    // Render children into the container, when ready
    return createPortal(children, container);
};

export default InfoWindow;
