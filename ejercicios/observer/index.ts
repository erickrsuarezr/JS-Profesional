interface Observer{
  update: (data:any) => void;
}

interface Subject{
  subscribe:(observer: Observer)=> void
  unsubscribe:(observer: Observer)=> void
}

class PrecioBitcoin implements Subject{
  observers: Observer[] = [];

  constructor(){
    const el: HTMLInputElement = document.querySelector("#value");
    el.addEventListener('input',()=>{
      this.notify(el.value);
    })
  }

  subscribe (observer:Observer){
    this.observers.push(observer)
  }

  unsubscribe(observer:Observer){
    const index = this.observers.findIndex(obs =>{
      return obs === observer
    })

    this.observers.splice(index, 1)//A partir de esta lista cuantos quiero sacar
  }

  notify(data:any){
    this.observers.forEach(observer => observer.update(data));
  }
}

class MostrarPrecio implements Observer{
  private el:HTMLElement;

  constructor(){
    this.el = document.querySelector("#price")
  }

  update(data:any){
    this.el.innerText = data;
  }
}


const valor = new PrecioBitcoin();
const mostrar = new MostrarPrecio();

valor.subscribe(mostrar);

//Hasta aquí todo lo que pongas en el input se verá en el "price"
//Ahora haremos un timeout para que después de un tiempo ya no siga escribiendo

setTimeout (()=>
  valor.unsubscribe(mostrar),
  5000
)