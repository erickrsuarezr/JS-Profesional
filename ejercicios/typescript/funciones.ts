function add(a:number, b:number):number{
    return a+b;
}

const sum = add(4,6);

function createAdder (a:number): (number)=> number {
    return function (b:number){
        return b+a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6)

function  fullName(firstName:string,lastName?:string):string{
    return `${firstName} ${lastName}`;
}
//Poniendo  el signo de interrogacion en lastname, el parametro se vuelve opcional y undefined
const Erick = fullName('Erick', 'Suárez');
const Isabel = fullName('Isabel');
console.log(Erick);
console.log(Isabel);

function  fullName2(firstName:string,lastName:string = 'García'):string{
    return `${firstName} ${lastName}`;
}
//Así se agregan valores por defecto
const Pedro = fullName2('Pedro');
console.log(Pedro);