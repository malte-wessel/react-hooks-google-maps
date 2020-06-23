import { FC, useMemo, useEffect } from 'react';
import { useMapContext } from '../hooks/useMapContext';
import { useGoogleMapsEvent } from '../hooks/useGoogleMapsEvent';
import { useCurrent } from '../hooks/useCurrent';

export interface CircleProps extends Omit<google.maps.CircleOptions, 'map'> {
    /**
     * * This event is fired when the circle's center is changed.
     */
    onCenterChanged?: () => void;
    /**
     * This event is fired when the DOM click event is fired on the circle.
     */
    onClick?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the DOM dblclick event is fired on the circle.
     */
    onDoubleClick?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is repeatedly fired while the user drags the circle.
     */
    onDrag?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the user stops dragging the circle.
     */
    onDragEnd?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the user starts dragging the circle.
     */
    onDragStart?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the DOM mousedown event is fired on the circle.
     */
    onMouseDown?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the DOM mousemove event is fired on the circle.
     */
    onMouseMove?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired on circle mouseout.
     */
    onMouseOut?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired on circle mouseover.
     */
    onMouseOver?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the DOM mouseup event is fired on the circle.
     */
    onMouseUp?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the circle's radius is changed.
     */
    onRadiusChanged?: () => void;
    /**
     * This event is fired for a rightclick on the circle.
     */
    onRightClick?: () => void;
    /**
     * This event is fired when the circle is attached to the map.
     */
    onLoad?: (circle: google.maps.Circle) => void;
    /**
     * This event is fired when the circle is attached to the map.
     */
    onUnmount?: (circle: google.maps.Circle) => void;
}

const Circle: FC<CircleProps> = (props) => {
    const map = useMapContext();
    const {
        // Circle properties
        center,
        clickable,
        draggable,
        editable,
        fillColor,
        fillOpacity,
        radius,
        strokeColor,
        strokeOpacity,
        strokePosition,
        strokeWeight,
        visible,
        zIndex,
        // Circle events
        onCenterChanged,
        onClick,
        onDoubleClick,
        onDrag,
        onDragEnd,
        onDragStart,
        onMouseDown,
        onMouseMove,
        onMouseOut,
        onMouseOver,
        onMouseUp,
        onRadiusChanged,
        onRightClick,
        // Component properties
        onLoad,
        onUnmount,
    } = props;

    const circle = useMemo(
        () =>
            new google.maps.Circle({
                center,
                clickable,
                draggable,
                editable,
                fillColor,
                fillOpacity,
                radius,
                strokeColor,
                strokeOpacity,
                strokePosition,
                strokeWeight,
                visible,
                zIndex,
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const onLoadRef = useCurrent(onLoad);
    const onUnmountRef = useCurrent(onUnmount);

    useEffect(() => {
        if (!map) return;
        circle.setMap(map);
        return () => {
            circle.setMap(null);
        };
    }, [map, circle]);

    useEffect(() => {
        if (!map || !onLoadRef.current) return;
        onLoadRef.current(circle);
        return () => {
            if (onUnmountRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                onUnmountRef.current(circle);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map]);

    useEffect(() => {
        if (!center) return;
        circle.setCenter(center);
    }, [circle, center]);

    useEffect(() => {
        if (draggable === undefined) return;
        circle.setDraggable(draggable);
    }, [circle, draggable]);

    useEffect(() => {
        if (editable === undefined) return;
        circle.setEditable(editable);
    }, [circle, editable]);

    useEffect(() => {
        if (!draggable) return;
        circle.setDraggable(draggable);
    }, [circle, draggable]);

    useEffect(() => {
        if (visible === undefined) return;
        circle.setVisible(visible);
    }, [circle, visible]);

    useGoogleMapsEvent(circle, 'center_changed', onCenterChanged);
    useGoogleMapsEvent(circle, 'click', onClick);
    useGoogleMapsEvent(circle, 'dblclick', onDoubleClick);
    useGoogleMapsEvent(circle, 'drag', onDrag);
    useGoogleMapsEvent(circle, 'dragend', onDragEnd);
    useGoogleMapsEvent(circle, 'dragstart', onDragStart);
    useGoogleMapsEvent(circle, 'mousedown', onMouseDown);
    useGoogleMapsEvent(circle, 'mousemove', onMouseMove);
    useGoogleMapsEvent(circle, 'mouseout', onMouseOut);
    useGoogleMapsEvent(circle, 'mouseover', onMouseOver);
    useGoogleMapsEvent(circle, 'mouseup', onMouseUp);
    useGoogleMapsEvent(circle, 'radius_changed', onRadiusChanged);
    useGoogleMapsEvent(circle, 'rightclick', onRightClick);

    return null;
};

export default Circle;
