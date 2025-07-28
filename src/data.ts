export interface User {
  id: number;
  name: string;
  currentLocation: string;
  image: string;
  strokeColor: string;
  positions: {
    start: {
      lat: number;
      lng: number;
      label?: string;
    };
    end: {
      lat: number;
      lng: number;
      label?: string;
    };
  };
}

export const users: User[] = [
  {
    id: 1,
    name: 'Leandro Gilardi',
    positions: {
      start: { lat: -35.9805679, lng: -62.7395852, label: 'Trenque Lauquen' },
      end: { lat: -38.7225427, lng: -62.2926083, label: 'Bahía Blanca' },
    },
    currentLocation: 'Argentina',
    image: '/images/lean.jpeg',
    strokeColor: '#FF0000',
  },
  {
    id: 2,
    name: 'Julio Garcia',
    positions: {
      start: { lat: 10.4776972, lng: -66.5576408, label: 'Caracas - Guatire' },
      end: { lat: -33.4679938, lng: -70.6290294, label: 'Santiago de Chile' },
    },
    currentLocation: 'Chile',
    image: '/images/julio.jpeg',
    strokeColor: '#00FF00',
  },
  {
    id: 3,
    name: 'Carlos Morales',
    positions: {
      start: { lat: -12.1522094, lng: -77.0066812, label: 'Lima - Surco' },
      end: { lat: -12.1518602, lng: -77.0113312, label: 'Lima - Surco' },
    },
    currentLocation: 'Perú',
    image: '/images/josue.jpeg',
    strokeColor: '#0000FF',
  },
  {
    id: 4,
    name: 'Jesus Rojas',
    positions: {
      start: { lat: 10.1114046, lng: -64.6636344, label: 'Barcelona' },
      end: { lat: -34.9205082, lng: -57.9531703, label: 'La Plata' },
    },
    currentLocation: 'Argentina',
    image: '/images/rojas.jpeg',
    strokeColor: '#FFFF00',
  },
  {
    id: 5,
    name: 'Jesus Africano',
    positions: {
      start: { lat: 10.6453067, lng: -63.2527614, label: 'Sucre - Carúpano' },
      end: { lat: -34.6158238, lng: -58.4332985, label: 'Buenos Aires' },
    },
    currentLocation: 'Argentina',
    image: '/images/africano.jpeg',
    strokeColor: '#FF00FF',
  },
  {
    id: 6,
    name: 'Carlos Pisarello',
    positions: {
      start: {
        lat: -27.4606615,
        lng: -58.9953453,
        label: 'Chaco - Resistencia',
      },
      end: { lat: -31.3994532, lng: -64.1942124, label: 'Córdoba' },
    },
    currentLocation: 'Argentina',
    image: '/images/carlos.jpeg',
    strokeColor: '#00FFFF',
  },
];
