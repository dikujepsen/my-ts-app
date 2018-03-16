import { observer } from 'mobx-react';
import * as React from 'react';

import { AuthorForm } from '.';
import { Author } from '../../interface';
import { Helmet } from "react-helmet";
import { AuthorList } from './AuthorList';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router';
import { authorStore } from 'store';




@observer
class AuthorPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }


    handleSaveClick = (event: any) => {
        event.preventDefault();

    }

    handleChange = (event: any) => {
        event.preventDefault();

    }

    deleteAuthor = (item: Author) => {
        authorStore.deleteItem(item.id);
    }

    render() {
        console.log(process.env.NODE_ENV);
        return (
            <div>
                <Helmet>
                    <title>Authors</title>
                </Helmet>
                <h1>Authors</h1>
                
                <NavLink to="/CourseApp/authors/add" className="btn btn-primary">Add Author</NavLink>

                <AuthorList
                    authorStore={authorStore}
                    handleDelete={this.deleteAuthor}
                />
                
            </div>
        );
    }
}

export { AuthorPage };
