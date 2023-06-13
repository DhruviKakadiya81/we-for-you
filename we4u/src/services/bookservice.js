import axios from "axios";
class Post {
    booking(data) {
        const url = "http://localhost:4000/book";
        return axios.post(url, data);
    }
    shduled(data) {
        const url = "http://localhost:4000/scheduluser";
        return axios.post(url, data);
    }
    shduledsp(data) {
        const url = "http://localhost:4000/schedulsp";
        return axios.post(url, data);
    }
    active(data) {
        const url = "http://localhost:4000/activeser";
        return axios.post(url, data);
    }
    getactivesersp(data) {
        console.log("id==>", data);
        const url = "http://localhost:4000/activesp";
        return axios.post(url, data);
    }

    getactiveseruser(data) {
        const url = "http://localhost:4000/activeuser";
        return axios.post(url, data);
    }

}
export default new Post();
