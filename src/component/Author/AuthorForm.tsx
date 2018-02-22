import * as React from 'react';
import TextInput from '../common/TextInput';
import {observer} from 'mobx-react';
import {IAuthor} from "../../interface";

interface IAuthorFormProps {
    author: IAuthor;
    onSave: (event: any) => void;
    onChange: (event: any) => void;
    saving: boolean;
    errors: IAuthor;
}

@observer
export class AuthorForm extends React.Component<IAuthorFormProps, any> {
    constructor(props: IAuthorFormProps) {
        super(props);
    }

    render() {

        const onChange = this.props.onChange;
        const onSave = this.props.onSave;
        const author = this.props.author;
        const saving = this.props.saving;
        const errors = this.props.errors;

        return (

            <form>
                <h1>
                    Manage Course <i className="glyphicon glyphicon-plus"/>
                </h1>
                <TextInput
                    name="firstName"
                    label="First name"
                    value={author.firstName}
                    onChange={onChange}
                    error={errors.firstName}
                />

                <TextInput
                    name="lastName"
                    label="Last name"
                    value={author.lastName}
                    onChange={onChange}
                    error={errors.lastName}
                />

                <input
                    type="submit"
                    disabled={saving}
                    value={saving ? 'Saving...' : 'Save'}
                    onClick={onSave}
                    className="btn btn-primary"
                />


            </form>
        );
    }
}


