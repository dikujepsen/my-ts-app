import { observable } from "mobx";

export class Author {
    @observable firstName: string;
    @observable lastName: string;

    constructor(
        
        firstName: string,
        lastName: string,
        public id?: number
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}