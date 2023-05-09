import axios from "axios";

class Post{
    addarea(data) {
        // console.log("formdata : ",data);
        const url = "http://localhost:4000/addarea";
        return axios.post(url,data);

    }

    getarea(){
        const url = "http://localhost:4000/getarea";
        return axios.get(url);
    }
   
    deleteData(id) {
        console.log("formdata : ",id);
        const url = "http://localhost:4000/deletearea/"+id;
        return axios.delete(url);
    }

    updateData(data) {
        console.log("formdata : ",data);
        const url = "http://localhost:4000/updatearea";
        return axios.put(url,data);
    }
   

}
export default new Post();