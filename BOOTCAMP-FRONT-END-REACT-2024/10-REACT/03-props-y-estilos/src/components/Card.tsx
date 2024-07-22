import styles from './card.module.css';

function Card() {  
  const { card, title } = styles;

 
  
  return (
    <div className={card}>
      <img src="https://picsum.photos/id/10/200" alt="" />
      <h3 className={title}>Título de la tarjeta</h3>
      <button className="btn">Leer más</button>
    </div>
  )
}

export default Card;