import { toast } from 'react-toastify';
import styled, { css } from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { AxiosError } from 'axios';

import { BiTrash as DeleteIcon } from 'react-icons/bi';
import { HiOutlinePencilAlt as EditIcon } from 'react-icons/hi';

import colors from '../config/colors';
import { Book } from '../config/types';
import axiosAPI from '../config/axios';
import useBooksContext from '../hooks/useBooksContext';
import { useNavigate } from 'react-router-dom';

type Props = {
  offer?: boolean;
  book: Book;
  variants: Variants;
  refetch: () => void;
}

function BookItem (props: Props) {
  const navigate = useNavigate();
  const { deleteBook, books, addBook } = useBooksContext();
  const { book, offer, variants } = props;

  async function handleDeleteBook (idBook: number) {
    // antes de borrar deberíamos GUARDAR EL QUE VAS A BORRAR
    const prevBook = books.find(book => book.id === idBook);
    // antes de borrar molaría guardar el índice donde está
    const prevIndex = books.findIndex(book => book.id === idBook);

    // borramos el que has hecho click de manera optimista
    deleteBook(idBook);

    try {
      // await axiosAPI.delete(`/books/${idBook}`);
      await axiosAPI.delete(`/books/${idBook}`);
      toast.success(`Has borrado el libro con el id ${idBook}`);
      // refetch();
    } catch (error) {
      // tengo que volver a poner el mismo elemento que he borrado en su sitio
      if (prevBook) {
        addBook(prevBook, prevIndex);
      }

      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    }
  }

  function handleEditBook (idBook: number) {
    navigate(`/edit-book/${idBook}`, { state: book });
  }

  return (

    <BookWrapper as={motion.article} variants={variants} $offer={offer}>
      <img src={book.photo} alt={`Portada del libro ${book.title}`} />

      <div className="book-data">
        <span className="title">{book.title}</span>

        <div className="row">
          <span className="author">{book.author}</span>
          <Badge>{book.type}</Badge>
        </div>

        <div className="row">
          <span className="price">{book.price}€</span>
          <div className="buttons">
            <button onClick={() => handleEditBook(book.id)}>
              <EditIcon size={20} color="dodgerblue" />
            </button>
            {/* <Link to="/edit-book" state={book}>
              <EditIcon size={20} color="dodgerblue" />
            </Link> */}
            <button onClick={() => handleDeleteBook(book.id)}>
              <DeleteIcon size={20} color="crimson" />
            </button>
          </div>
        </div>
      </div>

    </BookWrapper>
  );
}

type BookWrapperProps = {
  $offer?: boolean;
  variants: Variants;
}

const BookWrapper = styled.article<BookWrapperProps>`
  border: 2px solid;
  border-color: ${(props) => props.$offer ? 'lightseagreen' : colors.lightGray};
  border-radius: 0.3rem;
  position: relative;

  ${props => props.$offer && css` 
  
    &::before {
      content: '¡Oferta!';
      display: grid;
      place-items: center;
      padding: 0.2rem;
     
      font-size: 0.8rem;
      background-color: lightseagreen;
      width: max-content;
      aspect-ratio: 1;
      border-radius: 50%;
      rotate: 35deg;
      font-weight: bold;
      color: white;
      letter-spacing: 1px;
  
      position: absolute;
      top: 0; 
      right: 0;
      translate: 20% -20%;    
    } 
  
  `}



  img {
    width: 100%;
    aspect-ratio: 9/16;
    object-fit: cover;
    border-radius: 0.3rem;
  }

  .book-data {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;    
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .author {
    color: ${colors.gray};
  }

`;

const Badge = styled.span`
  background-color: ${colors.purple};
  color: ${colors.white};
  padding: 0.2rem 0.7rem;
  border-radius: 99999px;
`;

export default BookItem;
