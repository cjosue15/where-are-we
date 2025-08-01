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
  {
    id: 7,
    name: 'Martin Collazo',
    positions: {
      start: { lat: -34.676741, lng: -58.382979, label: 'Buenos Aires' },
      end: { lat: -34.632755, lng: -58.3671581, label: 'Lima - Surco' },
    },
    currentLocation: 'Argentina',
    image: '/images/martin.jpeg',
    strokeColor: '#800080',
  },
  {
    id: 8,
    name: 'Aly Zuniaga',
    positions: {
      start: { lat: 10.468687, lng: -67.0551773, label: 'Caracas' },
      end: { lat: -34.6151444, lng: -58.7451261, label: 'Buenos Aires' },
    },
    currentLocation: 'Argentina',
    image: '/images/aly.jpeg',
    strokeColor: '#808080',
  },
  {
    id: 9,
    name: 'Diego Sanchez',
    positions: {
      start: { lat: 10.2052649, lng: -71.2560973, label: 'Maracaibo' },
      end: { lat: 45.0702306, lng: 7.5876887, label: 'Torino' },
    },
    currentLocation: 'Italia',
    image: '/images/diego.jpeg',
    strokeColor: '#C0C0C0',
  },
  {
    id: 10,
    name: 'Tadeo Koloszwa',
    positions: {
      start: {
        lat: -33.0816216,
        lng: -68.4746909,
        label: 'San Martin - Mendoza',
      },
      end: {
        lat: -32.9028019,
        lng: -68.8150001,
        label: 'Guaymallén - Mendoza',
      },
    },
    currentLocation: 'Argentina',
    image: '/images/tadeo.jpeg',
    strokeColor: '#FF4500',
  },
  {
    id: 11,
    name: 'Dariel Chirino',
    positions: {
      start: { lat: 23.0500951, lng: -82.9568956, label: 'La Habana - Cuba' },
      end: { lat: -34.6151444, lng: -58.7451261, label: 'Buenos Aires' },
    },
    currentLocation: 'Argentina',
    image: '/images/dariel.jpeg',
    strokeColor: '#008000',
  },
  {
    id: 12,
    name: 'Joel Rojas',
    positions: {
      start: {
        lat: 10.3484402,
        lng: -67.0623926,
        label: 'Los Teques - Venezuela',
      },
      end: { lat: -34.6151444, lng: -58.7451261, label: 'Buenos Aires' },
    },
    currentLocation: 'Argentina',
    image: '/images/joel.jpeg',
    strokeColor: '#800000',
  },
  {
    id: 13,
    name: 'Keiler Mora',
    positions: {
      start: { lat: 10.468687, lng: -67.0551773, label: 'Caracas' },
      end: { lat: -33.4706523, lng: -71.2536739, label: 'Santiago de Chile' },
    },
    currentLocation: 'Chile',
    image: '/images/keiler.jpeg',
    strokeColor: '#008080',
  },
  {
    id: 14,
    name: 'Isaac Zimberg',
    positions: {
      start: { lat: 32.9652978, lng: -117.0378771, label: 'Poway, CA' },
      end: { lat: 37.2322937, lng: -121.992509, label: 'Los Gatos, CA' },
    },
    currentLocation: 'United States',
    image: '/images/isaac.jpeg',
    strokeColor: '#FFA500',
  },
];
