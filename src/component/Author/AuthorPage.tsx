import * as React from 'react';
import {observer} from 'mobx-react';
import {IAuthor} from "../../interface";
import {AuthorForm} from ".";


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
        const author: IAuthor = {firstName: "Jens", lastName: "Hansen"};
        const errors: IAuthor = {firstName: "", lastName: ""};
        return (

            <div>
                <AuthorForm author={author} onSave={this.handleSaveClick} onChange={this.handleChange} saving={false} errors={errors}/>
            </div>
        );
    }
}

export {AuthorPage};
