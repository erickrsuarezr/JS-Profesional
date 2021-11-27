//Boolean
let muted: boolean = true;
muted = false;

//Numbers
let numerador:number = 42;
let denominador:number=6;
let resultado = numerador / denominador;

//String
let nombre:string = "Erick";
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people:string[]=[];
people = ["Isabel", "Erick", "Pedro"];
people.push("90000");

let peopleAndNumbers:Array< string | number >=[];
peopleAndNumbers.push("Erick");
peopleAndNumbers.push(9001);


//Enum
enum Color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo",
}

let colorFavorito:Color = Color.Azul;
console.log(`El color escogido es ${colorFavorito}`);

//Any
let comodin:any = "El Jajas";
comodin =  { type: 'Wildcard'};

//Object
let someObject:object =  { type: 'Wildcard'};