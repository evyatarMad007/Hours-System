import axios from "axios";
import {apiUrl} from '../config/config.json';
// import { toast } from "react-toastify";




const getUser = axios.get(`${apiUrl}`).then( res => res)
      
    

const axiosMethods = {
    getUser
}
    


export default axiosMethods;





