import { useLocation } from 'react-router-dom';
import { Typography } from '@c/index';
import BookList from '@c/BookList';
import BookSkeletons from '@c/BookSkeletons';
// import Spinner from '@c/Spinner';
// import useBooks from '../hooks/useBooks';
import useBooksAxios from '../hooks/useBooksAxios';
// import useFetch from '../hooks/useFetch';

function Books () {
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  // const sort = params.get('sort');
  // const limit = params.get('limit');

  const options = Object.fromEntries(params.entries());

  // useEffect(() => {
  //   fetch('https://bookstore-api-a6n5.onrender.com/books')
  //     .then(resp => resp.json())
  //     .then(data => setBooks(data));
  // }, []);
  const { loading, getBooks: refetch } = useBooksAxios(options);
  // const { data: books, loading, getData: refetch } = useFetch('https://bookstore-api-a6n5.onrender.com/books');

  return (
    <>
      <Typography as="h1">Books</Typography>
      {
        loading
          ? <BookSkeletons />
          : <BookList refetch={refetch} />
      }
      {/* {
        loading
          ? <Spinner className='w-12 text-indigo-500 mt-12' />
          : <BookList loading={loading} books={books} />
      } */}
    </>
  );
}

export default Books;
