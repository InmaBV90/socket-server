import Server from "./clases/server";
import router from "./routes/router";
import bodyParser from "body-parser";
import cors from "cors";


const server = new Server();


// Configuracion BodyParser antes de la configuracion de las rutas porque ahi ya lo estaremos utilizando
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// Configuracion de CORS
server.app.use( cors({ origin: true, credentials: true }) );


// Rutas de servicios
server.app.use('/', router);



server.start( () => {
    console.log(`Servidor en marcha en el puerto ${ server.port }`);
});