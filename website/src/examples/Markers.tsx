import React, { FC } from 'react';
import { GOOGLE_MAPS_KEY } from '../key';
import { useMap, GoogleMap, Marker } from '../../../src';

const duesseldorf = {
    lat: 51.22172,
    lng: 6.77616,
};

export const Markers: FC = () => {
    const map = useMap(GOOGLE_MAPS_KEY);
    return (
        <GoogleMap zoom={13} center={duesseldorf} map={map}>
            <Marker position={duesseldorf} />
        </GoogleMap>
    );
};
