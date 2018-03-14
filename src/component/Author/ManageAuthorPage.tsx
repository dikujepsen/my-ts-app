import * as React from 'react';
import { AuthorForm } from './AuthorForm';
import * as toastr from 'toastr';
import { observer, inject } from "mobx-react";
import { authorStore } from 'store';
import Helmet from 'react-helmet';


@observer
class ManageAuthorPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            errors: {},
            saving: false
        };

        const authorId = parseInt(this.props.match.params.id);
        authorStore.setItem(authorId);
    }

    componentWillReceiveProps(nextProps: any) {

        const authorId = parseInt(nextProps.match.params.id);
        if (authorStore.item.id !== authorId) {
            authorStore.setItem(authorId);
        }
    }

    updateAuthorState = (event: any) => {
        authorStore.changeItem(event);
    }

    setValidationError(message: string) {
        toastr.error(message);
        this.setState({ saving: false });
    }

    saveAuthor = (event: any) => {
        event.preventDefault();
        this.setState({ saving: true });
        let author = authorStore.item;
        const minAuthorNameLength = 3;
        if (author.firstName.length < minAuthorNameLength) {
            this.setValidationError(`First name must be at least ${minAuthorNameLength} characters.`);
            return;
        }

        if (author.lastName.length < minAuthorNameLength) {
            this.setValidationError(`Last name must be at least ${minAuthorNameLength} characters.`);
            return;
        }

        authorStore.saveItem().then((saveComplete: boolean) => {
            if (saveComplete) {
                this.redirect();
            } else {
                this.setState({ saving: false });
            }

        });

    }

    redirect() {
        this.setState({ saving: false });
        toastr.success('Author saved');
        this.props.history.push('/CourseApp/authors');
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Manage Authors</title>
                </Helmet>
                <AuthorForm
                    onChange={this.updateAuthorState}
                    onSave={this.saveAuthor}
                    author={authorStore.item}
                    errors={this.state.errors}
                    saving={this.state.saving}
                />
            </>
        );
    }

}


export { ManageAuthorPage };
