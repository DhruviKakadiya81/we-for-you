import axios from "axios";
class Post{
    getcity(){
        const url = "http://localhost:4000/getcity";
        return axios.post(url);
    }
}
export default new Post();
