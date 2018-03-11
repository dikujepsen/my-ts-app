import { AuthorPage, AuthorList } from '.';
import * as React from "react";
import { shallow, configure, render, mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { Helmet } from 'react-helmet';
import { MemoryRouter as Router } from 'react-router-dom';

const mountWithRouter = (node: React.ReactElement<any>) => mount(<Router>{node}</Router>);

configure({ adapter: new Adapter() });

describe("test suite 1", () => {
  it("should contain the correct components", () => {
    const authorPageWrapper = shallow(<AuthorPage />);

    expect(authorPageWrapper.find(AuthorList)).toHaveLength(1);
    expect(authorPageWrapper.find(Helmet)).toHaveLength(1);

  });

  it('rendered the test first name', () => {
    const context = { router: { isActive: (a: any, b: any) => true } };

    const wrapper = mountWithRouter(<AuthorPage />);

    expect(wrapper.text()).toContain('Jens');
  });

});

