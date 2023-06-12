import axios from "axios";
class Post {
    booking(data) {

        const url = "http://localhost:4000/book";
        return axios.post(url, data);
    }

}
export default new Post();
