/* Fundamentos */


/* Codigo sincronico vs asinncronico */


/* Promesas */

function obtenerDatosDeAPI() {
    return new Promise((resolve, reject) => {
      fetch('https://api.ejemplo.com/data')
        .then(response => {
          if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  // Llamamos a la función que retorna una promesa para obtener datos de la API
  obtenerDatosDeAPI()
    .then(data => {
      console.log('Datos obtenidos:', data);
    })
    .catch(error => {
      console.error('Error al obtener datos:', error);
    });

    
/* Async-Await */

async function obtenerDatosDeAPI() {
    try {
      const response = await fetch('https://api.ejemplo.com/data');
  
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  // Llamamos a la función async para obtener datos de la API
  (async () => {
    try {
      const data = await obtenerDatosDeAPI();
      console.log('Datos obtenidos:', data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  })();
  