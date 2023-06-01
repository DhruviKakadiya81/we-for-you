import axios from "axios";
class Post {
    addsubser(data) {
        const url = "http://localhost:4000/addsubser";

        return axios.post(url, data);
    }

    getsubserbymain(data) {
        console.log("data", data);
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

    getsubser() {
        // console.log(data, "data");
        const url = "http://localhost:4000/showsub";
        return axios.get(url);
    }



}
export default new Post();
