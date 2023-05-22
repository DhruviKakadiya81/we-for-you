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
    
    getspid(data){
        const url = "http://localhost:4000/getsp";
        return axios.post(url,data);
    }

    adddata(data){
        const url = "http://localhost:4000/addaspdet";
        return axios.post(url,data);
    }

    getdetails(data){
        console.log("clg-->",data);
        const url = "http://localhost:4000/getspdetail";
        return axios.post(url,data);
    }
   
}
export default new Post();
