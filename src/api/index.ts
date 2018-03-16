import { mockAuthorApi } from "./MockAuthorApi";
import { RestApi } from "./IRestApi";
import { Author } from "interface";

let authorApi: RestApi<Author>;

if (process.env.NODE_ENV === "development") {
    authorApi = mockAuthorApi;
}

export { authorApi };