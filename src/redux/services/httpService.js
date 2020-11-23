  
import axios from "axios";
import { baseUrl,key} from "../config.js";

class HttpService {
 ;

  postData = async (payload,url) => {
    const AuthString = 'Bearer '.concat(localStorage.getItem(key)); 
    return axios.post(baseUrl + url, payload, { headers: { Authorization: AuthString } })
    .then((res) => res)
    .catch((error) => error.response.data);
  };

  getData = async (url) => {
    const AuthString = 'Bearer '.concat(localStorage.getItem(key)); 
    return axios. get(baseUrl + url,  { headers: { Authorization: AuthString } })
    .then((res) => res)
    .catch((error) => error.response.data);
  };

  putData = async (url,formData) => {
    const AuthString = 'Bearer '.concat(localStorage.getItem(key)); 
    return axios.put(baseUrl + url, formData, { headers: { Authorization: AuthString } })
    .then((res) => res)
    .catch((error) => error.response.data);
  };

  deleteData = async (url) => {
    const AuthString = 'Bearer '.concat(localStorage.getItem(key)); 
    return axios.delete(baseUrl + url, { headers: { Authorization: AuthString } })
    .then((res) => res)
    .catch((error) => error.response.data);
  };
}
export default HttpService;