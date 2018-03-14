import { Author } from "interface";




let authors: Array<Author> = [
  new Author(1, "Jens", "Hansen")
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


}

export { MockAuthorApi };
