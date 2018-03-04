/**
 * Created by jacob on 28-06-17.
 */
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { IAuthor } from 'interface';

interface IAuthorListRowProps {
  author: IAuthor;
  handleDelete: (event: any) => void;
}

class AuthorListRow extends React.Component<IAuthorListRowProps, any> {
  render() {
    const { author, handleDelete } = this.props;

    return (
      <tr>
        <td>
          <button
            type="button"
            onClick={handleDelete}
            data-id={author.id}
            className="btn btn-primary"
          >
            Delete
            </button>
        </td>
        <td><NavLink to={'/authors/' + author.id}>Edit author </NavLink></td>
        <td>{author.firstName}</td>
        <td>{author.lastName}</td>
      </tr>
    );
  }
}


export { AuthorListRow };
