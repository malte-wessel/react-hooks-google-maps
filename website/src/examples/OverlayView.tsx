import React, { FC } from 'react';
import { GOOGLE_MAPS_KEY } from '../key';
import { useMap, GoogleMap, OverlayView } from '../../../src';
import { CustomMarker } from '../components/CustomMarker';

const duesseldorf = {
    lat: 51.22172,
    lng: 6.77616,
};

const App: FC = () => {
    const map = useMap(GOOGLE_MAPS_KEY, { pooling: true });
    return (
        <GoogleMap zoom={13} center={duesseldorf} map={map}>
            <OverlayView paneName="floatPane" position={duesseldorf}>
                <CustomMarker>A nice city at the rhine</CustomMarker>
            </OverlayView>
        </GoogleMap>
    );
};

export default App;
