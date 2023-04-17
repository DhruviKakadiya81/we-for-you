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
}
export default new Post();