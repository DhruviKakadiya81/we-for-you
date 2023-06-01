import axios from "axios";

class Post {
    addsubser(data) {
        // console.log("formdata : ",data);
        const url = "http://localhost:4000/addsubserad";
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axios.post(url, data, config);

    }

    getsubserbymain() {
        const url = "http://localhost:4000/getser";
        return axios.get(url);
    }

    showser() {
        const url = "http://localhost:4000/showsub";
        return axios.get(url);
    }

    getcity() {
        const url = "http://localhost:4000/getcity";
        return axios.get(url);
    }

    deleteData(data) {
        console.log("form:", data);
        const url = "http://localhost:4000/deletesubser";
        return axios.delete(url, data);
    }

    updateData(data) {
        console.log("formdata : ", data);
        const url = "http://localhost:4000/updatesubser";
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axios.put(url, data, config);
    }


}
export default new Post();