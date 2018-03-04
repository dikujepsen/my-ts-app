import { AuthorPage, AuthorForm } from '.';
import * as React from "react";
import { shallow, configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Helmet} from 'react-helmet';

configure({ adapter: new Adapter() });

describe("test suite 1", () => {
  it("should contain the correct components", () => {
    const authorPageWrapper = shallow(<AuthorPage />);
    
    //expect(global.window.document.title).toBe("Author page");
    // expect(authorPageWrapper).toContain("<div>");
    expect(authorPageWrapper.find(AuthorForm)).toHaveLength(1);
    expect(authorPageWrapper.find(Helmet)).toHaveLength(1);
    
  });
});

