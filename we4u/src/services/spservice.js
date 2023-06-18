import axios from "axios";
class Post {
    getcity() {
        const url = "http://localhost:4000/getcity";
        return axios.post(url);
    }

    getspid(data) {
        const url = "http://localhost:4000/getsp";
        return axios.post(url, data);
    }

    getdetailbycity(data) {
        const url = "http://localhost:4000/spdetailbycity";
        return axios.post(url, data);
    }

    getdetailbysubser(data) {
        const url = "http://localhost:4000/spdetailbysubser";
        return axios.post(url, data);
    }

    getserdetailbysubname(data) {
        const url = "http://localhost:4000/searchbysubaname";
        return axios.post(url, data);
    }

    updatesp(data) {
        const url = "http://localhost:4000/updatespdet";
        return axios.post(url, data);
    }

    changepasss(data) {
        const url = "http://localhost:4000/chngpasssp";
        return axios.put(url, data);
    }
}
export default new Post();
