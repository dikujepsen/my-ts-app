import { Author } from "interface";




let authors: Array<Author> = [
  new Author(1, "Jens", "Hansen")
]

class MockAuthorApi {
  constructor() {}

  public getAll = () => {
    return authors;
  }
}

export {MockAuthorApi};
