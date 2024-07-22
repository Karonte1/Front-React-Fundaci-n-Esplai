import styled from 'styled-components';

function User() {

  // lógica Javascript del componente
  
  return (
  // el HTML del componente
    <Div >
      <Img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto de perfil" />
      <h2>Antonio</h2>
    </Div>
  )
}


//* Estilos CSS del componente

const Div = styled.div`
  background-color: #fff;
  border: 2px solid black;
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: ${0.1 * 37 + 0.4}rem;

  //* puedes estilizar haciendo nesting de reglas CSS
  img {
    border-radius: 50%;
  }

  h2 {
    text-decoration: underline;
  }
`;


//* o puedes crear componentes distintos estilizados
const Img = styled.img`
  border-radius: 50%
`;





export default User;