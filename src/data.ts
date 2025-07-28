export interface User {
  id: number;
  name: string;
  currentLocation: string;
  image: string;
  positions: {
    start: {
      lat: number;
      lng: number;
    };
    end: {
      lat: number;
      lng: number;
    };
  };
}

export const users: User[] = [
  {
    id: 1,
    name: 'Leandro Gilardi',
    positions: {
      start: { lat: -35.9805679, lng: -62.7395852 }, // Buenos Aires
      end: { lat: -38.7225427, lng: -62.2926083 }, // Buenos Aires
    },
    currentLocation: 'Argentina',
    image:
      'https://media.licdn.com/dms/image/v2/C4E03AQFXugz-iHBNGg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1570923563828?e=1756339200&v=beta&t=A_nNWJJvexuk0twc0Lk6yUGwH8YW2-7tdICP18V0hnY',
  },
  {
    id: 2,
    name: 'Julio Garcia',
    positions: {
      start: { lat: 10.4776972, lng: -66.5576408 },
      end: { lat: -33.4679938, lng: -70.6290294 },
    },
    currentLocation: 'Chile',
    image:
      'https://media.licdn.com/dms/image/v2/D4E03AQEqc9s7rZolag/profile-displayphoto-crop_800_800/B4EZgu3_1fHIAI-/0/1753133088742?e=1756339200&v=beta&t=Wt6J7K6VjIx1y0EoW05O5ftSWKbYjmDuJxAVNue1sDw',
  },
  {
    id: 3,
    name: 'Carlos Morales',
    positions: {
      start: { lat: -12.1522094, lng: -77.0066812 }, // Lima
      end: { lat: -12.1518602, lng: -77.0113312 }, // Lima
    },
    currentLocation: 'Perú',
    image:
      'https://media.licdn.com/dms/image/v2/D4E03AQFSzpYmB09xKg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728169306386?e=1756339200&v=beta&t=D9GVbcGGe2KTXKPuqD6_76KoOFIovkpht8p6HjW-NN4',
  },
  {
    id: 4,
    name: 'Jesus Rojas',
    positions: {
      start: { lat: 10.1114046, lng: -64.6636344 },
      end: { lat: -34.9205082, lng: -57.9531703 },
    },
    currentLocation: 'Argentina',
    image:
      'https://media.licdn.com/dms/image/v2/C4D03AQGk_ECU8033Iw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1657025775711?e=1756339200&v=beta&t=QUwd-cbThq4hSDogxrsZmL60aRzTP2pu09s70UZNe3k',
  },
  {
    id: 5,
    name: 'Jesus Africano',
    positions: {
      start: { lat: 10.6453067, lng: -63.2527614 },
      end: { lat: -34.6158238, lng: -58.4332985 },
    },
    currentLocation: 'Argentina',
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQHni-iTvF76Uw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704917204020?e=1756339200&v=beta&t=egKhxpfLzIE6JR1HkqxoRho_sWKbY7BYAXdxuGoDRQY',
  },
  {
    id: 6,
    name: 'Carlos Pisarello',
    positions: {
      start: { lat: -26.7059274, lng: -60.9435806 },
      end: { lat: -31.3992803, lng: -64.2766132 },
    },
    currentLocation: 'Argentina',
    image:
      'https://media.licdn.com/dms/image/v2/C5603AQF0vaUf5d70zA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517835350539?e=1756339200&v=beta&t=s6ReMLZxZTJgyLmuJWXYH_5oTRCWuI3G79avK37WaKw',
  },
];
