import { Author } from "interface";


interface RestGetAllResponse<Entity> {
  results: Array<Entity>;
}

interface RestApi<Entity> {
  getAll: () => Promise<RestGetAllResponse<Entity>>;
  save: (item: Entity) => Promise<Entity>;
  insert: (item: Entity) => Promise<Entity>;
  delete: (item: Entity) => Promise<boolean>;
}

let authorApi: RestApi<Author>;

if (process.env.NODE_ENV === "development") {

  let authors: Array<Author> = [
    new Author("Jens", "Hansen", 1)
  ];
  
  let authorsResults: RestGetAllResponse<Author> = {
    results: authors
  };
  
  class MockAuthorApi implements RestApi<Author> {
  
    public getAll = () => {
      return Promise.resolve(authorsResults);
    }
  
    public save = (item: Author) => {
      let index = authors.findIndex(element => element.id === item.id);
      authors[index] = item;
      return Promise.resolve(item);
    }
  
    public insert = (item: Author) => {
      let maxId = Math.max(...authors.map(element => element.id || 0)) + 1;
      item.id = maxId;
      authors.push(item);
      return Promise.resolve(item);
    }
  
    public delete = (item: Author) => {
      authors = authors.filter(element => element.id !== item.id);
      return Promise.resolve(true);
    }
  
  }

  authorApi = new MockAuthorApi();
}

export { authorApi };
