import { PaneName } from '../types';

export interface GoogleMapsOverlayViewExtended extends google.maps.OverlayView {
    onReady: (callback: () => void) => () => void;
    setPosition: (position: google.maps.LatLngLiteral) => void;
    setPaneName: (paneName: PaneName) => void;
}

// We need to wrap the class creation into a factory function
// since at script evaluation time the google maps api is not available
export const createOverlayView = (
    container: HTMLElement,
    paneName: PaneName,
    position: google.maps.LatLngLiteral
): GoogleMapsOverlayViewExtended => {
    class OverlayView extends google.maps.OverlayView {
        container: HTMLElement;
        paneName: PaneName;
        position: google.maps.LatLngLiteral;
        isReady: boolean;
        onReadyCallback?: () => void;
        constructor(
            container: HTMLElement,
            paneName: PaneName,
            position: google.maps.LatLngLiteral
        ) {
            super();
            this.container = container;
            this.paneName = paneName;
            this.position = position;
            this.isReady = false;
        }
        onAdd() {
            const panes = this.getPanes();
            const pane = panes[this.paneName];
            pane.appendChild(this.container);
        }
        draw() {
            const projection = this.getProjection();
            if (!projection) return;
            const position = this.position;
            const container = this.container;

            const { x, y } = projection.fromLatLngToDivPixel(
                new google.maps.LatLng(position.lat, position.lng)
            );
            container.style.transform = `translate(${x}px, ${y}px)`;

            const panes = this.getPanes();
            const pane = panes[this.paneName];
            if (!pane.contains(container)) {
                pane.appendChild(container);
            }

            if (!this.isReady) {
                this.isReady = true;
                if (this.onReadyCallback) {
                    this.onReadyCallback();
                    this.onReadyCallback = undefined;
                }
            }
        }
        onRemove() {
            const container = this.container;
            if (!container.parentNode) return;
            container.parentNode.removeChild(container);
        }
        onReady(callback: () => void) {
            this.onReadyCallback = callback;
            return () => (this.onReadyCallback = undefined);
        }
        setPosition(position: google.maps.LatLngLiteral) {
            this.position = position;
        }
        setPaneName(paneName: PaneName) {
            this.paneName = paneName;
        }
    }
    return new OverlayView(container, paneName, position);
};
