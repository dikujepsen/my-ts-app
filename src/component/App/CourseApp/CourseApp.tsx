import * as React from 'react';
import { Header } from 'component/common';
import { Route, withRouter, RouteComponentProps } from 'react-router';
import { AuthorPage, AuthorForm } from 'component/Author';
import { IAuthor } from 'interface';

interface ICourseAppProps {
  match: { url: string };
}

class CourseApp extends React.Component<ICourseAppProps & RouteComponentProps<any>, any> {

  handleSaveClick = (event: any) => {
    event.preventDefault();

  }

  handleChange = (event: any) => {
    event.preventDefault();

  }


  render() {
    const { match } = this.props;

    const author: IAuthor = { firstName: "Jens", lastName: "Hansen", id: 1 };
    const errors: IAuthor = { firstName: "", lastName: "", id: -1 };
    return (
      <div className="container-fluid">
        <Header
          loading={false}
        />
        <Route path={`${match.url}/authors`} component={AuthorPage} exact={true} />
        <Route 
          path={`${match.url}/authors/add`} 
          render={() => (
            <AuthorForm
              author={author}
              onSave={this.handleSaveClick}
              onChange={this.handleChange}
              saving={false}
              errors={errors}
            />
          )}
        />

      </div>
    );
  }

}

const CourseAppWithRouter = withRouter<RouteComponentProps<any>>(CourseApp);
export { CourseAppWithRouter };
