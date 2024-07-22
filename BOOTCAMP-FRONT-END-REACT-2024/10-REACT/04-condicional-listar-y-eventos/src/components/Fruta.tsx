type FrutaProps = {
    fruta: string;
}

function Fruta(props: FrutaProps) {
    
    return <li>{props.fruta}</li>
}

export default Fruta;