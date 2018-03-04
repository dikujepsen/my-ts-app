import * as React from 'react';
import { Header } from 'component/common';
import { Route, withRouter, RouteComponentProps } from 'react-router';
import { AuthorPage } from 'component/Author';

interface ICourseAppProps {
  match: { url: string };
}

class CourseApp extends React.Component<ICourseAppProps & RouteComponentProps<any>, any> {
  render() {
    const { match } = this.props;

    return (
      <div className="container-fluid">
        <Header
          loading={false}
        />
        <Route path={`${match.url}/authors`} component={AuthorPage} />
      </div>
    );
  }

}

const CourseAppWithRouter = withRouter<RouteComponentProps<any>>(CourseApp);
export { CourseAppWithRouter };
