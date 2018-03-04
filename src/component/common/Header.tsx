
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { LoadingDots } from './LoadingDots';


interface IHeaderProps {
    loading: boolean;
}

class Header extends React.Component<IHeaderProps, any> {
    render() {
        const loading = this.props.loading;

        return (
            <nav>
                <NavLink exact={true} to="/CourseApp" activeClassName="active">Home</NavLink>
                {" | "}
                {/* <Link to="/courses" activeClassName="active">Courses</Link>
        { " | " } */}
                <NavLink to="/CourseApp/authors" activeClassName="active">Authors</NavLink>
                {/* { " | " }
        <Link to="/about" activeClassName="active">About</Link> */}
                {loading && <LoadingDots interval={100} dots={20} />}
            </nav >
        );
    }
};

export { Header };
