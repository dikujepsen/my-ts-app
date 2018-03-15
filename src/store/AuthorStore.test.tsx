import { Author } from 'interface';
import * as React from 'react';
import { authorStore } from 'store';



describe("Author store test", () => {
  it("should insert properly", () => {
    const author: Author = new Author("test", "hansen");
    authorStore.item = author;
    authorStore.saveItem()
    .then(() => {
      expect(authorStore.items).toContain(author);
    });

  });


});

