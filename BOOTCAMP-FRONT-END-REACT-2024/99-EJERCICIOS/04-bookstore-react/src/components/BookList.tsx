import useBooksContext from '../hooks/useBooksContext';
import BookItem from './BookItem';
import { motion, Variants } from 'framer-motion';

type Props = {
  refetch: () => void;
}

function BookList ({ refetch }: Props) {
  const { books } = useBooksContext();

  const bookVariants: Variants = {
    fadein: {
      opacity: [0, 1],
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15
      }
    }
  };

  return (
    <motion.section variants={bookVariants} animate="fadein" className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 my-4">
      {
        books.map(book => <BookItem key={book.id} book={book} variants={bookVariants} refetch={refetch}/>)
      }
    </motion.section>
  );
}

export default BookList;
