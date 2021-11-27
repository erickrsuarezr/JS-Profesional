enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
}

interface Rectangulo {
    ancho:number;
    alto:number;
    color?:Color;//De esta forma color es opcional
}

let rect: Rectangulo = {
    ancho:4,
    alto:6,
    color:Color.Rojo,
}

function area(r:Rectangulo){
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function (){
    return this.color ? `Un rectángulo ${this.color}` : `Un rectángulo`;
}

console.log(rect.toString());