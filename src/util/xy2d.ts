const GEO_PRECISION = 1e6;

export const xy2d = (lat: number, lng: number): number => {
    const x = Math.round((lat + 90.0) * GEO_PRECISION) >> 0;
    const y = Math.round((lng + 180.0) * GEO_PRECISION) >> 0;

    const max = Math.max(x, y);
    let bit = 1;
    let res = 0.0;
    while (bit <= max) {
        bit <<= 1;
    }
    bit >>= 1;
    while (bit) {
        res *= 2.0;
        if (x & bit) {
            res += 1.0;
        }
        res *= 2.0;
        if (y & bit) {
            res += 1.0;
        }
        bit >>= 1;
    }
    return res;
};
