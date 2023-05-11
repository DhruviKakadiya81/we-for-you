import axios from "axios";

class Post{
    addcity(data) {
        // console.log("formdata : ",data);
        const url = "http://localhost:4000/addcity";
        return axios.post(url,data);

    }

    getcity(){
        const url = "http://localhost:4000/getcity";
        return axios.get(url);
    }
   
    deleteData(id) {
        console.log("formdata : ",id);
        const url = "http://localhost:4000/deletecity/"+id;
        return axios.delete(url);
    }

    updateData(data) {
        console.log("formdata : ",data);
        const url = "http://localhost:4000/updatecity";
        return axios.put(url,data);
    }
   

}
export default new Post();