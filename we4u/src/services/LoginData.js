import axios from "axios";
var loginData = {};
class Post {
    getLoginData(loginData) {
        console.log("login data" + loginData);
        const url = "http://localhost:4000/loguser";
        return axios.post(url, loginData);
    }

    getemail(data) {
        const url = "http://localhost:4000/sendmail";
        console.log('url', url);
        console.log('email', data.email);
        return axios.post(url, data);
    }
    getotp(otp) {
        const url = "http://localhost:4000/getotp";
        return axios.post(url, otp);
    }
}
export default new Post();
