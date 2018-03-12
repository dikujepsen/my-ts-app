import { AuthorPage, AuthorList, AuthorForm } from '.';
import * as React from "react";
import { shallow, configure, render, mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { Helmet } from 'react-helmet';
import { MemoryRouter as Router } from 'react-router-dom';
import { Author } from 'interface';

const mountWithRouter = (node: React.ReactElement<any>) => mount(<Router>{node}</Router>);

configure({ adapter: new Adapter() });

describe("test suite 1", () => {
  it("should contain the correct components", () => {
    const authorPageWrapper = shallow(<AuthorPage />);

    expect(authorPageWrapper.find(AuthorList)).toHaveLength(1);
    expect(authorPageWrapper.find(Helmet)).toHaveLength(1);

  });

  it('rendered a line with data', () => {

    const wrapper = mountWithRouter(<AuthorPage />);

    expect(wrapper.text()).toContain('Jens');
  });

 
  it('rendered the test first name', () => {
    const author: Author = { firstName: "Jens", lastName: "Hansen", id: 1 };
    const errors: Author = { firstName: "", lastName: "", id: -1 };

    const wrapper = mount(
      <AuthorForm 
        author={author}
        onSave={() => undefined}
        onChange={() => undefined}
        saving={false}
        errors={errors}
      />
    );

    expect(wrapper.find("[name='firstName']").first().props().value).toContain('Jens');
  });



});

