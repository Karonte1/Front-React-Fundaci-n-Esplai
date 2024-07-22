import React from 'react';



export default class CounterClass extends React.Component {

  constructor(props: { initialValue: number;}) {
    super(props);
    this.state = {
      contador: 5
    }
  }

  render () {
    return (
      <div>
        <h2>Contador de Clase</h2>
        <h3>{this.state.contador}</h3>
        <button onClick={() => this.state.contador += 1}>+1</button>
      </div>
    )
  }

  componentDidMount (): void {
    
  }

  componentWillUnmount (): void {
    
  }
  

}