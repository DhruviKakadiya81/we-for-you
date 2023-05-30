import axios from "axios";

class Post {

    getser() {
        const url = "http://localhost:4000/spdata";
        return axios.get(url);
    }

}
export default new Post();