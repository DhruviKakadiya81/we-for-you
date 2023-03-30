import axios from 'axios';


let formObj = {};
class Post{
     create(regData){
        const url = 'http://localhost:4000/reguser';
        // formObj = {
        //     ...formObj,
        //             email:regData.get('email'),
        //             password:regData.get('password')
        // }

        // console.log('regData----',typeof regData, regData);
        // alert(regData.get('email'));
    return axios.post(url,regData);
   
}

}
export default new Post();

// class Post {
//     create(formData) S
//         const url = "http://localhost:5000/add";
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         };
//         return axios.post(url, formData, config);

//     }

//     getData() {
//         const url = "http://localhost:5000/showdata";
//         return axios.get(url);
//     }

//     deleteData(id) {
//         const url = "http://localhost:5000/del/" + id;
//         return axios.get(url);
//     }

//     updatedata(formData) {
//         const url = "http://localhost:5000/update";
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         };
//         return axios.post(url, formData, config);

//     }



// }
// export default new Post();