import axios from "axios";

class Post{
    create(data) {
        console.log("login data" + data);
        const url = "http://localhost:4000/profiledetail";
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axios.post(url,data,config);
      }

   
}
export default new Post();
