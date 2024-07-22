function imprimirValor (valor:string): string {
  return valor;
}


imprimirValor('hola');


function imprimirValorGenerica<T> (valor: T): T {
  return valor;
}

type User = {
  name: string;
}


imprimirValorGenerica<string>('hola')
imprimirValorGenerica<number>(23)
imprimirValorGenerica<User | null>({ name: 'Jenni' })