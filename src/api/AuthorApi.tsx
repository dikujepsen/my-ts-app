import { Author } from "interface";
import { RestGetAllResponse, IRestApi } from "api/IRestApi";
import RestApi from "api/RestApi";



class AuthorApi extends RestApi<Author> {

}


const authorApi = new AuthorApi("authors");
export { authorApi };
