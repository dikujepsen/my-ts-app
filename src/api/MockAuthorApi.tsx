import { Author } from "interface";
import { RestGetAllResponse, RestApi } from "api/IRestApi";



let mockAuthorApi: RestApi<Author>;
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
  mockAuthorApi = new MockAuthorApi();
}


export { mockAuthorApi };
