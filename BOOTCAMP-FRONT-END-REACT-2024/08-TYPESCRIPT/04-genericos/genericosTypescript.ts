function imprimirValor (valor:string): string {
  return valor;
}


imprimirValor('hola');


// esta función ahora acepta que le pases TU cuando la ejecutes QUÉ TIPO DE DATO VAS A USAR, y allá donde hayas usado la letra mayúscula, se colocará el tipado que te pase el usuario
function imprimirValorGenerica<T> (valor: T): T {
  return valor;
}

type User = {
  name: string;
}


imprimirValorGenerica<string>('hola')
imprimirValorGenerica<number>(23)
imprimirValorGenerica<User | null>({ name: 'Jenni' })