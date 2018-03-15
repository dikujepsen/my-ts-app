import { AuthorForm } from 'component/Author/AuthorForm';
import { configure, mount, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import { ManageAuthorPage } from '.';
import TextInput from '../common/TextInput';

configure({ adapter: new Adapter() });

describe("test suite 1", () => {
    
    it("should display empty textinputs", () => {
        const manageAuthorPageWrapper = shallow(
            <ManageAuthorPage match={{ params: { id: "add" } }} />
        );
        expect(manageAuthorPageWrapper.find(AuthorForm).dive()
        .find(TextInput).first().dive().text()).toBe("First name");
    });

});

describe("test suite 2", () => {
    let manageAuthorPageWrapper: any = undefined;
    beforeEach((done) => {
        manageAuthorPageWrapper = mount(<ManageAuthorPage match={{ params: { id: 1 } }} />);
        setTimeout(() => {
            done();
        }, 10);
    });

    it("should display filled textinputs", () => {
        
        manageAuthorPageWrapper.update();

        expect(manageAuthorPageWrapper.find(AuthorForm)
        .find(TextInput).first().find("[name='firstName']").first().props().value).toBe("Jens");
        
    });
});