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



// PASO 1.1: definir constantes y datos iniciales
let productos = [
    {
      "isActive": true,
      "_id": "5fbc19a65a3f794d72471163",
      "product_name": "Awesome Granite Bacon",
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "price": 962,
      "category": "Kids",
      "brand": "Osinski - Prosacco",
      "sku": "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
      "createdAt": "2020-11-23T20:20:54.245Z",
      "updatedAt": "2020-11-23T20:20:54.245Z",
      "__v": 0,
      "image": "https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg"
    },
    {
      "isActive": true,
      "_id": "5fbc19a65a3f794d72471164",
      "product_name": "Unbranded Steel Fish",
      "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      "price": 643,
      "category": "Shoes",
      "brand": "Kuvalis Inc",
      "sku": "0b3c4d2c-2bf6-4410-80f3-890f8fe6f334",
      "createdAt": "2020-11-23T20:20:54.246Z",
      "updatedAt": "2020-11-23T20:20:54.246Z",
      "__v": 0,
      "image": "https://i.pinimg.com/originals/ee/f3/f4/eef3f4858339074c0bba500abfbf6850.jpg"
    },
    {
      "isActive": true,
      "_id": "5fbc19a65a3f794d72471165",
      "product_name": "Fantastic Steel Fish",
      "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "price": 214,
      "category": "Computers",
      "brand": "Corwin - Herzog",
      "sku": "cd03b5a9-47d3-46ad-9845-a01a2a785945",
      "createdAt": "2020-11-23T20:20:54.246Z",
      "updatedAt": "2020-11-23T20:20:54.246Z",
      "__v": 0,
      "image": "https://i.pinimg.com/originals/c5/a2/63/c5a263ec113f5844df57d1000257992d.jpg"
    },
    {
      "isActive": true,
      "_id": "5fbc19a65a3f794d72471167",
      "product_name": "Intelligent Granite Pizza",
      "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "price": 939,
      "category": "Grocery",
      "brand": "Bruen, O'Hara and Feil",
      "sku": "cb6f07e1-a9ad-4647-8ed1-d928c60a6c8f",
      "createdAt": "2020-11-23T20:20:54.246Z",
      "updatedAt": "2020-11-23T20:20:54.246Z",
      "__v": 0,
      "image": "https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/ATVPDKIKX0DER/A11EBA8L6AALBZ/B075BLK652/XOS9mvpeQuKV._UX835_TTW__.jpg"
    },
    {
      "isActive": true,
      "_id": "5fbc19a65a3f794d72471166",
      "product_name": "Small Soft Shoes",
      "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "price": 511,
      "category": "Automotive",
      "brand": "Thompson LLC",
      "sku": "7de3782a-cfc5-43f3-aca7-0eff0adf688c",
      "createdAt": "2020-11-23T20:20:54.246Z",
      "updatedAt": "2020-11-23T20:20:54.246Z",
      "__v": 0,
      "image": "https://images-na.ssl-images-amazon.com/images/I/71PAHeADLQL._AC_UY500_.jpg"
    },
    {
      "isActive": true,
      "_id": "5fbc19a65a3f794d72471168",
      "product_name": "Tasty Rubber Gloves",
      "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "price": 616,
      "category": "Automotive",
      "brand": "Franecki LLC",
      "sku": "18123dd7-196b-412a-b162-d6879c0f6580",
      "createdAt": "2020-11-23T20:20:54.246Z",
      "updatedAt": "2020-11-23T20:20:54.246Z",
      "__v": 0,
      "image": "https://images-na.ssl-images-amazon.com/images/I/61lRZu-f21L._AC_SX466_.jpg"
    },
    {
      "isActive": true,
      "_id": "5fbc19a65a3f794d72471169",
      "product_name": "Small Steel Fish",
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "price": 517,
      "category": "Toys",
      "brand": "O'Conner, Kuhic and Parisian",
      "sku": "7b07c497-9336-4db0-80fc-b6a288f27835",
      "createdAt": "2020-11-23T20:20:54.246Z",
      "updatedAt": "2020-11-23T20:20:54.246Z",
      "__v": 0,
      "image": "https://ae01.alicdn.com/kf/HTB1n_XrPFXXXXbgXFXXq6xXFXXXR/1pc-Stainless-Steel-Fish-Scales-Planing-Scales-Kitchen-Supplies-Small-Scales-Scraper-Fish-Tool.jpg"
    },
    {
      "isActive": true,
      "_id": "5fbc19a65a3f794d7247116c",
      "product_name": "Practical Cotton Fish",
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      "price": 304,
      "category": "Tools",
      "brand": "O'Connell, Kunde and Veum",
      "sku": "3301d5e5-5565-4a58-a28b-891d5ea6e4cf",
      "createdAt": "2020-11-23T20:20:54.246Z",
      "updatedAt": "2020-11-23T20:20:54.246Z",
      "__v": 0,
      "image": "https://www.cardinalhealth.com/content/dam/corp/products/professional-products/search-engine/search-curity-practical-cotton-roll-2287.jpg"
    },
    {
      "isActive": true,
      "_id": "5fbc19a65a3f794d7247116a",
      "product_name": "Practical Wooden Ball",
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "price": 252,
      "category": "Health",
      "brand": "Bradtke LLC",
      "sku": "efa3b464-82cc-4cfc-97ec-4d60f8d0afa2",
      "createdAt": "2020-11-23T20:20:54.246Z",
      "updatedAt": "2020-11-23T20:20:54.246Z",
      "__v": 0,
      "image": "https://images-na.ssl-images-amazon.com/images/I/51K1-HZ5OiL._AC_SX466_.jpg"
    },
    {
      "isActive": true,
      "_id": "5fbc19a65a3f794d7247116b",
      "product_name": "Small Frozen Table",
      "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "price": 987,
      "category": "Sports",
      "brand": "Heaney, O'Keefe and Heller",
      "sku": "958471a4-a707-4979-bcad-62fd5b556834",
      "createdAt": "2020-11-23T20:20:54.246Z",
      "updatedAt": "2020-11-23T20:20:54.246Z",
      "__v": 0,
      "image": "https://target.scene7.com/is/image/Target/GUEST_f546c66a-45d9-4b2d-92a0-e9420a0ea6ac?wid=488&hei=488&fmt=pjpeg"
    }
  ];


// PASO 2: Generas una aplicacion de express
const app = express();

// PASO3: se define una sub aplicacion de express con sus respectivas rutas.
const router = express.Router();
router.get("/", function(req,res){res.send('hello')});
router.get("/productos", (req, res) => res.send(productos));

// PASO 4: incluye funcionalidades que express no trae por defecto

app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda

// PASO 5: exportarmos la aplicacion
module.exports = app;
// PASO 6: exporta el servidor express en funcion
module.exports.handler = serverless(app);
