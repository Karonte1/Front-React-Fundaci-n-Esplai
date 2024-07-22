class CocheOpel {
  marca = 'Opel'; 
  
  constructor (modelo, puertas = 3) {
    // cada vez que se crea una instancia se ejecuta el constructor()
    // console.log('Constructor:', modelo);
    this.modelo = modelo;   
    this.puertas = puertas;
  }
  
  arrancar () { // 0x999
    console.log(`Ruunnn 🚗💨. El Coche ${this.marca} ${this.modelo} ha arrancado.`);
  }

}


const coche1 = {
  marca: 'Opel',
  arrancar: function () { // 0x111
    console.log('Ruunnn 🚗💨');
  }
}

const coche2 = {
  marca: 'Opel',
  arrancar: function () { // 0x222
    console.log('Ruunnn 🚗💨');
  }
}


// instanciar una clase
const coche3 = new CocheOpel('Corsa');
const coche4 = new CocheOpel('Zafira', 5);


// console.log(coche1);
// console.log(coche2);
console.log(coche3);
console.log(coche4);

// coche1.arrancar();
// coche2.arrancar();
coche3.arrancar();
coche4.arrancar();