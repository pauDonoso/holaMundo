

let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

// crea id a cada producto
let createId = () => {
    return products.forEach((product, index) => {
  product.id = index + 1;
})
}

//imprime cada nombre de los productos
let printName = () => {
    return products.forEach(product => {
         console.log(product.name);
    })
}

//imprime producto con id igual a 3
let print3 = () => {
    createId();
return products.filter(product => product.id === 3);
}

//imprime productos que tengan "black" en los colores 
let printBlack = () => {
    return products.filter(product => product.colors.includes("black"))
}

//imprime solo productos sin color
let printNoColor = () => {
    return products.filter(product => !product.colors.length)
}

//agrega nuevo producto con las propiedades existentes
let addProduct = () => {
 products.push({name: "cojin", price: 100, quantity: 20, colors: ["green", "white"] })
 return products;
}

//borrar sin stock
let deleteNoStock = () => {
    return products.filter(product => product.quantity > 0) 
}

//imprimir sumatoria de stock
let totalStock = () => {
    let acc = 0;
    products.forEach(product => acc += product.quantity)
    return console.log(acc)
}

//imprimir productos con precio mayor a un precio determinado
let higherPrice = (price) => {
    return products.filter(product => product.price > price)
}
//console.log(higherPrice(900))