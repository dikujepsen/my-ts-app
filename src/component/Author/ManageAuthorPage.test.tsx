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
    // it("should display filled textinputs", (done) => {
    //     const manageAuthorPageWrapper = mount(<ManageAuthorPage match={{ params: { id: 1 } }} />);
    //     setTimeout(() => {
    //         manageAuthorPageWrapper.update();
    //         expect(manageAuthorPageWrapper.find(AuthorForm)
    //             .find(TextInput).first().find("input").first().props().value).toBe("Jens1");
    //         done();

    //     }, 10);
    // }, 50);
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
            .find(TextInput).first().find("input").first().props().value).toBe("Jens");
    });
});

