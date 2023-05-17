import axios from "axios";

class Post{
    create(data) {
     
        const url = "http://localhost:4000/profiledetail";
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axios.post(url,data,config);
      }

      getdata(data){
        const url = "http://localhost:4000/getuserdetail";
        return axios.post(url,data);
      }

      updatedata(data){
        const url = "http://localhost:4000/updateuserdetail";
        return axios.put(url,data);
      }

      updatepassword(data){
        const url = "http://localhost:4000/changepass";
        return axios.put(url,data);
      }
 
   
}
export default new Post();
