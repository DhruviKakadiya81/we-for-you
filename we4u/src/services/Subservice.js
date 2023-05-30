import axios from "axios";
class Post {
    addsubser(data) {
        const url = "http://localhost:4000/addsubser";
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axios.post(url, data, config);
    }

    getsubserbymain(data) {
        const url = "http://localhost:4000/showsermain";

        return axios.post(url, data);
    }

    getsubserbyspid(data) {
        const url = "http://localhost:4000/showserbyspid";
        return axios.post(url, data);
    }

    updateser(data) {
        const url = "http://localhost:4000/updatesub";
        return axios.put(url, data);
    }

    deleteser(data) {
        console.log(data, "data");
        const url = "http://localhost:4000/deletesub";
        return axios.delete(url, { data });
    }

}
export default new Post();
