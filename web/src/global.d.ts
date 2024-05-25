interface User {
  id: number;
  username: string;
}

interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
  author: User;
  createdAt: number;
  updatedAt: number;
}
