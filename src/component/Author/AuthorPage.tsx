import { observer } from 'mobx-react';
import * as React from 'react';

import { AuthorForm } from '.';
import { IAuthor } from '../../interface';
import { Helmet } from "react-helmet";
import { AuthorList } from './AuthorList';
import { NavLink } from 'react-router-dom';

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

    deleteAuthor = (event: any) => {
        event.preventDefault();
    }

    render() {
        const author: IAuthor = { firstName: "Jens", lastName: "Hansen", id: 1 };
        const errors: IAuthor = { firstName: "", lastName: "", id: -1 };
        const authorStore = {items: [author]};
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
                {/* <AuthorForm
                        author={author}
                        onSave={this.handleSaveClick}
                        onChange={this.handleChange}
                        saving={false}
                        errors={errors}
                    /> */}
            </div>
        );
    }
}

export { AuthorPage };
