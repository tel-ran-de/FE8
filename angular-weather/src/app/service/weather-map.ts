export const weatherMap = {
  voronezh: {
    coord: {
      lon: 39.17,
      lat: 51.67
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n'
      }
    ],
    base: 'stations',
    main: {
      temp: 11,
      feels_like: 6.28,
      temp_min: 11,
      temp_max: 11,
      pressure: 1009,
      humidity: 32
    },
    visibility: 10000,
    wind: {
      speed: 3,
      deg: 150
    },
    clouds: {
      all: 67
    },
    dt: 1583863813,
    sys: {
      type: 1,
      id: 9034,
      country: 'RU',
      sunrise: 1583812103,
      sunset: 1583853534
    },
    timezone: 10800,
    id: 472045,
    name: 'Voronezh',
    cod: 200
  },
  moscow: {
    coord: {
      lon: 37.62,
      lat: 55.75
    },
    weather: [
      {
        id: 701,
        main: 'Mist',
        description: 'mist',
        icon: '50n'
      }
    ],
    base: 'stations',
    main: {
      temp: 6.15,
      feels_like: 3.86,
      temp_min: 5,
      temp_max: 7.22,
      pressure: 1009,
      humidity: 100
    },
    visibility: 4000,
    wind: {
      speed: 2,
      deg: 120
    },
    clouds: {
      all: 90
    },
    dt: 1583868490,
    sys: {
      type: 1,
      id: 9029,
      country: 'RU',
      sunrise: 1583812636,
      sunset: 1583853745
    },
    timezone: 10800,
    id: 524901,
    name: 'Moscow',
    cod: 200
  }
};
