import axios from "axios";

class Post{
    create(formData) {
        console.log("formdata : ",formData);
        const url = "http://localhost:4000/addser";
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axios.post(url, formData, config);

    }
   
    deleteData(id) {
        const url = "http://localhost:4000/delser";
        return axios.post(url,id);
    }



}
export default new Post();