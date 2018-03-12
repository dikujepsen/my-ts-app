import * as React from 'react';
import { AuthorListRow } from './AuthorListRow';
import { observer, inject } from "mobx-react";
import { Author } from 'interface';

interface IAuthorListRowProps {
  authorStore: {items: Array<Author>};
  handleDelete: (event: any) => void;
}


class AuthorList extends React.Component<IAuthorListRowProps, any> {
  render() {
    const { authorStore, handleDelete } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>
              &nbsp;
        </th>
            <th>
              &nbsp;
        </th>
            <th>
              First name
        </th>
            <th>
              Last name
        </th>

          </tr>
        </thead>
        <tbody>
          {authorStore.items.map(author =>
            <AuthorListRow
              key={author.id}
              author={author}
              handleDelete={handleDelete}
            />
          )}
        </tbody>
      </table>
    );
  }
}

export { AuthorList };
