import { observer } from 'mobx-react';
import * as React from 'react';

import { AuthorForm } from '.';
import { IAuthor } from '../../interface';
import { Helmet } from "react-helmet";

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

    render() {
        const author: IAuthor = { firstName: "Jens", lastName: "Hansen" };
        const errors: IAuthor = { firstName: "", lastName: "" };
        return (
            <div>
                <Helmet> 
                    <title>Authors</title>
                </Helmet>
                    <AuthorForm
                        author={author}
                        onSave={this.handleSaveClick}
                        onChange={this.handleChange}
                        saving={false}
                        errors={errors}
                    />
            </div>
        );
    }
}

export { AuthorPage };
