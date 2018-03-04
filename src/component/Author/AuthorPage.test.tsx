import { AuthorPage, AuthorForm } from '.';
import * as React from "react";
import { shallow, configure, render, mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { Helmet } from 'react-helmet';

configure({ adapter: new Adapter() });

describe("test suite 1", () => {
  it("should contain the correct components", () => {
    const authorPageWrapper = shallow(<AuthorPage />);

    expect(authorPageWrapper.find(AuthorForm)).toHaveLength(1);
    expect(authorPageWrapper.find(Helmet)).toHaveLength(1);

  });

  it('rendered the test first name', () => {
    const wrapper = mount(<AuthorPage />);
    expect(wrapper.find("[name='firstName']").first().props().value).toContain('Jens');
  });

});

