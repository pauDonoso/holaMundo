/* Realizar una función llamada “calculatePrice” que reciba dos parámetros, el primero siendo el nombre de un producto (ej: Laptop), y el segundo el precio de ese producto (sin el signo $). Dicha función deberá imprimir en consola el nombre del producto, el costo del envío del mismo, y el precio final.

El texto impreso por la consola debería verse de la siguiente manera: 
‘El producto <nombre del producto> cuesta <precio del producto>. Su costo de envío es de <costo de envío>. Por lo tanto, el precio final es de <precio final>’ 

Para probar que el código funcione correctamente, utilizar los siguientes ejemplos.
Tener en cuenta: no pueden ser modificados de ninguna manera.

calculatePrice(‘Macbook’, 2500);
calculatePrice(‘Celular’, 500);
calculatePrice(‘Playstation’, 4500);


Cada producto tiene un costo de envío individual según su rango de precio:

Si el precio es $ 1 - $ 2000 el costo de envío → es de $ 300 
Si el precio es $ 2001 - $ 4000 el costo de envío → es de $ 500
Si el precio es > $ 4000 el costo de envío → es de $ 700

El precio final de la compra es precio del producto + costo de envío
 */


function calculatePrice(producto, precio){
    let costoEnvio;
    if(precio > 0 && precio < 2001){
       costoEnvio = 300;
    } else if(precio > 2001 && precio < 4001){
        costoEnvio = 500;
    } else if(precio > 4000){
        costoEnvio = 700;
    }
    
console.log(`El producto ${producto} cuesta ${precio}. Su costo de envío es de ${costoEnvio}. Por lo tanto, el precio final es de ${precio + costoEnvio}`)
}

calculatePrice('Macbook', 2500);
calculatePrice('Celular', 500);
calculatePrice('Playstation', 4500);


// ternario
const calculatePrice = (name, price) => {
    let envio = 0;
    price >= 1 && price <= 2000 ? envio = 300 :
    price >= 2001 && price <= 4000 ? envio = 500 :
    price > 4000 ? envio = 700 : null
    let finalPrice = price + envio;
    console.log(`El producto ${name} cuesta ${price}. Su costo de envío es de ${envio}. Por lo tanto, el precio final es de ${finalPrice}`)  
}
calculatePrice('Mackbook', 2500);