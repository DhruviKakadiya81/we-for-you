import axios from "axios";

class Post {
    dashboard() {
        const url = "http://localhost:4000/dashboard";
        return axios.get(url);
    }
    order() {
        const url = "http://localhost:4000/order";
        return axios.get(url);
    }
    showspmsg() {
        const url = "http://localhost:4000/showcntsp";
        return axios.get(url);
    }

    showusermsg() {
        const url = "http://localhost:4000/showcntuser";
        return axios.get(url);
    }

    getallactive() {
        const url = "http://localhost:4000/getall";
        return axios.get(url);
    }


}
export default new Post();