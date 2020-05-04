import React, { useState, useEffect } from 'react';
import { GOOGLE_MAPS_KEY } from '../key';
import { useMap, GoogleMap, InfoWindow, Marker } from '../../../src';

const duesseldorf = {
    lat: 51.22172,
    lng: 6.77616,
};

const friedrichstadt = {
    lat: 51.21392,
    lng: 6.78069,
};

const mainStation = {
    lat: 51.218658,
    lng: 6.793311,
};

const altstadt = {
    lat: 51.2266046,
    lng: 6.7710508,
};

export const Example = () => {
    const map = useMap(GOOGLE_MAPS_KEY, { pooling: true });
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <GoogleMap zoom={14} center={duesseldorf} map={map}>
            <Marker position={duesseldorf} onClick={() => setIsOpen(!isOpen)} />
            <InfoWindow position={friedrichstadt} open>
                <strong>Current time: </strong> {time.toLocaleTimeString()}
            </InfoWindow>
            <InfoWindow maxWidth={150} position={mainStation} open>
                <strong>Click the marker</strong> to open another InfoWindow
            </InfoWindow>
            <InfoWindow
                maxWidth={150}
                position={altstadt}
                open={isOpen}
                onCloseClick={() => setIsOpen(false)}
            >
                <strong>Oh yeah!</strong>
            </InfoWindow>
        </GoogleMap>
    );
};
