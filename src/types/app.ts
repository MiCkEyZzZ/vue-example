interface IApp {
  name: string;
}

interface IPost {
  id: string;
  title: string;
  body: string;
  index: string;
}

interface IData {
  posts: [];
  loading: boolean;
}

export { IApp, IData, IPost };
