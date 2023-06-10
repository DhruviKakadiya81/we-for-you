import axios from "axios";
class Post {
    cntuseradd(data) {
        const url = "http://localhost:4000/cntuser";
        return axios.post(url, data);
    }

    cntuspadd(data) {
        const url = "http://localhost:4000/cntsp";
        return axios.post(url, data);
    }

}
export default new Post();
