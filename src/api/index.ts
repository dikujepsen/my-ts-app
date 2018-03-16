import { mockAuthorApi } from "./MockAuthorApi";
import { IRestApi } from "./IRestApi";
import { Author } from "interface";
import { authorApi as realAuthorApi } from "./AuthorApi";

let authorApi: IRestApi<Author>;

if (process.env.NODE_ENV === "development") {
    authorApi = mockAuthorApi;
} else {
    authorApi = realAuthorApi;
}
authorApi = realAuthorApi;
export { authorApi };