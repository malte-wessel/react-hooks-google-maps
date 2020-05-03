import React, {
    useEffect,
    forwardRef,
    ReactNode,
    useState,
    useMemo,
} from 'react';
import { createPortal } from 'react-dom';
import { useMapContext } from '../hooks/useMapContext';
import { PaneName } from '../types';
import { createOverlayView } from '../util/createOverlayView';

export interface OverlayViewProps {
    position: google.maps.LatLngLiteral;
    paneName: PaneName;
    children?: ReactNode;
}

const OverlayView = forwardRef<HTMLDivElement, OverlayViewProps>(
    ({ position, paneName, children }, ref) => {
        const map = useMapContext();

        // Create a container for the OverlayView instance
        const container = useMemo(() => {
            const div = document.createElement('div');
            div.style.position = 'absolute';
            return div;
        }, []);

        // Create the OverlayView instance
        const overlay = useMemo(
            () => createOverlayView(container, paneName, position),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            []
        );

        // Notify component when overlay is drawn first and considered
        // to be ready
        const [isReady, setIsReady] = useState(false);
        useEffect(() => overlay.onReady(() => setIsReady(true)), [overlay]);

        // Call draw when position changes
        useEffect(() => {
            overlay.setPosition(position);
            overlay.draw();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [overlay, position.lat, position.lng]);

        // Call draw when paneName changes
        useEffect(() => {
            overlay.setPaneName(paneName);
            overlay.draw();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [overlay, position.lat, position.lng]);

        // Attach overlay to map
        useEffect(() => {
            overlay.setMap(map);
            return (): void => overlay.setMap(null);
        }, [map, overlay]);

        // Render children into the container, when ready
        return createPortal(
            <div ref={ref}>{isReady && children}</div>,
            container
        );
    }
);

export default OverlayView;
