type Book = {
  id: number;
  title: string;
  author: string;
  photo: string;
  price: number;
  type: string;
}

type User = {
  name: string;
  last_name: string;
  email: string;
  photo: string;
}

export type {
  Book,
  User
};
