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
        const container = useMemo(() => {
            const div = document.createElement('div');
            div.style.position = 'absolute';
            return div;
        }, []);
        const overlay = useMemo(
            () => createOverlayView(container, paneName, position),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            []
        );
        const [isReady, setIsReady] = useState(false);
        useEffect(() => overlay.onReady(() => setIsReady(true)), [overlay]);

        // Call draw when position changes
        useEffect(() => {
            overlay.setPosition(position);
            overlay.draw();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [overlay, position.lat, position.lng]);

        useEffect(() => {
            overlay.setMap(map);
            return (): void => overlay.setMap(null);
        }, [map, overlay]);

        return createPortal(
            <div ref={ref}>{isReady && children}</div>,
            container
        );
    }
);

export default OverlayView;
