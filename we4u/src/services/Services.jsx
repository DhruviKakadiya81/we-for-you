import axios from "axios";

class Post{
    getservice(){
        console.log("this is service hello");
        const url = "http://localhost:4000/getser";
        return axios.get(url);
    }
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
}
export default new Post();
