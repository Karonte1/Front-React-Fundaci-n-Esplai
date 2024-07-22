class GenteDeLaEscuela {

  constructor (nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  info () {
    const info = `${this.nombre} tiene el email ${this.email}`;
    return info;
  }

}


class Profesor extends GenteDeLaEscuela {
  isAdmin = true;

  constructor (nombre, email, curso) {
    super(nombre, email);
    this.curso = curso;
  }
}

const ivan = new Profesor('Ivan', 'ivan@gmail.com', 'JavaScript');
console.log(ivan);
const infoIvan = ivan.info()
console.log(infoIvan);


class Alumno extends GenteDeLaEscuela {
  isCertified = false;

  constructor (nombre, email) {
    super(nombre, email);
  }

  info() {
    const superInfo = super.info();
    const alumnoInfo = 'ALUMNO: ' + superInfo;
    return alumnoInfo;
  }
}


// const ivan = new Profesor('Ivan', 'JavaScript');
// ivan.info();

const davide = new Alumno('Davide', 'davide@gmail.com');
const infoDavide = davide.info();
console.log(infoDavide);