import { Author } from "interface";




let authors: Array<Author> = [
  new Author("Jens", "Hansen", 1)
];

let authorsResults: {results: Array<Author>} = {
  results: authors
};

class MockAuthorApi {

  public getAll = () => {
    return Promise.resolve(authorsResults);
  }

  public save = (item: any) => {
    let index = authors.findIndex(element => element.id === item.id);
    authors[index] = item;
    return Promise.resolve(item);
  }

  public insert = (item: any) => {
    let maxId = Math.max(...authors.map(element => element.id || 0)) + 1;
    item.id = maxId;
    authors.push(item);
    return Promise.resolve(item);
  }

  public delete = (item: any) => {
    authors = authors.filter(element => element.id !== item.id);
    return Promise.resolve(true);
  }

}

export { MockAuthorApi };
