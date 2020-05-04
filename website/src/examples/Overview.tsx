import React from 'react';
import { GOOGLE_MAPS_KEY } from '../key';
import { useMap, GoogleMap } from '../../../src';

const duesseldorf = {
    lat: 51.22172,
    lng: 6.77616,
};

export const Overview = () => {
    const map = useMap(GOOGLE_MAPS_KEY);
    return <GoogleMap zoom={13} center={duesseldorf} map={map} />;
};
