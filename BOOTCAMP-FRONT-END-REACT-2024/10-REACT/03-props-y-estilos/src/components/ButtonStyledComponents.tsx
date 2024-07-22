import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  bg?: string;
  big?: boolean;
}

function ButtonStyledComponents(props: Props) {  
  // console.log(props)


  return (
    <ButtonStyled $bg={props.bg} $big={props.big} className="btn card">{props.children || "Click"}</ButtonStyled>
  )
}


type StyledButtonProps = {
  $bg?: string;
  $big?: boolean;
}


const ButtonStyled = styled.button<StyledButtonProps>`
  border-radius: 99999px;
  //* Dentro de este template literal podemos leer las PROPS del componente que ha creado Styledcomponents, para ello tenemos que usar un callback. Como primer parámetro nos regala las props
  /* background-color: green;
  background-color: ${'blue'};
  background-color: ${() => 'yellow'}; */
  background-color: ${(props) => props.$bg};
  font-size: ${props => props.$big ? '2rem' : '1.2rem'}
`;


export default ButtonStyledComponents;