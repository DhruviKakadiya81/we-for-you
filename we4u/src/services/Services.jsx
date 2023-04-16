import axios from "axios";

class Post{
    getservice(){
        console.log("this is service hello");
        const url = "http://localhost:4000/getser";
        return axios.get(url);
    }
}
export default new Post();
