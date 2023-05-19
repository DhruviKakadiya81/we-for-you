import axios from "axios";

class Post{
    getservice(){
    
        const url = "http://localhost:4000/getser";
        return axios.get(url);
    }
    getcity(){
        const url = "http://localhost:4000/getcity";
        return axios.get(url);
    }

    getarea(cityid){
        const url = "http://localhost:4000/areabycity";
        return axios.post(url,cityid);
    }
    
   
}
export default new Post();
