import axios from "axios";
class Post {
    getcity() {
        const url = "http://localhost:4000/getcity";
        return axios.post(url);
    }

    getspid(data) {
        const url = "http://localhost:4000/getsp";
        return axios.post(url, data);
    }

    getdetailbycity(data) {
        const url = "http://localhost:4000/spdetailbycity";
        return axios.post(url, data);
    }
}
export default new Post();
