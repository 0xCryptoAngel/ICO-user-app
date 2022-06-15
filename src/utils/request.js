// import axios from 'axios';
// import {getToken, removeToken} from "@/utils/auth";
// import moment from "moment";
// import {sha256} from "js-sha256";
// import Cookies from "js-cookie";

// let time = 0;
// const service = axios.create({
//     timeout: 5000
// });

// service.interceptors.request.use(
//     config => {
//         config.headers['Accept'] = 'application/json'
//         config.headers['content-type'] = 'application/json'
//         config.headers['address'] = Cookies.get('address');
//         const token = getToken();
//         if (token) {
//             config.headers['Authorization'] = 'Bearer ' + token;
//         }
//         // 加密
//         const timeStamp = parseInt(moment().format('X')) + time;
//         if (config.method === 'post' || config.method === 'put') {
//             let signature = '';
//             if (config.data) {
//                 config.data = {
//                     ...config.data,
//                     timeStamp: timeStamp
//                 }
//                 signature = sign(config.data);
//                 config.data = {
//                     ...config.data,
//                     'sign': signature
//                 }
//             }
//         }
//         // 加密
//         return config;
//     },
//     error => {
//         console.log(error);
//         return Promise.reject();
//     }
// );
// service.interceptors.response.use(
//     response => {
//         // HTTP CODE
//         if (response.status === 200) {
//             time = response.data.timeStamp - moment().format('X');

//             // data.code
//             if (response.data.code === 0) {
//                 return response.data;

//             } else if (response.data.code === 401) {
//                 removeToken()
//             }
//             return Promise.reject(response.data);
//         } else {
//             // 403 没有权限
//             // 422 表单验证错误
//             Promise.reject();
//         }

//     },
//     error => {
//         if (!error.response) {
//             return Promise.reject('Request interrupt');
//         }
//         return Promise.reject('Error Code:' + error.response.status);
//     }
// );

// function sign(data) {
//     const token = import.meta.env.VITE_ADMIN_SIGN_SALT;
//     let sign = jsonToUrl(data) + "key=" + token;
//     sign = sha256(sign);
//     return sign.toUpperCase();
// }


// function jsonToUrl(params) {
//     let str = '';
//     Object.keys(params).sort().forEach(key => {
//         if (params[key]) {
//             str += `${key}=${encodeURIComponent(params[key])}&`;
//         }
//     })
//     return str;
// }

// export default service

