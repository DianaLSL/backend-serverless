/*// PASO 1:  importar las dependencias o paquetes a utilizar
const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const cors = require("cors");
const datos = require("./productos.json");

// PASO 1.1: definir constantes y datos iniciales
let productos = datos.productos;

// PASO 2: Generas una aplicacion de express
const app = express();

// PASO3: se define una sub aplicacion de express con sus respectivas rutas.
const router = express.Router();
router.get("/", (req, res) => res.send({ "hola": "hola" }));
router.get("/productos", (req, res) => res.send(productos));

// -- Inicia Ejemplo
// app
//    1. router
//        1.1  /   ---- > /.netlify/functions/server
//        1.2 /productos ---- > /.netlify/functions/server/productos
//    2. /
// app.get("/") ----> 2
// -- Fin ejemplo

// PASO 4: incluye funcionalidades que express no trae por defecto
app.use(cors());
app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda

// PASO 5: exportarmos la aplicacion
module.exports = app;
// PASO 6: exporta el servidor express en funcion
module.exports.handler = serverless(app);

*/

/// PASO 1:  importar las dependencias o paquetes a utilizar
const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

let pokemons = [
  { name: "pikachu",
    price: 100,
    description: "Electric Pokemon",
    image:  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fschool-daze%2Fimages%2F4%2F4c%2FPikachu-PNG-HD.png%2Frevision%2Flatest%3Fcb%3D20171110150156&imgrefurl=https%3A%2F%2Fschool-daze.fandom.com%2Fwiki%2FAsh%2527s_Pikachu&tbnid=cML9TRKYpi44OM&vet=12ahUKEwjFmJ_xr7byAhXCoK0KHRkaCa0QMygIegUIARDpAQ..i&docid=_C3o70htNYBoLM&w=1600&h=1436&q=pikachu&ved=2ahUKEwjFmJ_xr7byAhXCoK0KHRkaCa0QMygIegUIARDpAQ"},
  { name: "bulbasur",
    price: 200,
    description: "Aquatic Pokemon",
    image: "https://www.google.com/imgres?imgurl=https%3A%2F%2F3dprintingindustry.com%2Fwp-content%2Fuploads%2F2014%2F08%2F1.png&imgrefurl=https%3A%2F%2F3dprintingindustry.com%2Fnews%2Fpokemon-bulbasaur-look-alike-planter-model-removed-shapeways-copyright-violation-31589%2F&tbnid=zK2JPJQd5C80oM&vet=12ahUKEwjZwOmCsLbyAhVRUKwKHY7nCd4QMygFegUIARDcAQ..i&docid=Ipqke9dbfTQtjM&w=1000&h=998&q=bulbasaur%20pokemon&ved=2ahUKEwjZwOmCsLbyAhVRUKwKHY7nCd4QMygFegUIARDcAQ" },
  { name: "charizard",
    price: 300,
    description: "Fire Pokemon",
    image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fiso33private%2Fimages%2F9%2F95%2FCharizard.png%2Frevision%2Flatest%3Fcb%3D20170727171344&imgrefurl=https%3A%2F%2Fiso33private.fandom.com%2Fwiki%2FCharizard&tbnid=bsl0veLBUhWroM&vet=12ahUKEwiL7bKWsLbyAhUCTa0KHScWB6QQMygEegUIARDbAQ..i&docid=HmqhWJYELM0E-M&w=785&h=768&q=charizard%20pokemon&ved=2ahUKEwiL7bKWsLbyAhUCTa0KHScWB6QQMygEegUIARDbAQ" },
  { name: "ditto", 
    price: 50,
    description: "Polymorphic Pokemon",
    image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.republicworld.com%2Frepublic-prod%2Fstories%2Fpromolarge%2Fxhdpi%2F5annhnv9ublhkmtl_1621239605.jpeg&imgrefurl=https%3A%2F%2Fwww.republicworld.com%2Ftechnology-news%2Fgaming%2Fhow-to-evolve-ditto-in-pokemon-go-here-is-the-pokemon-go-ditto-guide.html&tbnid=hpLuqRqWKspZZM&vet=12ahUKEwiipbersLbyAhVRDq0KHfq-BqQQMygMegUIARDuAQ..i&docid=ET0ikyTbSOZekM&w=768&h=439&q=ditto%20pokemon&ved=2ahUKEwiipbersLbyAhVRDq0KHfq-BqQQMygMegUIARDuAQ" },
];

// PASO 2: Generas una aplicacion de express
const app = express();

// PASO3: se define una sub aplicacion de express con sus respectivas rutas.
const router = express.Router();
router.get("/", (req, res) => res.send({ hola: "hola" }));
router.get("/pokemon", (req, res) => res.send(pokemons));

// PASO 4: incluye funcionalidades que express no trae por defecto
app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda

// PASO 5: exportarmos la aplicacion
module.exports = app;
// PASO 6: exporta el servidor express en funcion
module.exports.handler = serverless(app);
