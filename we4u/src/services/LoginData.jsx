import axios from "axios";
var loginData = {};
class Post{
    getLoginData(loginData) {
        const url = "http://localhost:4000/loguser";
        return axios.post(url,loginData);
      }
}
export default new Post();
