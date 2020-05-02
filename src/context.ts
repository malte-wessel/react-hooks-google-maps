import { createContext } from 'react';

export const MapContext = createContext<google.maps.Map | undefined>(undefined);
