export const environment = {
  production: true,

  name: 25,
  description: 50,
  
  homefuntions: [{name: 'Compras', route: 'compras', icon: 'cart-outline'},
  {name: 'Finanzas', route: 'finasnzas', icon: 'stats-chart-outline'},
  {name: 'Lavandería', route: 'lavanderia', icon: 'shirt-outline'},
  {name: 'Cocina', route: 'cocina', icon: 'restaurant-outline'},
  {name: 'Limpieza', route: 'limpieza', icon: 'trash-outline'},
  {name: 'Mascotas', route: 'mascotas', icon: 'paw-outline'},
  {name: 'Roomies', route: 'roomies', icon: 'people-outline'},
  {name: 'Calendario', route: 'Calendario', icon: 'calendar-outline'}],

  cocinaFunctions: [{name: 'Comida', route: 'cocinaComida', icon: 'fast-food-outline'},
  {name: 'Recetas', route: 'cocinaRecetas', icon: 'book-outline'},
  {name: 'Historial', route: 'cocinaHistorial', icon: 'time-outline'},
  {name: 'Lista de cocina', route: 'cocinaLista', icon: 'list-outline'}],

  dbConnection: {
    name: 'smarthome.db',
    location: 'smarthome',
    key: '9q3ndmj930w398pw'
  },
  firebaseConfig: {
    apiKey: "AIzaSyByrZwDT1FtUpvj9MXChBQxKVAPgM6e058",
    authDomain: "smarthome-284201.firebaseapp.com",
    databaseURL: "https://smarthome-284201.firebaseio.com",
    projectId: "smarthome-284201",
    storageBucket: "smarthome-284201.appspot.com",
    messagingSenderId: "49126092180",
    appId: "1:49126092180:web:2eda89cadac0999fed3381",
    measurementId: "G-T9T1N51HSM"
  }
};
