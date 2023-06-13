import axios from "axios";

class Post {
    dashboard() {
        const url = "http://localhost:4000/dashboard";
        return axios.get(url);
    }
}
export default new Post();