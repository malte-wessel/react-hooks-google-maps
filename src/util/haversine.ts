const R = 6378137;
const PI_360 = Math.PI / 360;

export const haversine = (
    a: google.maps.LatLngLiteral,
    b: google.maps.LatLngLiteral
): number => {
    const cLat = Math.cos((a.lat + b.lat) * PI_360);
    const dLat = (b.lat - a.lat) * PI_360;
    const dLng = (b.lng - a.lng) * PI_360;
    const f = dLat * dLat + cLat * cLat * dLng * dLng;
    const c = 2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f));
    return R * c;
};
