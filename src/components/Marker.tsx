import { FC, useMemo, useEffect } from 'react';
import { useMapContext } from '../hooks/useMapContext';
import { useGoogleMapsEvent } from '../hooks/useGoogleMapsEvent';
import { useCurrent } from '../hooks/useCurrent';

export interface MarkerProps extends Omit<google.maps.MarkerOptions, 'map'> {
    /**
     * This event is fired when the marker's animation property changes.
     */
    onAnimationChanged?: () => void;
    /**
     * This event is fired when the marker icon was clicked.
     */
    onClick?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the marker's clickable property changes.
     */
    onClickableChanged?: () => void;
    /**
     * This event is fired when the marker's cursor property changes.
     */
    onCursorChanged?: () => void;
    /**
     * This event is fired when the marker icon was double clicked.
     */
    onDoubleClick?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is repeatedly fired while the user drags the marker.
     */
    onDrag?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the user stops dragging the marker.
     */
    onDragEnd?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the marker's draggable property changes.
     */
    onDraggableChanged?: () => void;
    /**
     * This event is fired when the user starts dragging the marker.
     */
    onDragStart?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the marker's flat property changes.
     */
    onFlatChanged?: () => void;
    /**
     * This event is fired when the marker icon property changes.
     */
    onIconChanged?: () => void;
    /**
     * This event is fired for a mousedown on the marker.
     */
    onMouseDown?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the mouse leaves the area of the marker icon.
     */
    onMouseOut?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the mouse enters the area of the marker icon.
     */
    onMouseOver?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired for a mouseup on the marker.
     */
    onMouseUp?: (event: google.maps.MouseEvent) => void;
    /**
     * This event is fired when the marker position property changes.
     */
    onPositionChanged?: () => void;
    /**
     * This event is fired for a rightclick on the marker.
     */
    onRightClick?: () => void;
    /**
     * This event is fired when the marker's shape property changes.
     */
    onShapeChanged?: () => void;
    /**
     * This event is fired when the marker title property changes.
     */
    onTitleChanged?: () => void;
    /**
     * This event is fired when the marker's visible property changes.
     */
    onVisibleChanged?: () => void;
    /**
     * This event is fired when the marker's zIndex property changes.
     */
    onZIndexChanged?: () => void;
    /**
     * This event is fired when the marker is attached to the map.
     */
    onLoad?: (marker: google.maps.Marker) => void;
    /**
     * This event is fired when the marker is attached to the map.
     */
    onUnmount?: (marker: google.maps.Marker) => void;
}

const Marker: FC<MarkerProps> = (props) => {
    const map = useMapContext();
    const {
        // Marker properties
        anchorPoint,
        animation,
        clickable,
        crossOnDrag,
        cursor,
        draggable,
        icon,
        label,
        opacity,
        optimized,
        position,
        shape,
        title,
        visible,
        zIndex,
        // Marker events
        onAnimationChanged,
        onClick,
        onClickableChanged,
        onCursorChanged,
        onDoubleClick,
        onDrag,
        onDragEnd,
        onDraggableChanged,
        onDragStart,
        onFlatChanged,
        onIconChanged,
        onMouseDown,
        onMouseOut,
        onMouseOver,
        onMouseUp,
        onPositionChanged,
        onRightClick,
        onShapeChanged,
        onTitleChanged,
        onVisibleChanged,
        onZIndexChanged,
        // Component properties
        onLoad,
        onUnmount,
    } = props;

    const marker = useMemo(
        () =>
            new google.maps.Marker({
                anchorPoint,
                animation,
                clickable,
                crossOnDrag,
                cursor,
                draggable,
                icon,
                label,
                opacity,
                optimized,
                position,
                shape,
                title,
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
        marker.setMap(map);
        return () => {
            marker.setMap(null);
        };
    }, [map, marker]);

    useEffect(() => {
        if (!map || !onLoadRef.current) return;
        onLoadRef.current(marker);
        return () => {
            if (onUnmountRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                onUnmountRef.current(marker);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map]);

    useEffect(() => {
        if (!animation) return;
        marker.setAnimation(animation);
    }, [marker, animation]);

    useEffect(() => {
        if (clickable === undefined) return;
        marker.setClickable(clickable);
    }, [marker, clickable]);

    useEffect(() => {
        if (cursor === undefined) return;
        marker.setCursor(cursor);
    }, [marker, cursor]);

    useEffect(() => {
        if (draggable === undefined) return;
        marker.setDraggable(draggable);
    }, [marker, draggable]);

    useEffect(() => {
        if (!icon) return;
        marker.setIcon(icon);
    }, [marker, icon]);

    useEffect(() => {
        if (!label) return;
        marker.setLabel(label);
    }, [marker, label]);

    useEffect(() => {
        if (!opacity) return;
        marker.setOpacity(opacity);
    }, [marker, opacity]);

    useEffect(() => {
        if (!position) return;
        marker.setPosition(position);
    }, [marker, position]);

    useEffect(() => {
        if (!shape) return;
        marker.setShape(shape);
    }, [marker, shape]);

    useEffect(() => {
        if (!title) return;
        marker.setTitle(title);
    }, [marker, title]);

    useEffect(() => {
        if (visible === undefined) return;
        marker.setVisible(visible);
    }, [marker, visible]);

    useEffect(() => {
        if (zIndex === undefined) return;
        marker.setZIndex(zIndex);
    }, [marker, zIndex]);

    useGoogleMapsEvent(marker, 'animation_changed', onAnimationChanged);
    useGoogleMapsEvent(marker, 'click', onClick);
    useGoogleMapsEvent(marker, 'clickable_changed', onClickableChanged);
    useGoogleMapsEvent(marker, 'cursor_changed', onCursorChanged);
    useGoogleMapsEvent(marker, 'dblclick', onDoubleClick);
    useGoogleMapsEvent(marker, 'drag', onDrag);
    useGoogleMapsEvent(marker, 'dragend', onDragEnd);
    useGoogleMapsEvent(marker, 'draggable_changed', onDraggableChanged);
    useGoogleMapsEvent(marker, 'dragstart', onDragStart);
    useGoogleMapsEvent(marker, 'flat_changed', onFlatChanged);
    useGoogleMapsEvent(marker, 'icon_changed', onIconChanged);
    useGoogleMapsEvent(marker, 'mousedown', onMouseDown);
    useGoogleMapsEvent(marker, 'mouseout', onMouseOut);
    useGoogleMapsEvent(marker, 'mouseover', onMouseOver);
    useGoogleMapsEvent(marker, 'mouseup', onMouseUp);
    useGoogleMapsEvent(marker, 'position_changed', onPositionChanged);
    useGoogleMapsEvent(marker, 'rightclick', onRightClick);
    useGoogleMapsEvent(marker, 'shape_changed', onShapeChanged);
    useGoogleMapsEvent(marker, 'title_changed', onTitleChanged);
    useGoogleMapsEvent(marker, 'visible_changed', onVisibleChanged);
    useGoogleMapsEvent(marker, 'zindex_changed', onZIndexChanged);

    return null;
};

export default Marker;
