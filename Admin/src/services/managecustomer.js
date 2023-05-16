import axios from "axios";

class Post{
   
    deleteData(id) {
        const url = "http://localhost:4000/delser";
        return axios.post(url,id);
    }

    getdata(){
        const url = "http://localhost:4000/getuser";
        return axios.get(url);
    }

}
export default new Post();