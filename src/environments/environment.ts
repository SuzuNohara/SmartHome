// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

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

  cocinaFunctions: [{name: 'Comida', route: 'cocina/comida', icon: 'fast-food-outline'},
  {name: 'Recetas', route: 'cocina/recetas', icon: 'book-outline'},
  {name: 'Historial', route: 'cocina/historial', icon: 'time-outline'},
  {name: 'Lista de cocina', route: 'cocina/lista', icon: 'list-outline'}],

  dbConnection: {
    name: 'smarthome.db',
    location: 'smarthome',
    key: '9q3ndmj930w398pw'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
