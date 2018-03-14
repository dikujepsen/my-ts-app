import * as React from 'react';
import { Header } from 'component/common';
import { Route, withRouter, RouteComponentProps, Switch } from 'react-router';
import { AuthorPage, AuthorForm, ManageAuthorPage } from 'component/Author';
import { Author } from 'interface';

import '../../../../node_modules/toastr/build/toastr.min.css';

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

    // const author: Author = { firstName: "Jens", lastName: "Hansen", id: 1 };
    // const errors: Author = { firstName: "", lastName: "", id: -1 };
    return (
      <div className="container-fluid">
        <Header
          loading={false}
        />

        <Switch>
          <Route path={`${match.url}/authors`} component={AuthorPage} exact={true} />
          <Route
            path={`${match.url}/authors/add`}
            exact={true}
            component={ManageAuthorPage}
            // render={() => (
            //   <AuthorForm
            //     author={author}
            //     onSave={this.handleSaveClick}
            //     onChange={this.handleChange}
            //     saving={false}
            //     errors={errors}
            //   />
            // )}
          />

          <Route
            path={`${match.url}/authors/:id`}
            exact={true}
            component={ManageAuthorPage}
          />
        </Switch>

      </div>
    );
  }

}

const CourseAppWithRouter = withRouter<RouteComponentProps<any>>(CourseApp);
export { CourseAppWithRouter };
