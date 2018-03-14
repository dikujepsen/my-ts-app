/**
 * Created by jacob on 28-06-17.
 */
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Author } from 'interface';

interface IAuthorListRowProps {
  author: Author;
  handleDelete: (item: Author) => void;
}

class AuthorListRow extends React.Component<IAuthorListRowProps, any> {

  handleDelete = (event: any) => {
    const { handleDelete, author } = this.props;
    event.preventDefault();
    handleDelete(author);
  }

  render() {
    const { author} = this.props;

    return (
      <tr>
        <td>
          <button
            type="button"
            onClick={this.handleDelete}
            data-id={author.id}
            className="btn btn-primary"
          >
            Delete
          </button>
        </td>
        <td>
          <NavLink to={'/CourseApp/authors/' + author.id}>Edit author </NavLink>
        </td>
        <td>{author.firstName}</td>
        <td>{author.lastName}</td>
      </tr>
    );
  }
}


export { AuthorListRow };
