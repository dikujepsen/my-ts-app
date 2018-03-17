import { mockAuthorApi } from "./MockAuthorApi";
import { IRestApi } from "./IRestApi";
import { Author } from "interface";
import { authorApi as realAuthorApi } from "./AuthorApi";

let authorApi: IRestApi<Author>;

if (process.env.NODE_ENV === "development" && process.env.REACT_APP_MOCK_API === "static") {
    authorApi = mockAuthorApi;
} else {
    authorApi = realAuthorApi;
}
export { authorApi };