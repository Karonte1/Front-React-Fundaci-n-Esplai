import BookSkeletonItem from './BookSkeletonItem';

function BookSkeletons () {
  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-4 lg-grid-cols-6 my-4">
      {
        Array(4).fill(0).map((_, index) => <BookSkeletonItem key={index} />)
      }
    </section>
  );
}

export default BookSkeletons;
