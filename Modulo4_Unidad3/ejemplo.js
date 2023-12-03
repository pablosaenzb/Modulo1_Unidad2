const moment = require('moment');
moment.locale('es'); // Invoco cualidad de moment. en este caso apra cambiar lenguaje a español       

console.log ('Naci ' + moment("20111031", "YYYYMMDD").fromNow());