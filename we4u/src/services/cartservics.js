import axios from "axios";
class Post {
    addtocart(data) {

        const url = "http://localhost:4000/addtocart";
        return axios.post(url, data);
    }
    getcartdata(data) {
        const url = "http://localhost:4000/showcart";
        return axios.post(url, data);
    }
}
export default new Post();
