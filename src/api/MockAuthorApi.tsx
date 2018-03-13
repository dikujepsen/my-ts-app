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
}

export { MockAuthorApi };
