import React, { FC } from 'react';
import { GOOGLE_MAPS_KEY } from '../key';
import { useMap, GoogleMap, Circle } from '../../../src';

const duesseldorf = {
    lat: 51.22172,
    lng: 6.77616,
};

const App: FC = () => {
    const map = useMap(GOOGLE_MAPS_KEY, { pooling: true });
    return (
        <GoogleMap zoom={13} center={duesseldorf} map={map}>
            <Circle
                center={duesseldorf}
                radius={1000}
                strokeColor="#FF0000"
                strokeOpacity={0.8}
                strokeWeight={2}
                fillColor="#FF0000"
                fillOpacity={0.35}
            />
        </GoogleMap>
    );
};

export default App;
