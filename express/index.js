const { json } = require("express");
const express = require("express");
const app = express();
const PORT = 8043;

let products = [
  {
    name: "Macbook",
    price: 1300,
    quantity: 40,
    colors: ["silver", "black", "white"],
    id: 1,
    description: "un notebook",
  },
  {
    name: "Iphone",
    price: 1000,
    quantity: 50,
    colors: ["silver", "red", "white"],
    id: 2,
    description: "un celular",
  },
  {
    name: "Pendrive",
    price: 10,
    quantity: 10,
    colors: [],
    id: 3,
    description: "un pendrive",
  },
  {
    name: "Headset",
    price: 50,
    quantity: 0,
    colors: ["black"],
    id: 4,
    description: "unos audifonos",
  },
];

//middleware para ver informacion que pasa en el body
app.use(express.json());
//middleware para paginas estaticas
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("holaaa mundooo!!! estoy probando nodemon");
});

app.post("/", function (req, res) {
  res.send("Got a POST request");
});

app.put("/user", function (req, res) {
  res.send("Got a PUT request at /user");
});

app.delete("/user", function (req, res) {
  res.send("Got a DELETE request at /user");
});

app.get("/products", (req, res) => {
  res.send(products);
});

// ":id" parametro dinamico dentro de la url que podemos detectar con request.params
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((prod) => prod.id === Number(id));
  res.send(product);
});

app.post("/products", (req, res) => {
  const product = req.body;
  console.log(product);
  res.send(product);
});
//middleware al final que se ejecuta solo como ultima opcion, en este caso muestra pagina de error estatica
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(PORT, () => console.log(`escuchando en ${PORT}`));
