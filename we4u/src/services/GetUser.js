import axios from "axios";
class Post{
    sendauth(id){
        console.log("auth-------"+id);
        const url = "http://localhost:4000/getclient";
        return axios.post(url,id);
    }
}
export default new Post();
