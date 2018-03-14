import { observable, action, computed } from "mobx";
import { MockAuthorApi } from 'api/MockAuthorApi';
import { BaseStore } from './BaseStore';

const authorApi = new MockAuthorApi();

class AuthorStore extends BaseStore {
  constructor() {
    super(authorApi, { firstName: '', lastName: '' });
  }

  @computed
  get formattedAuthors() {
    const authorsFormattedForDropdown = this.items.map(author => {
      return {
        value: author.id,
        text: author.firstName + ' ' + author.lastName
      };
    });
    return authorsFormattedForDropdown;
  }
}

const authorStore = new AuthorStore();
authorStore.setItems();


export { authorStore };