import axios from "axios";
var loginData = {};
class Post{
    getLoginData(loginData) {
        console.log("login data" + loginData);
        const url = "http://localhost:4000/loguser";
        return axios.post(url,loginData);
      }

    getemail(email){
        const url = "http://localhost:4000/sendmail";
        console.log('url',url);
        console.log('email',email);
        return axios.post(url,{ email });
    }
    getotp(otp){
        alert("otp : " + otp);
        const url = "http://localhost:4000/getotp";
        return axios.post(url,otp);
    }
}
export default new Post();
