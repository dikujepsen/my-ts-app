import { observable, action, computed } from "mobx";
import { authorApi } from 'api';
import { BaseStore } from './BaseStore';


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