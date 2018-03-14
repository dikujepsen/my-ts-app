import { observable } from "mobx";

export class Author {
    @observable firstName: string;
    @observable lastName: string;

    constructor(
        public id: number,
        firstName: string,
        lastName: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}