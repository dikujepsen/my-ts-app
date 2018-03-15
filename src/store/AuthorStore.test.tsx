import { Author } from 'interface';
import * as React from 'react';
import { authorStore } from 'store';



describe("Author store test", () => {
  it("should insert, update, and delete properly", () => {
    const author: Author = new Author("test", "hansen");
    authorStore.item = author;
    authorStore.saveItem()
    .then(() => {
      expect(authorStore.items).toContain(author);
      const newTestname = "test123";
      author.firstName = newTestname;
      authorStore.item = author;
      authorStore.saveItem().then(() => {
        const findAuthor = authorStore.items.find(element => element.id === author.id);
        if (findAuthor) {
          expect(findAuthor.firstName).toBe(newTestname);
        } else {
          throw new Error("Author not found");
        }
        authorStore.deleteItem(findAuthor.id).then(() => {
          const deletedAuthor = authorStore.items.find(element => element.id === author.id);
          expect(deletedAuthor).toBe(undefined);
        });
      });


    });

  });


});

