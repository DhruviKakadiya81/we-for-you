import axios from "axios";
var loginData = {};
class Post{
    getLoginData(loginData) {
        console.log("login data" + loginData);
        const url = "http://localhost:4000/loguser";
        return axios.post(url,loginData);
      }

    getemail(email){
        alert("email : " + email);
        const url = "http://localhost:4000/sendmail";
        return axios.post(url,email);
    }
    getotp(otp){
        alert("otp : " + otp);
        const url = "http://localhost:4000/getotp";
        return axios.post(url,otp);
    }
}
export default new Post();
